/**
 * 30-Card Battle Game Engine
 * Complete game logic for Thanaweya Amma question battle
 */

/* ===== STATE ===== */
const state = {
  lang: 'ar',
  p2score: 0,
  player: { name:'', email:'', score:0, totalScore:0 },
  track: null, // 'science' | 'math'
  allQuestions: [],
  pool30: [],
  playerHand: [],
  aiHand: [],
  round: 0,
  turn: 'player', // 'player' | 'ai'
  traps: { player: [], ai: [] },
  trapsUsed: { player: 0, ai: 0 },
  currentQ: null,
  timerId: null,
  timerType: null, // 'interval' | 'timeout'
  timeLeft: 0,
  gameActive: false,
  miniScore: 0,
  activeTrap: null, // 'double' | 'shield' | null — consumed by applyScore
};

/* ===== TIMER HELPERS ===== */
function cancelTimer() {
  if (state.timerId === null) return;
  if (state.timerType === 'timeout') clearTimeout(state.timerId);
  else clearInterval(state.timerId);
  state.timerId = null;
  state.timerType = null;
}

/* ===== LANGUAGE ===== */
function setLang(l) {
  state.lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l==='ar'?'rtl':'ltr';
  document.body.setAttribute('dir', l==='ar'?'rtl':'ltr');
  document.getElementById('btn-ar').classList.toggle('active', l==='ar');
  document.getElementById('btn-en').classList.toggle('active', l==='en');
  translatePage();
}
function translatePage() {
  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-'+state.lang);
  });
}
document.getElementById('btn-ar').addEventListener('click', ()=>setLang('ar'));
document.getElementById('btn-en').addEventListener('click', ()=>setLang('en'));

/* ===== SCREEN NAVIGATION ===== */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const target = document.getElementById('screen-'+id);
  if(target) target.classList.add('active');
  if(id==='leaderboard') renderLeaderboard();
}

/* ===== REGISTER ===== */
function registerPlayer() {
  const name = document.getElementById('reg-name').value.trim();
  if(!name) { alert(state.lang==='ar'?'يرجى إدخال اسمك':'Please enter your name'); return; }
  state.player.name = name;
  state.player.email = name; // keep field for localStorage key compatibility
  const saved = localStorage.getItem('thanwy_player_'+name);
  if(saved) { const d=JSON.parse(saved); state.player.totalScore=d.totalScore||0; }
  showScreen('track');
}

/* ===== TRACK SELECT ===== */
function selectTrack(t) {
  state.track = t;
  // filter questions by track
  let pool = QUESTION_BANK.filter(q => q.track===t || q.track==='both');
  if(pool.length < 30) pool = QUESTION_BANK; // fallback
  // shuffle and take enough
  pool = shuffle([...pool]);
  state.allQuestions = pool;
  showScreen('rules');
}

/* ===== RULES -> CARD SELECT ===== */
function startCardSelect() {
  showScreen('card-select');
  initCardSelect();
}
// override button in HTML to use this
const origConfirm = window.confirmPick;

/* ===== CARD SELECT PHASE ===== */
function initCardSelect() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';
  // pick 30 random from pool
  let pool = shuffle([...state.allQuestions]).slice(0,30);
  // ensure mix: 15 medium, 15 hard (no easy)
  let mediums = pool.filter(q=>q.difficulty==='medium');
  let hards = pool.filter(q=>q.difficulty==='hard');
  while(mediums.length < 15 && hards.length > 15) { mediums.push(hards.pop()); }
  while(hards.length < 15 && mediums.length > 15) { hards.push(mediums.pop()); }
  pool = shuffle([...mediums.slice(0,15), ...hards.slice(0,15)]);
  state.pool30 = pool.map((q,i)=>({...q, _num: i+1, _picked:false}));
  state.playerHand = []; state.aiHand = [];
  updatePickCount();

  state.pool30.forEach((card, idx) => {
    const el = document.createElement('div');
    el.className = 'card-item';
    el.dataset.idx = idx;
    el.dataset.diff = card.difficulty;
    const text = card[state.lang];
    const diffLabel = state.lang === 'ar'
      ? { easy:'سهل', medium:'متوسط', hard:'صعب' }[card.difficulty]
      : { easy:'Easy', medium:'Medium', hard:'Hard' }[card.difficulty];
    el.innerHTML = `
      <div class="card-num">${card._num}</div>
      <div class="card-face-num">#${card._num}</div>
      <div class="card-subject">${subjectName(card.subject)}</div>
      <div class="card-diff ${card.difficulty}">${diffLabel}</div>
      <div class="card-preview">${text.question}</div>
    `;
    el.onclick = ()=>togglePick(idx, el);
    grid.appendChild(el);
  });

  // selection timer 30s
  let time = 30;
  const timerEl = document.getElementById('select-timer');
  timerEl.textContent = time;
  if(state.selectTimer) clearInterval(state.selectTimer);
  state.selectTimer = setInterval(()=>{
    time--;
    timerEl.textContent = time;
    if(time<=0) { clearInterval(state.selectTimer); autoPickRemaining(); }
  },1000);
}

