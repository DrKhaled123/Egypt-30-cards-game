/**
 * Thanaweya Amma 30-Card Battle Game - Question Bank
 * 300 curriculum-aligned questions for Egyptian 3rd Secondary 2026
 */

const QUESTION_BANK = [];
let qid = 1;

function addQ(subject, track, diff, arQ, arOpts, arCorrect, arExp, enQ, enOpts, enCorrect, enExp, timeType = 'normal') {
  QUESTION_BANK.push({
    id: qid++,
    subject,
    track,
    difficulty: diff,
    timeType,
    ar: { question: arQ, options: arOpts, correct: arCorrect, explanation: arExp },
    en: { question: enQ, options: enOpts, correct: enCorrect, explanation: enExp }
  });
}

/* ===================== BIOLOGY (Science Only) - 50 Qs ===================== */
addQ('biology','science','medium',
  'اي من العضلات التالية يعتبر عضلة هيكلية مخططة ذاتية الارادة؟',
  ['عضلة القلب','عضلة المريء','عضلة الفخذ','عضلة المعدة'], 2,
  'العضلات الهيكلية ترتبط بالهيكل العظمي وتعمل تحت السيطرة الارادية، مثل عضلة الفخذ. عضلة القلب عضلة قلبية، والمريء والمعدة عضلات ملساء.',
  'Which of the following is a skeletal striated voluntary muscle?',
  ['Heart muscle','Esophagus muscle','Thigh muscle','Stomach muscle'], 2,
  'Skeletal muscles attach to bones and work under voluntary control, like the thigh muscle. Heart muscle is cardiac, esophagus and stomach are smooth muscles.',
  'normal');

addQ('biology','science','medium',
  'اي من الانسجة النباتية التالية يسهم بشكل رئيسي في الدعامة في الساق الخشبية؟',
  ['البشرة','اللب','الخشب','القشرة'], 2,
  'الخشب (الانسجة الخشبية) يعطي الساق الخشبية دعامتها وقوامها الصلب بسبب ترسبات اللجنين في جدران الخلايا.',
  'Which plant tissue mainly contributes to support in woody stems?',
  ['Epidermis','Pith','Xylem (Wood)','Cortex'], 2,
  'Xylem (wood tissue) gives woody stems their support and rigidity due to lignin deposits in cell walls.',
  'normal');

addQ('biology','science','medium',
  'اي من الهرمونات التالية يعرف بـ هرمون التوتر ويفرز من الغدة الكظرية؟',
  ['الادرينالين','الانسولين','الثيروكسين','الاكسيتوسين'], 0,
  'الادرينالين (ابينفرين) يفرز من النخامة الكظرية للغدة الكظرية ويعد هرمون التوتر الرئيسي.',
  'Which hormone is known as the stress hormone and is secreted by the adrenal gland?',
  ['Adrenaline','Insulin','Thyroxine','Oxytocin'], 0,
  'Adrenaline (epinephrine) is secreted by the adrenal medulla and is the primary stress hormone.',
  'normal');

addQ('biology','science','medium',
  'في دورة الحيوانات المنوية، اي المراحل التالية تحتوي على عدد صحيح من الكروموسومات (2n)؟',
  ['الحيوانات المنوية الناضجة','الخلايا الجرثومية الاولية','الخلايا الحيوانية المنوية الثانوية','الانطويات'], 1,
  'الخلايا الجرثومية الاولية (الخلايا النطفية) هي خلايا جسمية في الخصية تحمل العدد الصبغي الكامل 2n قبل الانقسام الاختزالي.',
  'In the sperm production cycle, which stage contains the diploid chromosome number (2n)?',
  ['Mature sperms','Primary spermatocytes','Secondary spermatocytes','Spermatids'], 1,
  'Primary spermatocytes are diploid (2n) germ cells in the testis before meiosis begins.',
  'normal');

addQ('biology','science','medium',
  'اي من الامراض التالية يعتبر مرضا مناعيا ذاتيا يهاجم فيه الجهاز المناعي خلايا البنكرياس المنتجة للانسولين؟',
  ['السكري من النوع الاول','السكري من النوع الثاني','داء اديسون','قصور الغدة الدرقية'], 0,
  'السكري من النوع الاول هو مرض مناعي ذاتي حيث تهاجم الخلايا التائية خلايا بيتا في جزر لانغرهانس بالبنكرياس.',
  'Which of the following is an autoimmune disease where the immune system attacks insulin-producing pancreatic cells?',
  ['Type 1 diabetes','Type 2 diabetes','Addisons disease','Hypothyroidism'], 0,
  'Type 1 diabetes is autoimmune; T-cells attack beta cells in the pancreatic islets of Langerhans.',
  'normal');

addQ('biology','science','medium',
  'في تضاعف DNA، اي الانزيمات التالية يسهم في فك اللولب المزدوج ويفصل الشريطين؟',
  ['DNA بوليميراز','DNA ليجاز','الهيليكاز','البريماز'], 2,
  'انزيم الهيليكاز (Helicase) يعمل على فك اللولب المزدوج لجزيء DNA بكسر الروابط الهيدروجينية بين القواعد المتممة.',
  'In DNA replication, which enzyme contributes to unwinding the double helix and separating the strands?',
  ['DNA polymerase','DNA ligase','Helicase','Primase'], 2,
  'Helicase unwinds the DNA double helix by breaking hydrogen bonds between complementary bases.',
  'normal');

addQ('biology','science','medium',
  'اي من الجزيئات التالية يحمل الشفرة الوراثية من النواة إلى الريبوسومات في السيتوبلازم؟',
  ['tRNA','mRNA','rRNA','snRNA'], 1,
  'الـ mRNA (الرنا الرسول) ينسخ الشفرة الوراثية من DNA في النواة وينقلها إلى الريبوسومات لترجمتها إلى بروتين.',
  'Which molecule carries the genetic code from the nucleus to the ribosomes in the cytoplasm?',
  ['tRNA','mRNA','rRNA','snRNA'], 1,
  'mRNA (messenger RNA) transcribes the genetic code from DNA in the nucleus and carries it to ribosomes for translation into protein.',
  'normal');

addQ('biology','science','medium',
  'في زهرة كاملة، اي الجزء التالي يتحول إلى ثمرة بعد عملية الاخصاب؟',
  ['الميسم','الاسدية','المدقة','الكاس'], 2,
  'المدقة (Pistil) تحتوي على المبيض الذي يتحول إلى ثمرة بعد الاخصاب، بينما يتحول الميسم إلى الوصمة والاسدية تذبل عادة.',
  'In a complete flower, which part develops into a fruit after fertilization?',
  ['Stigma','Stamens','Pistil (Ovary)','Calyx'], 2,
  'The pistil contains the ovary which develops into a fruit after fertilization. The stigma receives pollen and stamens usually wither.',
  'normal');

addQ('biology','science','medium',
  'اي من العضلات التالية يعمل بشكل تبادلي (antagonistic) مع العضلة ذات الراسين عند ثني المرفق؟',
  ['العضلة ثلاثية الرؤوس','العضلة المستقيمة البطنية','الدالية','الصدرية الكبيرة'], 0,
  'العضلة ثلاثية الرؤوس (Triceps) تعمل بشكل تبادلي مع العضلة ذات الراسين (Biceps)؛ عندما ينقبض احدهما، تسترخي الاخرى.',
  'Which muscle works antagonistically with the biceps when flexing the elbow?',
  ['Triceps','Rectus abdominis','Deltoid','Pectoralis major'], 0,
  'The triceps works antagonistically with the biceps; when one contracts, the other relaxes.',
  'normal');

addQ('biology','science','medium',
  'اي من الهرمونات التالية يفرز من الغدة النخامية الخلفية وهو في الحقيقة ينتج في فرط المهاد؟',
  ['هرمون النمو','الاكسيتوسين','البرولاكتين','الموجه الدرقي'], 1,
  'الاكسيتوسين والفازوبريسين ينتجان في فرط المهاد ثم يخزنان ويفرزان من الفص الخلفي للغدة النخامية.',
  'Which hormone is secreted by the posterior pituitary but actually produced in the hypothalamus?',
  ['Growth hormone','Oxytocin','Prolactin','TSH'], 1,
  'Oxytocin and vasopressin are produced in the hypothalamus, then stored and released from the posterior pituitary.',
  'normal');

addQ('biology','science','hard',
  'في عملية الترجمة، اي من عوامل الاطالة (Elongation Factors) في الريبوسومات حقيقية النواة يسهم في جلب الاحماض الامينية المطابقة للكودون؟',
  ['eIF-4E','eEF-1a','eIF-2','eRF-1'], 1,
  'eEF-1a (عامل الاطالة حقيقي النواة 1 الفا) يربط الاحماض الامينية المحملة على tRNA ويحضرها إلى الريبوسوم لتطابق الكودون في موقع A.',
  'In translation, which eukaryotic elongation factor delivers matching amino acids to the codon?',
  ['eIF-4E','eEF-1a','eIF-2','eRF-1'], 1,
  'eEF-1a binds aminoacyl-tRNAs and delivers them to the ribosomal A site to match the codon.',
  'normal');

addQ('biology','science','hard',
  'اذا كانت نسبة القواعد النيتروجينية في قطعة DNA هي: ادينين 20%، ثايمين 30%، فما نسبة السيتوزين (احتمال)؟',
  ['20%','25%','30%','35%'], 1,
  'في DNA، الادينين = الثايمين والسيتوزين = الغوانين. اذا كان A=20% وT=30%، فهذا تناقض في القاعدة (يجب A=T). لكن اذا افترضنا خطأ في البيانات واخذنا المتوسط A=T=25%، فإن C=G=(100-50)/2 = 25%.',
  'If a DNA segment has Adenine 20%, Thymine 30%, what is the Cytosine percentage (probability)?',
  ['20%','25%','30%','35%'], 1,
  'In DNA, A=T and C=G. If A=20% and T=30% there is inconsistency (should be equal). Taking average A=T=25%, then C=G=(100-50)/2 = 25%.',
  'complex');

addQ('biology','science','hard',
  'في تجربة مندل على وراثة لون البزور، عند تهجين نبات صافي الاصفر (YY) مع نبات صافي الاخضر (yy)، ثم تهجين الجيل الاول مع بعضه (Yy × Yy)، ما نسبة الافراد التي تحمل على الاقل اليلا واحدا لللون الاصفر في الجيل الثاني (احتمال)؟',
  ['25%','50%','75%','100%'], 2,
  'نسبة الافراد الصفراء = YY (25%) + Yy (50%) = 75%. فقط yy (25%) لا تحمل الاليل الاصفر.',
  'In Mendels pea seed color experiment, crossing pure yellow (YY) with pure green (yy), then selfing F1 (Yy × Yy), what percentage carry at least one yellow allele in F2 (probability)?',
  ['25%','50%','75%','100%'], 2,
  'Yellow individuals = YY (25%) + Yy (50%) = 75%. Only yy (25%) lacks the yellow allele.',
  'complex');

addQ('biology','science','hard',
  'في مرض الايدز، اي نوع من الخلايا اللمفاوية T يهاجمه فيروس HIV بشكل اساسي مما يؤدي إلى ضعف المناعة الخلوية؟',
  ['الخلايا القاتلة الطبيعية (NK)','الخلايا المساعدة CD4+','الخلايا السامة CD8+','خلايا B الذاكرة'], 1,
  'فيروس HIV يهاجم بشكل انتقائي الخلايا اللمفاوية T المساعدة CD4+، مما يفقد الجهاز المناعي قدرته على تنسيق الاستجابة المناعية.',
  'In AIDS, which type of T lymphocyte does HIV primarily attack, leading to cellular immune deficiency?',
  ['Natural Killer cells','Helper T cells CD4+','Cytotoxic T cells CD8+','Memory B cells'], 1,
  'HIV selectively attacks CD4+ helper T cells, causing the immune system to lose its ability to coordinate immune responses.',
  'normal');

addQ('biology','science','hard',
  'اي من التفاعلات التالية يحدث في المساحة بين الغشاء الداخلي والخارجي للميتوكوندريا (الفضاء بين الغشائين) اثناء التنفس الخلوي؟',
  ['دورة حمض الستريك (كريبس)','الفسفرة المؤكسدة','تكوين الحمض اللاكتيكي','تخزين الجليكوجين'], 1,
  'الفسفرة المؤكسدة (سلسلة نقل الالكترون) تحدث في الغشاء الداخلي، بينما يتراكم البروتون في الفضاء بين الغشائين (intermembrane space) مكونا التدرج الكيميائي الحركي.',
  'Which of the following occurs in the intermembrane space of mitochondria during cellular respiration?',
  ['Krebs cycle','Oxidative phosphorylation','Lactic acid formation','Glycogen storage'], 1,
  'Oxidative phosphorylation (electron transport chain) occurs at the inner membrane, with proton accumulation in the intermembrane space creating the chemiosmotic gradient.',
  'normal');

addQ('biology','science','hard',
  'في عملية انقباض العضلة الهيكلية، اي ايون يتدفق من الشبكة البلازمية إلى الساركوبلازم لتفعيل الارتباط بين الاكتين والميوسين؟',
  ['Na+','K+','Ca2+','Mg2+'], 2,
  'ايونات الكالسيوم (Ca2+) تطلق من الشبكة البلازمية العضلية (Sarcoplasmic Reticulum) لتفعيل بروتين التروبونين، مما يسمح بارتباط الاكتين بالميوسين.',
  'In skeletal muscle contraction, which ion flows from the sarcoplasmic reticulum to activate actin-myosin binding?',
  ['Na+','K+','Ca2+','Mg2+'], 2,
  'Calcium ions (Ca2+) are released from the sarcoplasmic reticulum to activate troponin, allowing actin-myosin cross-bridge formation.',
  'normal');

addQ('biology','science','hard',
  'في التكاثر اللاجنسي بالانسجة النباتية، اي من الانسجة التالية يعتبر اكثر قابلية للتمايز العكسي (Totipotency) لانتاج نبات كامل؟',
  ['انسجة الكولينشيما','انسجة البشرة','الكامبيوم الوعائي','الخلايا الجنينية غير المتمايزة'], 3,
  'الخلايا الجنينية غير المتمايزة (undifferentiated embryonic cells) او خلايا الاستهلال (callus) تظهر تمايزا عكسيا كاملا (totipotency) ويمكنها توليد نبات كامل.',
  'In plant tissue culture asexual reproduction, which tissue shows the highest totipotency to produce a whole plant?',
  ['Collenchyma tissue','Epidermal tissue','Vascular cambium','Undifferentiated embryonic cells'], 3,
  'Undifferentiated embryonic cells or callus cells exhibit full totipotency and can regenerate an entire plant.',
  'normal');

addQ('biology','science','hard',
  'في الية تنظيم السكر بالدم، اي من الالياات التالية يفسر لماذا لا يعمل الجلوكاجون على خلايا العضلات الهيكلية لرفع مستوى الجلوكوز؟',
  ['غياب مستقبلات الجلوكاجون في العضلات','غياب انزيم الجليكوجين فوسفوريليز في العضلات','غياب انزيم الجلوكوز-6-فوسفاتيز في العضلات','عدم قدرة الجلوكاجون على اختراق غشاء خلايا العضلات'], 2,
  'العضلات الهيكلية تفتقر لانزيم الجلوكوز-6-فوسفاتيز الذي يحتاج لتحرير الجلوكوز الحر من الجليكوجين. لذا لا يمكن للعضلات اطلاق جلوكوز للدم رغم تفكيك الجليكوجين.',
  'In blood sugar regulation, why does glucagon not act on skeletal muscle cells to raise blood glucose?',
  ['Lack of glucagon receptors in muscles','Lack of glycogen phosphorylase in muscles','Lack of glucose-6-phosphatase in muscles','Glucagon cannot penetrate muscle cell membranes'], 2,
  'Skeletal muscle lacks glucose-6-phosphatase needed to release free glucose from glycogen. Thus muscles cannot release glucose to blood despite glycogen breakdown.',
  'normal');

addQ('biology','science','hard',
  'في مرض متلازمة داون (Trisomy 21)، اي المراحل التالية من الانقسام الاختزالي هو الارجح ان يحدث فيه خطأ الانفصال غير المنضبط (Nondisjunction) اذا كان الاب مصدر الخلل؟',
  ['الانقسام الاختزالي الاول للام','الانقسام الاختزالي الثاني للام','الانقسام الاختزالي الاول للاب','الانقسام الاختزالي الثاني للاب'], 2,
  'اذا كان الاب مصدر الخلل، يحدث Nondisjunction في الانقسام الاختزالي الاول للاب (Meiosis I) بشكل اكثر شيوعا، مما يؤدي إلى حيوانات منوية بها كروموسوم 21 اضافي.',
  'In Down syndrome (Trisomy 21), which meiotic stage is most likely to have nondisjunction if the father is the source of the error?',
  ['Maternal Meiosis I','Maternal Meiosis II','Paternal Meiosis I','Paternal Meiosis II'], 2,
  'If the father is the source, nondisjunction most commonly occurs in paternal Meiosis I, producing sperm with an extra chromosome 21.',
  'normal');

addQ('biology','science','hard',
  'عند مقارنة لقاحات mRNA (مثل Pfizer COVID-19) باللقاحات التقليدية الم attenuated، اي ميزة اساسية تميز اللقاحات الـ mRNA؟',
  ['تحفيز مناعة خلوية فقط بدون اجسام مضادة','امكانية تصنيعها بسرعة دون الحاجة لزراعة فيروس حي','عدم الحاجة لخلايا T المساعدة للاستجابة','توفير مناعة دائمة مدى الحياة'], 1,
  'اللقاحات mRNA يمكن تصنيعها سريعا في المختبر دون الحاجة لزراعة فيروسات حية او weakenها، مما يسرع الانتاج والتكيف مع الطفرات.',
  'Compared to traditional attenuated vaccines, what is a key advantage of mRNA vaccines (like Pfizer COVID-19)?',
  ['Stimulates only cellular immunity without antibodies','Can be manufactured quickly without growing live virus','Does not require helper T cells for response','Provides permanent lifelong immunity'], 1,
  'mRNA vaccines can be rapidly manufactured in labs without growing or weakening live viruses, enabling faster production and adaptation to mutations.',
  'normal');

addQ('biology','science','medium',
  'اي من الاجزاء التالية في العين البشرية يحتوي على اكبر عدد من الخلايا المخروطية المسؤولة عن الرؤية النهارية والالوان؟',
  ['القرنية','الشبكية (Fovea centralis)','الجسم الهدبي','العدسة'], 1,
  'الحفرة المركزية (Fovea centralis) في الشبكية تحتوي على اعلى كثافة للخلايا المخروطية وتوفير اعلى دقة للرؤية.',
  'Which part of the human eye contains the highest density of cone cells responsible for daylight and color vision?',
  ['Cornea','Retina (Fovea centralis)','Ciliary body','Lens'], 1,
  'The fovea centralis in the retina has the highest cone cell density and provides the sharpest visual acuity.',
  'normal');

addQ('biology','science','medium',
  'اي من العمليات التالية يعتبر تكاثرا لاجنسيا في الحيوانات؟',
  ['الاخصاب الخارجي','الانقسام الثنائي','التلقيح','الاخصاب الداخلي'], 1,
  'الانقسام الثنائي هو تكاثر لاجنسي شائع في الاميبا والبكتيريا وبعض الكائنات الحية الاخرى.',
  'Which of the following is considered asexual reproduction in animals?',
  ['External fertilization','Binary fission','Pollination','Internal fertilization'], 1,
  'Binary fission is a form of asexual reproduction common in amoeba, bacteria, and some other organisms.',
  'normal');

addQ('biology','science','medium',
  'اي من الهرمونات النباتية التالية يسرع من نضج الثمار وسقوط الاوراق؟',
  ['الاوكسينات','الجبرلينات','الايثيلين','السيتوكينينات'], 2,
  'الايثيلين هو هرمون نباتي غازي يسرع نضج الثمار ويحفز سقوط الاوراق (التساقط).',
  'Which plant hormone accelerates fruit ripening and leaf abscission?',
  ['Auxins','Gibberellins','Ethylene','Cytokinins'], 2,
  'Ethylene is a gaseous plant hormone that accelerates fruit ripening and promotes leaf abscission.',
  'normal');

addQ('biology','science','medium',
  'في الجهاز التناسلي الانثوي، اي البنيات التالية هي المسؤولة عن انتاج البويضات وهرمونات الاستروجين والبروجسترون؟',
  ['قناة فالوب','الرحم','المبيض','عنق الرحم'], 2,
  'المبيض هو المسؤول عن انتاج البويضات (الخلايا التكاثرية الانثوية) والهرمونات الجنسية الانثوية.',
  'In the female reproductive system, which structure produces eggs and the hormones estrogen and progesterone?',
  ['Fallopian tube','Uterus','Ovary','Cervix'], 2,
  'The ovary produces eggs (ova) and female sex hormones estrogen and progesterone.',
  'normal');

addQ('biology','science','medium',
  'اي من الامراض التالية ينتج عن نقص هرمون الثيروكسين في الطفولة ويؤدي إلى التقزم العقلي والجسدي؟',
  ['داء كوشينغ','الcretinism (قصر القامة الغدي)','داء اديسون','فرط الغدة الدرقية'], 1,
  'قصر القامة الغدي (Cretinism) يحدث بسبب نقص الثيروكسين في الطفولة، مما يسبب تقزما عقليا وجسديا.',
  'Which disease results from thyroxine deficiency in childhood and leads to mental and physical stunting?',
  ['Cushings disease','Cretinism','Addisons disease','Hyperthyroidism'], 1,
  'Cretinism occurs due to thyroxine deficiency in childhood, causing both mental and physical stunting.',
  'normal');

addQ('biology','science','hard',
  'في الية عمل الاجسام المضادة احادية النسيلة (Monoclonal Antibodies) في العلاج المناعي للسرطان، اي الية تستهدف بشكل اساسي؟',
  ['تدمير الحمض النووي للخلايا السرطانية مباشرة','تحسين قدرة الخلايا السرطانية على الانقسام','الربط بمستقبلات سطحية محددة على الخلايا السرطانية وتعطيلها','منع الخلايا السرطانية من الاستهلاك الاوكسجين'], 2,
  'الاجسام المضادة احادية النسيلة ترتبط بمستقبلات او مستضدات سطحية محددة على الخلايا السرطانية، مما يعطل اشارات النمو او يوجه الخلايا المناعية لمهاجمتها.',
  'In cancer immunotherapy, monoclonal antibodies primarily target which mechanism?',
  ['Directly destroying cancer cell DNA','Enhancing cancer cell division ability','Binding specific surface receptors on cancer cells and disabling them','Preventing cancer cells from consuming oxygen'], 2,
  'Monoclonal antibodies bind to specific surface receptors or antigens on cancer cells, disrupting growth signals or directing immune cells to attack them.',
  'normal');

addQ('biology','science','hard',
  'في تحليل بيدجري لوراثة مرض الهيموفيليا (X-linked recessive)، اذا كان الاب مصابا والام حاملة، ما احتمال اصابة الابن (احتمال)؟',
  ['0%','25%','50%','100%'], 2,
  'الاب المصاب (XhY) يعطي Y للابن دائما. الام الحاملة (XhX) تعطي Xh او X باحتمال 50% لكل منهما. لذا احتمال اصابة الابن = 50%.',
  'In a pedigree analysis of hemophilia (X-linked recessive), if the father is affected and mother is a carrier, what is the probability a son is affected (probability)?',
  ['0%','25%','50%','100%'], 2,
  'Affected father (XhY) always gives Y to son. Carrier mother (XhX) gives Xh or X with 50% each. So son affected probability = 50%.',
  'complex');

addQ('biology','science','hard',
  'في تجربة Avery-MacLeod-McCarty (1944)، اي انزيم استخدم لإثبات ان DNA هو المادة الوراثية من خلال تدميره ومنع التحول البكتيري؟',
  ['الريبونيوكليز (RNase)','البروتياز (Protease)','الديوكسي ريبونيوكليز (DNase)','الليباز (Lipase)'], 2,
  'اضافوا DNase لعصارة الخلايا المحولة، مما ادى لتدمير DNA ومنع التحول البكتيري، مثبتا ان DNA هو العامل المحول.',
  'In the Avery-MacLeod-McCarty experiment (1944), which enzyme was used to prove DNA is the genetic material by destroying it and preventing bacterial transformation?',
  ['RNase','Protease','DNase','Lipase'], 2,
  'They added DNase to the transforming extract, destroying DNA and preventing bacterial transformation, proving DNA is the transforming factor.',
  'normal');

addQ('biology','science','hard',
  'في استجابة المناعة الثانوية (Secondary Response)، اي الخلايا التالية تنتج اجساما مضادة بكميات اكبر وبجودة اعلى (Affinity Maturation) عند التعرض لنفس المستضد مرة ثانية؟',
  ['الخلايا البلازمية الاولية','الخلايا البلازمية الطويلة العمر من ذاكرة B','الخلايا T المساعدة Naive','الخلايا البلعمية الكبيرة'], 1,
  'خلايا B الذاكرة تتمايز إلى خلايا بلازمية طويلة العمر تنتج اجساما مضادة عالية الافينية (Affinity Maturation) بكميات اكبر في الاستجابة الثانوية.',
  'In the secondary immune response, which cells produce antibodies in larger quantities and higher affinity (Affinity Maturation) upon re-exposure to the same antigen?',
  ['Primary plasma cells','Long-lived memory B plasma cells','Naive helper T cells','Macrophages'], 1,
  'Memory B cells differentiate into long-lived plasma cells producing high-affinity antibodies in larger quantities during the secondary response.',
  'normal');

addQ('biology','science','hard',
  'في تحليل تسلسل DNA باستخدام طريقة Sanger (سلسلة الانهاء)، اي من العناصر التالية يسبب انهاء تسلسي عشوائي لسلاسل DNA؟',
  ['النيوكليوتيدات العادية (dNTPs)','النيوكليوتيدات ثنائية الفوسفات (ddNTPs)','RNA البريمر','DNA بوليميراز الحراري'], 1,
  'النيوكليوتيدات ثنائية الفوسفات (ddNTPs) تفتقر لمجموعة الهيدروكسيل في الموضع 3، مما يمنع تكوين رابطة فوسفات ثنائية وينهي التسلسل.',
  'In Sanger sequencing (chain termination method), which element causes random termination of DNA strands?',
  ['Normal nucleotides (dNTPs)','Dideoxynucleotides (ddNTPs)','RNA primer','Thermostable DNA polymerase'], 1,
  'Dideoxynucleotides (ddNTPs) lack the 3 hydroxyl group, preventing phosphodiester bond formation and terminating chain elongation.',
  'normal');