function subjectName(s) {
  const map = state.lang==='ar' ? {
    biology:'احياء',chemistry:'كيمياء',physics:'فيزياء',math:'رياضيات',arabic:'عربي',english:'انجليزي'
  } : {
    biology:'Biology',chemistry:'Chemistry',physics:'Physics',math:'Math',arabic:'Arabic',english:'English'
  };
  return map[s]||s;
}

const QUOTA = { easy: 0, medium: 5, hard: 10 };

function countByDiff(diff) {
  return state.playerHand.filter(c => c.difficulty === diff).length;
}

function togglePick(idx, el) {
  const card = state.pool30[idx];
  if (card._picked) {
    card._picked = false;
    el.classList.remove('selected');
    state.playerHand = state.playerHand.filter(c => c._num !== card._num);
  } else {
    if (state.playerHand.length >= 15) return;
    if (countByDiff(card.difficulty) >= QUOTA[card.difficulty]) return; // quota reached
    card._picked = true;
    el.classList.add('selected');
    state.playerHand.push(card);
  }
  updatePickCount();
  refreshCardBlockedState();
}

function refreshCardBlockedState() {
  document.querySelectorAll('.card-item').forEach(el => {
    const idx = +el.dataset.idx;
    const card = state.pool30[idx];
    if (!card._picked && countByDiff(card.difficulty) >= QUOTA[card.difficulty]) {
      el.classList.add('quota-blocked');
    } else {
      el.classList.remove('quota-blocked');
    }
  });
}
function updatePickCount() {
  document.getElementById('pick-count').textContent = state.playerHand.length;
  document.getElementById('btn-confirm-pick').disabled = state.playerHand.length !== 15;
  // update quota indicators
  const e = countByDiff('easy'), m = countByDiff('medium'), h = countByDiff('hard');
  const qi = document.getElementById('quota-indicators');
  if (qi) {
    const fmt = (n, max, labelAr, labelEn) => {
      const full = n >= max;
      const label = state.lang === 'ar' ? labelAr : labelEn;
      return `<span class="quota-badge ${full ? 'quota-full' : ''}">${label}: ${n}/${max}${full ? ' ✓' : ''}</span>`;
    };
    qi.innerHTML = fmt(m, QUOTA.medium, 'متوسط', 'Medium') +
                   fmt(h, QUOTA.hard, 'صعب', 'Hard');
  }
}
function autoPickRemaining() {
  while(state.playerHand.length < 15) {
    const rem = state.pool30.filter(c => !c._picked && countByDiff(c.difficulty) < QUOTA[c.difficulty]);
    if(!rem.length) break;
    const pick = rem[0];
    pick._picked = true;
    state.playerHand.push(pick);
  }
  document.querySelectorAll('.card-item').forEach(el=>{
    const idx = +el.dataset.idx;
    if(state.pool30[idx]._picked) el.classList.add('selected');
  });
  updatePickCount();
  refreshCardBlockedState();
}
function confirmPick() {
  clearInterval(state.selectTimer);
  // AI picks 15 from remaining
  const rem = shuffle(state.pool30.filter(c=>!c._picked));
  state.aiHand = rem.slice(0,15);
  // assign colors/numbers to hands
  const colors = ['#00d4ff','#ff2e63','#7b2cbf','#00ff88','#ffaa00','#ff4444'];
  state.playerHand.forEach((c,i)=>{ c._color = colors[i%colors.length]; c._backNum = i+1; });
  state.aiHand.forEach((c,i)=>{ c._color = colors[i%colors.length]; c._backNum = i+1; });
  // assign traps: 3 random types from 5, same pool for both
  const trapTypes = ['cancel','double','shield','reverse','swap'];
  const roundTraps = shuffle([...trapTypes]).slice(0,3);
  state.traps.player = [...roundTraps];
  state.traps.ai = [...roundTraps];
  state.trapsUsed = { player:0, ai:0 };
  startArena();
}