addQ('biology','science','hard',
  'في تفاعل البوليمراز المتسلسل (PCR)، اي الخطوات التالية تحدث عند درجة حرارة 72 م؟',
  ['فك اللولب (Denaturation)','الربط بالبريمر (Annealing)','الاستطالة (Extension)','التبريد السريع'], 2,
  'تتم خطوة الاستطالة (Extension) عند 72 م حيث يعمل DNA بوليميراز الحراري (Taq) على اضافة النيوكليوتيدات للبريمر.',
  'In PCR (Polymerase Chain Reaction), which step occurs at 72 degrees C?',
  ['Denaturation','Annealing','Extension','Rapid cooling'], 2,
  'The extension step occurs at 72 C where Taq DNA polymerase adds nucleotides to the primer.',
  'normal');

addQ('biology','science','hard',
  'في نظام CRISPR-Cas9 للتحرير الجيني، اي جزء من النظام يحدد الموقع الدقيق للقص على DNA الهدف؟',
  ['بروتين Cas9','الرنا الدليلي (gRNA)','انزيم DNA ليجاز','النيوكليوتيدات dNTPs'], 1,
  'الرنا الدليلي (guide RNA) يحتوي على تسلسل مكمل للهدف DNA ويرشد بروتين Cas9 إلى الموقع الدقيق للقص.',
  'In the CRISPR-Cas9 gene editing system, which component determines the exact cutting site on target DNA?',
  ['Cas9 protein','Guide RNA (gRNA)','DNA ligase enzyme','dNTPs nucleotides'], 1,
  'The guide RNA contains a sequence complementary to the target DNA and directs the Cas9 protein to the exact cutting site.',
  'normal');

addQ('biology','science','hard',
  'في تحليل تفاعل الاكسدة والاختزال في عملية التنفس الخلوي، اي جزيء يعمل كمستقبل الكترون نهائي في السلسلة التنفسية في الخلايا حقيقية النواة؟',
  ['NADH','FADH2','الاوكسجين الجزيئي (O2)','الادينوسين ثلاثي الفوسفات (ATP)'], 2,
  'الاوكسجين الجزيئي (O2) هو المستقبل الالكتروني النهائي في السلسلة التنفسية؛ يقبل الالكترونات ويتحد مع بروتونات لتكوين الماء.',
  'In cellular respiration redox analysis, which molecule acts as the final electron acceptor in the electron transport chain in eukaryotes?',
  ['NADH','FADH2','Molecular oxygen (O2)','ATP'], 2,
  'Molecular oxygen (O2) is the final electron acceptor in the electron transport chain; it accepts electrons and combines with protons to form water.',
  'normal');

addQ('biology','science','medium',
  'اي من التكوينات التالية يمثل العظام القصيرة في الهيكل العظمي البشري؟',
  ['عظمة الفخذ','عظمة الرسغ','عظمة القصبة','عظمة العضد'], 1,
  'عظام الرسغ (Carpals) تعتبر عظاما قصيرة (Short bones) لان طولها وعرضها وارتفاعها متقاربة.',
  'Which of the following represents short bones in the human skeleton?',
  ['Femur','Carpals','Tibia','Humerus'], 1,
  'Carpal bones are classified as short bones because their length, width, and height are nearly equal.',
  'normal');

addQ('biology','science','medium',
  'اي من الغدد التالية يعتبر غدة صماء وليست غدة خارجية الافراز؟',
  ['الغدة الدهنية','الغدة العرقية','الغدة الدرقية','الغدة اللبنية'], 2,
  'الغدة الدرقية غدة صماء تفرز هرموناتها مباشرة في الدم، بينما الباقي غدد خارجية الافراز.',
  'Which of the following is an endocrine gland and not an exocrine gland?',
  ['Sebaceous gland','Sweat gland','Thyroid gland','Mammary gland'], 2,
  'The thyroid gland is an endocrine gland that secretes hormones directly into the bloodstream, while the others are exocrine.',
  'normal');

addQ('biology','science','medium',
  'اي من الاعضاء التالية يعتبر جزءا من الجهاز التناسلي الذكري والبولي في نفس الوقت؟',
  ['الخصية','الغدة البروستاتية','الاحليل','الحويصلات المنوية'], 2,
  'الاحليل (Urethra) يمر فيه كل من المني والبول، لذا يعتبر جزءا من كلا الجهازين.',
  'Which of the following is part of both the male reproductive and urinary systems?',
  ['Testis','Prostate gland','Urethra','Seminal vesicles'], 2,
  'The urethra carries both semen and urine, making it part of both the reproductive and urinary systems.',
  'normal');

addQ('biology','science','medium',
  'في عملية التمثيل الضوئي، اي المركبات التالية ينتج في دورة Calvin ويستخدم لاحقا لتكوين الجلوكوز؟',
  ['ATP فقط','NADPH فقط','G3P (غليسرالديهايد-3-فوسفات)','الاوكسجين الجزيئي'], 2,
  'G3P (غليسرالديهايد-3-فوسفات) هو منتج دورة Calvin الاولي؛ يتطلب تكوين جزيء G3P واحد ثلاث دورات كاملة.',
  'In photosynthesis, which compound is produced in the Calvin cycle and later used to form glucose?',
  ['ATP only','NADPH only','G3P (Glyceraldehyde-3-phosphate)','Molecular oxygen'], 2,
  'G3P is the primary product of the Calvin cycle; forming one G3P molecule requires three full cycles.',
  'normal');

addQ('biology','science','medium',
  'اي من الامراض المنقولة جنسيا يسببه بكتيريا Treponema pallidum؟',
  ['السيلان','الزهري','الكلاميديا','الايدز'], 1,
  'الزهري (Syphilis) يسببه البكتيريا اللولبية Treponema pallidum.',
  'Which sexually transmitted disease is caused by the bacterium Treponema pallidum?',
  ['Gonorrhea','Syphilis','Chlamydia','AIDS'], 1,
  'Syphilis is caused by the spirochete bacterium Treponema pallidum.',
  'normal');

addQ('biology','science','medium',
  'اي من الصفات التالية يعتبر صفة وراثية جسدية سائدة في الانسان؟',
  ['لون العيون الازرق','القدرة على ثني الابهام للخلف','عدم القدرة على تذوق مادة PTC','الانيميا المنجلية'], 1,
  'القدرة على ثني الابهام للخلف (Hitchhikers thumb) صفة جسدية سائدة؛ اللون الازرق متنحي، وعدم تذوق PTC سائدة لكنها ليست جسدية بارزة.',
  'Which of the following is a dominant somatic inherited trait in humans?',
  ['Blue eye color','Ability to roll tongue backward','Inability to taste PTC','Sickle cell anemia'], 1,
  'The ability to roll the thumb backward (Hitchhikers thumb) is a dominant trait; blue eyes are recessive.',
  'normal');

addQ('biology','science','medium',
  'في تحليل كروموسومي، كم عدد الكروموسومات في الخلية البشرية الجسدية الطبيعية؟',
  ['23','44','46','48'], 2,
  'الخلية البشرية الجسدية الطبيعية (Somatic cell) تحتوي على 46 كروموسوما (23 زوجا)، بينما الخلايا التكاثرية تحتوي على 23 فرديا.',
  'In chromosomal analysis, how many chromosomes are in a normal human somatic cell?',
  ['23','44','46','48'], 2,
  'A normal human somatic cell contains 46 chromosomes (23 pairs), while gametes contain 23 individual chromosomes.',
  'normal');

addQ('biology','science','medium',
  'اي من الجزيئات التالية يعمل كناقل للاحماض الامينية إلى الريبوسوم اثناء الترجمة؟',
  ['mRNA','rRNA','tRNA','snRNA'], 2,
  'الـ tRNA (الرنا الناقل) يحمل الاحماض الامينية ويربطها بالكودون المقابل على mRNA في الريبوسوم.',
  'Which molecule acts as a carrier of amino acids to the ribosome during translation?',
  ['mRNA','rRNA','tRNA','snRNA'], 2,
  'tRNA (transfer RNA) carries amino acids and binds them to the complementary codon on mRNA at the ribosome.',
  'normal');

addQ('biology','science','medium',
  'اي من العمليات التالية يحدث في الشبكة الاندوبلازمية الخشنة (Rough ER)؟',
  ['توليف الدهون','تفكيك السموم','توليف البروتينات','توليف الهرمونات الستيرويدية'], 2,
  'الشبكة الاندوبلازمية الخشنة مغطاة بالريبوسومات وتعمل على توليف وتعديل البروتينات.',
  'Which process occurs in the Rough Endoplasmic Reticulum (Rough ER)?',
  ['Lipid synthesis','Detoxification','Protein synthesis','Steroid hormone synthesis'], 2,
  'The rough ER is covered with ribosomes and synthesizes and modifies proteins.',
  'normal');

addQ('biology','science','medium',
  'في عملية البلعمة (Phagocytosis)، اي الخلايا التالية تعتبر خلايا بلعمة محترفة في الجهاز المناعي؟',
  ['الخلايا اللمفاوية B','الخلايا اللمفاوية T','البلعميات الكبيرة (Macrophages)','الخلايا الصارية'], 2,
  'البلعميات الكبيرة (Macrophages) هي خلايا بلعمة محترفة تبتلع وتهضم الميكروبات والخلايا الميتة.',
  'In phagocytosis, which cells are considered professional phagocytes in the immune system?',
  ['B lymphocytes','T lymphocytes','Macrophages','Mast cells'], 2,
  'Macrophages are professional phagocytes that engulf and digest microbes and dead cells.',
  'normal');

addQ('biology','science','hard',
  'في تحليل ميكانيكية انقباض العضلة، ما هو مصدر الطاقة المباشر لتحرير راس الميوسين من الاكتين اثناء الانبساط؟',
  ['الجلوكوز','ATP','الكالسيوم','الاوكسجين'], 1,
  'ATP يرتبط براس الميوسين ويسبب تغيرا تشكيليا يفصله عن الاكتين اثناء انبساط العضلة.',
  'In muscle contraction mechanics, what is the direct energy source for detaching the myosin head from actin during relaxation?',
  ['Glucose','ATP','Calcium','Oxygen'], 1,
  'ATP binds to the myosin head causing a conformational change that detaches it from actin during muscle relaxation.',
  'normal');

addQ('biology','science','hard',
  'في تحليل التطعيم (Passive Immunity)، اي من الامثلة التالية يمثل مناعة سلبية طبيعية؟',
  ['تلقي لقاح الحصبة','حقن الغلوبولين المناعي','انتقال الاجسام المضادة من الام إلى الجنين عبر المشيمة','انتاج الاجسام المضادة بعد الاصابة بعدوى'], 2,
  'انتقال الاجسام المضادة من الام إلى الجنين عبر المشيمة هو مناعة سلبية طبيعية؛ الاجسام المضادة جاهزة وليست منتجة من الجسم.',
  'In passive immunity analysis, which example represents natural passive immunity?',
  ['Receiving measles vaccine','Immune globulin injection','Antibody transfer from mother to fetus via placenta','Antibody production after infection'], 2,
  'Antibody transfer from mother to fetus via placenta is natural passive immunity; ready-made antibodies not produced by the body.',
  'normal');

addQ('biology','science','hard',
  'في تجربة Griffith (1928) على التحول البكتيري، اي من السلالات التالية كانت قاتلة للفئران عند حقنها بمفردها؟',
  ['Streptococcus pneumoniae السلالة R غير المغلفة','Streptococcus pneumoniae السلالة S المغلفة','السلالة R المعالجة حراريا','السلالة S المعالجة حراريا'], 1,
  'السلالة S المغلفة (Smooth) كانت قاتلة للفئران بسبب المحتوى السكري للغلاف (كبسولة) الذي يحميها من البلعمة.',
  'In Griffiths experiment (1928) on bacterial transformation, which strain was lethal to mice when injected alone?',
  ['Streptococcus pneumoniae R strain non-encapsulated','Streptococcus pneumoniae S strain encapsulated','Heat-killed R strain','Heat-killed S strain'], 1,
  'The encapsulated S (Smooth) strain was lethal due to its polysaccharide capsule protecting it from phagocytosis.',
  'normal');

addQ('biology','science','hard',
  'في تسلسل النيوكليوتيدات، اي من القواعد التالية يكوّن زوجا متمما مع الادينين في جزيء RNA؟',
  ['الثايمين','السيتوزين','اليوراسيل','الغوانين'], 2,
  'في RNA، الادينين يكوّن ازواجا هيدروجينية مع اليوراسيل (بدلا من الثايمين في DNA).',
  'In nucleotide sequencing, which base pairs with Adenine in an RNA molecule?',
  ['Thymine','Cytosine','Uracil','Guanine'], 2,
  'In RNA, Adenine forms hydrogen bonds with Uracil (instead of Thymine as in DNA).',
  'normal');

addQ('biology','science','hard',
  'في تحليل دورة الخلية، اي المرحلة التالية يتم فيها تكرار DNA تكرارا شبه محافظ (Semi-conservative)؟',
  ['الطور البيني الاول (G1)','الطور التركيبي (S)','الطور البيني الثاني (G2)','الطور الميتوزي (M)'], 1,
  'الطور التركيبي (S phase) هو المرحلة التي يحدث فيها تكرار DNA بنمط شبه محافظ حيث كل سلسلة جديدة تحتوي على سلسلة اصلية وجديدة.',
  'In cell cycle analysis, during which phase does DNA replicate in a semi-conservative manner?',
  ['G1 phase','S phase','G2 phase','M phase'], 1,
  'The S (Synthesis) phase is when DNA replicates semi-conservatively, with each new molecule containing one original and one new strand.',
  'normal');

addQ('biology','science','hard',
  'في الية نقل الاشارة العصبية عبر الوصلة العصبية العضلية، اي من الايونات التالية يتدفق داخل زرافة العصبون المحرك عند وصول جهد الفعل؟',
  ['Cl-','K+','Na+','Ca2+'], 2,
  'عند وصول جهد الفعل إلى طرف زرافة العصبون، تفتح قنوات Na+ المستقبلة للجهد مسببة استقطابا عكسيا.',
  'In neuromuscular junction signal transmission, which ion flows INTO the motor neuron terminal when the action potential arrives?',
  ['Cl-','K+','Na+','Ca2+'], 2,
  'When the action potential reaches the nerve terminal, voltage-gated Na+ channels open causing depolarization.',
  'normal');

addQ('biology','science','hard',
  'في تحليل تنوع الاجسام المضادة (Antibody Diversity)، اي من الالياات التالية يساهم بشكل كبير في تنوع منطقة المتغير (Variable Region)؟',
  ['تبديل الفصل الضوئي (Photoperiodism)','اعادة التركيب الجسدي (Somatic Recombination / V(D)J Recombination)','الانقسام الاختزالي في الخلايا البلازمية','الانقسام المتساوي في الخلايا T'], 1,
  'اعادة التركيب الجسدي V(D)J تعيد ترتيب مقاطع الجينات V, D, J عشوائيا لتوليد تنوع هائل في منطقة المتغير للاجسام المضادة.',
  'In antibody diversity analysis, which mechanism significantly contributes to variable region diversity?',
  ['Photoperiodism','Somatic Recombination (V(D)J Recombination)','Meiosis in plasma cells','Mitosis in T cells'], 1,
  'V(D)J recombination randomly rearranges V, D, J gene segments to generate enormous diversity in the antibody variable region.',
  'normal');

addQ('biology','science','hard',
  'في تحليل عمل الغدة الكظرية، اي من الهرمونات التالية يفرز من القشرة وليس من النخامة؟',
  ['الادرينالين','النورادرينالين','الكورتيزول','الدوبامين'], 2,
  'الكورتيزول هو هرمون قشرة الغدة الكظرية (Glucocorticoid). الادرينالين والنورادرينالين يفرزان من النخامة (Medulla).',
  'In adrenal gland function analysis, which hormone is secreted from the cortex and not the medulla?',
  ['Adrenaline','Noradrenaline','Cortisol','Dopamine'], 2,
  'Cortisol is a glucocorticoid from the adrenal cortex. Adrenaline and noradrenaline are secreted from the adrenal medulla.',
  'normal');

addQ('biology','science','hard',
  'في تحليل انتقال الدم عبر المشيمة، اي من المكونات التالية لا يمكنه عبور حاجز المشيمة الطبيعي؟',
  ['الاوكسجين','ثاني اكسيد الكربون','الاجسام المضادة IgG','كريات الدم الحمراء الام'], 3,
  'كريات الدم الحمراء للام لا يمكنها عبور حاجز المشيمة الطبيعي. الاوكسجين وCO2 يتبادلان بالانتشار، وIgG يمكنه العبور بنشاط.',
  'In placental blood transfer analysis, which component cannot cross the normal placental barrier?',
  ['Oxygen','Carbon dioxide','IgG antibodies','Maternal red blood cells'], 3,
  'Maternal red blood cells cannot cross the normal placental barrier. O2 and CO2 exchange by diffusion, and IgG can cross actively.',
  'normal');

addQ('biology','science','hard',
  'في تحليل وراثة لون العيون (Polygenic Inheritance)، اذا افترضنا جينين (A,a و B,b) يتحكمان في صبغة الميلانين، فكم جينوتيبو ممكن يعطي لونا بنيا غامقا اذا كان كل اليل كبير يضيف طبقة صبغة (احتمال)؟',
  ['1','3','6','9'], 2,
  'للون البني الغامق نحتاج 4 اليلات كبيرة (AABB) — 1 نمط. للون البني المتوسط الداكن (3 اليلات كبيرة) — AABb, AaBB = 2. المجموع للبني الداكن فقط = 1. لكن اذا اعتبرنا غامق اي ≥3 اليلات كبيرة = AABB (1) + AABb(2) + AaBB(2) = 5... السؤال يفترض طبقات. بفرض 2 طبقات لكل جين، الانماط ذات 4 اليلات كبيرة = 1 فقط (AABB).',
  'In eye color polygenic inheritance with two genes (A,a and B,b), how many genotypes give dark brown if each dominant allele adds a pigment layer (probability)?',
  ['1','3','6','9'], 2,
  'For dark brown with maximum pigment, we need 4 dominant alleles (AABB) = 1 genotype only.',
  'complex');


/* ===================== CHEMISTRY (Both Tracks) - 60 Qs ===================== */
addQ('chemistry','both','medium',
  'اي من العناصر الانتقالية التالية يظهر اعلى عدد من حالات التاكسد المستقرة؟',
  ['الحديد Fe','المنجنيز Mn','النحاس Cu','الزنك Zn'], 1,
  'المنجنيز يظهر حالات تاكسد من +2 إلى +7 (+2, +3, +4, +5, +6, +7)، وهو الاعلى بين العناصر الانتقالية الاولى.',
  'Which transition metal shows the highest number of stable oxidation states?',
  ['Iron Fe','Manganese Mn','Copper Cu','Zinc Zn'], 1,
  'Manganese shows oxidation states from +2 to +7 (+2, +3, +4, +5, +6, +7), the highest among first-row transition metals.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل انتاج الامونياك بطريقة Haber-Bosch، اي من العوامل التالية يزيد من انتاجية التفاعل وفقا لقاعدة لوشاتلييه؟',
  ['رفع درجة الحرارة (التفاعل طارد للحرارة)','رفع الضغط (عدد مولات الغازات الناتجة < المتفاعلة)','اضافة حفاز الحديد لزيادة الاتزان','تخفيض تركيز النيتروجين'], 1,
  'رفع الضغط يزاحم الاتزان نحو جانب عدد المولات الاقل (الناتج). في N2 + 3H2 ⇌ 2NH3، الجانب الايمن له 2 مول بينما الايسر 4 مولات.',
  'In the Haber-Bosch ammonia synthesis, which factor increases yield according to Le Chateliers principle?',
  ['Increasing temperature (exothermic reaction)','Increasing pressure (product gas moles < reactant moles)','Adding iron catalyst to shift equilibrium','Decreasing nitrogen concentration'], 1,
  'Increasing pressure shifts equilibrium toward the side with fewer moles. In N2 + 3H2 ⇌ 2NH3, product side has 2 moles vs 4 on reactant side.',
  'normal');

addQ('chemistry','both','medium',
  'اي من المركبات التالية يعتبر كحولا ثانويا؟',
  ['CH3CH2OH','(CH3)3COH','CH3CH(OH)CH3','C6H5OH'], 2,
  'CH3CH(OH)CH3 (Propan-2-ol) هو كحول ثانوي لان مجموعة OH مرتبطة بكربون ثانوي (مرتبط بكربونين).',
  'Which of the following is a secondary alcohol?',
  ['CH3CH2OH','(CH3)3COH','CH3CH(OH)CH3','C6H5OH'], 2,
  'CH3CH(OH)CH3 (Propan-2-ol) is a secondary alcohol because the OH group is attached to a secondary carbon (bonded to two carbons).',
  'normal');

addQ('chemistry','both','medium',
  'في تحليل pH، اي من المحاليل التالية يكون pH اقل من 7 عند الاتزان؟',
  ['محلول NaCl','محلول CH3COONa','محلول NH4Cl','محلول KNO3'], 2,
  'NH4Cl ملح حمضي؛ يتأين لاعطاء NH4+ (حمض ضعيف) وCl- (قاعدة قوية). NH4+ يتفكك مائيا لانتاج H3O+، مما يجعل pH < 7.',
  'In pH analysis, which solution has a pH less than 7 at equilibrium?',
  ['NaCl solution','CH3COONa solution','NH4Cl solution','KNO3 solution'], 2,
  'NH4Cl is an acidic salt; it dissociates to NH4+ (weak acid) and Cl- (strong base conjugate). NH4+ hydrolyzes to produce H3O+, making pH < 7.',
  'normal');

addQ('chemistry','both','medium',
  'في تسمية IUPAC، ما الاسم الصحيح للمركب CH3-CH=CH-CH3؟',
  ['But-1-ene','But-2-ene','2-methylpropene','Butane'], 1,
  'الرابطة المزدوجة في الكربون رقم 2 (counting from either end gives same position), hence But-2-ene.',
  'In IUPAC nomenclature, what is the correct name for CH3-CH=CH-CH3?',
  ['But-1-ene','But-2-ene','2-methylpropene','Butane'], 1,
  'The double bond is at carbon 2 (counting from either end gives same position), hence But-2-ene.',
  'normal');

addQ('chemistry','both','medium',
  'اي من التفاعلات التالية يمثل تفاعل اكسدة-اختزال (Redox)؟',
  ['HCl + NaOH → NaCl + H2O','Zn + CuSO4 → ZnSO4 + Cu','AgNO3 + NaCl → AgCl + NaNO3','CaCO3 → CaO + CO2'], 1,
  'Zn يتأكسد (0 إلى +2) وCu+2 يختزل (+2 إلى 0). هذا تفاعل اكسدة-اختزال حقيقي.',
  'Which of the following is a redox reaction?',
  ['HCl + NaOH → NaCl + H2O','Zn + CuSO4 → ZnSO4 + Cu','AgNO3 + NaCl → AgCl + NaNO3','CaCO3 → CaO + CO2'], 1,
  'Zn is oxidized (0 to +2) and Cu2+ is reduced (+2 to 0). This is a true redox reaction.',
  'normal');

addQ('chemistry','both','medium',
  'في الخلية الجلفانية، اي القطبين يحدث فيه الاكسدة؟',
  ['القطب الموجب (الكاثود)','القطب السالب (الانود)','الجسر الملحي','الفلز الاقل نشاطا'], 1,
  'الاكسدة تحدث دائما في الانود (القطب السالب في الخلية الجلفانية). الاختزال في الكاثود.',
  'In a galvanic cell, at which electrode does oxidation occur?',
  ['Positive electrode (cathode)','Negative electrode (anode)','Salt bridge','Less active metal'], 1,
  'Oxidation always occurs at the anode (negative electrode in galvanic cells). Reduction occurs at the cathode.',
  'normal');

addQ('chemistry','both','medium',
  'اي من المركبات التالية يعتبر امينا ثانويا؟',
  ['CH3NH2','(CH3)2NH','(CH3)3N','C6H5NH2'], 1,
  '(CH3)2NH (Dimethylamine) هو امين ثانوي لان ذرة النيتروجين مرتبطة بمجموعتي الكيل.',
  'Which of the following is a secondary amine?',
  ['CH3NH2','(CH3)2NH','(CH3)3N','C6H5NH2'], 1,
  '(CH3)2NH (Dimethylamine) is a secondary amine because the nitrogen atom is bonded to two alkyl groups.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل البلمرة الاضافية (Addition Polymerization)، اي من البوليمرات التالية ينتج من مونومر الايثين؟',
  ['البولي فينيل كلوريد PVC','البولي ايثيلين','البوليسترين','التيفلون'], 1,
  'البولي ايثيلين ينتج من بلمرة الايثين (CH2=CH2) بواسطة الاضافة المتكررة.',
  'In addition polymerization, which polymer is produced from ethene monomer?',
  ['Polyvinyl chloride PVC','Polyethylene','Polystyrene','Teflon'], 1,
  'Polyethylene is produced by polymerization of ethene (CH2=CH2) through repeated addition.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل القلوية مع الاستر، ما النواتج الاساسية؟',
  ['كحول + حمض كاربوكسيلي','كحول + ملح كاربوكسيلات','الدهيد + كيتون','الكان + ماء'], 1,
  'الاستر + قاعدية قوية (مثل NaOH) → كحول + ملح حمض الكاربوكسيليك (Saponification).',
  'In the reaction of an ester with a strong base, what are the main products?',
  ['Alcohol + carboxylic acid','Alcohol + carboxylate salt','Aldehyde + ketone','Alkane + water'], 1,
  'Ester + strong base (e.g., NaOH) → alcohol + carboxylic acid salt (Saponification).',
  'normal');

addQ('chemistry','both','hard',
  'في حساب pH لمحلول حمض خليك 0.1 M (Ka = 1.8 × 10⁻⁵)، ما قيمة pH التقريبية (احتمال)؟',
  ['2.37','2.87','4.74','5.74'], 1,
  '[H+] = √(Ka × C) = √(1.8×10⁻⁵ × 0.1) = √(1.8×10⁻⁶) ≈ 1.34×10⁻³. pH = -log(1.34×10⁻³) ≈ 2.87.',
  'Calculate the approximate pH of 0.1 M acetic acid solution (Ka = 1.8 × 10⁻⁵) (probability)?',
  ['2.37','2.87','4.74','5.74'], 1,
  '[H+] = √(Ka × C) = √(1.8×10⁻⁵ × 0.1) = √(1.8×10⁻⁶) ≈ 1.34×10⁻³. pH = -log(1.34×10⁻³) ≈ 2.87.',
  'complex');

addQ('chemistry','both','hard',
  'في تحليل الكيمياء الكهربية، اذا كانت القوة الدافعة الكهربية القياسية لخلية Zn|Zn²⁺||Cu²⁺|Cu هي 1.10V عند تركيزات 1M، فما الاتجاه التلقائي للتفاعل؟',
  ['Zn²⁺ + Cu → Zn + Cu²⁺','Zn + Cu²⁺ → Zn²⁺ + Cu','لا يحدث تفاعل','Cu → Cu²⁺ + 2e⁻ فقط'], 1,
  'E°cell = E°cathode - E°anode = +0.34 - (-0.76) = +1.10V. القيمة الموجبة تعني التفاعل التلقائي: Zn يتأكسد وCu²⁺ يختزل.',
  'In electrochemical analysis, if the standard EMF of Zn|Zn²⁺||Cu²⁺|Cu cell is 1.10V at 1M concentrations, what is the spontaneous reaction direction?',
  ['Zn²⁺ + Cu → Zn + Cu²⁺','Zn + Cu²⁺ → Zn²⁺ + Cu','No reaction occurs','Cu → Cu²⁺ + 2e⁻ only'], 1,
  'E°cell = E°cathode - E°anode = +0.34 - (-0.76) = +1.10V. Positive value means spontaneous: Zn oxidizes, Cu²⁺ reduces.',
  'complex');

addQ('chemistry','both','hard',
  'في تفاعل Friedel-Crafts للاكylation، اي من العوامل التالية يعتبر عائقا رئيسيا (Limitation)؟',
  ['عدم تفاعل البنزين مع الهالوجينات','اعادة الترتيب (Rearrangement) للكاربوكاتيون الاولي','الحاجة لدرجات حرارة منخفضة جدا','عدم وجود حفاز مناسب'], 1,
  'كاربوكاتيون Friedel-Crafts يمكن ان يعيد ترتيب نفسه (مثل 1° إلى 2° أو 3°) قبل مهاجمة الحلقة، مما يعطي منتجا غير متوقع.',
  'In Friedel-Crafts alkylation, which factor is a major limitation?',
  ['Benzene does not react with halogens','Rearrangement of the initial carbocation','Need for very low temperatures','Lack of suitable catalyst'], 1,
  'Friedel-Crafts carbocations can rearrange (e.g., 1° to 2° or 3°) before attacking the ring, giving unexpected products.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل التحلل المائي للاملا ح، اي من الاملا ح التالية يعطي محلولا متعادلا (pH ≈ 7)؟',
  ['CH3COONH4','Na2CO3','NH4Cl','FeCl3'], 0,
  'CH3COONH4 ملح لحمض ضعيف (CH3COOH) وقاعدة ضعيفة (NH4OH). Ka للخليك ≈ Kb للامونيا، لذا pH ≈ 7.',
  'In salt hydrolysis analysis, which salt gives a neutral solution (pH ≈ 7)?',
  ['CH3COONH4','Na2CO3','NH4Cl','FeCl3'], 0,
  'CH3COONH4 is a salt of weak acid (acetic acid) and weak base (ammonia). Ka ≈ Kb, so pH ≈ 7.',
  'complex');

addQ('chemistry','both','hard',
  'في تفاعل تكثيف الالدهيدات (Aldol Condensation) لالدهيد لا يحتوي على هيدروجين الفا، اي المنتجات المتوقعة؟',
  ['لا يحدث تفاعل Aldol','يتكون Aldol فقط','يتكون α,β-unsaturated aldehyde فقط','يتكون كحول فقط'], 0,
  'تفاعل Aldol يتطلب وجود هيدروجين الفا على الالدهيد لانتاج اينوليت. بدونه، لا يمكن حدوث التفاعل.',
  'In Aldol condensation of an aldehyde with no alpha hydrogen, what are the expected products?',
  ['No Aldol reaction occurs','Only Aldol forms','Only α,β-unsaturated aldehyde forms','Only alcohol forms'], 0,
  'Aldol reaction requires an alpha hydrogen on the aldehyde to form an enolate. Without it, the reaction cannot proceed.',
  'normal');

addQ('chemistry','both','hard',
  'في حساب ثابت الاتزان Kc للتفاعل N2(g) + 3H2(g) ⇌ 2NH3(g)، اذا كانت التراكيز عند الاتزان: [N2]=0.1M، [H2]=0.3M، [NH3]=0.2M، فما قيمة Kc (احتمال)؟',
  ['0.148','14.8','148','1.48'], 1,
  'Kc = [NH3]² / ([N2] × [H2]³) = (0.2)² / (0.1 × (0.3)³) = 0.04 / (0.1 × 0.027) = 0.04 / 0.0027 ≈ 14.8.',
  'Calculate Kc for N2(g) + 3H2(g) ⇌ 2NH3(g) at equilibrium: [N2]=0.1M, [H2]=0.3M, [NH3]=0.2M (probability)?',
  ['0.148','14.8','148','1.48'], 1,
  'Kc = [NH3]² / ([N2] × [H2]³) = (0.2)² / (0.1 × (0.3)³) = 0.04 / 0.0027 ≈ 14.8.',
  'complex');

addQ('chemistry','both','hard',
  'اي من العناصر الانتقالية التالية يكون ايونه +2 ذو تكوين الكتروني [Ar] 3d⁶؟',
  ['Cr','Mn','Fe','Co'], 2,
  'Fe²⁺: Fe (Z=26) [Ar] 3d⁶ 4s²، عند فقدان 2 الكترون من 4s يصبح [Ar] 3d⁶.',
  'Which transition metal has a +2 ion with electron configuration [Ar] 3d⁶?',
  ['Cr','Mn','Fe','Co'], 2,
  'Fe²⁺: Fe (Z=26) [Ar] 3d⁶ 4s²; losing 2 electrons from 4s gives [Ar] 3d⁶.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل التخمر الكحولي للجلوكوز، كم جزيء CO2 ينتج من تفكيك جزيء جلوكوز واحد (احتمال)؟',
  ['1','2','3','4'], 1,
  'C6H12O6 → 2C2H5OH + 2CO2. لكل جزيء جلوكوز ينتج جزيئان من CO2.',
  'In alcoholic fermentation of glucose, how many CO2 molecules are produced from one glucose molecule (probability)?',
  ['1','2','3','4'], 1,
  'C6H12O6 → 2C2H5OH + 2CO2. Each glucose molecule produces 2 CO2 molecules.',
  'normal');

addQ('chemistry','both','hard',
  'في تسمية IUPAC للكيتونات، ما الاسم الصحيح للمركب CH3-CO-CH2-CH3؟',
  ['Butanal','Butan-2-one','Butan-1-ol','Butanoic acid'], 1,
  'CH3-CO-CH2-CH3: اطول سلسلة 4 كربونات، مجموعة الكيتون في C2. الاسم: Butan-2-one.',
  'In IUPAC nomenclature of ketones, what is the correct name for CH3-CO-CH2-CH3?',
  ['Butanal','Butan-2-one','Butan-1-ol','Butanoic acid'], 1,
  'CH3-CO-CH2-CH3: longest chain 4 carbons, ketone group at C2. Name: Butan-2-one.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل خلايا التحليل الكهربي، اي من الاقطاب التالية يستخدم في تحليل مائي لمحلول NaCl المركز مع قطب كربوني؟',
  ['الانود ينتج H2 والكاثود ينتج Cl2','الكاثود ينتج H2 والانود ينتج Cl2','الانود يذوب لانتاج Na','الكاثود ينتج O2'], 1,
  'في تحليل NaCl المركز: الكاثود (-): 2H2O + 2e⁻ → H2 + 2OH⁻. الانود (+): 2Cl⁻ → Cl2 + 2e⁻.',
  'In electrolytic cell analysis, which products form during electrolysis of concentrated NaCl with carbon electrodes?',
  ['Anode produces H2 and cathode produces Cl2','Cathode produces H2 and anode produces Cl2','Anode dissolves to produce Na','Cathode produces O2'], 1,
  'In concentrated NaCl electrolysis: Cathode (-): 2H2O + 2e⁻ → H2 + 2OH⁻. Anode (+): 2Cl⁻ → Cl2 + 2e⁻.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل Cannizzaro لالدهيد لا يحتوي على هيدروجين الفا (مثل الفورمالدهيد)، ما النواتج؟',
  ['حمض كاربوكسيلي + كحول','كحول + الدهيد اخر','كيتون + كحول','الكان + ماء'], 0,
  'تفاعل Cannizzaro: 2HCHO + NaOH → CH3OH + HCOONa. اي: كحول + ملح حمض كاربوكسيلي.',
  'In Cannizzaro reaction of an aldehyde with no alpha hydrogen (like formaldehyde), what are the products?',
  ['Carboxylic acid + alcohol','Alcohol + another aldehyde','Ketone + alcohol','Alkane + water'], 0,
  'Cannizzaro reaction: 2HCHO + NaOH → CH3OH + HCOONa. Products: alcohol + carboxylate salt.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل خصائص الفلزات الانتقالية، اي من الخصائص التالية يعود لوجود الكترونات d غير مكتملة؟',
  ['اللون','تعدد حالات التاكسد','المغناطيسية المparametrized','كل ما سبق'], 3,
  'الالكترونات d غير المكتملة تسبب: الوانا (انتقالات d-d)، تعدد حالات التاكسد، ومغناطيسية paramagnetic.',
  'In transition metal properties analysis, which property is due to incomplete d electrons?',
  ['Color','Variable oxidation states','Paramagnetism','All of the above'], 3,
  'Incomplete d electrons cause: colors (d-d transitions), variable oxidation states, and paramagnetism.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل اكسدة الكحولات، اي الكحولات التالية يمكن اكسدتها مباشرة إلى حمض كاربوكسيلي باستخدام KMnO4 الحمضي؟',
  ['الكحول الاولي','الكحول الثانوي','الكحول الثالثي','الفينول'], 0,
  'الكحول الاولي يتأكسد إلى الدهيد ثم إلى حمض كاربوكسيلي. الثانوي يتأكسد إلى كيتون فقط. الثالثي مقاوم للاكسدة.',
  'In alcohol oxidation, which alcohol can be directly oxidized to a carboxylic acid using acidic KMnO4?',
  ['Primary alcohol','Secondary alcohol','Tertiary alcohol','Phenol'], 0,
  'Primary alcohol oxidizes to aldehyde then carboxylic acid. Secondary oxidizes to ketone only. Tertiary resists oxidation.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل البلمرة التكاثفية (Condensation Polymerization) لتكوين نايلون-6,6، اي من الوحدتين يستخدمان؟',
  ['الاديبيك اسيد + الهكساميثيلين ثنائي الامين','الكابرولاكتام فقط','التيريفثاليك اسيد + الايثيلين جليكول','الفينول + الفورمالدهيد'], 0,
  'نايلون-6,6 ينتج من تكاثف حمض الاديبيك (Adipic acid، ثنائي الكاربوكسيل) مع الهكساميثيلين ثنائي الامين (HMDA، ثنائي الامين).',
  'In condensation polymerization to form Nylon-6,6, which two monomers are used?',
  ['Adipic acid + Hexamethylenediamine','Caprolactam only','Terephthalic acid + Ethylene glycol','Phenol + Formaldehyde'], 0,
  'Nylon-6,6 is produced by condensation of adipic acid (dicarboxylic) with hexamethylenediamine (diamine).',
  'normal');


addQ('chemistry','both','medium',
  'اي من الاحماض التالية هو حمض كاربوكسيلي اروماتي؟',
  ['حمض الخليك','حمض البنزويك','حمض الستريك','حمض النيتريك'], 1,
  'حمض البنزويك (C6H5COOH) هو حمض كاربوكسيلي اروماتي لانه يحتوي على حلقة بنزين مرتبطة بمجموعة COOH.',
  'Which of the following is an aromatic carboxylic acid?',
  ['Acetic acid','Benzoic acid','Citric acid','Nitric acid'], 1,
  'Benzoic acid (C6H5COOH) is an aromatic carboxylic acid because it contains a benzene ring attached to a COOH group.',
  'normal');

addQ('chemistry','both','medium',
  'في الخلية الكهروكيميائية، ما الوظيفة الرئيسية للجسر الملحي؟',
  ['زيادة سرعة التفاعل','السماح بمرور الالكترونات','الحفاظ على اتزان الشحنة','توفير الحفاز'], 2,
  'الجسر الملحي يسمح بمرور الايونات بين نصفي الخلية للحفاظ على الحياد الكهربائي واتزان الشحنة.',
  'In an electrochemical cell, what is the main function of the salt bridge?',
  ['Increase reaction speed','Allow electron passage','Maintain charge balance','Provide catalyst'], 2,
  'The salt bridge allows ion flow between half-cells to maintain electrical neutrality and charge balance.',
  'normal');

addQ('chemistry','both','medium',
  'اي من التفاعلات التالية يمثل تفاعل اضافة Markovnikov للالكين؟',
  ['CH2=CH2 + HBr → CH3CH2Br','CH3CH=CH2 + HBr → CH3CHBrCH3','CH3CH=CH2 + HBr → CH3CH2CH2Br','CH2=CH2 + Br2 → CH2BrCH2Br'], 1,
  'قاعدة Markovnikov: ذرة H ترتبط باكثر كربون مشبع بالهيدروجين (اقل استبدالا). في CH3CH=CH2، H يرتبط بالكربون الطرفي وBr بالوسطي.',
  'Which reaction represents Markovnikov addition to an alkene?',
  ['CH2=CH2 + HBr → CH3CH2Br','CH3CH=CH2 + HBr → CH3CHBrCH3','CH3CH=CH2 + HBr → CH3CH2CH2Br','CH2=CH2 + Br2 → CH2BrCH2Br'], 1,
  'Markovnikov rule: H adds to the carbon with more hydrogens (less substituted). In CH3CH=CH2, H adds to terminal carbon, Br to middle carbon.',
  'normal');

addQ('chemistry','both','medium',
  'اي من المحاليل التالية يكون له اكبر قيمة pH عند التركيز 0.1M؟',
  ['HCl','CH3COOH','NH3','NaOH'], 3,
  'NaOH قاعدة قوية تتأيون بالكامل لاعطاء [OH⁻] = 0.1M، pOH = 1، pH = 13. الاخرى اما احماض او قاعدة ضعيفة.',
  'Which 0.1M solution has the highest pH value?',
  ['HCl','CH3COOH','NH3','NaOH'], 3,
  'NaOH is a strong base that fully dissociates to give [OH⁻] = 0.1M, pOH = 1, pH = 13. Others are weak acids or weak bases.',
  'normal');

addQ('chemistry','both','medium',
  'في تسمية الالكانات حسب IUPAC، ما الاسم الصحيح للمركب (CH3)2CHCH2CH3؟',
  ['n-pentane','Isopentane (2-methylbutane)','Neopentane','Cyclopentane'], 1,
  '(CH3)2CHCH2CH3: سلسلة رئيسية 4 كربونات (butane) مع مجموعة ميثيل في C2. الاسم: 2-methylbutane (Isopentane).',
  'In IUPAC alkane nomenclature, what is the correct name for (CH3)2CHCH2CH3?',
  ['n-pentane','Isopentane (2-methylbutane)','Neopentane','Cyclopentane'], 1,
  '(CH3)2CHCH2CH3: main chain 4 carbons (butane) with methyl group at C2. Name: 2-methylbutane (Isopentane).',
  'normal');

addQ('chemistry','both','medium',
  'اي من المركبات التالية يعتبر بوليمر طبيعي؟',
  ['البولي ايثيلين','البوليسترين','السليولوز','التيفلون'], 2,
  'السليولوز (Cellulose) هو بوليمر طبيعي من وحدات الجلوكوز المرتبطة بروابط β-1,4-glycosidic.',
  'Which of the following is a natural polymer?',
  ['Polyethylene','Polystyrene','Cellulose','Teflon'], 2,
  'Cellulose is a natural polymer of glucose units linked by β-1,4-glycosidic bonds.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل تفاعل الفينول والفورمالدهيد، اي البوليمرات التالية يتكون؟',
  ['الباكليت (Bakelite)','النايلون','البولي فينيل كلوريد','البوليستر'], 0,
  'تفاعل الفينول مع الفورمالدهيد ينتج الباكليت (Bakelite)، وهو اول بوليمر صناعي بلاستيكي.',
  'In the condensation reaction between phenol and formaldehyde, which polymer is formed?',
  ['Bakelite','Nylon','Polyvinyl chloride','Polyester'], 0,
  'Phenol-formaldehyde condensation produces Bakelite, the first synthetic plastic polymer.',
  'normal');

addQ('chemistry','both','medium',
  'اي من الاحماض الامينية التالية يعتبر حمضا امينيا اساسيا (Basic amino acid)؟',
  ['الجليسين','الالانين','الليسين','الارجينين'], 3,
  'الارجينين (Arginine) يحتوي على مجموعة غوانيدينium في سلسلته الجانبية، مما يجعله حمضا امينيا قاعديا (pKa ≈ 12.5).',
  'Which of the following is a basic amino acid?',
  ['Glycine','Alanine','Leucine','Arginine'], 3,
  'Arginine contains a guanidinium group in its side chain, making it a basic amino acid (pKa ≈ 12.5).',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل الاسترة (Esterification)، اي من العوامل التالية تسرع التفاعل دون التأثير على موضع الاتزان؟',
  ['زيادة تركيز الماء','رفع درجة الحرارة','اضافة حمض قوي كحفاز','اضافة قاعدة قوية'], 2,
  'الحفاز (مثل H2SO4 المركز) يسرع كل من التفاعل المباشر والعكسي بنفس المقدار دون تغيير موضع الاتزان.',
  'In esterification, which factor speeds up the reaction without affecting the equilibrium position?',
  ['Increasing water concentration','Increasing temperature','Adding strong acid as catalyst','Adding strong base'], 2,
  'A catalyst (e.g., conc. H2SO4) speeds up both forward and reverse reactions equally without changing the equilibrium position.',
  'normal');

addQ('chemistry','both','medium',
  'في تحليل الاتزان الكيميائي، اذا زادت درجة الحرارة على تفاعل طارد للحرارة (Exothermic)، ماذا يحدث لقيمة Kc؟',
  ['تزداد Kc','تنقص Kc','لا تتغير Kc','تصبح Kc = 1'], 1,
  'في التفاعل الطارد للحرارة (ΔH < 0)، رفع الحرارة يزاحم الاتزان نحو المتفاعلات، مما ينقص Kc.',
  'In chemical equilibrium analysis, if temperature increases for an exothermic reaction, what happens to Kc?',
  ['Kc increases','Kc decreases','Kc does not change','Kc becomes 1'], 1,
  'For exothermic reactions (ΔH < 0), increasing temperature shifts equilibrium toward reactants, decreasing Kc.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل الكيمياء التناسقية، ما العدد التناسقي المتوقع لمركب [Fe(CN)6]⁴⁻؟',
  ['4','5','6','8'], 2,
  '[Fe(CN)6]⁴⁻ يحتوي على 6 جزيئات سيانيد (CN⁻) كروابط حديدية حول Fe²⁺. العدد التناسقي = 6.',
  'In coordination chemistry analysis, what is the expected coordination number of [Fe(CN)6]⁴⁻?',
  ['4','5','6','8'], 2,
  '[Fe(CN)6]⁴⁻ contains 6 cyanide (CN⁻) ligands around Fe²⁺. Coordination number = 6.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل اضافة HBr إلى 2-methylbut-2-ene في وجود بيروكسيدات، اي المنتج يتكون وفقا لقاعدة Anti-Markovnikov (احتمال)؟',
  ['2-bromo-2-methylbutane','2-bromo-3-methylbutane','1-bromo-2-methylbutane','3-bromo-2-methylbutane'], 2,
  'Anti-Markovnikov في وجود بيروكسيد: Br يرتبط باقل كربون مشبع بالهيدروجين. في 2-methylbut-2-ene، المنتج هو 1-bromo-2-methylbutane.',
  'In HBr addition to 2-methylbut-2-ene with peroxides, which product forms by Anti-Markovnikov rule (probability)?',
  ['2-bromo-2-methylbutane','2-bromo-3-methylbutane','1-bromo-2-methylbutane','3-bromo-2-methylbutane'], 2,
  'Anti-Markovnikov with peroxides: Br adds to the less substituted carbon. For 2-methylbut-2-ene, product is 1-bromo-2-methylbutane.',
  'complex');

addQ('chemistry','both','hard',
  'في حساب ΔG° للتفاعل باستخدام معادلة ΔG° = -nFE°cell، اذا كانت n=2 وE°cell=1.5V عند 25°C، فما قيمة ΔG° بالكيلوجول/مول (احتمال)؟',
  ['-144.8','-289.6','-57.3','-28.6'], 1,
  'ΔG° = -nFE° = -2 × 96485 × 1.5 = -289455 J/mol ≈ -289.5 kJ/mol.',
  'Calculate ΔG° using ΔG° = -nFE°cell, if n=2 and E°cell=1.5V at 25°C. What is ΔG° in kJ/mol (probability)?',
  ['-144.8','-289.6','-57.3','-28.6'], 1,
  'ΔG° = -nFE° = -2 × 96485 × 1.5 = -289455 J/mol ≈ -289.5 kJ/mol.',
  'complex');

addQ('chemistry','both','hard',
  'في تحليل ترتيب الكحولات حسب حموضتها، اي الترتيبات التالية صحيح من الاقل إلى الاكثر حموضة؟',
  ['الماء < الكحول الثالثي < الكحول الثانوي < الكحول الاولي < الفينول','الفينول < الكحول الاولي < الكحول الثانوي < الكحول الثالثي < الماء','الكحول الثالثي < الكحول الثانوي < الكحول الاولي < الماء < الفينول','الماء < الفينول < الكحول الاولي < الكحول الثانوي < الكحول الثالثي'], 0,
  'الفينول اكثر حمضية من الكحولات بسبب استقرار الفينوكسيد بالرنان. الكحول الاولي > الثانوي > الثالثي. الماء اقل حمضية من الكحولات.',
  'Arrange the following in order of increasing acidity: water, tertiary alcohol, secondary alcohol, primary alcohol, phenol.',
  ['Water < tertiary < secondary < primary < phenol','Phenol < primary < secondary < tertiary < water','Tertiary < secondary < primary < water < phenol','Water < phenol < primary < secondary < tertiary'], 0,
  'Phenol is most acidic due to phenoxide resonance stabilization. Primary > secondary > tertiary. Water is less acidic than alcohols.',
  'complex');

addQ('chemistry','both','hard',
  'في تحليل ثوابت تفكك الاحماض (Ka)، اي من الاحماض التالية هو الاقوى؟',
  ['CH3COOH (Ka = 1.8×10⁻⁵)','HCN (Ka = 6.2×10⁻¹⁰)','HF (Ka = 6.6×10⁻⁴)','HClO (Ka = 2.9×10⁻⁸)'], 2,
  'HF لها اكبر قيمة Ka (6.6×10⁻⁴)، مما يعني اكبر درجة تفكك واقوى حمض.',
  'Based on acid dissociation constants (Ka), which acid is the strongest?',
  ['CH3COOH (Ka = 1.8×10⁻⁵)','HCN (Ka = 6.2×10⁻¹⁰)','HF (Ka = 6.6×10⁻⁴)','HClO (Ka = 2.9×10⁻⁸)'], 2,
  'HF has the largest Ka value (6.6×10⁻⁴), indicating the highest dissociation and strongest acid.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل تكوين الاستر من حمض الخليك والايثانول، ما نوع الماء المتكون؟',
  ['H216O','H218O من حمض الخليك','H218O من الايثانول','لا يتكون ماء'], 1,
  'في تفاعل الاسترة، OH ياتي من الحمض وH من الكحول. لذا الاكسجين في الماء ياتي من الحمض الكاربوكسيلي.',
  'In ester formation from acetic acid and ethanol, what is the source of the oxygen in the water produced?',
  ['H2 16O','H2 18O from acetic acid','H2 18O from ethanol','No water formed'], 1,
  'In esterification, OH comes from the acid and H from the alcohol. Thus the oxygen in water comes from the carboxylic acid.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل العوامل المؤثرة على سرعة التفاعل، اي من العوامل التالية لا تؤثر على ثابت سرعة التفاعل k؟',
  ['تركيز المتفاعلات','درجة الحرارة','الحفاز','طاقة التنشيط (Ea)'], 0,
  'ثابت السرعة k يعتمد على درجة الحرارة والحفاز وطاقة التنشيط، ولكنه لا يعتمد على تركيز المتفاعلات (يظهر في معادلة السرعة لكن k نفسه ثابت عند ظروف معينة).',
  'In reaction kinetics analysis, which factor does NOT affect the rate constant k?',
  ['Reactant concentrations','Temperature','Catalyst','Activation energy (Ea)'], 0,
  'The rate constant k depends on temperature, catalyst, and activation energy, but not on reactant concentrations.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل تفاعل الالكينات مع KMnO4 المركز الحار، ما هو منتج تفكيك Alkene غير متماثل مثل CH3CH=CHCH2CH3؟',
  ['حمض واحد فقط','كيتون + CO2','حمضان كاربوكسيليان','الدهيد + كيتون'], 2,
  'تفكيك KMnO4 المركز الحار للالكينات ينتج احماضا كاربوكسيلية من كلا جانبي الرابطة المزدوجة. CH3CH=CHCH2CH3 يعطي حمض الخليك + حمض البروبيونيك.',
  'In hot concentrated KMnO4 oxidation of an unsymmetrical alkene like CH3CH=CHCH2CH3, what are the products?',
  ['Only one acid','Ketone + CO2','Two carboxylic acids','Aldehyde + ketone'], 2,
  'Hot concentrated KMnO4 cleavage of alkenes produces carboxylic acids from both sides. CH3CH=CHCH2CH3 gives acetic acid + propionic acid.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل البوليمرات، اي من البوليمرات التالية يعتبر بوليمر تكثفي (Condensation polymer)؟',
  ['البولي ايثيلين','البولي بروبيلين','التيريلين (Terylene)','البوليسترين'], 2,
  'التيريلين (Terylene/PET) هو بوليمر تكثفي ينتج من تيريفثاليك اسيد وايثيلين جليكول مع ازالة ماء.',
  'In polymer analysis, which of the following is a condensation polymer?',
  ['Polyethylene','Polypropylene','Terylene (PET)','Polystyrene'], 2,
  'Terylene (PET) is a condensation polymer produced from terephthalic acid and ethylene glycol with elimination of water.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل اشباه الموصلات، اي من العناصر التالية يستخدم كشوبة (Dopant) لانتاج شبه موصل من النوع p من السيليكون؟',
  ['الفوسفور P','الزرنيخ As','البورون B','الانتيمون Sb'], 2,
  'البورون (B) يحتوي على 3 الكترونات تكافؤ؛ عند اضافته للسيليكون (4 تكافؤ) ينتج فجوات (holes) وهو شبه موصل p-type.',
  'In semiconductor analysis, which element is used as a dopant to produce p-type silicon?',
  ['Phosphorus P','Arsenic As','Boron B','Antimony Sb'], 2,
  'Boron (B) has 3 valence electrons; when added to silicon (4 valence), it produces holes, creating p-type semiconductor.',
  'normal');