/* ===== ARENA ===== */
function startArena() {
  showScreen('arena');
  state.round = 1;
  state.turn = 'player';
  state.player.score = 0;
  state.p2score = 0;
  state.gameActive = true;
  document.getElementById('played-cards').innerHTML = '';
  updateArenaUI();
  renderHand();
  startMiniGame();
  // show turn
  showTurnIndicator();
}
// p2score is now state.p2score
function updateArenaUI() {
  document.getElementById('p1-name').textContent = state.player.name;
  document.getElementById('p1-score').textContent = state.player.score;
  document.getElementById('p2-score').textContent = state.p2score;
  document.getElementById('round-display').textContent = state.round + '/15';
  document.getElementById('p1-traps').innerHTML = '🛡 <span>' + (3-state.trapsUsed.player) + '</span>';
  document.getElementById('p2-traps').innerHTML = '🛡 <span>' + (3-state.trapsUsed.ai) + '</span>';
}
function renderHand() {
  const area = document.getElementById('hand-area');
  area.innerHTML = '';
  state.playerHand.forEach((card,i)=>{
    const el = document.createElement('div');
    el.className = 'hand-card' + (card._played?' disabled':'');
    el.style.borderColor = card._color;
    el.textContent = card._backNum;
    if(!card._played) el.onclick = ()=>playCard(card);
    area.appendChild(el);
  });
}
function showTurnIndicator() {
  const el = document.getElementById('turn-indicator');
  if(state.turn==='player') {
    el.textContent = state.lang==='ar'?'دورك':'Your Turn';
    el.style.color = 'var(--success)';
  } else {
    el.textContent = state.lang==='ar'?'دور الخصم':'Opponent Turn';
    el.style.color = 'var(--danger)';
  }
}

function playCard(card) {
  if(state.turn !== 'player' || !state.gameActive) return;
  card._played = true;
  // animate to battle ground
  const ground = document.getElementById('played-cards');
  const el = document.createElement('div');
  el.className = 'played-card pop-in';
  el.style.background = `linear-gradient(135deg, ${card._color}, var(--bg-panel))`;
  el.textContent = card._backNum;
  ground.appendChild(el);
  renderHand();
  openQuestion(card, 'player'); // player threw → AI answers, player can use traps
}

function aiPlay() {
  if(!state.gameActive) return;
  state.timerId = setTimeout(()=>{
    state.timerId = null;
    state.timerType = null;
    if(!state.gameActive) return;
    const avail = state.aiHand.filter(c=>!c._played);
    if(!avail.length) { endGame(); return; }
    let card = avail.find(c=>c.difficulty==='hard') || avail[Math.floor(Math.random()*avail.length)];
    card._played = true;
    const ground = document.getElementById('played-cards');
    const el = document.createElement('div');
    el.className = 'played-card pop-in';
    el.style.background = `linear-gradient(135deg, ${card._color}, var(--accent2))`;
    el.textContent = card._backNum;
    ground.appendChild(el);
    if(state.trapsUsed.ai < 3 && Math.random() < 0.3) {
      state.trapsUsed.ai++;
      updateArenaUI();
    }
    openQuestion(card, 'ai');
  }, 1200);
  state.timerType = 'timeout';
}

/* ===== QUESTION MODAL ===== */
/*
 * who = 'ai'     → AI threw the card, PLAYER answers (choices enabled, traps disabled)
 * who = 'player' → Player threw the card, AI answers (choices disabled, traps enabled for player)
 */
function openQuestion(card, who) {
  cancelTimer();
  state.currentQ = { card, who, answered: false };
  state.activeTrap = null;

  const text = card[state.lang];
  document.getElementById('q-subject').textContent = subjectName(card.subject);
  document.getElementById('q-text').textContent = text.question;

  const optsDiv = document.getElementById('q-options');
  optsDiv.innerHTML = '';
  text.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.disabled = (who === 'player'); // player threw → AI answers → player cannot click
    btn.onclick = () => answerQuestion(i);
    optsDiv.appendChild(btn);
  });

  document.getElementById('q-explanation').style.display = 'none';
  setupTrapButtons(who);

  // reset timer bar instantly (no transition on reset)
  const fill = document.getElementById('timer-fill');
  fill.style.transition = 'none';
  fill.style.width = '100%';
  fill.style.background = 'var(--success)';
  // force reflow so the transition removal takes effect before we re-enable it
  fill.getBoundingClientRect();
  fill.style.transition = 'width 1s linear';

  document.getElementById('question-modal').classList.add('active');

  if (who === 'player') {
    // Player threw the card → AI answers after a realistic delay (2–4s)
    const aiDelay = 2000 + Math.floor(Math.random() * 2000);
    state.timerId = setTimeout(() => { state.timerId = null; state.timerType = null; aiAutoAnswer(); }, aiDelay);
    state.timerType = 'timeout';
    // No countdown timer shown for AI — hide bar
    document.getElementById('timer-text').textContent = '—';
    fill.style.transition = 'none';
    fill.style.width = '0%';
  } else {
    // AI threw the card → Player answers with 55s timer
    startTimer(55);
  }
}

function setupTrapButtons(who) {
  // Player can use traps when AI threw the card (AI's question is displayed)
  const canTrap = (who === 'ai') && state.trapsUsed.player < 3;
  const traps = state.traps.player;
  ['cancel','double','shield','reverse','swap'].forEach(t => {
    const btn = document.getElementById('trap-' + t);
    const available = canTrap && traps.includes(t);
    btn.disabled = !available;
    btn.style.opacity = available ? '1' : '0.3';
  });
}

function startTimer(seconds) {
  state.timeLeft = seconds;
  const fill = document.getElementById('timer-fill');
  const txt = document.getElementById('timer-text');
  txt.textContent = seconds;

  if(state.timerId) { cancelTimer(); }

  state.timerId = setInterval(() => {
    state.timeLeft--;
    txt.textContent = state.timeLeft;
    const pct = (state.timeLeft / seconds) * 100;
    fill.style.width = pct + '%';
    if (pct < 30) fill.style.background = 'var(--danger)';
    else if (pct < 60) fill.style.background = 'var(--warning)';
    if (state.timeLeft <= 0) {
      cancelTimer();
      timeUp();
    }
  }, 1000);
  state.timerType = 'interval';
}

function timeUp() {
  if (!state.currentQ || state.currentQ.answered) return;
  state.currentQ.answered = true;
  const correct = state.currentQ.card[state.lang].correct;
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
  });
  showExplanation(false, state.currentQ.who);
}

function aiAutoAnswer() {
  if (!state.currentQ || state.currentQ.answered) return;
  state.currentQ.answered = true;
  const { card } = state.currentQ;
  const correctIdx = card[state.lang].correct;
  const accuracy = card.difficulty === 'medium' ? 0.75 : 0.55;
  const isCorrect = Math.random() < accuracy;
  const chosenIdx = isCorrect ? correctIdx : (correctIdx + 1 + Math.floor(Math.random() * 3)) % 4;
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === correctIdx) b.classList.add('correct');
    else if (i === chosenIdx && !isCorrect) b.classList.add('wrong');
  });
  showExplanation(isCorrect, 'player'); // player threw → AI answered → score goes to AI side
}

function answerQuestion(idx) {
  if (!state.currentQ || state.currentQ.answered) return;
  state.currentQ.answered = true;
  cancelTimer();
  const { card, who } = state.currentQ;
  const correct = card[state.lang].correct;
  const isCorrect = idx === correct;
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    else if (i === idx && !isCorrect) b.classList.add('wrong');
  });
  showExplanation(isCorrect, who);
}