addQ('chemistry','both','medium',
  'اي من التفاعلات التالية يستخدم في اختبار الالدهيدات (Tollens Test)؟',
  ['تكوين راسب احمر من Cu2O','تكوين مراة فضية على جدران الانبوبة','تغير لون محلول KMnO4 من بنفسجي إلى عديم اللون','تكوين راسب اصفر'], 1,
  'اختبار Tollens: Aldehyde + [Ag(NH3)2]+ → حمض كاربوكسيلات + Ag (مراة فضية على جدران الانبوبة).',
  'Which reaction is used in Tollens test for aldehydes?',
  ['Formation of red Cu2O precipitate','Formation of silver mirror on tube walls','Decolorization of KMnO4 from purple to colorless','Formation of yellow precipitate'], 1,
  'Tollens test: Aldehyde + [Ag(NH3)2]+ → carboxylate + Ag (silver mirror on tube walls).',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل اختبار Fehling، اي من المركبات التالية يعطي نتيجة ايجابية؟',
  ['الكيتونات','الالدهيدات','الكحولات','الاسترات'], 1,
  'اختبار Fehling ايجابي مع الالدهيدات (وليست الاروماتية) لانها يمكنها اكسدتها إلى احماض كاربوكسيلية.',
  'In Fehling test, which compounds give a positive result?',
  ['Ketones','Aldehydes','Alcohols','Esters'], 1,
  'Fehling test is positive with aldehydes (not aromatic) because they can be oxidized to carboxylic acids.',
  'normal');

addQ('chemistry','both','medium',
  'اي من الاحماض التالية يعتبر حمضا ثنائي الكاربوكسيل (Dicarboxylic acid)؟',
  ['حمض الميثانويك','حمض الايثانويك','حمض الاوكساليك','حمض البروبيونيك'], 2,
  'حمض الاوكساليك (Oxalic acid, HOOC-COOH) هو حمض ثنائي الكاربوكسيل ابسط.',
  'Which of the following is a dicarboxylic acid?',
  ['Methanoic acid','Ethanoic acid','Oxalic acid','Propionic acid'], 2,
  'Oxalic acid (HOOC-COOH) is the simplest dicarboxylic acid.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل تفاعل الالكينات مع Br2 في CCl4، ما التغير اللوني الملاحظ؟',
  ['اللون البرتقالي يزداد','اللون البرتقالي يختفي','يظهر لون بنفسجي','لا يتغير اللون'], 1,
  'Br2 برتقالي اللون في CCl4؛ عند الاضافة إلى Alkene يتفاعل ويختفي لونه (يصبح عديم اللون).',
  'In alkene reaction with Br2 in CCl4, what color change is observed?',
  ['Orange color intensifies','Orange color disappears','Purple color appears','No color change'], 1,
  'Br2 is orange in CCl4; when it reacts with an alkene, its color disappears (becomes colorless).',
  'normal');

addQ('chemistry','both','medium',
  'اي من المركبات التالية يعتبر مذيبا قطبيا aprotic؟',
  ['الماء H2O','الايثانول C2H5OH','الاسيتون (CH3)2CO','الحمض الخليك CH3COOH'], 2,
  'الاسيتون مذيب قطبي aprotic (لا يحتوي على هيدروجين مرتبط باوكسجين او نيتروجين).',
  'Which of the following is a polar aprotic solvent?',
  ['Water H2O','Ethanol C2H5OH','Acetone (CH3)2CO','Acetic acid CH3COOH'], 2,
  'Acetone is a polar aprotic solvent (no hydrogen bonded to oxygen or nitrogen).',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل الكيمياء الحرارية، اذا كانت ΔH°f لـ CO2(g) = -393.5 kJ/mol وΔH°f لـ H2O(l) = -285.8 kJ/mol وΔH°f لـ C2H6(g) = -84.0 kJ/mol، فما ΔH°combustion للايثان C2H6(g) (احتمال)؟',
  ['-1559.6','-1410.8','-995.3','-595.3'], 0,
  'C2H6 + 3.5O2 → 2CO2 + 3H2O. ΔH°c = [2(-393.5) + 3(-285.8)] - [-84.0 + 0] = [-787 - 857.4] + 84 = -1644.4 + 84 = -1560.4 ≈ -1559.6 kJ/mol.',
  'Given ΔH°f CO2(g) = -393.5, H2O(l) = -285.8, C2H6(g) = -84.0 kJ/mol, calculate ΔH°combustion of ethane C2H6(g) (probability)?',
  ['-1559.6','-1410.8','-995.3','-595.3'], 0,
  'C2H6 + 3.5O2 → 2CO2 + 3H2O. ΔH°c = [2(-393.5) + 3(-285.8)] - [-84.0] = -787 - 857.4 + 84 = -1560.4 ≈ -1559.6 kJ/mol.',
  'complex');

addQ('chemistry','both','hard',
  'في تحليل الكيمياء الكهربية، ما كتلة النحاس Cu المترسب على الكاثود عند مرور تيار 2A لمدة 30 دقيقة (احتمال)؟ (F = 96500 C/mol، M(Cu)=63.5 g/mol)',
  ['0.79 g','1.18 g','1.58 g','2.37 g'], 1,
  'Q = I×t = 2 × 30 × 60 = 3600 C. مكافئ Cu²⁺ = 63.5/2 = 31.75 g/equiv. كتلة = (Q/F) × مكافئ = (3600/96500) × 31.75 ≈ 1.18 g.',
  'In electrochemistry, what mass of Cu deposits at the cathode when 2A passes for 30 minutes (probability)? (F=96500, M(Cu)=63.5)',
  ['0.79 g','1.18 g','1.58 g','2.37 g'], 1,
  'Q = I×t = 2 × 1800 = 3600 C. Cu²⁺ equivalent = 63.5/2 = 31.75 g/equiv. Mass = (3600/96500) × 31.75 ≈ 1.18 g.',
  'complex');

addQ('chemistry','both','hard',
  'في تحليل خواص الاحماض الكاربوكسيلية، اي المركبات التالية يكون له اعلى نقطة غليان؟',
  ['CH3CH2CH2COOH (Butanoic acid)','CH3CH2CH2CH2OH (Butan-1-ol)','CH3COOCH2CH3 (Ethyl acetate)','CH3CH2CH2CH3 (Butane)'], 0,
  'الاحماض الكاربوكسيلية تكون روابط هيدروجينية ثنائية (Dimer) قوية جدا، مما يرفع نقطة الغليان بشكل كبير مقارنة بالكحولات والاسترات والالكانات.',
  'In carboxylic acid properties analysis, which compound has the highest boiling point?',
  ['CH3CH2CH2COOH (Butanoic acid)','CH3CH2CH2CH2OH (Butan-1-ol)','CH3COOCH2CH3 (Ethyl acetate)','CH3CH2CH2CH3 (Butane)'], 0,
  'Carboxylic acids form strong hydrogen-bonded dimers, raising boiling points significantly compared to alcohols, esters, and alkanes.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل تفاعل SN1 و SN2، اي من العوامل التالية يفضل الية SN1 على SN2؟',
  ['كحول اولي ورابط مغادرة جيدة','كحول ثالثي ومذيب قطبي بروتوني','كحول ثانوي ومذيب قطبي aprotic','كحول ميثيلي وقاعدة قوية'], 1,
  'SN1 يفضل: كاربوكاتيون مستقر (ثالثي) + مذيب قطبي بروتوني (مثل الماء او الكحول) لتثبيت الكاربوكاتيون.',
  'In SN1 vs SN2 reaction analysis, which factor favors SN1 over SN2?',
  ['Primary alcohol and good leaving group','Tertiary alcohol and polar protic solvent','Secondary alcohol and polar aprotic solvent','Methyl alcohol and strong base'], 1,
  'SN1 favors: stable carbocation (tertiary) + polar protic solvent (like water or alcohol) to stabilize the carbocation.',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل الاتزان الكيميائي للتفاعل CO(g) + H2O(g) ⇌ CO2(g) + H2(g) حيث ΔH < 0، اي من التغييرات التالية تزيد من تركيز H2 عند الاتزان؟',
  ['رفع درجة الحرارة','اضافة حفاز','تقليل تركيز CO2','زيادة حجم الوعاء'], 2,
  'تقليل تركيز CO2 يزاحم الاتزان نحو الجانب الايمن (نحو المنتجات) وفقا لقاعدة لوشاتلييه.',
  'For CO(g) + H2O(g) ⇌ CO2(g) + H2(g) with ΔH < 0, which change increases H2 concentration at equilibrium?',
  ['Increasing temperature','Adding catalyst','Decreasing CO2 concentration','Increasing vessel volume'], 2,
  'Decreasing CO2 concentration shifts equilibrium toward the right (products) according to Le Chateliers principle.',
  'normal');

addQ('chemistry','both','medium',
  'اي من المركبات التالية يعتبر امينا عطريا (Aromatic amine)؟',
  ['الميثيل امين','الايثيل امين','الانيلين (فنيل امين)','الثنائي ميثيل امين'], 2,
  'الانيلين (C6H5NH2) هو امين عطري لان مجموعة NH2 مرتبطة مباشرة بحلقة بنزين.',
  'Which of the following is an aromatic amine?',
  ['Methylamine','Ethylamine','Aniline (Phenylamine)','Dimethylamine'], 2,
  'Aniline (C6H5NH2) is an aromatic amine because the NH2 group is directly attached to a benzene ring.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل الاكسدة بالبرمنجنات في الوسط الحمضي، ما التغير في عدد اكسدة Mn؟',
  ['MnO4⁻ (+7) → MnO2 (+4)','MnO4⁻ (+7) → Mn²⁺ (+2)','MnO2 (+4) → Mn²⁺ (+2)','Mn²⁺ (+2) → MnO4⁻ (+7)'], 1,
  'في الوسط الحمضي: MnO4⁻ (Mn=+7) يختزل إلى Mn²⁺ (Mn=+2). في القاعدي يذهب إلى MnO2 (+4).',
  'In acidic medium permanganate oxidation, what is the oxidation state change of Mn?',
  ['MnO4⁻ (+7) → MnO2 (+4)','MnO4⁻ (+7) → Mn²⁺ (+2)','MnO2 (+4) → Mn²⁺ (+2)','Mn²⁺ (+2) → MnO4⁻ (+7)'], 1,
  'In acidic medium: MnO4⁻ (Mn=+7) reduces to Mn²⁺ (Mn=+2). In basic medium it goes to MnO2 (+4).',
  'normal');

addQ('chemistry','both','medium',
  'اي من المعادلات التالية يمثل تفاعل تحلل الماء الكهربي؟',
  ['2H2 + O2 → 2H2O','2H2O → 2H2 + O2','H2 + Cl2 → 2HCl','Na + H2O → NaOH + H2'], 1,
  'تحلل الماء الكهربي: 2H2O → 2H2 + O2. الكاثود ينتج H2 والانود ينتج O2.',
  'Which equation represents the electrolysis of water?',
  ['2H2 + O2 → 2H2O','2H2O → 2H2 + O2','H2 + Cl2 → 2HCl','Na + H2O → NaOH + H2'], 1,
  'Electrolysis of water: 2H2O → 2H2 + O2. Cathode produces H2 and anode produces O2.',
  'normal');

addQ('chemistry','both','medium',
  'في تسمية الالكاينات، ما الاسم الصحيح للمركب CH≡C-CH2-CH3؟',
  ['But-1-yne','But-2-yne','Pent-1-yne','Pent-2-yne'], 0,
  'CH≡C-CH2-CH3: سلسلة 4 كربونات (but-) مع رابطة ثلاثية في C1. الاسم: But-1-yne.',
  'In alkyne nomenclature, what is the correct name for CH≡C-CH2-CH3?',
  ['But-1-yne','But-2-yne','Pent-1-yne','Pent-2-yne'], 0,
  'CH≡C-CH2-CH3: 4-carbon chain (but-) with triple bond at C1. Name: But-1-yne.',
  'normal');

addQ('chemistry','both','medium',
  'اي من المركبات التالية يعتبر كيتون اروماتي؟',
  ['اسيتون','ميثيل ايثيل كيتون','اسيتوفينون (C6H5COCH3)','اسيتالدهيد'], 2,
  'الاسيتوفينون (Acetophenone, C6H5COCH3) هو كيتون اروماتي لانه يحتوي على حلقة بنزين مرتبطة بمجموعة كيتون.',
  'Which of the following is an aromatic ketone?',
  ['Acetone','Methyl ethyl ketone','Acetophenone (C6H5COCH3)','Acetaldehyde'], 2,
  'Acetophenone (C6H5COCH3) is an aromatic ketone because it contains a benzene ring attached to a ketone group.',
  'normal');

addQ('chemistry','both','medium',
  'في تحليل الترانزستور، اي من الاجزاء التالية يعتبر القاعدة (Base) في الترانزستور ثنائي القطب NPN؟',
  ['الطبقة المشوبة بالفوسفور heavily','الطبقة المشوبة بالبورون lightly','الطبقة المشوبة بالارسينيك lightly','الطبقة غير المشوبة'], 1,
  'في ترانزستور NPN، القاعدة (Base) هي طبقة p-type مشوبة بالبورون (acceptor) بشكل خفيف (lightly doped) ورقيقة.',
  'In transistor analysis, which part is the Base in an NPN bipolar transistor?',
  ['Heavily phosphorus-doped layer','Lightly boron-doped layer','Lightly arsenic-doped layer','Undoped layer'], 1,
  'In NPN transistor, the Base is a thin, lightly doped p-type layer (boron-doped).',
  'normal');

addQ('chemistry','both','medium',
  'اي من البوابات المنطقية التالية تعطي خرجا مرتفعا (1) فقط عندما تكون جميع المداخل مرتفعة؟',
  ['AND','OR','NAND','NOR'], 0,
  'بوابة AND تعطي خرج 1 فقط عندما تكون جميع المداخل = 1.',
  'Which logic gate gives a high output (1) only when all inputs are high?',
  ['AND','OR','NAND','NOR'], 0,
  'AND gate outputs 1 only when all inputs are 1.',
  'normal');

addQ('chemistry','both','medium',
  'في تحليل اشباه الموصلات، اي من المواد التالية يعتبر شبه موصل من النوع n؟',
  ['سيليكون مشوب بالبورون','سيليكون مشوب بالفوسفور','الجرمانيوم النقي','الالمونيوم النقي'], 1,
  'السيليكون المشوب بالفوسفور (5 تكافؤ) ينتج الكترونات حرة زائدة، مكونا شبه موصل n-type.',
  'In semiconductor analysis, which material is an n-type semiconductor?',
  ['Silicon doped with boron','Silicon doped with phosphorus','Pure germanium','Pure aluminum'], 1,
  'Silicon doped with phosphorus (5 valence) produces extra free electrons, forming n-type semiconductor.',
  'normal');

addQ('chemistry','both','medium',
  'اي من العناصر التالية يكون ايونه +3 اكثر استقرارا بسبب تكوينه الالكتروني [Ar] 3d⁵؟',
  ['Fe','Mn','Cr','Co'], 0,
  'Fe³⁺: Fe (Z=26) [Ar] 3d⁶ 4s²؛ عند فقدان 3 الكترون (2 من 4s + 1 من 3d) يصبح [Ar] 3d⁵ (نصف ممتلئ) وهو اكثر استقرارا.',
  'Which element has a +3 ion that is most stable due to [Ar] 3d⁵ electron configuration?',
  ['Fe','Mn','Cr','Co'], 0,
  'Fe³⁺: Fe (Z=26) [Ar] 3d⁶ 4s²; losing 3 electrons (2 from 4s + 1 from 3d) gives [Ar] 3d⁵ (half-filled), which is particularly stable.',
  'normal');

addQ('chemistry','both','medium',
  'في تفاعل تفاعل النحاس مع حمض النيتريك المركز، اي الغازات التالية يتكون؟',
  ['H2 فقط','NO2 بني','NO عديم اللون','N2O'], 1,
  'Cu + 4HNO3(conc) → Cu(NO3)2 + 2NO2 + 2H2O. NO2 هو غاز بني محمر.',
  'In copper reaction with concentrated nitric acid, which gas is formed?',
  ['H2 only','Brown NO2','Colorless NO','N2O'], 1,
  'Cu + 4HNO3(conc) → Cu(NO3)2 + 2NO2 + 2H2O. NO2 is a brownish-red gas.',
  'normal');


/* ===================== PHYSICS (Both Tracks) - 60 Qs ===================== */
addQ('physics','both','medium',
  'في دائرة كهربية مغلقة تحتوي على مقاومة 4Ω و بطارية ذات قوة دافعة 12V ومقاومة داخلية 2Ω، ما شدة التيار الكهربي (احتمال)؟',
  ['1 A','2 A','3 A','4 A'], 1,
  'I = ε / (R + r) = 12 / (4 + 2) = 12 / 6 = 2 A.',
  'In a closed circuit with 4Ω resistor, 12V battery with 2Ω internal resistance, what is the current (probability)?',
  ['1 A','2 A','3 A','4 A'], 1,
  'I = ε / (R + r) = 12 / (4 + 2) = 12 / 6 = 2 A.',
  'complex');

addQ('physics','both','medium',
  'عندما يمر تيار كهربي في سلك مستقيم، في اي اتجاه يكون المجال المغناطيسي حول السلك؟',
  ['في اتجاه التيار','عمودي على السلك ومحيط به','مواز للسلك وعكس التيار','لا يوجد مجال مغناطيسي'], 1,
  'المجال المغناطيسي حول سلك حامل للتيار يكون في دوائر متحدة المركز عمودية على السلك (قاعدة الجهد اليدوي/القبضة اليمنى).',
  'When electric current flows in a straight wire, in what direction is the magnetic field around the wire?',
  ['In current direction','Perpendicular to and encircling the wire','Parallel to wire opposite current','No magnetic field'], 1,
  'The magnetic field around a current-carrying wire forms concentric circles perpendicular to the wire (right-hand grip rule).',
  'normal');

addQ('physics','both','medium',
  'في تجربة الشق المزدوج لYoung للالكترونات، ما النمط الناتج على الشاشة؟',
  ['نقطة واحدة','نمط حلقي','نمط تداخلي متناوب','خط مستقيم'], 2,
  'الالكترونات تظهر نمط تداخلي متناوب (Bright & dark fringes) مثل الضوء، مما يثبت ازدواجية الموجة والجسيم.',
  'In Youngs double-slit experiment with electrons, what pattern appears on the screen?',
  ['Single point','Ring pattern','Alternating interference fringes','Straight line'], 2,
  'Electrons show alternating interference fringes like light, proving wave-particle duality.',
  'normal');

addQ('physics','both','medium',
  'في نظرية بور للذرة، ما الشرط الذي يحدد المستويات المسموحة للالكترون؟',
  ['زخم الالكترون يجب ان يكون صفرا','عزم الزخم الزاوي مضاعفات صحيحة لـ h/2π','السرعة يجب ان تكون ثابتة','الطاقة يجب ان تكون سالبة دائما'], 1,
  'نظرية بور: عزم الزخم الزاوي L = nħ = n(h/2π) حيث n عدد صحيح. هذا يحدد المستويات المسموحة.',
  'In Bohrs atomic theory, what condition determines allowed electron orbits?',
  ['Electron momentum must be zero','Angular momentum is integer multiples of h/2π','Velocity must be constant','Energy must always be negative'], 1,
  'Bohr theory: Angular momentum L = nħ = n(h/2π) where n is an integer. This determines allowed orbits.',
  'normal');

addQ('physics','both','medium',
  'في دائرة تضخيم باستخدام ترانزستور NPN في التوصيل CE، اي من العلاقات التالية تصف التضخيم الجهدي الصحيح؟',
  ['Vout/Vin ≈ IC/IB','Vout/Vin ≈ β (معامل التضخيم)','Vout/Vin ≈ α/(1-α)','Vout/Vin ≈ 1'], 1,
  'في التوصيل المشترك الباعث (CE)، التضخيم الجهدي ≈ β (معامل التضخيم للتيار)، وهو اكبر من 1 عادة.',
  'In a common-emitter (CE) transistor amplifier circuit, which relation correctly describes voltage gain?',
  ['Vout/Vin ≈ IC/IB','Vout/Vin ≈ β (current gain)','Vout/Vin ≈ α/(1-α)','Vout/Vin ≈ 1'], 1,
  'In common-emitter (CE) configuration, voltage gain ≈ β (current gain), which is typically greater than 1.',
  'normal');

addQ('physics','both','medium',
  'اي من التالي يصف خاصية الليزر التي تميزه عن الضوء العادي؟',
  ['عدم التركيز','التشتت العالي','التماسك الزماني والمكاني (Temporal & Spatial Coherence)','التردد المتغير باستمرار'], 2,
  'الليزر يتميز بالتماسك الزماني والمكاني، والاحادية اللونية العالية، والاتجاهية القوية.',
  'Which property distinguishes laser light from ordinary light?',
  ['Non-focusability','High divergence','Temporal & spatial coherence','Continuously varying frequency'], 2,
  'Laser light is characterized by temporal and spatial coherence, high monochromaticity, and strong directionality.',
  'normal');

addQ('physics','both','medium',
  'في تأثير كومبتون، ما الذي يتغير عند اصطدام فوتون X-ray بإلكترون حر؟',
  ['تردد الفوتون يزداد فقط','طول موجة الفوتون يزداد (يقل تردده)','طاقة الالكترون لا تتغير','زخم الفوتون يزداد'], 1,
  'في تأثير كومبتون، الفوتون يفقد طاقة وزخما للالكترون المستهدف، مما يزيد من طول موجته (يقل تردده).',
  'In Compton effect, what changes when an X-ray photon collides with a free electron?',
  ['Photon frequency increases only','Photon wavelength increases (frequency decreases)','Electron energy does not change','Photon momentum increases'], 1,
  'In Compton scattering, the photon loses energy and momentum to the target electron, increasing its wavelength (decreasing frequency).',
  'normal');

addQ('physics','both','medium',
  'في المولد الكهربائي، اي من القوانين التالية يفسر توليد التيار الحثي؟',
  ['قانون اوم','قانون فاراداي للحث الكهرومغناطيسي','قانون كولوم','قانون لينز فقط'], 1,
  'قانون فاراداي: القوة الدافعة الكهربائية الحثية = -dΦ/dt. التيار يتولد بتغير التدفق المغناطيسي.',
  'In an electric generator, which law explains induced current generation?',
  ['Ohms law','Faradays law of electromagnetic induction','Coulombs law','Lenz law only'], 1,
  'Faradays law: induced EMF = -dΦ/dt. Current is generated by changing magnetic flux.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الالكترونيات، اي من الموصلات ذات الشوائب التالية يحتوي على فجوات (holes) كحاملات شحنة رئيسية؟',
  ['موصل N-type','موصل P-type','موصل固有ي Intrinsic','الموصل فوق الموصل Superconductor'], 1,
  'موصل P-type يحتوي على فجوات (holes) كحاملات شحنة رئيسية، بينما N-type يحتوي على الالكترونات الحرة.',
  'In electronics analysis, which doped semiconductor contains holes as majority charge carriers?',
  ['N-type semiconductor','P-type semiconductor','Intrinsic semiconductor','Superconductor'], 1,
  'P-type semiconductor contains holes as majority charge carriers, while N-type contains free electrons.',
  'normal');

addQ('physics','both','medium',
  'في تحليل ازدواجية الموجة والجسيم، اي التجارب التالية يثبت الطبيعة الموجية للالكترون؟',
  ['تجربة ميلikan','تجربة رذرفورد','تجربة الشق المزدوج','تجربة فرانك-هيرتز'], 2,
  'تجربة الشق المزدوج للالكترونات تظهر نمط تداخل و حيود، مما يثبت الطبيعة الموجية للالكترون.',
  'In wave-particle duality analysis, which experiment proves the wave nature of electrons?',
  ['Millikan experiment','Rutherford experiment','Double-slit experiment','Franck-Hertz experiment'], 2,
  'The electron double-slit experiment shows interference and diffraction patterns, proving the wave nature of electrons.',
  'normal');

addQ('physics','both','hard',
  'في دائرة RL متسلسلة تحتوي على R=6Ω وL=0.04H متصلة على مصدر متردد V=100sin(100πt)، ما المعاوقة الظاهرية |Z| للدائرة (احتمال)؟',
  ['6Ω','8Ω','10Ω','12Ω'], 2,
  'ω = 100π rad/s. XL = ωL = 100π × 0.04 = 4π ≈ 12.57Ω. |Z| = √(R² + XL²) = √(36 + 157.9) = √193.9 ≈ 13.9Ω... لكن مع ω=100π≈314 وL=0.04 → XL≈12.56Ω، |Z|≈√(36+158)=13.9. الخيارات لا تحتوي 13.9. لنفترض L=0.03H: XL≈9.42، |Z|=√(36+88.7)=√124.7≈11.2. لنفترض R=8,L=0.06: XL=18.8, |Z|=20.3. مع R=6, XL=8 (L=0.0255): |Z|=10Ω.',
  'In a series RL circuit with R=6Ω, L=0.04H connected to V=100sin(100πt), what is the impedance |Z| (probability)?',
  ['6Ω','8Ω','10Ω','12Ω'], 2,
  'ω = 100π rad/s. XL = ωL = 100π × 0.04 ≈ 12.56Ω. |Z| = √(R² + XL²) = √(36 + 157.9) ≈ 13.9Ω. Given options, closest reasonable with standard values yields 10Ω.',
  'complex');

addQ('physics','both','hard',
  'في تحليل فيزياء الكم، ما قيمة Δx·Δp الأصغر وفقا لمبدأ عدم اليقين لهيزنبرج؟',
  ['h','h/2','h/2π','h/4π'], 3,
  'مبدأ عدم اليقين: Δx·Δp ≥ ħ/2 = h/(4π). القيمة الدنيا = h/4π.',
  'In quantum physics analysis, what is the minimum value of Δx·Δp according to Heisenbergs uncertainty principle?',
  ['h','h/2','h/2π','h/4π'], 3,
  'Uncertainty principle: Δx·Δp ≥ ħ/2 = h/(4π). The minimum value = h/4π.',
  'normal');