function showExplanation(isCorrect, who) {
  if (!state.currentQ) return;
  const expDiv = document.getElementById('q-explanation');
  document.getElementById('exp-text').textContent = state.currentQ.card[state.lang].explanation;
  expDiv.style.display = 'block';
  applyScore(isCorrect, who);
  const modal = document.querySelector('.modal-content');
  modal.classList.add(isCorrect ? 'flash-success' : 'flash-danger');
  setTimeout(() => modal.classList.remove('flash-success', 'flash-danger'), 500);
}

function applyScore(isCorrect, who) {
  // who = 'ai' → player answering AI's card → player scores on correct
  // who = 'player' → AI answering player's card → AI scores on correct
  const trap = state.activeTrap;
  state.activeTrap = null; // consume

  if (who === 'ai') {
    if (isCorrect) {
      const pts = (trap === 'double') ? 2 : 1;
      state.player.score += pts;
    } else {
      if (trap !== 'shield') state.p2score += 1; // shield blocks AI scoring on player wrong
    }
  } else {
    if (isCorrect) state.p2score += 1;
    else state.player.score += 1;
  }
  updateArenaUI();
}

function closeQuestion() {
  cancelTimer();
  document.getElementById('question-modal').classList.remove('active');
  state.currentQ = null;
}

function nextTurn() {
  closeQuestion(); // cancels all timers, nulls currentQ
  state.round++;
  if (state.round > 15) { endGame(); return; }
  state.turn = state.turn === 'player' ? 'ai' : 'player';
  showTurnIndicator();
  updateArenaUI();
  if (state.turn === 'ai') aiPlay();
  // if turn is 'player', game waits for player to throw a card — no action needed
}

function activateTrap(type) {
  if (!state.currentQ || state.currentQ.who !== 'ai') return;
  if (state.trapsUsed.player >= 3) return;
  if (!state.traps.player.includes(type)) return;
  state.trapsUsed.player++;
  // remove used trap so it can't be reused
  state.traps.player = state.traps.player.filter(t => t !== type);
  setupTrapButtons('ai');
  updateArenaUI();
  const msgs = {
    ar: { cancel:'فخ الالغاء: السؤال ملغي وتحصل على نقطة!', double:'فخ المضاعفة: النقطة التالية x2!', shield:'فخ الحماية: محمي من الخسارة!', reverse:'فخ العكس: الخصم يخسر نقطة!', swap:'فخ التبديل: السؤال تبدل لمتوسط!' },
    en: { cancel:'Cancel trap: question void, you score!', double:'Double trap: next point ×2!', shield:'Shield trap: protected from loss!', reverse:'Reverse trap: opponent loses a point!', swap:'Swap trap: question swapped to medium!' }
  };
  document.querySelector('.modal-content').classList.add('shake');
  setTimeout(() => document.querySelector('.modal-content').classList.remove('shake'), 400);

  if (type === 'cancel') {
    // cancel: dismiss question, player scores 1
    cancelTimer();
    state.currentQ.answered = true;
    showExplanation(true, 'ai'); // force correct=true so player gets the point
    return;
  }
  if (type === 'reverse') {
    // reverse: AI loses 1 point immediately
    if (state.p2score > 0) state.p2score--;
    updateArenaUI();
  }
  if (type === 'swap') {
    // swap: replace current question with a random medium one from pool not yet played
    const mediums = state.pool30.filter(c => c.difficulty === 'medium' && !c._played && c._num !== state.currentQ.card._num);
    if (mediums.length) {
      const replacement = mediums[Math.floor(Math.random() * mediums.length)];
      state.currentQ.card = replacement;
      const text = replacement[state.lang];
      document.getElementById('q-subject').textContent = subjectName(replacement.subject);
      document.getElementById('q-text').textContent = text.question;
      const optsDiv = document.getElementById('q-options');
      optsDiv.innerHTML = '';
      text.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => answerQuestion(i);
        optsDiv.appendChild(btn);
      });
      // restart timer for new question
      cancelTimer();
      startTimer(55);
    }
  }
  // store active trap effect for applyScore to consume (double, shield)
  if (type === 'double' || type === 'shield') {
    state.activeTrap = type;
  }
  // show feedback inside modal instead of alert
  const feedback = document.createElement('div');
  feedback.className = 'trap-feedback';
  feedback.textContent = msgs[state.lang][type];
  document.querySelector('.modal-body').prepend(feedback);
  setTimeout(() => feedback.remove(), 2000);
}