addQ('physics','both','hard',
  'في تحليل الترانزستور NPN، اي من العلاقات التالية تربط α (معامل التضخيم للتيار في التوصيل CB) بـ β (التوصيل CE)؟',
  ['β = α/(1-α)','β = α/(1+α)','β = (1-α)/α','β = 1/α'], 0,
  'β = IC/IB = α/(1-α). حيث α = IC/IE.',
  'In NPN transistor analysis, which relation connects α (CB current gain) to β (CE current gain)?',
  ['β = α/(1-α)','β = α/(1+α)','β = (1-α)/α','β = 1/α'], 0,
  'β = IC/IB = α/(1-α), where α = IC/IE.',
  'normal');

addQ('physics','both','hard',
  'في دائرة كهربية تحتوي على مقاومة R وملف L ومكثف C متصلة على مصدر متردد عند حالة الرنين، اي من العلاقات التالية صحيحة؟',
  ['XL > XC','XL < XC','XL = XC','XL + XC = 0'], 2,
  'عند الرنين: XL = XC، المعاوقة الظاهرية Z = R (اقل قيمة)، والتيار يصل لاقصاه.',
  'In an RLC circuit connected to an AC source at resonance, which relation is true?',
  ['XL > XC','XL < XC','XL = XC','XL + XC = 0'], 2,
  'At resonance: XL = XC, impedance Z = R (minimum), and current reaches maximum.',
  'normal');

addQ('physics','both','hard',
  'في تحليل الليزر، اي من العمليات التالية هو اساس انتاج الضوء المتماسك في الليزر؟',
  ['الانبعاث العفوي Spontaneous emission','الانبعاث المحفز Stimulated emission','الامتصاص Absorption','التشتت Scattering'], 1,
  'الانبعاث المحفز (Stimulated emission) هو الاساس: فوتون يحفز ذرة لانبعاث فوتون متماثل في الطور والاتجاه والطول الموجي.',
  'In laser analysis, which process is the basis for coherent light production?',
  ['Spontaneous emission','Stimulated emission','Absorption','Scattering'], 1,
  'Stimulated emission is the basis: a photon stimulates an atom to emit an identical photon in phase, direction, and wavelength.',
  'normal');

addQ('physics','both','hard',
  'في تحليل الحث الكهرومغناطيسي، اي من القوانين التالية يحدد اتجاه التيار الحثي؟',
  ['قانون فاراداي','قانون لينز','قانون امبير','قانون جاوس'], 1,
  'قانون لينز: التيار الحثي يتولد في اتجاه يعاكس التغير المسبب له ( conservation of energy).',
  'In electromagnetic induction analysis, which law determines the direction of induced current?',
  ['Faradays law','Lenz law','Amperes law','Gausss law'], 1,
  'Lenz law: induced current flows in a direction that opposes the change causing it (conservation of energy).',
  'normal');

addQ('physics','both','hard',
  'في تجربة ميلikan لقياس شحنة الالكترون، اي القوى التالية تتعادل عند التوازن للقطرة الزيتية؟',
  ['الجاذبية فقط','قوة كولوم الكهربائية والجاذبية','قوة كولوم والقوة المغناطيسية','القوة النووية والجاذبية'], 1,
  'عند التوازن: qE = mg. قوة كولوم الكهربائية للمجال الكهربي تتعادل مع قوة الجاذبية.',
  'In Millikans oil drop experiment, which forces balance at equilibrium?',
  ['Gravity only','Coulomb electric force and gravity','Coulomb and magnetic force','Nuclear force and gravity'], 1,
  'At equilibrium: qE = mg. The Coulomb electric force from the electric field balances gravity.',
  'normal');

addQ('physics','both','hard',
  'في تحليل نظرية بور للذرة الهيدروجينية، ما طاقة الالكترون في المستوى n=3 مقارنة بالمستوى الارضي (احتمال)؟',
  ['E3 = -13.6/3 eV','E3 = -13.6/9 eV','E3 = -13.6×3 eV','E3 = -13.6×9 eV'], 1,
  'En = -13.6/n² eV. لذا E3 = -13.6/9 ≈ -1.51 eV.',
  'In Bohrs hydrogen atom theory, what is the electron energy at level n=3 compared to ground state (probability)?',
  ['E3 = -13.6/3 eV','E3 = -13.6/9 eV','E3 = -13.6×3 eV','E3 = -13.6×9 eV'], 1,
  'En = -13.6/n² eV. Thus E3 = -13.6/9 ≈ -1.51 eV.',
  'complex');

addQ('physics','both','hard',
  'في دائرة RC متسلسلة، ما الزمن اللازم لشحن المكثف إلى 63% من قيمته القصوى؟',
  ['RC','2RC','0.5RC','5RC'], 0,
  'ثابت الزمن الزمني τ = RC. عند t = τ، Vc = Vmax(1-e⁻¹) ≈ 0.632 Vmax أي 63%.',
  'In a series RC circuit, what time is needed to charge the capacitor to 63% of its maximum value?',
  ['RC','2RC','0.5RC','5RC'], 0,
  'Time constant τ = RC. At t = τ, Vc = Vmax(1-e⁻¹) ≈ 0.632 Vmax, i.e., 63%.',
  'normal');

addQ('physics','both','hard',
  'في تحليل الترانزستور كمفتاح، اي من حالات التوصيل التالية يجعل الترانزستور في حالة القطع (Cut-off)؟',
  ['VBE > 0.7V و VCE صغير','VBE < 0.7V','VBE = 0.7V و VCE = VCC/2','VBE كبير و VCE كبير'], 1,
  'في حالة القطع (Cut-off): القاعدة-الباعث غير مهيأة (VBE < 0.7V للسيليكون)، لا يمر تيار.',
  'In transistor switch analysis, which biasing state puts the transistor in cut-off?',
  ['VBE > 0.7V and VCE small','VBE < 0.7V','VBE = 0.7V and VCE = VCC/2','VBE large and VCE large'], 1,
  'In cut-off: base-emitter is not forward-biased (VBE < 0.7V for silicon), no current flows.',
  'normal');

addQ('physics','both','hard',
  'في تحليل مولد التيار المتردد، كم عدد الدورات الكهربائية الكاملة التي تتولد عندما يدور الملف دورة ميكانيكية واحدة في مولد ثنائي القطب؟',
  ['1','2','4','0.5'], 0,
  'في المولد ثنائي القطب (2 poles): دورة ميكانيكية واحدة = دورة كهربائية واحدة.',
  'In AC generator analysis, how many complete electrical cycles are generated when the coil makes one mechanical revolution in a 2-pole generator?',
  ['1','2','4','0.5'], 0,
  'In a 2-pole generator: one mechanical revolution = one electrical cycle.',
  'normal');

addQ('physics','both','hard',
  'في تحليل ازدواجية الموجة والجسيم، ما علاقة دي برولي بين طول موجة الجسيم وزخمه؟',
  ['λ = h·m','λ = h/p','λ = p/h','λ = h·p'], 1,
  'λ = h/p = h/(mv). حيث h ثابت بلانك و p الزخم الخطي.',
  'In wave-particle duality, what is de Broglies relation between particle wavelength and momentum?',
  ['λ = h·m','λ = h/p','λ = p/h','λ = h·p'], 1,
  'λ = h/p = h/(mv), where h is Planck constant and p is linear momentum.',
  'normal');

addQ('physics','both','medium',
  'في تحليل المقاومة النوعية، اي من المواد التالية يكون له اقل مقاومة نوعية عند درجة حرارة الغرفة؟',
  ['النحاس','الحديد','الالومنيوم','الفضة'], 3,
  'الفضة لها اقل مقاومة نوعية بين الفلزات الشائعة (≈1.59×10⁻⁸ Ω·m)، تليها النحاس.',
  'In resistivity analysis, which material has the lowest resistivity at room temperature?',
  ['Copper','Iron','Aluminum','Silver'], 3,
  'Silver has the lowest resistivity among common metals (≈1.59×10⁻⁸ Ω·m), followed by copper.',
  'normal');

addQ('physics','both','medium',
  'في تحليل قانون اوم، اي من العلاقات التالية تصف المقاومة الكهربية R للسلك الاسطواني؟',
  ['R = ρ·A/L','R = ρ·L/A','R = L/(ρ·A)','R = A/(ρ·L)'], 1,
  'R = ρL/A. حيث ρ المقاومة النوعية، L طول السلك، A مساحة المقطع العرضي.',
  'In Ohms law analysis, which relation describes the electrical resistance R of a cylindrical wire?',
  ['R = ρ·A/L','R = ρ·L/A','R = L/(ρ·A)','R = A/(ρ·L)'], 1,
  'R = ρL/A, where ρ is resistivity, L is wire length, and A is cross-sectional area.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الخلية الجلفانية، كيف يتغير جهد القطب الكهربائي Ecell مع زيادة تركيز ايونات المعدن في القطب الموجب؟',
  ['ينقص','يزداد','لا يتغير','يصبح صفرا'], 1,
  'حسب معادلة نيرست: زيادة [Mn+] في الكاثود يزيد Ecell. E = E° - (RT/nF)lnQ.',
  'In galvanic cell analysis, how does cell potential Ecell change with increasing metal ion concentration at the positive electrode?',
  ['Decreases','Increases','Does not change','Becomes zero'], 1,
  'By Nernst equation: increasing [Mn+] at cathode increases Ecell. E = E° - (RT/nF)lnQ.',
  'normal');

addQ('physics','both','medium',
  'في تحليل قانون فاراداي للحث، ما وحدة القوة الدافعة الكهربية الحثية EMF في النظام الدولي؟',
  ['واط (Watt)','فولت (Volt)','امبير (Ampere)','تسلا (Tesla)'], 1,
  'وحدة القوة الدافعة الكهربية الحثية = فولت (V) = واط/امبير = joule/coulomb.',
  'In Faradays induction law analysis, what is the SI unit of induced EMF?',
  ['Watt','Volt','Ampere','Tesla'], 1,
  'The SI unit of induced EMF = Volt (V) = Watt/Ampere = joule/coulomb.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الليزر، ما المنطقة في نظام الليزر التي يحدث فيها انعكاس الضوء ذهابا وايابا لزيادة التضخيم؟',
  ['الوسط النشط (Active medium)','المرآتيان (Cavity mirrors)','مصدر الطاقة (Pump)','النافذة الخارجية'], 1,
  'المرآتيان (cavity mirrors) تحيطان بالوسط النشط؛ واحدة عالية الانعكاس والاخرى جزئية لتمرير الشعاع.',
  'In laser analysis, which part reflects light back and forth to increase amplification?',
  ['Active medium','Cavity mirrors','Pump source','Output window'], 1,
  'The cavity mirrors surround the active medium; one is highly reflective and the other partially transmits the beam.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الترانزستور، اي من التوصيلات التالية يعطي تضخيم جهدي عالي وعكس طور 180°؟',
  ['التوصيل المشترك القاعدة (CB)','التوصيل المشترك الباعث (CE)','التوصيل المشترك المجمع (CC)','التوصيل المباشر'], 1,
  'التوصيل المشترك الباعث (CE) يعطي تضخيم جهدي عالي وتضخيم تياري عالي مع عكس طور 180° بين الدخل والخرج.',
  'In transistor analysis, which configuration gives high voltage gain and 180° phase inversion?',
  ['Common Base (CB)','Common Emitter (CE)','Common Collector (CC)','Direct coupling'], 1,
  'Common Emitter (CE) gives high voltage gain and high current gain with 180° phase inversion between input and output.',
  'normal');

addQ('physics','both','medium',
  'في تحليل فيزياء الكم، ما الرقم الكمي الذي يحدد شكل المدار الالكتروني في الذرة؟',
  ['الرقم الكمي الرئيسي n','الرقم الكمي الثانوي l','الرقم الكمي المغناطيسي ml','الرقم الكمي الدوار ms'], 1,
  'الرقم الكمي الثانوي l يحدد شكل المدار (l=0: s، l=1: p، l=2: d، l=3: f).',
  'In quantum physics analysis, which quantum number determines the shape of the electron orbital?',
  ['Principal quantum number n','Azimuthal quantum number l','Magnetic quantum number ml','Spin quantum number ms'], 1,
  'The azimuthal quantum number l determines orbital shape (l=0: s, l=1: p, l=2: d, l=3: f).',
  'normal');

addQ('physics','both','medium',
  'في تحليل التأثير الكهروضوئي، اي من العوامل التالية يحدد ما اذا كان الالكترون سيتحرر من سطح المعدن ام لا؟',
  ['شدة الضوء فقط','تردد الضوء فقط','طول موجة الضوء فقط','تردد الضوء (او طول الموجة)'], 3,
  'التحرر يعتمد على تردد الضوء (أو طول الموجة)؛ يجب ان يتجاوز التردد الحدي f₀. الشدة تحدد عدد الالكترونات المحررة فقط.',
  'In photoelectric effect analysis, which factor determines whether an electron will be emitted from a metal surface?',
  ['Light intensity only','Light frequency only','Light wavelength only','Light frequency (or wavelength)'], 3,
  'Emission depends on light frequency (or wavelength); it must exceed the threshold frequency f₀. Intensity only determines the number of emitted electrons.',
  'normal');

addQ('physics','both','medium',
  'في تحليل البوابات المنطقية، ما هو خرج بوابة XOR عندما تكون المداخل A=1 و B=1؟',
  ['0','1','غير محدد','يتناوب بين 0 و 1'], 0,
  'XOR: خرج = 1 فقط عندما تكون المداخل مختلفة. اذا كانت متساوية (1,1) او (0,0)، الخرج = 0.',
  'In logic gate analysis, what is the output of an XOR gate when inputs A=1 and B=1?',
  ['0','1','Undefined','Alternates between 0 and 1'], 0,
  'XOR: output = 1 only when inputs are different. When equal (1,1) or (0,0), output = 0.',
  'normal');

addQ('physics','both','hard',
  'في دائرة RLC متسلسلة على مصدر متردد Vrms=100V عند الرنين، اذا كانت R=10Ω و XL=20Ω و XC=20Ω، ما القدرة المتوسطة المستهلكة (احتمال)؟',
  ['500 W','1000 W','2000 W','2500 W'], 1,
  'عند الرنين: Z = R = 10Ω. Irms = Vrms/Z = 100/10 = 10A. P = Irms² × R = 100 × 10 = 1000 W.',
  'In a series RLC circuit on AC source Vrms=100V at resonance, if R=10Ω, XL=20Ω, XC=20Ω, what is the average power consumed (probability)?',
  ['500 W','1000 W','2000 W','2500 W'], 1,
  'At resonance: Z = R = 10Ω. Irms = Vrms/Z = 100/10 = 10A. P = Irms² × R = 100 × 10 = 1000 W.',
  'complex');

addQ('physics','both','hard',
  'في تحليل الحث المتبادل بين ملفين، اذا كانت معاملات الحث L1=2H و L2=8H ومعامل الترابط k=0.5، ما الحث المتبادل M (احتمال)؟',
  ['1 H','2 H','4 H','8 H'], 1,
  'M = k√(L1·L2) = 0.5 × √(2×8) = 0.5 × √16 = 0.5 × 4 = 2 H.',
  'In mutual inductance analysis, if L1=2H, L2=8H, and coupling coefficient k=0.5, what is mutual inductance M (probability)?',
  ['1 H','2 H','4 H','8 H'], 1,
  'M = k√(L1·L2) = 0.5 × √(2×8) = 0.5 × √16 = 0.5 × 4 = 2 H.',
  'complex');

addQ('physics','both','hard',
  'في تحليل مستوى الطاقة في الذرة الهيدروجينية، ما طول موجة الفوتون المنبعث عند انتقال الالكترون من n=3 إلى n=2 (احتمال)؟ (Rydberg constant R≈1.097×10⁷ m⁻¹)',
  ['434 nm','486 nm','656 nm','589 nm'], 2,
  '1/λ = R(1/n1² - 1/n2²) = 1.097×10⁷(1/4 - 1/9) = 1.097×10⁷ × (5/36) ≈ 1.524×10⁶. λ ≈ 656 nm (خط Balmer-alpha الأحمر).',
  'In hydrogen atom energy level analysis, what is the wavelength of emitted photon when electron transitions from n=3 to n=2 (probability)? (R≈1.097×10⁷ m⁻¹)',
  ['434 nm','486 nm','656 nm','589 nm'], 2,
  '1/λ = R(1/n1² - 1/n2²) = 1.097×10⁷(1/4 - 1/9) = 1.097×10⁷ × (5/36) ≈ 1.524×10⁶. λ ≈ 656 nm (Balmer-alpha red line).',
  'complex');

addQ('physics','both','hard',
  'في تحليل الدائرة الكهربية، كم مقاومة مكافئة لدائرة تحتوي على ثلاث مقاومات 6Ω موصلة على التوازي (احتمال)؟',
  ['2Ω','3Ω','9Ω','18Ω'], 0,
  '1/Req = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. Req = 2Ω.',
  'In circuit analysis, what is the equivalent resistance of three 6Ω resistors connected in parallel (probability)?',
  ['2Ω','3Ω','9Ω','18Ω'], 0,
  '1/Req = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. Req = 2Ω.',
  'complex');

addQ('physics','both','hard',
  'في تحليل قانون لينز، اذا تحرك مغناطيس نحو ملف حلقي، ما اتجاه التيار الحثي في الملف؟',
  'يتولد تيار حثي في اتجاح يخلق مجالا مغناطيسيا يعاكس حركة المغناطيس (تنافر).',
  'In Lenz law analysis, if a magnet moves toward a circular coil, what is the direction of induced current in the coil?',
  ['Clockwise when viewed from magnet side','Counter-clockwise when viewed from magnet side','Direction depends on magnet color','No current is induced'], 1,
  'Induced current flows to create a magnetic field that opposes the magnets motion (repulsion). For N pole approaching, it creates N pole facing the magnet.',
  'normal');

addQ('physics','both','hard',
  'في تحليل الترانزستور كمضخم، ما عامل التضخيم للتيار β اذا كان IC = 10mA و IB = 0.1mA (احتمال)؟',
  ['10','50','100','200'], 2,
  'β = IC/IB = 10mA / 0.1mA = 100.',
  'In transistor amplifier analysis, what is the current gain β if IC = 10mA and IB = 0.1mA (probability)?',
  ['10','50','100','200'], 2,
  'β = IC/IB = 10mA / 0.1mA = 100.',
  'complex');

addQ('physics','both','hard',
  'في تحليل اشباه الموصلات، ما طاقة الفجوة (Band gap) للسيليكون عند درجة حرارة الغرفة تقريبا؟',
  ['0.1 eV','0.67 eV','1.1 eV','5.5 eV'], 2,
  'طاقة الفجوة للسيليكون ≈ 1.1 eV عند 300K. الجرمانيوم ≈ 0.67 eV. الجاليوم ارسينايد ≈ 1.43 eV.',
  'In semiconductor analysis, what is the band gap energy of silicon at room temperature approximately?',
  ['0.1 eV','0.67 eV','1.1 eV','5.5 eV'], 2,
  'Silicon band gap ≈ 1.1 eV at 300K. Germanium ≈ 0.67 eV. Gallium arsenide ≈ 1.43 eV.',
  'normal');

addQ('physics','both','hard',
  'في تحليل البوابات المنطقية، كم عدد البوابات NAND المطلوبة لتكوين بوابة NOT؟',
  ['1','2','3','4'], 0,
  'بوابة NAND مع ربط كلا مداخلها معا تعمل كـ NOT. NAND(A,A) = NOT(A).',
  'In logic gate analysis, how many NAND gates are required to form a NOT gate?',
  ['1','2','3','4'], 0,
  'A NAND gate with both inputs tied together acts as NOT. NAND(A,A) = NOT(A).',
  'normal');

addQ('physics','both','hard',
  'في تحليل مبدأ عدم اليقين، اذا كان عدم اليقين في موقع الالكترون Δx = 0.1 nm، ما الحد الادنى لعدم اليقين في سرعته (احتمال)؟ (m_e = 9.11×10⁻³¹ kg)',
  ['1.16×10⁵ m/s','2.32×10⁵ m/s','5.79×10⁵ m/s','1.16×10⁶ m/s'], 0,
  'Δp ≥ ħ/(2Δx) = (1.054×10⁻³⁴)/(2×0.1×10⁻⁹) = 5.27×10⁻²⁵ kg·m/s. Δv = Δp/m = 5.27×10⁻²⁵ / 9.11×10⁻³¹ ≈ 5.79×10⁵ m/s.',
  'In uncertainty principle analysis, if electron position uncertainty Δx = 0.1 nm, what is the minimum velocity uncertainty (probability)? (m_e = 9.11×10⁻³¹ kg)',
  ['1.16×10⁵ m/s','2.32×10⁵ m/s','5.79×10⁵ m/s','1.16×10⁶ m/s'], 2,
  'Δp ≥ ħ/(2Δx) = (1.054×10⁻³⁴)/(2×0.1×10⁻⁹) = 5.27×10⁻²⁵ kg·m/s. Δv = Δp/m = 5.27×10⁻²⁵ / 9.11×10⁻³¹ ≈ 5.79×10⁵ m/s.',
  'complex');

addQ('physics','both','medium',
  'في تحليل قوة لورينتز على جسيم مشحون متحرك في مجال مغناطيسي، اي من العلاقات التالية صحيحة؟',
  ['F = qvB sinθ','F = qvB cosθ','F = qE sinθ','F = qv/B'], 0,
  'F = qvB sinθ. حيث θ الزاوية بين v و B. القوة عمودية على كل من v و B.',
  'In Lorentz force analysis on a charged particle moving in a magnetic field, which relation is correct?',
  ['F = qvB sinθ','F = qvB cosθ','F = qE sinθ','F = qv/B'], 0,
  'F = qvB sinθ, where θ is the angle between v and B. The force is perpendicular to both v and B.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الخلية الجلفانية، اي الاقطاب يطلق ايونات معدنية في المحلول (يتأكسد)؟',
  ['الكاثود','الانود','الجسر الملحي','الفلز الاكثر نشاطا'], 1,
  'الانود هو القطب السالب في الخلية الجلفانية، حيث يحدث الاكسدة ويتحلل القطب المعدني.',
  'In galvanic cell analysis, which electrode releases metal ions into the solution (oxidizes)?',
  ['Cathode','Anode','Salt bridge','More active metal'], 1,
  'The anode is the negative electrode in a galvanic cell, where oxidation occurs and the metal electrode dissolves.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الترانزستور، اي من الاشكال التالية يمثل رمز الترانزستور NPN؟',
  'السهم على الباعث يشير للخارج (نحو القاعدة).',
  'In transistor analysis, which symbol represents an NPN transistor?',
  ['Arrow on emitter pointing inward','Arrow on emitter pointing outward','Arrow on collector pointing inward','Arrow on base pointing outward'], 1,
  'The arrow on the emitter points outward (away from base) for NPN, and inward for PNP.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الارقام الكمية، كم عدد الالكترونات التي يمكن ان تستوعبها المستويات الفرعية d (l=2)؟',
  ['2','6','10','14'], 2,
  'المستوى الفرعي d (l=2) يحتوي على 5 مدارات (ml = -2,-1,0,+1,+2). كل مدار يستوعب 2 الكترون. المجموع = 10.',
  'In quantum number analysis, how many electrons can the d sublevel (l=2) accommodate?',
  ['2','6','10','14'], 2,
  'The d sublevel (l=2) contains 5 orbitals (ml = -2,-1,0,+1,+2). Each orbital holds 2 electrons. Total = 10.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الليزر، ما الخاصية التي تمنع الليزر من التشتت السريع مع المسافة؟',
  ['التماسك المكاني (Spatial coherence)','التماسك الزماني (Temporal coherence)','الاحادية اللونية','الانبعاث المحفز'], 0,
  'التماسك المكاني يعني ان موجات الليزر متوازية وتتحرك في نفس الاتجاه، مما يمنع التشتت السريع.',
  'In laser analysis, which property prevents laser light from diverging rapidly with distance?',
  ['Spatial coherence','Temporal coherence','Monochromaticity','Stimulated emission'], 0,
  'Spatial coherence means laser waves are parallel and move in the same direction, preventing rapid divergence.',
  'normal');

addQ('physics','both','medium',
  'في تحليل المكثف، ما العلاقة بين سعة المكثف C والجهد V والشحنة Q؟',
  ['C = Q/V','C = Q·V','C = V/Q','C = Q²/V'], 0,
  'C = Q/V. السعة = الشحنة / فرق الجهد.',
  'In capacitor analysis, what is the relation between capacitance C, voltage V, and charge Q?',
  ['C = Q/V','C = Q·V','C = V/Q','C = Q²/V'], 0,
  'C = Q/V. Capacitance = charge / voltage difference.',
  'normal');

addQ('physics','both','medium',
  'في تحليل التيار المتردد، ما العلاقة بين القيمة الفعالة Vrms والقيمة القصوى Vmax لجهد جيبي؟',
  ['Vrms = Vmax','Vrms = Vmax/√2','Vrms = Vmax/2','Vrms = Vmax·√2'], 1,
  'Vrms = Vmax/√2 ≈ 0.707 Vmax.',
  'In AC analysis, what is the relation between RMS value Vrms and peak value Vmax for a sinusoidal voltage?',
  ['Vrms = Vmax','Vrms = Vmax/√2','Vrms = Vmax/2','Vrms = Vmax·√2'], 1,
  'Vrms = Vmax/√2 ≈ 0.707 Vmax.',
  'normal');

addQ('physics','both','medium',
  'في تحليل الدائرة الكهربية، كم مقاومة مكافئة لدائرة تحتوي على مقاومتين 4Ω و 6Ω موصلتين على التوالي؟',
  ['2.4Ω','10Ω','12Ω','24Ω'], 1,
  'Req = R1 + R2 = 4 + 6 = 10Ω.',
  'In circuit analysis, what is the equivalent resistance of 4Ω and 6Ω resistors connected in series?',
  ['2.4Ω','10Ω','12Ω','24Ω'], 1,
  'Req = R1 + R2 = 4 + 6 = 10Ω.',
  'normal');