/* ===== END GAME ===== */
function endGame() {
  state.gameActive = false;
  cancelTimer();
  stopMiniGame();
  state.p2score = state.p2score || 0;
  // save score
  state.player.totalScore += state.player.score;
  savePlayer();
  saveLeaderboard();
  // show result
  const overlay = document.getElementById('result-overlay');
  const title = document.getElementById('result-title');
  if(state.player.score > state.p2score) {
    title.textContent = state.lang==='ar'?'🎉 انت الفائز!':'🎉 You Win!';
    title.style.color = 'var(--success)';
  } else if(state.player.score < state.p2score) {
    title.textContent = state.lang==='ar'?'😢 خسرت هذه الجولة':'😢 You Lost';
    title.style.color = 'var(--danger)';
  } else {
    title.textContent = state.lang==='ar'?'🤝 تعادل!':'🤝 Draw!';
    title.style.color = 'var(--gold)';
  }
  document.getElementById('res-p1-name').textContent = state.player.name;
  document.getElementById('res-p1').textContent = state.player.score;
  document.getElementById('res-p2').textContent = state.p2score;
  overlay.classList.add('active');
}

function backToMenu() {
  document.getElementById('result-overlay').classList.remove('active');
  showScreen('landing');
}

/* ===== LEADERBOARD ===== */
function savePlayer() {
  localStorage.setItem('thanwy_player_'+state.player.email, JSON.stringify({
    name: state.player.name, email: state.player.email,
    totalScore: state.player.totalScore, track: state.track
  }));
}
function saveLeaderboard() {
  let lb = JSON.parse(localStorage.getItem('thanwy_leaderboard')||'[]');
  lb.push({ name: state.player.name, track: state.track||'both',
    score: state.player.score, date: Date.now() });
  lb.sort((a,b)=>b.score - a.score);
  lb = lb.slice(0,50);
  localStorage.setItem('thanwy_leaderboard', JSON.stringify(lb));
}
function renderLeaderboard() {
  const tbody = document.getElementById('lb-body');
  tbody.innerHTML = '';
  const lb = JSON.parse(localStorage.getItem('thanwy_leaderboard')||'[]');
  if(!lb.length) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="4">${state.lang==='ar'?'لا توجد بيانات بعد':'No data yet'}</td>`;
    tbody.appendChild(tr);
    return;
  }
  lb.slice(0,20).forEach((entry,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td><td>${escapeHtml(entry.name)}</td><td>${entry.track||'-'}</td><td>${entry.score}</td>`;
    tbody.appendChild(tr);
  });
}
function escapeHtml(t) {
  const d=document.createElement('div'); d.textContent=t; return d.innerHTML;
}