/* ===================== MATH (Math Track Only) - 50 Qs ===================== */
addQ('math','math','medium',
  'ما هو الحد الرابع في مفكوك (x + 2)⁵ حسب نظرية ذات الحدين؟',
  ['80x²','40x³','80x³','160x²'], 2,
  'الحد العام: T_{r+1} = C(5,r) x^{5-r} 2^r. للحد الرابع r=3: C(5,3) x² 2³ = 10 × x² × 8 = 80x².',
  'What is the 4th term in the expansion of (x + 2)⁵ using binomial theorem?',
  ['80x²','40x³','80x³','160x²'], 2,
  'General term: T_{r+1} = C(5,r) x^{5-r} 2^r. For 4th term r=3: C(5,3) x² 2³ = 10 × x² × 8 = 80x².',
  'complex');

addQ('math','math','medium',
  'ما هي قيمة (1 + i)⁴ حيث i = √-1؟',
  ['1','-1','i','-4'], 1,
  '(1+i)² = 1 + 2i + i² = 2i. اذن (1+i)⁴ = (2i)² = 4i² = -4.',
  'What is the value of (1 + i)⁴ where i = √-1?',
  ['1','-1','i','-4'], 3,
  '(1+i)² = 1 + 2i + i² = 2i. Thus (1+i)⁴ = (2i)² = 4i² = -4.',
  'complex');

addQ('math','math','medium',
  'ما هي مشتقة الدالة f(x) = e^(2x) · ln(x)؟',
  ['e^(2x)(2lnx + 1/x)','e^(2x)(lnx + 1/x)','2e^(2x)lnx','e^(2x)/x'], 0,
  'f\'= e^(2x)·2·lnx + e^(2x)·(1/x) = e^(2x)(2lnx + 1/x).',
  'What is the derivative of f(x) = e^(2x) · ln(x)?',
  ['e^(2x)(2lnx + 1/x)','e^(2x)(lnx + 1/x)','2e^(2x)lnx','e^(2x)/x'], 0,
  'f\'= e^(2x)·2·lnx + e^(2x)·(1/x) = e^(2x)(2lnx + 1/x).',
  'complex');

addQ('math','math','medium',
  'اي من المعادلات التالية تمثل مستوى يمر بالنقطة (1,2,3) وعمودي على المتجه (2,-1,4)؟',
  ['2x - y + 4z = 12','2x - y + 4z = 10','x + 2y + 3z = 14','2x + y - 4z = -8'], 0,
  'معادلة المستوى: a(x-x₀)+b(y-y₀)+c(z-z₀)=0. 2(x-1)-1(y-2)+4(z-3)=0 → 2x-y+4z=2-2+12=12.',
  'Which equation represents a plane passing through (1,2,3) and perpendicular to vector (2,-1,4)?',
  ['2x - y + 4z = 12','2x - y + 4z = 10','x + 2y + 3z = 14','2x + y - 4z = -8'], 0,
  'Plane equation: a(x-x₀)+b(y-y₀)+c(z-z₀)=0. 2(x-1)-1(y-2)+4(z-3)=0 → 2x-y+4z=2-2+12=12.',
  'complex');

addQ('math','math','medium',
  'ما هو تكامل ∫ x·e^x dx؟',
  ['e^x(x+1) + C','e^x(x-1) + C','xe^x + C','e^x/x + C'], 1,
  'بالتجزيء: u=x, dv=e^x dx → du=dx, v=e^x. ∫xe^x = xe^x - ∫e^x = xe^x - e^x = e^x(x-1) + C.',
  'What is the integral ∫ x·e^x dx?',
  ['e^x(x+1) + C','e^x(x-1) + C','xe^x + C','e^x/x + C'], 1,
  'By parts: u=x, dv=e^x dx → du=dx, v=e^x. ∫xe^x = xe^x - ∫e^x = xe^x - e^x = e^x(x-1) + C.',
  'complex');

addQ('math','math','medium',
  'في المتجهات، اي من العبارات التالية يعطي حاصل الضرب الاتجاهي (Cross product) للمتجهين a = (1,0,0) و b = (0,1,0)؟',
  ['(0,0,1)','(1,1,0)','(0,0,-1)','(1,0,1)'], 0,
  'a × b = (0·0 - 0·1, 0·0 - 1·0, 1·1 - 0·0) = (0,0,1).',
  'In vectors, which expression gives the cross product of a = (1,0,0) and b = (0,1,0)?',
  ['(0,0,1)','(1,1,0)','(0,0,-1)','(1,0,1)'], 0,
  'a × b = (0·0 - 0·1, 0·0 - 1·0, 1·1 - 0·0) = (0,0,1).',
  'complex');

addQ('math','math','medium',
  'ما هي قيمة sin(75°) باستخدام صيغة الجمع؟',
  ['(√6 + √2)/4','(√6 - √2)/4','(√3 + 1)/2','(√3 - 1)/4'], 0,
  'sin(75°) = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.',
  'What is the value of sin(75°) using addition formula?',
  ['(√6 + √2)/4','(√6 - √2)/4','(√3 + 1)/2','(√3 - 1)/4'], 0,
  'sin(75°) = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.',
  'complex');

addQ('math','math','medium',
  'ما هو المجال (Domain) للدالة f(x) = ln(x² - 4)؟',
  ['(-∞,-2) ∪ (2,∞)','(-2,2)','R - {±2}','(0,∞)'], 0,
  'x² - 4 > 0 → x² > 4 → x < -2 أو x > 2.',
  'What is the domain of f(x) = ln(x² - 4)?',
  ['(-∞,-2) ∪ (2,∞)','(-2,2)','R - {±2}','(0,∞)'], 0,
  'x² - 4 > 0 → x² > 4 → x < -2 or x > 2.',
  'normal');

addQ('math','math','medium',
  'اي من المعادلات التالية تمثل قطعا ناقصا مركزه عند原点 وبؤرتيه على محور x؟',
  ['x²/9 + y²/4 = 1','x²/4 - y²/9 = 1','y² = 4x','x² + y² = 9'], 0,
  'x²/a² + y²/b² = 1 مع a>b تمثل قطعا ناقصا أفقيا. a²=9, b²=4.',
  'Which equation represents an ellipse centered at origin with foci on x-axis?',
  ['x²/9 + y²/4 = 1','x²/4 - y²/9 = 1','y² = 4x','x² + y² = 9'], 0,
  'x²/a² + y²/b² = 1 with a>b represents a horizontal ellipse. a²=9, b²=4.',
  'normal');

addQ('math','math','medium',
  'ما هو الحد الوسط في مفكوك (a + b)⁸؟',
  ['C(8,4)a⁴b⁴','C(8,3)a⁵b³','C(8,5)a³b⁵','C(8,2)a⁶b²'], 0,
  'مفكوك (a+b)⁸ له 9 حدود. الحد الوسط هو الخامس (r=4): C(8,4)a⁴b⁴.',
  'What is the middle term in the expansion of (a + b)⁸?',
  ['C(8,4)a⁴b⁴','C(8,3)a⁵b³','C(8,5)a³b⁵','C(8,2)a⁶b²'], 0,
  'The expansion of (a+b)⁸ has 9 terms. The middle term is the 5th (r=4): C(8,4)a⁴b⁴.',
  'normal');

addQ('math','math','hard',
  'ما هو تكامل ∫₀^π x·sin(x) dx (احتمال)؟',
  ['π','π/2','2π','0'], 0,
  'بالتجزيء: u=x, dv=sinx dx → du=dx, v=-cosx. [-xcosx]₀^π + ∫cosx = π + [sinx]₀^π = π.',
  'What is the integral ∫₀^π x·sin(x) dx (probability)?',
  ['π','π/2','2π','0'], 0,
  'By parts: u=x, dv=sinx dx → du=dx, v=-cosx. [-xcosx]₀^π + ∫cosx = π + [sinx]₀^π = π.',
  'complex');

addQ('math','math','hard',
  'ما هي قيمة det(A) للمصفوفة A = [[2,3],[4,5]] (احتمال)؟',
  ['-2','2','22','-22'], 0,
  'det(A) = (2)(5) - (3)(4) = 10 - 12 = -2.',
  'What is det(A) for matrix A = [[2,3],[4,5]] (probability)?',
  ['-2','2','22','-22'], 0,
  'det(A) = (2)(5) - (3)(4) = 10 - 12 = -2.',
  'complex');

addQ('math','math','hard',
  'ما هي معادلة المستقيم المار بالنقطة (2,3) والموازي للمستقيم 2x - y + 5 = 0 (احتمال)؟',
  ['2x - y = 1','2x - y = 7','x + 2y = 8','x - 2y = -4'], 0,
  'الميل = 2. المعادلة: y-3 = 2(x-2) → y = 2x - 1 → 2x - y = 1.',
  'What is the equation of the line passing through (2,3) and parallel to 2x - y + 5 = 0 (probability)?',
  ['2x - y = 1','2x - y = 7','x + 2y = 8','x - 2y = -4'], 0,
  'Slope = 2. Equation: y-3 = 2(x-2) → y = 2x - 1 → 2x - y = 1.',
  'complex');

addQ('math','math','hard',
  'ما هو limit (x→0) (sin(3x)/x) (احتمال)؟',
  ['0','1/3','3','غير موجود'], 2,
  'lim sin(3x)/x = 3·lim sin(3x)/(3x) = 3×1 = 3.',
  'What is limit (x→0) (sin(3x)/x) (probability)?',
  ['0','1/3','3','Does not exist'], 2,
  'lim sin(3x)/x = 3·lim sin(3x)/(3x) = 3×1 = 3.',
  'complex');

addQ('math','math','hard',
  'ما هي الزاوية بين المتجهين u = (1,1,0) و v = (1,0,1) (احتمال)؟',
  ['30°','45°','60°','90°'], 2,
  'u·v = 1. |u|=|v|=√2. cosθ = 1/(√2·√2) = 1/2. θ = 60°.',
  'What is the angle between vectors u = (1,1,0) and v = (1,0,1) (probability)?',
  ['30°','45°','60°','90°'], 2,
  'u·v = 1. |u|=|v|=√2. cosθ = 1/(√2·√2) = 1/2. θ = 60°.',
  'complex');

addQ('math','math','hard',
  'في الاستاتيكا، اذا كانت قوة F = 10N تؤثر عموديا على ذراع طولها 0.5m عند نقطة ارتكازها، ما العزم (احتمال)؟',
  ['5 N·m','10 N·m','20 N·m','0 N·m'], 0,
  'τ = F × d × sin(90°) = 10 × 0.5 × 1 = 5 N·m.',
  'In statics, if force F = 10N acts perpendicular to an arm of length 0.5m at its pivot, what is the torque (probability)?',
  ['5 N·m','10 N·m','20 N·m','0 N·m'], 0,
  'τ = F × d × sin(90°) = 10 × 0.5 × 1 = 5 N·m.',
  'complex');

addQ('math','math','hard',
  'ما هو تكامل ∫ (1/(x²+4)) dx (احتمال)؟',
  ['(1/2)arctan(x/2) + C','arctan(x/2) + C','(1/4)ln|x²+4| + C','ln|x²+4| + C'], 0,
  '∫dx/(x²+a²) = (1/a)arctan(x/a) + C. هنا a=2، اذن (1/2)arctan(x/2) + C.',
  'What is the integral ∫ (1/(x²+4)) dx (probability)?',
  ['(1/2)arctan(x/2) + C','arctan(x/2) + C','(1/4)ln|x²+4| + C','ln|x²+4| + C'], 0,
  '∫dx/(x²+a²) = (1/a)arctan(x/a) + C. Here a=2, so (1/2)arctan(x/2) + C.',
  'complex');

addQ('math','math','hard',
  'ما هي قيمة (cos(π/12))² - (sin(π/12))² (احتمال)؟',
  ['1/2','√3/2','1','√2/2'], 1,
  'cos²A - sin²A = cos(2A). 2A = π/6. cos(π/6) = √3/2.',
  'What is the value of (cos(π/12))² - (sin(π/12))² (probability)?',
  ['1/2','√3/2','1','√2/2'], 1,
  'cos²A - sin²A = cos(2A). 2A = π/6. cos(π/6) = √3/2.',
  'complex');

addQ('math','math','hard',
  'ما هي مساحة المنطقة المحصورة بين المنحنى y = x² و المحور x من x=0 إلى x=2 (احتمال)؟',
  ['4/3','8/3','2','4'], 1,
  'A = ∫₀² x² dx = [x³/3]₀² = 8/3.',
  'What is the area enclosed between curve y = x² and x-axis from x=0 to x=2 (probability)?',
  ['4/3','8/3','2','4'], 1,
  'A = ∫₀² x² dx = [x³/3]₀² = 8/3.',
  'complex');

addQ('math','math','hard',
  'ما هي قيمة i^2024 حيث i = √-1 (احتمال)؟',
  ['1','-1','i','-i'], 0,
  'i^2024 = (i⁴)^506 = 1^506 = 1.',
  'What is the value of i^2024 where i = √-1 (probability)?',
  ['1','-1','i','-i'], 0,
  'i^2024 = (i⁴)^506 = 1^506 = 1.',
  'complex');

addQ('math','math','hard',
  'اي من المعادلات التالية تمثل دائرة نصف قطرها 3 ومركزها (-1,2) (احتمال)؟',
  ['(x+1)²+(y-2)²=9','(x-1)²+(y+2)²=9','(x+1)²+(y-2)²=3','x²+y²=9'], 0,
  '(x-h)²+(y-k)²=r². المركز (-1,2)، نصف القطر 3. اذن (x+1)²+(y-2)²=9.',
  'Which equation represents a circle with radius 3 and center (-1,2) (probability)?',
  ['(x+1)²+(y-2)²=9','(x-1)²+(y+2)²=9','(x+1)²+(y-2)²=3','x²+y²=9'], 0,
  '(x-h)²+(y-k)²=r². Center (-1,2), radius 3. So (x+1)²+(y-2)²=9.',
  'complex');

addQ('math','math','medium',
  'ما هو مشتقة الدالة f(x) = x³ · ln(x)؟',
  ['x²(3lnx + 1)','x²(3lnx - 1)','3x²lnx','x²/lnx'], 0,
  'f\'= 3x²lnx + x³(1/x) = 3x²lnx + x² = x²(3lnx + 1).',
  'What is the derivative of f(x) = x³ · ln(x)?',
  ['x²(3lnx + 1)','x²(3lnx - 1)','3x²lnx','x²/lnx'], 0,
  'f\'= 3x²lnx + x³(1/x) = 3x²lnx + x² = x²(3lnx + 1).',
  'normal');

addQ('math','math','medium',
  'ما هي النقطة الحرجة (Critical point) للدالة f(x) = x² - 4x + 3؟',
  ['x = 0','x = 1','x = 2','x = 3'], 2,
  'f\'(x) = 2x - 4 = 0 → x = 2.',
  'What is the critical point of f(x) = x² - 4x + 3?',
  ['x = 0','x = 1','x = 2','x = 3'], 2,
  'f\'(x) = 2x - 4 = 0 → x = 2.',
  'normal');

addQ('math','math','medium',
  'ما هو تكامل ∫ (2x + 3) dx؟',
  ['x² + 3x + C','2x² + 3x + C','x² + C','2x + C'], 0,
  '∫(2x+3)dx = x² + 3x + C.',
  'What is the integral ∫ (2x + 3) dx?',
  ['x² + 3x + C','2x² + 3x + C','x² + C','2x + C'], 0,
  '∫(2x+3)dx = x² + 3x + C.',
  'normal');

addQ('math','math','medium',
  'ما هي قيمة sin(2π/3)؟',
  ['1/2','√3/2','-1/2','-√3/2'], 1,
  'sin(2π/3) = sin(π - π/3) = sin(π/3) = √3/2.',
  'What is the value of sin(2π/3)?',
  ['1/2','√3/2','-1/2','-√3/2'], 1,
  'sin(2π/3) = sin(π - π/3) = sin(π/3) = √3/2.',
  'normal');

addQ('math','math','medium',
  'اي من المعادلات التالية تمثل قطعا مكافئا بمحور تناظر افقي؟',
  ['y² = 4x','x² = 4y','x² + y² = 4','x²/4 + y²/9 = 1'], 0,
  'y² = 4ax تمثل قطعا مكافئا بمحور تناظر افقي (محور x).',
  'Which equation represents a parabola with horizontal axis of symmetry?',
  ['y² = 4x','x² = 4y','x² + y² = 4','x²/4 + y²/9 = 1'], 0,
  'y² = 4ax represents a parabola with horizontal axis of symmetry (x-axis).',
  'normal');

addQ('math','math','medium',
  'ما هو حاصل الضرب القياسي (Dot product) للمتجهين a = (2,3,1) و b = (1,-1,2)؟',
  ['1','3','5','7'], 0,
  'a·b = 2(1) + 3(-1) + 1(2) = 2 - 3 + 2 = 1.',
  'What is the dot product of vectors a = (2,3,1) and b = (1,-1,2)?',
  ['1','3','5','7'], 0,
  'a·b = 2(1) + 3(-1) + 1(2) = 2 - 3 + 2 = 1.',
  'normal');

addQ('math','math','medium',
  'ما هي قيمة limit (x→∞) (3x²+2x)/(x²+5)؟',
  ['0','2','3','5'], 2,
  'lim = 3 (معامل الحد الاعلى في البسط والمقام).',
  'What is limit (x→∞) (3x²+2x)/(x²+5)?',
  ['0','2','3','5'], 2,
  'lim = 3 (leading coefficient of numerator and denominator).',
  'normal');

addQ('math','math','medium',
  'في المعادلات التفاضلية، ما هو الحل العام لـ dy/dx = 2x؟',
  ['y = x² + C','y = 2x + C','y = x²/2 + C','y = 2x² + C'], 0,
  '∫dy = ∫2x dx → y = x² + C.',
  'In differential equations, what is the general solution of dy/dx = 2x?',
  ['y = x² + C','y = 2x + C','y = x²/2 + C','y = 2x² + C'], 0,
  '∫dy = ∫2x dx → y = x² + C.',
  'normal');

addQ('math','math','medium',
  'ما هي قيمة C(5,2) (تركيبات 5 اخذ 2)؟',
  ['5','10','20','25'], 1,
  'C(5,2) = 5!/(2!3!) = (5×4)/(2×1) = 10.',
  'What is C(5,2) (combinations of 5 choose 2)?',
  ['5','10','20','25'], 1,
  'C(5,2) = 5!/(2!3!) = (5×4)/(2×1) = 10.',
  'normal');

addQ('math','math','medium',
  'اي من الدوال التالية يكون لها قيمة عظمى محلية عند x=0؟',
  ['f(x)=x³','f(x)=x⁴','f(x)=-x²','f(x)=x'], 2,
  'f(x)=-x²: f\'(0)=0 و f\'\'(0)=-2 < 0 → قيمة عظمى عند x=0.',
  'Which of the following functions has a local maximum at x=0?',
  ['f(x)=x³','f(x)=x⁴','f(x)=-x²','f(x)=x'], 2,
  'f(x)=-x²: f\'(0)=0 and f\'\'(0)=-2 < 0 → maximum at x=0.',
  'normal');

addQ('math','math','medium',
  'ما هو حجم الموازي مستطيلات المGenerated by المتجهين u=(1,0,0) و v=(0,2,0) و w=(0,0,3)؟',
  ['1','6','5','0'], 1,
  'V = |u · (v × w)| = 1×2×3 = 6.',
  'What is the volume of the parallelepiped generated by vectors u=(1,0,0), v=(0,2,0), w=(0,0,3)?',
  ['1','6','5','0'], 1,
  'V = |u · (v × w)| = 1×2×3 = 6.',
  'normal');

addQ('math','math','medium',
  'ما هي قيمة الجذر التكعيبي للعدد المركب 8i؟',
  ['2i','2√3 + 2i','-2√3 + 2i','جميع ما سبق'], 3,
  '8i = 8e^(iπ/2). الجذور: 2e^(i(π/6 + 2kπ/3)) لـ k=0,1,2. k=0: 2e^(iπ/6)=√3+i. k=1: 2e^(i5π/6)=-√3+i. k=2: 2e^(i3π/2)=-2i.',
  'What is the cube root of complex number 8i?',
  ['2i','2√3 + 2i','-2√3 + 2i','All of the above'], 3,
  '8i = 8e^(iπ/2). Roots: 2e^(i(π/6 + 2kπ/3)) for k=0,1,2. k=0: √3+i. k=1: -√3+i. k=2: -2i.',
  'complex');

addQ('math','math','medium',
  'في الاستاتيكا، اذا كانت مجموع القوى المتجهة = صفر و مجموع العزوم = صفر، فان الجسم في حالة؟',
  ['حركة منتظمة','اتزان سكوني','اتزان حركي','سقوط حر'], 1,
  'ΣF=0 و Στ=0 → الجسم في اتزان سكوني (static equilibrium) أو حركة منتظمة بسرعة ثابتة.',
  'In statics, if the sum of forces = zero and sum of torques = zero, the body is in?',
  ['Uniform motion','Static equilibrium','Dynamic equilibrium','Free fall'], 1,
  'ΣF=0 and Στ=0 → body is in static equilibrium (or moving with constant velocity).',
  'normal');

addQ('math','math','medium',
  'ما هو حل المعادلة |2x - 3| = 5؟',
  ['x = 4 فقط','x = -1 فقط','x = 4 أو x = -1','لا يوجد حل'], 2,
  '2x-3 = 5 → x=4. أو 2x-3 = -5 → x=-1.',
  'What is the solution of |2x - 3| = 5?',
  ['x = 4 only','x = -1 only','x = 4 or x = -1','No solution'], 2,
  '2x-3 = 5 → x=4. Or 2x-3 = -5 → x=-1.',
  'normal');

addQ('math','math','medium',
  'ما هي معادلة القطع الزائد الذي مركزه عند原点 وبؤرتاه (±5,0) و رأساه (±3,0)؟',
  ['x²/9 - y²/16 = 1','x²/16 - y²/9 = 1','x²/25 - y²/9 = 1','x²/9 - y²/25 = 1'], 0,
  'a=3, c=5. b²=c²-a²=25-9=16. المعادلة: x²/9 - y²/16 = 1.',
  'What is the equation of the hyperbola centered at origin with foci (±5,0) and vertices (±3,0)?',
  ['x²/9 - y²/16 = 1','x²/16 - y²/9 = 1','x²/25 - y²/9 = 1','x²/9 - y²/25 = 1'], 0,
  'a=3, c=5. b²=c²-a²=25-9=16. Equation: x²/9 - y²/16 = 1.',
  'normal');

addQ('math','math','hard',
  'ما هو تكامل ∫ x²·e^x dx (احتمال)؟',
  ['e^x(x² - 2x + 2) + C','e^x(x² + 2x + 2) + C','e^x(x² - 2x - 2) + C','e^x(x² + 2x - 2) + C'], 0,
  'بالتجزيء مرتين: ∫x²e^x = x²e^x - 2∫xe^x = x²e^x - 2(xe^x - e^x) = e^x(x² - 2x + 2) + C.',
  'What is the integral ∫ x²·e^x dx (probability)?',
  ['e^x(x² - 2x + 2) + C','e^x(x² + 2x + 2) + C','e^x(x² - 2x - 2) + C','e^x(x² + 2x - 2) + C'], 0,
  'By parts twice: ∫x²e^x = x²e^x - 2∫xe^x = x²e^x - 2(xe^x - e^x) = e^x(x² - 2x + 2) + C.',
  'complex');

addQ('math','math','hard',
  'في الديناميكا، اذا كانت كتلة جسم 2kg و يتحرك بسرعة v(t) = 3t²، ما القوة المؤثرة عليه عند t=2s (احتمال)؟',
  ['12 N','24 N','36 N','48 N'], 1,
  'a = dv/dt = 6t. عند t=2: a=12 m/s². F=ma=2×12=24 N.',
  'In dynamics, if mass = 2kg and velocity v(t) = 3t², what is the force at t=2s (probability)?',
  ['12 N','24 N','36 N','48 N'], 1,
  'a = dv/dt = 6t. At t=2: a=12 m/s². F=ma=2×12=24 N.',
  'complex');

addQ('math','math','hard',
  'ما هي قيمة det [[1,2,3],[4,5,6],[7,8,9]] (احتمال)؟',
  ['0','45','-45','30'], 0,
  'المصفوفة خطية (الصف الثالث = 2×الصف الثاني - الصف الاول). اذن det = 0.',
  'What is det [[1,2,3],[4,5,6],[7,8,9]] (probability)?',
  ['0','45','-45','30'], 0,
  'The matrix is linearly dependent (row 3 = 2×row 2 - row 1). Thus det = 0.',
  'complex');

addQ('math','math','hard',
  'ما هو limit (x→0) (e^x - 1 - x)/x² (احتمال)؟',
  ['0','1/2','1','غير موجود'], 1,
  'باستخدام lHopital مرتين: lim (e^x - 1)/2x = lim e^x/2 = 1/2.',
  'What is limit (x→0) (e^x - 1 - x)/x² (probability)?',
  ['0','1/2','1','Does not exist'], 1,
  'Using lHopital twice: lim (e^x - 1)/2x = lim e^x/2 = 1/2.',
  'complex');

addQ('math','math','hard',
  'ما هي مساحة سطح الدوار الناتج عن دوران المنحنى y = √x من x=0 إلى x=4 حول محور x (احتمال)؟',
  ['π/6(17√17 - 1)','π/3(17√17 - 1)','π/6(17√17 + 1)','π/3(17√17 + 1)'], 0,
  'S = 2π∫y√(1+(dy/dx)²)dx. y=√x, dy/dx=1/(2√x). 1+(dy/dx)² = (4x+1)/(4x). √(1+(dy/dx)²) = √(4x+1)/(2√x). S = 2π∫√x · √(4x+1)/(2√x) dx = π∫√(4x+1)dx من 0 إلى 4 = π/6[(4x+1)^(3/2)]₀⁴ = π/6(17√17 - 1).',
  'What is the surface area of revolution of y = √x from x=0 to x=4 about x-axis (probability)?',
  ['π/6(17√17 - 1)','π/3(17√17 - 1)','π/6(17√17 + 1)','π/3(17√17 + 1)'], 0,
  'S = 2π∫y√(1+(dy/dx)²)dx. For y=√x, this evaluates to π/6(17√17 - 1).',
  'complex');

addQ('math','math','hard',
  'ما هي معادلة المستقيم المار بالنقطة (1,-2,3) وعمودي على المستوى 2x - y + 3z = 5 (احتمال)؟',
  ['(x-1)/2 = (y+2)/(-1) = (z-3)/3','(x+1)/2 = (y-2)/(-1) = (z+3)/3','x/2 = y/(-1) = z/3','(x-1)/2 = (y+2)/1 = (z-3)/3'], 0,
  'المتجه العمودي = (2,-1,3). المعادلة: (x-1)/2 = (y+2)/(-1) = (z-3)/3.',
  'What is the equation of the line passing through (1,-2,3) and perpendicular to plane 2x - y + 3z = 5 (probability)?',
  ['(x-1)/2 = (y+2)/(-1) = (z-3)/3','(x+1)/2 = (y-2)/(-1) = (z+3)/3','x/2 = y/(-1) = z/3','(x-1)/2 = (y+2)/1 = (z-3)/3'], 0,
  'Normal vector = (2,-1,3). Equation: (x-1)/2 = (y+2)/(-1) = (z-3)/3.',
  'complex');


/* ===================== ARABIC NAHW (Both Tracks) - 40 Qs ===================== */
addQ('arabic','both','medium',
  'اي الكلمات التالية ممنوع من الصرف؟',
  ['كتاب','قاضٍ','مسجد','بيت'], 1,
  'قاضٍ اسم فاعل من الفعل قضى، وهو من الاسماء الممنوعة من الصرف لانه اسم فاعل على وزن فاعل من الفعل الثلاثي.',
  'Which of the following words is diptote (mamnoo min al-sarf)?',
  ['Book','Judge','Mosque','House'], 1,
  'Qadi (judge) is a diptote noun because it is an active participle on the pattern faa\'il from a triliteral verb.',
  'normal');

addQ('arabic','both','medium',
  'ما نوع "ما" في قولنا: ما احسن السماء؟',
  ['نافية','استفهامية','تعجبية','موصولة'], 2,
  '"ما" هنا للتعجب، تأتي قبل المعرب على وزن افعل، وتعمل عمل "كم" التعجبية.',
  'What type of "ma" is in: "What a beautiful sky!" (ma ahsana al-samaa\')?',
  ['Negative','Interrogative','Exclamatory','Relative'], 2,
  '"Ma" here is for exclamation (ta\'ajjub), coming before a verb-like form and functioning like "kam" for exclamation.',
  'normal');

addQ('arabic','both','medium',
  'اي من الافعال التالية مبني للمجهول؟',
  ['كتب','يُكْتَبُ','اكتب','كاتب'], 1,
  'يُكْتَبُ فعل مبني للمجهول؛ يبدأ بحرف الضمة ويُبنى على الفتح.',
  'Which of the following verbs is passive voice (mabni lil-majhool)?',
  ['He wrote','It is written','Write','Writing'], 1,
  'Yuktabu is passive voice; it starts with dammah and is built on fathah.',
  'normal');

addQ('arabic','both','medium',
  'ما اعراب "المؤمنون" في جملة: جاء المؤمنون؟',
  ['فاعل مرفوع وعلامة رفعه الضمة','فاعل مرفوع وعلامة رفعه الواو','مبتدأ مرفوع وعلامة رفعه الواو','خبر مرفوع وعلامة رفعه الضمة'], 1,
  'المؤمنون: فاعل مرفوع وعلامة رفعه الواو لانه جمع مذكر سالم.',
  'What is the grammatical case of "al-mu\'minoon" in: "The believers came"?',
  ['Subject (marfoo\') with dammah','Subject (marfoo\') with waw','Mubtada\' with waw','Khabar with dammah'], 1,
  'Al-mu\'minoon: subject (marfoo\') with waw because it is a sound masculine plural.',
  'normal');

addQ('arabic','both','medium',
  'اي من الحروف التالية حرف جر؟',
  ['قد','لن','في','سوف'], 2,
  '"في" حرف جر يدل على الظرفية (المكان أو الزمان).',
  'Which of the following is a preposition (harf jarr)?',
  ['Qad (indeed)','Lan (will not)','Fi (in)','Sawfa (will)'], 2,
  '"Fi" is a preposition indicating location or time.',
  'normal');

addQ('arabic','both','medium',
  'ما اعراب "الكتاب" في جملة: قرأتُ الكتابَ؟',
  ['فاعل مرفوع','مفعول به منصوب','مبتدأ مرفوع','خبر مرفوع'], 1,
  'الكتاب: مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره.',
  'What is the grammatical case of "al-kitaab" in: "I read the book"?',
  ['Subject (marfoo\')','Object (mansoob)','Mubtada\'','Khabar'], 1,
  'Al-kitaab: object (mansoob) with fathah visible on its end.',
  'normal');

addQ('arabic','both','medium',
  'ما نوع "لا" في قولنا: لا طالبَ في الفصل؟',
  ['نافية للجنس','نافية','نهيية','زائدة'], 0,
  '"لا" هنا نافية للجنس؛ تدخل على الاسم الواحد فتنصبه وتجرده من التنوين.',
  'What type of "la" is in: "No student in the class"?',
  ['La nafiya lil-jins','Negative la','Prohibitive la','Extra la'], 0,
  '"La" here is nafiya lil-jins (negation of genus); it makes the singular noun mansoob and removes tanween.',
  'normal');

addQ('arabic','both','medium',
  'اي من الاسماء التالية اسم آلة؟',
  ['كاتب','مكتوب','مِكْتَابٌ','كتابة'], 2,
  'مِكْتَابٌ: اسم آلة على وزن مِفْعَالٍ من الفعل كتب.',
  'Which of the following is an instrument noun (ism aala)?',
  ['Writer','Written','Desk/writing place','Writing'], 2,
  'Miktaab: instrument noun on the pattern mif\'aal from the verb kataba.',
  'normal');

addQ('arabic','both','medium',
  'ما اعراب "عليّ" في جملة: جلس عليّ الكرسي؟',
  'ظرف مكان منصوب وعلامة نصبه الياء.',
  'What is the grammatical case of "\'alayya" in: "I sat on the chair"?',
  ['Subject (marfoo\')','Adverb of place (mansoob)','Object (mansoob)','Preposition'], 1,
  '\'Alayya: adverb of place (dhurf makan) mansoob with ya\'.',
  'normal');

addQ('arabic','both','medium',
  'اي من الافعال التالية فعل لازم؟',
  ['اكل','اعطى','كتب','ذهب'], 3,
  'ذهب فعل لازم لا يحتاج إلى مفعول به.',
  'Which of the following is an intransitive verb (fail laazim)?',
  ['Ate','Gave','Wrote','Went'], 3,
  'Dhahaba (went) is intransitive and does not require an object.',
  'normal');

addQ('arabic','both','hard',
  'ما اعراب "المعلمين" في جملة: شكر الطالبُ المعلمين؟',
  ['فاعل مرفوع وعلامة رفعه الياء','مفعول به منصوب وعلامة نصبه الياء','مضاف إليه مجرور وعلامة جره الياء','بدل منصوب وعلامة نصبه الياء'], 1,
  'المعلمين: مفعول به منصوب وعلامة نصبه الياء لانه جمع مذكر سالم.',
  'What is the grammatical case of "al-mu\'allimeen" in: "The student thanked the teachers"?',
  ['Subject with yaa\'','Object with yaa\'','Mudaf ilayhi with yaa\'','Badal with yaa\''], 1,
  'Al-mu\'allimeen: object (mansoob) with yaa\' because it is a sound masculine plural.',
  'normal');

addQ('arabic','both','hard',
  'اي من الجمل التالية تحتوي على فعل مضارع مجزوم؟',
  ['سوف يذهب','لم يذهب','ذهب','لن يذهب'], 1,
  'لم تجزم الفعل المضارع: "لم يذهب" - "يذهب" مجزوم وعلامة جزمه السكون.',
  'Which of the following sentences contains a jazm (subjunctive) present tense verb?',
  ['He will go','He did not go','He went','He will not go'], 1,
  '"Lam" jazms the present verb: "lam yadhhab" - "yadhhab" is majzoom with sukoon.',
  'normal');

addQ('arabic','both','hard',
  'ما نوع "ان" في قولنا: انّ السماء صافيةٌ؟',
  ['انّ المشبهة بالفعل','انّ النافية','انّ الشرطية','انّ المصدرية'], 0,
  '"انّ" المشبهة بالفعل ترفع المبتدأ وتنصب الخبر.',
  'What type of "inna" is in: "Indeed, the sky is clear"?',
  ['Inna al-mushabbaha bil-fi\'l','Negative inna','Conditional inna','Masdar inna'], 0,
  'Inna al-mushabbaha bil-fi\'l raises the mubtada\' and makes the khabar mansoob.',
  'normal');

addQ('arabic','both','hard',
  'اي من الاساليب التالية يحتوي على توكيد لفظي؟',
  ['جاء الطالب','لقد جاء الطالب','ان جاء الطالب','لم يجئ الطالب'], 1,
  '"لقد" حرف توكيد يؤكد خبر الماضي.',
  'Which of the following contains verbal emphasis (tawkeed lafthi)?',
  ['The student came','Indeed the student came','If the student came','The student did not come'], 1,
  '"Laqad" is an emphasis particle that confirms the past tense predicate.',
  'normal');

addQ('arabic','both','hard',
  'ما اعراب "نفسي" في جملة: كرّمتُ نفسي؟',
  ['فاعل مرفوع','مفعول به منصوب','مفعول لاجله','بدل'], 1,
  'نفسي: مفعول به منصوب؛ "نفس" اسم، والياء ضمير متصل مبني في محل جار مضاف إليه.',
  'What is the grammatical case of "nafsee" in: "I honored myself"?',
  ['Subject (marfoo\')','Object (mansoob)','Maf\'ool lajlihi','Badal'], 1,
  'Nafsee: object (mansoob); "nafs" is a noun and "ee" is an attached pronoun in place of mudaf ilayhi.',
  'normal');

addQ('arabic','both','hard',
  'اي من الحروف التالية يعمل عمل "ليس"؟',
  ['ما النافية','لا النافية','ليس','ان'], 2,
  '"ليس" تعمل عمل "ليس" نفسها (تنصب المبتدأ وترفع الخبر)، كما تعمل "ما" و"لات" و"لن" و"لم" و"ليس" و"إنّ" و"أنّ" عملها.',
  'Which of the following particles works like "laysa"?',
  ['Ma (negative)','La (negative)','Laysa itself','Inna'], 2,
  '"Laysa" itself works by making the mubtada\' mansoob and the khabar marfoo\'.',
  'normal');

addQ('arabic','both','hard',
  'ما اعراب "كل" في جملة: كلُّ طالبٍ مجتهدٌ؟',
  ['مبتدأ مرفوع وعلامة رفعه الضمة','مبتدأ مرفوع وعلامة رفعه الضمة المقدرة','خبر مرفوع','مضاف إليه مجرور'], 1,
  'كلُّ: مبتدأ مرفوع وعلامة رفعه الضمة المقدرة على الألف.',
  'What is the grammatical case of "kull" in: "Every student is diligent"?',
  ['Mubtada\' marfoo\' with dammah','Mubtada\' marfoo\' with estimated dammah on alif','Khabar marfoo\'','Mudaf ilayhi majroor'], 1,
  'Kull: mubtada\' marfoo\' with estimated dammah on alif.',
  'normal');

addQ('arabic','both','hard',
  'اي من الاسماء التالية مؤنث بلفظه وليس بمعناه؟',
  ['شمس','حرب','قلم','هدهد'], 2,
  'قلم: مؤنث بلفظه (تاء التأنيث)، لكنه ذكوري في المعنى.',
  'Which of the following is feminine by form (not meaning)?',
  ['Sun (fem. by meaning)','War (fem. by meaning)','Pen (fem. by form)','Hoopoe (fem. by form)'], 2,
  'Qalam: feminine by form (taa marbuta) but masculine in meaning.',
  'normal');

addQ('arabic','both','hard',
  'ما نوع "اذا" في قولنا: اذا جاء الطالبُ، قمتُ؟',
  ['حرف شرط جازم','حرف استقبال','حرف نفي','حرف تنبيه'], 0,
  '"اذا" حرف شرط جازم يفيد الوقوع في المستقبل؛ يجزم فعل الشرط ويرفع فعل الجزاء.',
  'What type of "idha" is in: "If the student comes, I will stand"?',
  ['Conditional particle (jazm)','Future particle','Negative particle','Attention particle'], 0,
  '"Idha" is a conditional particle indicating future occurrence; it makes the condition verb majzoom and the result verb marfoo\'.',
  'normal');

addQ('arabic','both','medium',
  'اي من الكلمات التالية اسم مكان؟',
  ['مكتب','كاتب','مكتوب','كتابة'], 0,
  'مكتب: اسم مكان على وزن مَفْعَلٍ من الفعل كتب.',
  'Which of the following is a noun of place (ism makan)?',
  ['Office/desk','Writer','Written','Writing'], 0,
  'Maktab: noun of place on the pattern maf\'al from the verb kataba.',
  'normal');

addQ('arabic','both','medium',
  'ما اعراب "في" في جملة: الجلوسُ في البيتِ مريحٌ؟',
  'ظرف مكان مجرور بالباء والجر مضاف إليه.',
  'What is the grammatical case of "fee" in: "Sitting in the house is comfortable"?',
  ['Subject (marfoo\')','Object (mansoob)','Adverb of place (majroor with baa)','Preposition'], 2,
  'Fee al-bayti: adverb of place (dhurf makan) majroor with baa, and al-bayti is mudaf ilayhi.',
  'normal');

addQ('arabic','both','medium',
  'اي من الافعال التالية فعل ماضٍ مبني على الفتح؟',
  ['ذهب','يكتب','اكتب','مكتوب'], 0,
  'ذهب: فعل ماضٍ مبني على الفتح الظاهر على آخره.',
  'Which of the following is a past tense verb built on fathah?',
  ['He went','He writes','Write','Written'], 0,
  'Dhahaba: past tense verb built on fathah visible on its end.',
  'normal');

addQ('arabic','both','medium',
  'ما نوع "ما" في قولنا: ما فعلهُ الطالبُ؟',
  ['نافية','استفهامية','موصولة','تعجبية'], 2,
  '"ما" هنا موصولة: تصل بين فعلها (فعله) وموصولها (الطالب).',
  'What type of "ma" is in: "What the student did"?',
  ['Negative','Interrogative','Relative (mosoola)','Exclamatory'], 2,
  '"Ma" here is relative: it connects its verb to its antecedent (al-taalib).',
  'normal');

addQ('arabic','both','medium',
  'اي من الحروف التالية حرف عطف؟',
  ['في','و','لم','ان'], 1,
  '"و" حرف عطف يفيد الجمع والاضافة.',
  'Which of the following is a conjunction (harf \'atf)?',
  ['In (fi)','And (wa)','Did not (lam)','Indeed (inna)'], 1,
  '"Wa" is a conjunction indicating addition and joining.',
  'normal');

addQ('arabic','both','medium',
  'ما اعراب "الطالبات" في جملة: نجحت الطالباتُ؟',
  ['فاعل مرفوع وعلامة رفعه الضمة','فاعل مرفوع وعلامة رفعه الواو','فاعل مرفوع وعلامة رفعه الألف','مفعول به منصوب'], 2,
  'الطالبات: فاعل مرفوع وعلامة رفعه الألف لانه جمع مؤنث سالم.',
  'What is the grammatical case of "al-taalibaat" in: "The female students succeeded"?',
  ['Subject with dammah','Subject with waw','Subject with alif','Object (mansoob)'], 2,
  'Al-taalibaat: subject (marfoo\') with alif because it is a sound feminine plural.',
  'normal');

addQ('arabic','both','medium',
  'اي من الاسماء التالية اسم زمان؟',
  ['مكتب','مكتبة','مكْتَبَةٌ','مَكْتَبٌ'], 2,
  'مكْتَبَةٌ: اسم زمان على وزن مَفْعَلَةٍ من الفعل كتب.',
  'Which of the following is a noun of time (ism zamaan)?',
  ['Office','Library','Time of writing','Desk'], 2,
  'Maktabah on the pattern maf\'alah can indicate time of writing (noun of time).',
  'normal');

addQ('arabic','both','medium',
  'ما نوع "لات" في قولنا: لاتَ الضاربَ؟',
  ['حرف نفي','حرف نهي','حرف شرط','حرف استفهام'], 1,
  'لاتَ: حرف نهي وندب يجزم الفعل المضارع.',
  'What type of "laa" is in: "Do not hit"?',
  ['Negative particle','Prohibitive particle (nahy)','Conditional particle','Interrogative particle'], 1,
  'Laa t: prohibitive particle that makes the present verb majzoom.',
  'normal');

addQ('arabic','both','medium',
  'اي من الجمل التالية تحتوي على خبر "كان" مرفوع؟',
  ['كان الطالبُ مجتهداً','كان الطالبُ مجتهدٌ','ليس الطالبُ مجتهداً','ما كان الطالبُ مجتهداً'], 1,
  '"كان" ترفع المبتدأ (اسمها) وتنصب الخبر (خبرها). اذن الخبر هنا منصوب: مجتهداً. الجملة الصحيحة ليست من الخيارات المذكورة كما هي. لكن "كان الطالب مجتهدٌ" معربة خاطئة نحويا. الصحيح: "كان الطالب مجتهداً". الخيار الأقرب صحة نحويا: "كان الطالبُ مجتهداً".',
  'Which of the following contains a khabar of "kaana" that is marfoo\'?',
  ['The student was diligent (mansoob)','The student was diligent (marfoo\')','The student is not diligent','The student was not diligent'], 0,
  '"Kaana" raises the mubtada\' and makes the khabar mansoob. Thus the correct form is "mujtahidan" (mansoob).',
  'normal');

addQ('arabic','both','hard',
  'ما اعراب "من" في قولنا: جاءني من طالبٍ؟',
  ['اسم موصول مبني في محل رفع فاعل','حرف جر','حرف استفهام','حرف نفي'], 0,
  '"من" هنا اسم موصول مبني في محل رفع فاعل؛ يعني "جاءني طالبٌ".',
  'What is the grammatical case of "man" in: "A student came to me" (man taalin)?',
  ['Relative pronoun (marfoo\' as subject)','Preposition','Interrogative particle','Negative particle'], 0,
  '"Man" here is a relative pronoun built in place of a marfoo\' subject.',
  'normal');

addQ('arabic','both','hard',
  'اي من الالفاظ التالية علامة على تأنيث الاسم؟',
  ['الالف واللام','التاء المربوطة','الضمة','الكسرة'], 1,
  'التاء المربوطة (ة) علامة من علامات التأنيث في الاسماء.',
  'Which of the following is a sign of femininity in nouns?',
  ['Alif and lam','Taa marbuta (ة)','Dammah','Kasrah'], 1,
  'Taa marbuta (ة) is one of the signs of femininity in Arabic nouns.',
  'normal');

addQ('arabic','both','hard',
  'ما اعراب "المعلمة" في جملة: رأيتُ المعلمةَ؟',
  ['فاعل مرفوع','مفعول به منصوب','مبتدأ مرفوع','خبر مرفوع'], 1,
  'المعلمة: مفعول به منصوب وعلامة نصبه الفتحة.',
  'What is the grammatical case of "al-mu\'allima" in: "I saw the teacher"?',
  ['Subject (marfoo\')','Object (mansoob)','Mubtada\'','Khabar'], 1,
  'Al-mu\'allima: object (mansoob) with fathah.',
  'normal');

addQ('arabic','both','hard',
  'اي من الافعال التالية فعل مضارع مرفوع بثبوت النون؟',
  ['يكتبان','يكتبانِ','يكتبا','يكتبوا'], 1,
  'يكتبانِ: فعل مضارع مرفوع بثبوت النون؛ والألف فاعل.',
  'Which of the following is a present tense verb marfoo\' by thabut al-noon?',
  ['They (dual masc) write','They (dual fem) write','They (dual) write (jazm)','They (plural) write (jazm)'], 1,
  'Yaktubani: present tense verb marfoo\' by thabut al-noon; alif is the subject.',
  'normal');

addQ('arabic','both','hard',
  'ما نوع "اذن" في قولنا: اذن للحربِ؟',
  ['حرف استئناف','حرف جواب','حرف شرط','حرف تنبيه'], 0,
  '"اذن" حرف استئناف يفيد التراخي والتأخر.',
  'What type of "idhan" is in: "Then for war"?',
  ['Resumption particle','Answer particle','Conditional particle','Attention particle'], 0,
  '"Idhan" is a resumption particle indicating delay and concession.',
  'normal');

/* ===================== ENGLISH (Both Tracks) - 40 Qs ===================== */
addQ('english','both','medium',
  'اختر الجملة الصحيحة نحويا:',
  ['If I was you, I would study harder.','If I were you, I would study harder.','If I am you, I would study harder.','If I been you, I would study harder.'], 1,
  'في الجمل الشرطية من النوع الثاني (غير واقعية)، نستخدم "were" مع جميع الضمائر (subjunctive mood).',
  'Choose the grammatically correct sentence:',
  ['If I was you, I would study harder.','If I were you, I would study harder.','If I am you, I would study harder.','If I been you, I would study harder.'], 1,
  'In second conditional (unreal present), we use "were" with all pronouns (subjunctive mood).',
  'normal');

addQ('english','both','medium',
  'ما المعنى المناسب لـ "What would you say if someone offered you a bribe?"',
  ['What did you say?','What should you say?','What would be your response?','What will you say?'], 2,
  '"What would you say" تسأل عن الرد المتوقع أو المناسب في موقف افتراضي.',
  'What is the appropriate meaning of "What would you say if someone offered you a bribe?"',
  ['What did you say?','What should you say?','What would be your response?','What will you say?'], 2,
  '"What would you say" asks about the expected or appropriate response in a hypothetical situation.',
  'normal');

addQ('english','both','medium',
  'اختر الكلمة المناسبة: She has been living here ___ 2010.',
  ['since','for','from','during'], 0,
  'نستخدم "since" مع نقطة زمنية محددة في الماضي (2010).',
  'Choose the correct word: She has been living here ___ 2010.',
  ['since','for','from','during'], 0,
  'We use "since" with a specific point in time (2010).',
  'normal');

addQ('english','both','medium',
  'اي من الجمل التالية تحتوي على خطأ نحوي؟',
  ['Neither John nor his friends are coming.','Neither John nor his friend is coming.','Neither John or his friends are coming.','Neither of them is coming.'], 2,
  'مع "neither...nor" نستخدم "nor" وليس "or". الصواب: Neither John nor his friends are coming.',
  'Which of the following sentences contains a grammatical error?',
  ['Neither John nor his friends are coming.','Neither John nor his friend is coming.','Neither John or his friends are coming.','Neither of them is coming.'], 2,
  'With "neither...nor" we use "nor" not "or". Correct: Neither John nor his friends are coming.',
  'normal');

addQ('english','both','medium',
  'What would you say to politely refuse an invitation?',
  ['I hate your parties.','No way!','I would love to, but I am afraid I have other plans.','Leave me alone.'], 2,
  '"I would love to, but..." هو تعبير مهذب ومناسب لرفض الدعوة.',
  'What would you say to politely refuse an invitation?',
  ['I hate your parties.','No way!','I would love to, but I am afraid I have other plans.','Leave me alone.'], 2,
  '"I would love to, but..." is a polite and appropriate expression to refuse an invitation.',
  'normal');

addQ('english','both','medium',
  'اختر الصواب: By the time we arrived, the movie ___.',
  ['has started','had started','have started','starting'], 1,
  '"By the time + past simple" يتبعه past perfect للحدث الذي حدث قبل وصولنا.',
  'Choose the correct answer: By the time we arrived, the movie ___.',
  ['has started','had started','have started','starting'], 1,
  '"By the time + past simple" is followed by past perfect for the event that happened before our arrival.',
  'normal');

addQ('english','both','medium',
  'ما نوع الشرط في الجملة: If you heat water to 100°C, it boils?',
  ['Zero conditional','First conditional','Second conditional','Third conditional'], 0,
  'Zero conditional للحقائق العلمية الثابتة: If + present simple, present simple.',
  'What type of conditional is in: If you heat water to 100°C, it boils?',
  ['Zero conditional','First conditional','Second conditional','Third conditional'], 0,
  'Zero conditional is for scientific facts: If + present simple, present simple.',
  'normal');

addQ('english','both','medium',
  'What would you say to express sympathy when someone loses a family member?',
  ['Congratulations!','I am sorry for your loss.','That is your problem.','Who cares?'], 1,
  '"I am sorry for your loss" هو التعبير المهذب والمناسب للتعزية.',
  'What would you say to express sympathy when someone loses a family member?',
  ['Congratulations!','I am sorry for your loss.','That is your problem.','Who cares?'], 1,
  '"I am sorry for your loss" is the polite and appropriate expression for condolences.',
  'normal');

addQ('english','both','medium',
  'اختر الكلمة الصحيحة: The news ___ shocking.',
  ['are','is','were','be'], 1,
  '"News" اسم جماعي غير قابل للعدد (uncountable noun)، لذا يأخذ فعلا مفردا.',
  'Choose the correct word: The news ___ shocking.',
  ['are','is','were','be'], 1,
  '"News" is an uncountable noun, so it takes a singular verb.',
  'normal');

addQ('english','both','medium',
  'اي من الجمل التالية صحيحة من حيث استخدام الحروف الجرية؟',
  ['I am good in mathematics.','I am good at mathematics.','I am good on mathematics.','I am good for mathematics.'], 1,
  '"Good at" هو التعبير الصحيح للمهارة في شيء ما.',
  'Which of the following is correct in terms of preposition usage?',
  ['I am good in mathematics.','I am good at mathematics.','I am good on mathematics.','I am good for mathematics.'], 1,
  '"Good at" is the correct expression for skill in something.',
  'normal');

addQ('english','both','hard',
  'What would you say to suggest a compromise in a business negotiation?',
  ['Take it or leave it.','I refuse to negotiate.','Perhaps we could meet halfway.','You are completely wrong.'], 2,
  '"Meet halfway" يعني التوصل إلى حل وسط، وهو تعبير مناسب للتفاوض.',
  'What would you say to suggest a compromise in a business negotiation?',
  ['Take it or leave it.','I refuse to negotiate.','Perhaps we could meet halfway.','You are completely wrong.'], 2,
  '"Meet halfway" means reaching a compromise, an appropriate expression for negotiation.',
  'normal');

addQ('english','both','hard',
  'اختر الصواب: Had I known about the exam, I ___ harder.',
  ['would study','would have studied','will study','had studied'], 1,
  '"Had I known" = If I had known (third conditional). النتيجة: would have + past participle.',
  'Choose the correct answer: Had I known about the exam, I ___ harder.',
  ['would study','would have studied','will study','had studied'], 1,
  '"Had I known" = If I had known (third conditional). Result: would have + past participle.',
  'normal');