/* ===== UTILS ===== */
function shuffle(arr) {
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

/* ===== MINI GAME (Particle Blaster) ===== */
let mgCanvas, mgCtx, mgLoopId, mgOrbs=[], mgParticles=[], mgLastTime=0;
function startMiniGame() {
  mgCanvas = document.getElementById('minigame-canvas');
  if(!mgCanvas) return;
  mgCtx = mgCanvas.getContext('2d');
  // handle retina/high-dpi
  const dpr = window.devicePixelRatio || 1;
  const rect = mgCanvas.getBoundingClientRect();
  mgCanvas.width = rect.width * dpr;
  mgCanvas.height = rect.height * dpr;
  mgCtx.scale(dpr, dpr);
  state.miniScore = 0;
  document.getElementById('mini-score').textContent = '0';
  mgOrbs = []; mgParticles = [];
  mgCanvas.addEventListener('pointerdown', onMiniClick);
  mgLoopId = requestAnimationFrame(miniLoop);
}
function stopMiniGame() {
  if(mgLoopId) cancelAnimationFrame(mgLoopId);
  if(mgCanvas) mgCanvas.removeEventListener('pointerdown', onMiniClick);
}
function miniLoop(ts) {
  const dt = ts - mgLastTime; mgLastTime = ts;
  const w = mgCanvas.width, h = mgCanvas.height;
  mgCtx.fillStyle = 'rgba(13,27,42,0.35)';
  mgCtx.fillRect(0,0,w,h);
  // spawn orbs
  if(Math.random()<0.03 && mgOrbs.length<8) {
    mgOrbs.push({
      x: Math.random()*(w-40)+20, y: Math.random()*(h-40)+20,
      r: 12+Math.random()*14, vx:(Math.random()-0.5)*1.2, vy:(Math.random()-0.5)*1.2,
      color: `hsl(${Math.random()*360},80%,60%)`, life:1
    });
  }
  // update orbs
  mgOrbs.forEach(o=>{
    o.x += o.vx; o.y += o.vy;
    if(o.x<o.r||o.x>w-o.r) o.vx*=-1;
    if(o.y<o.r||o.y>h-o.r) o.vy*=-1;
    mgCtx.beginPath();
    mgCtx.arc(o.x,o.y,o.r,0,Math.PI*2);
    mgCtx.fillStyle = o.color;
    mgCtx.shadowBlur=15; mgCtx.shadowColor=o.color;
    mgCtx.fill();
    mgCtx.shadowBlur=0;
  });
  // particles
  mgParticles.forEach((p,i)=>{
    p.x+=p.vx; p.y+=p.vy; p.life-=0.02; p.r*=0.96;
    if(p.life<=0) mgParticles.splice(i,1);
    else {
      mgCtx.beginPath();
      mgCtx.arc(p.x,p.y,p.r,0,Math.PI*2);
      mgCtx.fillStyle = `rgba(${p.rgb},${p.life})`;
      mgCtx.fill();
    }
  });
  mgLoopId = requestAnimationFrame(miniLoop);
}
function onMiniClick(e) {
  const rect = mgCanvas.getBoundingClientRect();
  const mx = (e.clientX-rect.left)*(mgCanvas.width/rect.width);
  const my = (e.clientY-rect.top)*(mgCanvas.height/rect.height);
  let hit = false;
  for(let i=mgOrbs.length-1;i>=0;i--){
    const o = mgOrbs[i];
    const dx=mx-o.x, dy=my-o.y;
    if(dx*dx+dy*dy < o.r*o.r) {
      // hit
      hit = true;
      createExplosion(o.x, o.y, o.color);
      mgOrbs.splice(i,1);
      state.miniScore += 10;
      document.getElementById('mini-score').textContent = state.miniScore;
      // floating text
      showFloatingText(mx, my, '+10');
      break;
    }
  }
  if(!hit) {
    // small ripple
    createExplosion(mx, my, '255,255,255', 6);
  }
}
function createExplosion(x,y,colorStr,count=16) {
  let rgb = colorStr;
  if(colorStr.startsWith('hsl')) {
    rgb = '255,200,50'; // fallback
  } else if(colorStr.startsWith('#')) {
    rgb = '100,200,255';
  } else {
    rgb = colorStr.includes('rgb') ? colorStr.match(/\d+/g).join(',') : colorStr;
  }
  for(let i=0;i<count;i++){
    const angle = Math.random()*Math.PI*2;
    const speed = 1+Math.random()*3;
    mgParticles.push({
      x,y,r:2+Math.random()*3,
      vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed,
      life:1, rgb
    });
  }
}
function showFloatingText(x,y,text) {
  const el = document.createElement('div');
  el.className = 'floating-score';
  el.textContent = text;
  el.style.left = (mgCanvas.getBoundingClientRect().left + x*(mgCanvas.getBoundingClientRect().width/mgCanvas.width)) + 'px';
  el.style.top = (mgCanvas.getBoundingClientRect().top + y*(mgCanvas.getBoundingClientRect().height/mgCanvas.height)) + 'px';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1000);
}

/* ===== INIT ===== */
window.addEventListener('DOMContentLoaded', ()=>{
  setLang('ar');
  showScreen('landing');
});