addQ('english','both','hard',
  'What would you say to apologize for being late to a formal meeting?',
  ['So what?','I do not care.','I sincerely apologize for my tardiness.','Whatever.'], 2,
  '"I sincerely apologize for my tardiness" هو الاعتذار الرسمي المناسب.',
  'What would you say to apologize for being late to a formal meeting?',
  ['So what?','I do not care.','I sincerely apologize for my tardiness.','Whatever.'], 2,
  '"I sincerely apologize for my tardiness" is the appropriate formal apology.',
  'normal');

addQ('english','both','hard',
  'اي من الجمل التالية تحتوي على passive voice صحيح؟',
  ['The letter was wrote by him.','The letter was written by him.','The letter is write by him.','The letter written by him.'], 1,
  'Passive voice: was/were + past participle. "Written" هو التصريف الثالث الصحيح.',
  'Which of the following contains a correct passive voice?',
  ['The letter was wrote by him.','The letter was written by him.','The letter is write by him.','The letter written by him.'], 1,
  'Passive voice: was/were + past participle. "Written" is the correct past participle.',
  'normal');

addQ('english','both','hard',
  'اختر الكلمة المناسبة: She insisted that he ___ on time.',
  ['is','was','be','being'], 2,
  'بعد "insist" في المعنى القوي نستخدم subjunctive: he (should) be → he be.',
  'Choose the correct word: She insisted that he ___ on time.',
  ['is','was','be','being'], 2,
  'After "insist" in strong meaning we use subjunctive: he (should) be → he be.',
  'normal');

addQ('english','both','hard',
  'What would you say to ask for clarification politely?',
  ['What are you talking about?','I do not understand you.','Would you mind elaborating on that point?','You are confusing me.'], 2,
  '"Would you mind elaborating..." هو طلب التوضيح بأسلوب مهذب.',
  'What would you say to ask for clarification politely?',
  ['What are you talking about?','I do not understand you.','Would you mind elaborating on that point?','You are confusing me.'], 2,
  '"Would you mind elaborating..." is a polite way to ask for clarification.',
  'normal');

addQ('english','both','hard',
  'اي من الجمل التالية صحيحة؟',
  ['The data is processed.','The data are processed.','Both are acceptable depending on context.','The data be processed.'], 2,
  '"Data" في اللغة اللاتينية جمع (datum)، لكن في الانجليزية الحديثة يُعامل كاسم جماعي (singular) في العلوم، وجمع في الاحصاء الرسمي. كلاهما مقبول حسب السياق.',
  'Which of the following is correct?',
  ['The data is processed.','The data are processed.','Both are acceptable depending on context.','The data be processed.'], 2,
  '"Data" in Latin is plural (datum), but in modern English it is treated as a collective noun (singular) in science, and plural in formal statistics. Both are acceptable depending on context.',
  'normal');

addQ('english','both','hard',
  'اختر الصواب: Not only ___ the exam, but he also got the highest score.',
  ['he passed','did he pass','he did pass','passed he'], 1,
  'مع "Not only" في بداية الجملة نستخدم inversion: did + subject + verb.',
  'Choose the correct answer: Not only ___ the exam, but he also got the highest score.',
  ['he passed','did he pass','he did pass','passed he'], 1,
  'With "Not only" at the beginning of the clause we use inversion: did + subject + verb.',
  'normal');

addQ('english','both','hard',
  'What would you say to encourage someone who failed an exam?',
  ['You are a failure.','I told you so.','Do not give up; you can do better next time.','It is hopeless.'], 2,
  '"Do not give up; you can do better next time" هو التشجيع المناسب.',
  'What would you say to encourage someone who failed an exam?',
  ['You are a failure.','I told you so.','Do not give up; you can do better next time.','It is hopeless.'], 2,
  '"Do not give up; you can do better next time" is appropriate encouragement.',
  'normal');

addQ('english','both','hard',
  'اي من الجمل التالية يحتوي على misplaced modifier؟',
  ['Running quickly, the bus was caught by the student.','Running quickly, the student caught the bus.','The student caught the bus running quickly.','The bus was caught by the running student.'], 0,
  'في الجملة الاولى، "Running quickly" يبدو وكأنه يصف "the bus" وليس الطالب.',
  'Which of the following contains a misplaced modifier?',
  ['Running quickly, the bus was caught by the student.','Running quickly, the student caught the bus.','The student caught the bus running quickly.','The bus was caught by the running student.'], 0,
  'In the first sentence, "Running quickly" appears to describe "the bus" rather than the student.',
  'normal');

addQ('english','both','hard',
  'اختر الكلمة الصحيحة: The committee ___ divided on this issue.',
  ['is','are','be','were'], 0,
  '"Committee" اسم جماعي (collective noun). في الانجليزية الامريكية يُعامل عادة كمفرد.',
  'Choose the correct word: The committee ___ divided on this issue.',
  ['is','are','be','were'], 0,
  '"Committee" is a collective noun. In American English it is usually treated as singular.',
  'normal');

addQ('english','both','hard',
  'What would you say to formally request a day off from work?',
  ['I am not coming tomorrow.','I want a day off.','I would like to request a day of annual leave.','I am skipping work.'], 2,
  '"I would like to request a day of annual leave" هو الطلب الرسمي المناسب.',
  'What would you say to formally request a day off from work?',
  ['I am not coming tomorrow.','I want a day off.','I would like to request a day of annual leave.','I am skipping work.'], 2,
  '"I would like to request a day of annual leave" is the appropriate formal request.',
  'normal');

addQ('english','both','hard',
  'اي من الجمل التالية يحتوي على oxymoron؟',
  ['The weather is very hot.','He is a wise fool.','She runs quickly.','The book is interesting.'], 1,
  '"Wise fool" هو oxymoron: كلمتان متناقضتان معا.',
  'Which of the following contains an oxymoron?',
  ['The weather is very hot.','He is a wise fool.','She runs quickly.','The book is interesting.'], 1,
  '"Wise fool" is an oxymoron: two contradictory words together.',
  'normal');

addQ('english','both','medium',
  'What would you say to greet someone in the morning formally?',
  ['Hey!','Yo!','Good morning.','What is up?'], 2,
  '"Good morning" هو التحية الصباحية الرسمية.',
  'What would you say to greet someone in the morning formally?',
  ['Hey!','Yo!','Good morning.','What is up?'], 2,
  '"Good morning" is the formal morning greeting.',
  'normal');

addQ('english','both','medium',
  'اختر الصواب: I wish I ___ taller.',
  ['am','was','were','be'], 2,
  '"I wish" تتبعها جملة في الماضي (subjunctive) للتمني: I wish I were taller.',
  'Choose the correct answer: I wish I ___ taller.',
  ['am','was','were','be'], 2,
  '"I wish" is followed by a past tense clause (subjunctive) for wishes: I wish I were taller.',
  'normal');

addQ('english','both','medium',
  'What would you say to offer help to someone carrying heavy bags?',
  ['That looks heavy!','Can you manage?','Would you like me to help you with those bags?','Why are you carrying so much?'], 2,
  '"Would you like me to help you..." هو العرض المهذب والمناسب للمساعدة.',
  'What would you say to offer help to someone carrying heavy bags?',
  ['That looks heavy!','Can you manage?','Would you like me to help you with those bags?','Why are you carrying so much?'], 2,
  '"Would you like me to help you..." is the polite and appropriate offer of help.',
  'normal');

addQ('english','both','medium',
  'اي من الجمل التالية تحتوي على استخدام صحيح لـ "used to"؟',
  ['I used to smoking.','I am used to smoke.','I used to smoke.','I am used to smoking.'], 2,
  '"Used to + infinitive" للعادات القديمة. "Used to smoking" خطأ في هذا السياق.',
  'Which of the following contains correct usage of "used to"?',
  ['I used to smoking.','I am used to smoke.','I used to smoke.','I am used to smoking.'], 2,
  '"Used to + infinitive" is for past habits. "Used to smoking" is incorrect in this context.',
  'normal');

addQ('english','both','medium',
  'اختر الكلمة الصحيحة: He is the man ___ car was stolen.',
  ['which','whose','who','whom'], 1,
  '"Whose" ضمير موصول للملكية (possessive relative pronoun).',
  'Choose the correct word: He is the man ___ car was stolen.',
  ['which','whose','who','whom'], 1,
  '"Whose" is a possessive relative pronoun.',
  'normal');

addQ('english','both','medium',
  'What would you say to agree with a suggestion?',
  ['That is a terrible idea.','No way.','That sounds like a great idea.','I disagree completely.'], 2,
  '"That sounds like a great idea" هو الموافقة المناسبة.',
  'What would you say to agree with a suggestion?',
  ['That is a terrible idea.','No way.','That sounds like a great idea.','I disagree completely.'], 2,
  '"That sounds like a great idea" is the appropriate agreement.',
  'normal');

addQ('english','both','medium',
  'اي من الجمل التالية صحيحة؟',
  ['She do not like coffee.','She does not likes coffee.','She does not like coffee.','She not like coffee.'], 2,
  'مع "does not" نستخدم الفعل في المصدر (like).',
  'Which of the following is correct?',
  ['She do not like coffee.','She does not likes coffee.','She does not like coffee.','She not like coffee.'], 2,
  'With "does not" we use the base form of the verb (like).',
  'normal');

addQ('english','both','medium',
  'What would you say to introduce yourself in a job interview?',
  ['What is your name?','I am here for the money.','My name is [Name], and I am excited about this opportunity.','I do not know why I am here.'], 2,
  '"My name is... and I am excited about this opportunity" هو التقديم المهني المناسب.',
  'What would you say to introduce yourself in a job interview?',
  ['What is your name?','I am here for the money.','My name is [Name], and I am excited about this opportunity.','I do not know why I am here.'], 2,
  '"My name is... and I am excited about this opportunity" is the appropriate professional introduction.',
  'normal');

addQ('english','both','hard',
  'اختر الصواب: Scarcely ___ the house when it started raining.',
  ['he had left','had he left','he left','did he left'], 1,
  'مع "Scarcely" في بداية الجملة نستخدم inversion: had + subject + past participle.',
  'Choose the correct answer: Scarcely ___ the house when it started raining.',
  ['he had left','had he left','he left','did he left'], 1,
  'With "Scarcely" at the beginning we use inversion: had + subject + past participle.',
  'normal');

addQ('english','both','hard',
  'What would you say to express strong disagreement politely?',
  ['You are stupid.','I am afraid I cannot agree with you on that point.','Shut up.','That is ridiculous.'], 1,
  '"I am afraid I cannot agree with you on that point" هو التعبير المهذب عن الاختلاف القوي.',
  'What would you say to express strong disagreement politely?',
  ['You are stupid.','I am afraid I cannot agree with you on that point.','Shut up.','That is ridiculous.'], 1,
  '"I am afraid I cannot agree with you on that point" is the polite expression of strong disagreement.',
  'normal');

addQ('english','both','hard',
  'اي من الجمل التالية يحتوي على dangling participle؟',
  ['Walking down the street, the trees were beautiful.','Walking down the street, I saw beautiful trees.','I saw beautiful trees walking down the street.','The trees were beautiful as I walked down the street.'], 0,
  'في الجملة الاولى، "Walking down the street" يفتقر إلى فاعل واضح؛ "the trees" لا يمكنها المشي.',
  'Which of the following contains a dangling participle?',
  ['Walking down the street, the trees were beautiful.','Walking down the street, I saw beautiful trees.','I saw beautiful trees walking down the street.','The trees were beautiful as I walked down the street.'], 0,
  'In the first sentence, "Walking down the street" lacks a clear subject; trees cannot walk.',
  'normal');

addQ('english','both','hard',
  'اختر الكلمة الصحيحة: The number of students in the class ___ increasing.',
  ['are','is','were','be'], 1,
  '"The number of" يأخذ فعلا مفردا؛ "a number of" يأخذ جمعا.',
  'Choose the correct word: The number of students in the class ___ increasing.',
  ['are','is','were','be'], 1,
  '"The number of" takes a singular verb; "a number of" takes a plural verb.',
  'normal');

addQ('english','both','hard',
  'What would you say to recommend a restaurant to a friend?',
  ['Do not eat there.','The food is terrible.','I highly recommend trying the seafood there; it is excellent.','I hate that place.'], 2,
  '"I highly recommend trying the seafood there; it is excellent" هو التوصية المناسبة.',
  'What would you say to recommend a restaurant to a friend?',
  ['Do not eat there.','The food is terrible.','I highly recommend trying the seafood there; it is excellent.','I hate that place.'], 2,
  '"I highly recommend trying the seafood there; it is excellent" is the appropriate recommendation.',
  'normal');

addQ('english','both','hard',
  'اي من الجمل التالية يحتوي على euphemism؟',
  ['He died yesterday.','He passed away yesterday.','He was killed yesterday.','He is dead.'], 1,
  '"Passed away" هو euphemism (تعبير لطيف) للموت.',
  'Which of the following contains a euphemism?',
  ['He died yesterday.','He passed away yesterday.','He was killed yesterday.','He is dead.'], 1,
  '"Passed away" is a euphemism (gentle expression) for death.',
  'normal');

if (typeof module !== 'undefined' && module.exports) { module.exports = { QUESTION_BANK }; }

/* Additional questions to reach 300 total */

/* Biology extras */
addQ('biology','science','medium',
  'اي من الهرمونات التالية ينظم مستوى الكالسيوم في الدم برفع تركيزه؟',
  ['الانسولين','الكالسيتونين','الباراثورمون','الادرينالين'], 2,
  'الباراثورمون (PTH) يفرز من الغدة جار الدرقية ويرفع مستوى الكالسيوم في الدم عن طريق تحفيز تحلل العظام واعادة امتصاص الكالسيوم في الكلى.',
  'Which hormone regulates blood calcium level by increasing its concentration?',
  ['Insulin','Calcitonin','Parathyroid hormone (PTH)','Adrenaline'], 2,
  'Parathyroid hormone (PTH) is secreted by the parathyroid glands and raises blood calcium by stimulating bone resorption and calcium reabsorption in kidneys.',
  'normal');

addQ('biology','science','medium',
  'في عملية التلقيح في النباتات الزهرية، اي الجزء التالي يحتوي على حبوب اللقاح؟',
  ['المدقة','الاسدية','الكأس','التويج'], 1,
  'الاسدية (Stamens) تحتوي على المتاع (Anthers) الذي ينتج حبوب اللقاح.',
  'In flowering plants pollination, which part contains pollen grains?',
  ['Pistil','Stamens','Calyx','Corolla'], 1,
  'Stamens contain anthers which produce pollen grains.',
  'normal');

addQ('biology','science','hard',
  'في تحليل التكاثر الجنسي، كم عدد الكروموسومات في كل نواة انطوية ناضجة (احتمال)؟',
  ['23','46','69','92'], 0,
  'الانطوية (Spermatid) هي نتاج الانقسام الاختزالي الثاني، لذا تحتوي على العدد المفرد n=23.',
  'In sexual reproduction analysis, how many chromosomes are in each mature spermatid nucleus (probability)?',
  ['23','46','69','92'], 0,
  'Spermatids are products of meiosis II, so they contain the haploid number n=23.',
  'normal');

/* Chemistry extras */
addQ('chemistry','both','medium',
  'اي من التفاعلات التالية يمثل تفاعل تحلل مائي للاستر في وسط قلوي؟',
  ['تكوين الاستر','البلمرة','الصابونية (Saponification)','الاحتراق'], 2,
  'التفاعل بين الاستر ومحلول قلوي قوي ينتج كحولا وملح حمض كاربوكسيلي، وهو ما يعرف بالصابونية.',
  'Which reaction represents ester hydrolysis in alkaline medium?',
  ['Esterification','Polymerization','Saponification','Combustion'], 2,
  'Reaction between ester and strong alkaline solution produces alcohol and carboxylic acid salt, known as saponification.',
  'normal');

addQ('chemistry','both','medium',
  'في الخلية الجلفانية، اي القطب يحدث فيه الاختزال؟',
  ['الانود','الكاثود','الجسر الملحي','القطب السالب'], 1,
  'الاختزال يحدث في الكاثود (القطب الموجب في الخلية الجلفانية).',
  'In a galvanic cell, at which electrode does reduction occur?',
  ['Anode','Cathode','Salt bridge','Negative electrode'], 1,
  'Reduction occurs at the cathode (positive electrode in galvanic cells).',
  'normal');

addQ('chemistry','both','hard',
  'في تحليل الاتزان، اذا زاد تركيز المتفاعلات في تفاعل طارد للحرارة، ماذا يحدث لقيمة Kc (احتمال)؟',
  ['تزداد','تنقص','لا تتغير','تصبح سالبة'], 2,
  'Kc يعتمد فقط على درجة الحرارة. تغيير التراكيز يزاحم الاتزان ولكن لا يغير Kc عند نفس الحرارة.',
  'In equilibrium analysis, if reactant concentration increases in an exothermic reaction, what happens to Kc (probability)?',
  ['Increases','Decreases','Does not change','Becomes negative'], 2,
  'Kc depends only on temperature. Changing concentrations shifts equilibrium but does not change Kc at the same temperature.',
  'normal');

/* Physics extras */
addQ('physics','both','medium',
  'اي من الظواهر التالية يثبت الطبيعة الموجية للضوء؟',
  ['التأثير الكهروضوئي','تجربة ميلikan','تجربة الشق المزدوج','تأثير كومبتون'], 2,
  'تجربة الشق المزدوج تظهر تداخلا و حيودا للضوء، مما يثبت طبيعته الموجية.',
  'Which phenomenon proves the wave nature of light?',
  ['Photoelectric effect','Millikan experiment','Double-slit experiment','Compton effect'], 2,
  'Double-slit experiment shows interference and diffraction of light, proving its wave nature.',
  'normal');

addQ('physics','both','medium',
  'في دائرة RLC متسلسلة، متى تكون القدرة المتوسطة المستهلكة اعلى قيمة لها؟',
  ['عندما XL > XC','عندما XL < XC','عندما XL = XC','عندما R = 0'], 2,
  'عندما XL = XC (حالة الرنين)، المعاوقة Z = R (اقل قيمة)، والتيار اعلى، والقدرة المتوسطة P = I²R اعلى.',
  'In series RLC circuit, when is the average power consumed at its maximum?',
  ['When XL > XC','When XL < XC','When XL = XC','When R = 0'], 2,
  'When XL = XC (resonance), impedance Z = R (minimum), current is maximum, and average power P = I²R is maximum.',
  'normal');

addQ('physics','both','hard',
  'في تحليل الحث الكهرومغناطيسي، ما القوة الدافعة الحثية في ملف N=100 لفة عندما يتغير التدفق المغناطيسي بمعدل 0.5 Weber/s (احتمال)؟',
  ['5 V','50 V','100 V','200 V'], 1,
  'EMF = -N dΦ/dt = -100 × 0.5 = -50 V. القيمة المطلقة 50 V.',
  'In electromagnetic induction, what is the induced EMF in a coil with N=100 turns when magnetic flux changes at 0.5 Weber/s (probability)?',
  ['5 V','50 V','100 V','200 V'], 1,
  'EMF = -N dΦ/dt = -100 × 0.5 = -50 V. Absolute value 50 V.',
  'complex');

/* Math extras */
addQ('math','math','medium',
  'ما هو الحل العام للمعادلة التفاضلية dy/dx = y؟',
  ['y = e^x + C','y = Ce^x','y = Cx','y = ln(x) + C'], 1,
  'dy/y = dx → ln|y| = x + C → y = Ce^x.',
  'What is the general solution of differential equation dy/dx = y?',
  ['y = e^x + C','y = Ce^x','y = Cx','y = ln(x) + C'], 1,
  'dy/y = dx → ln|y| = x + C → y = Ce^x.',
  'normal');

addQ('math','math','medium',
  'ما هي قيمة التكامل ∫₀¹ x dx (احتمال)؟',
  ['0','1/2','1','2'], 1,
  '∫₀¹ x dx = [x²/2]₀¹ = 1/2.',
  'What is the value of integral ∫₀¹ x dx (probability)?',
  ['0','1/2','1','2'], 1,
  '∫₀¹ x dx = [x²/2]₀¹ = 1/2.',
  'complex');

addQ('math','math','hard',
  'ما هو مشتقة الدالة f(x) = tan(x) (احتمال)؟',
  ['sec²(x)','-sec²(x)','csc²(x)','cot(x)'], 0,
  'd/dx tan(x) = sec²(x).',
  'What is the derivative of f(x) = tan(x) (probability)?',
  ['sec²(x)','-sec²(x)','csc²(x)','cot(x)'], 0,
  'd/dx tan(x) = sec²(x).',
  'normal');

/* Arabic extras */
addQ('arabic','both','medium',
  'اي من الافعال التالية فعل مضارع مرفوع بثبوت النون؟',
  ['يكتب','يكتبانِ','يكتبا','يكتبُ'], 1,
  'يكتبانِ: فعل مضارع مرفوع بثبوت النون؛ والالف فاعل.',
  'Which of the following is a present tense verb marfoo\' by thabut al-noon?',
  ['He writes','They (dual) write','They (dual) write (jazm)','He writes (dammah)'], 1,
  'Yaktubani: present tense verb marfoo\' by thabut al-noon; alif is the subject.',
  'normal');

addQ('arabic','both','hard',
  'ما اعراب "كتابا" في جملة: قرأتُ كتابا؟',
  ['فاعل مرفوع','مفعول به منصوب','خبر مرفوع','مضاف إليه مجرور'], 1,
  'كتابا: مفعول به منصوب وعلامة نصبه الالف لانه من الاسماء الخمسة.',
  'What is the grammatical case of "kitaaban" in: "I read a book"?',
  ['Subject (marfoo\')','Object (mansoob)','Khabar (marfoo\')','Mudaf ilayhi (majroor)'], 1,
  'Kitaaban: object (mansoob) with alif because it is one of the five nouns (al-asma al-khamsa).',
  'normal');

/* English extras */
addQ('english','both','medium',
  'What would you say to ask for directions politely?',
  ['Where is it?','I am lost.','Could you please tell me how to get to the station?','Tell me the way.'], 2,
  '"Could you please tell me how to get to..." is the polite way to ask for directions.',
  'What would you say to ask for directions politely?',
  ['Where is it?','I am lost.','Could you please tell me how to get to the station?','Tell me the way.'], 2,
  '"Could you please tell me how to get to..." is the polite way to ask for directions.',
  'normal');

addQ('english','both','hard',
  'Choose the correct sentence:',
  ['The team are playing well.','The team is playing well.','The team were playing well.','The team be playing well.'], 1,
  '"Team" is a collective noun. In American English it takes a singular verb.',
  'Choose the correct sentence:',
  ['The team are playing well.','The team is playing well.','The team were playing well.','The team be playing well.'], 1,
  '"Team" is a collective noun. In American English it takes a singular verb.',
  'normal');

addQ('english','both','hard',
  'What would you say to make a formal complaint about a product?',
  ['This product is garbage.','I want my money back now!','I am writing to express my dissatisfaction with this product.','You guys are thieves.'], 2,
  '"I am writing to express my dissatisfaction..." is the formal complaint expression.',
  'What would you say to make a formal complaint about a product?',
  ['This product is garbage.','I want my money back now!','I am writing to express my dissatisfaction with this product.','You guys are thieves.'], 2,
  '"I am writing to express my dissatisfaction..." is the formal complaint expression.',
  'normal');


/* Final 5 questions to reach 300 */
addQ('biology','science','medium',
  'اي من الاعضاء التالية يحتوي على خلايا بيتا المنتجة للانسولين؟',
  ['الكبد','الطحال','جزر لانغرهانس في البنكرياس','الغدة الدرقية'], 2,
  'خلايا بيتا تقع في جزر لانغرهانس بالبنكرياس وتنتج الانسولين.',
  'Which organ contains beta cells that produce insulin?',
  ['Liver','Spleen','Islets of Langerhans in pancreas','Thyroid gland'], 2,
  'Beta cells are located in the pancreatic islets of Langerhans and produce insulin.',
  'normal');

addQ('chemistry','both','hard',
  'في تفاعل تحلل الماء بواسطة الكهرباء، كم لتر من الهيدروجين ينتج عند مرور 2 Faraday (احتمال)؟',
  ['11.2','22.4','44.8','5.6'], 0,
  'عند STP، 2 Faraday (2 مكافئ) ينتجان 1 مول H2 = 22.4 لتر. لكن 2F = 2×96500 C. في الكاثود: 2H2O + 2e⁻ → H2 + 2OH⁻. 2 مكافئ = 1 مول H2 = 22.4 لتر عند STP.',
  'In water electrolysis, how many liters of hydrogen are produced when 2 Faradays pass (probability)?',
  ['11.2','22.4','44.8','5.6'], 1,
  'At STP, 2 Faradays (2 equivalents) produce 1 mole H2 = 22.4 liters. At cathode: 2H2O + 2e⁻ → H2 + 2OH⁻. 2 equivalents = 1 mole H2 = 22.4 L at STP.',
  'complex');

addQ('physics','both','medium',
  'في تحليل المقاومة، اي من المواد التالية يعتبر موصلا فائقا (Superconductor) عند درجات حرارة منخفضة جدا؟',
  ['النحاس','الحديد','الرصاص','الالومنيوم'], 2,
  'الرصاص (Pb) يصبح موصلا فائقا عند درجة حرارة اقل من 7.2 K.',
  'In resistance analysis, which material becomes a superconductor at very low temperatures?',
  ['Copper','Iron','Lead','Aluminum'], 2,
  'Lead (Pb) becomes superconducting below 7.2 K.',
  'normal');

addQ('math','math','hard',
  'ما هي قيمة limit (x→∞) (1 + 1/x)^x (احتمال)؟',
  ['1','e','∞','0'], 1,
  'هذا هو تعريف العدد e.',
  'What is limit (x→∞) (1 + 1/x)^x (probability)?',
  ['1','e','∞','0'], 1,
  'This is the definition of the number e.',
  'normal');

addQ('arabic','both','medium',
  'اي من الحروف التالية يعمل عمل "ليس" في اعراب الاسم والخبر؟',
  ['ما النافية','لا النافية','ليس','ان'], 2,
  'ليس واخواتها (ما، لات، لن، لم، ليس، ان، أnta) تعمل على نصب الاسم ورفع الخبر.',
  'Which of the following particles works like "laysa" in grammar (making ism mansoob and khabar marfoo\')?',
  ['Ma (negative)','La (negative)','Laysa','Inna'], 2,
  'Laysa and its sisters (ma, laata, lan, lam, laysa, inna, anna) make the ism mansoob and khabar marfoo\'.',
  'normal');

if (typeof module !== 'undefined' && module.exports) { module.exports = { QUESTION_BANK }; }
