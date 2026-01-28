import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";
const articles = [
  {
    id: 1,
    slug: "mastering-golden-hour-photography",
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    excerpt:
      "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    content: `الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.

## لماذا الساعة الذهبية؟
الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.

## التحضير المسبق
خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.

## إعدادات الكاميرا
استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.

## التكوين الفني
ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.

## الخلاصة
الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.`,
    category: "إضاءة",
    author: {
      name: "سالم أحمد",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "مصور محترف",
    },
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
    date: "2026-01-15",
    readTime: "8 دقائق للقراءة",
    featured: true,
    tags: ["إضاءة", "الساعة الذهبية", "تصوير خارجي"],
  },
  {
    id: 2,
    slug: "portrait-photography-secrets",
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    excerpt:
      "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    content: `تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.

## التواصل مع الموضوع
قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.

## اختيار العدسة المناسبة
عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.

## الإضاءة الطبيعية
النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.

## التركيز على العيون
العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.

## الخلفية والتكوين
اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.

## الخلاصة
البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.`,
    category: "بورتريه",
    author: {
      name: "محمد علي",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      role: "مصور بورتريه",
    },
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "2026-01-12",
    readTime: "6 دقائق للقراءة",
    featured: true,
    tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"],
  },
  {
    id: 3,
    slug: "landscape-photography-guide",
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    excerpt:
      "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    content: `تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.

## المعدات الأساسية
حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.

## توقيت التصوير
الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.

## التكوين الفني
ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.

## إعدادات الكاميرا
فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.

## المعالجة اللاحقة
صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.

## الخلاصة
تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.`,
    category: "مناظر طبيعية",
    author: {
      name: "إبراهيم حسن",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "مصور طبيعة",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    date: "2026-01-10",
    readTime: "10 دقائق للقراءة",
    featured: true,
    tags: ["مناظر طبيعية", "تصوير خارجي", "طبيعة"],
  },
  {
    id: 4,
    slug: "camera-settings-basics",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    excerpt:
      "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
    content: `مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.

## فتحة العدسة (Aperture)
فتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.

## سرعة الغالق (Shutter Speed)
سرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.

## حساسية ISO
ISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.

## التوازن بين الثلاثة
هذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.

## نصائح عملية
ابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.

## الخلاصة
إتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.`,
    category: "تقنيات",
    author: {
      name: "داود خالد",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      role: "مدرب تصوير",
    },
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
    date: "2026-01-08",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["إعدادات الكاميرا", "مبتدئين", "تقنيات"],
  },
  {
    id: 5,
    slug: "photo-composition-rules",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    excerpt:
      "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    content: `التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.

## قاعدة الأثلاث
قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.

## الخطوط التوجيهية
استخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.

## الإطار داخل الإطار
استخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.

## التماثل والأنماط
التماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.

## المساحة السلبية
لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.

## كسر القواعد
اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.

## الخلاصة
التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.`,
    category: "تقنيات",
    author: {
      name: "ليث محمود",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
    date: "2026-01-05",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["تكوين", "قواعد التصوير", "فن"],
  },
  {
    id: 6,
    slug: "mobile-photography-tips",
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    excerpt:
      "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    content: `أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.

## نظّف العدسة
أبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.

## استخدم الإضاءة الطبيعية
كاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.

## ثبّت يدك
الاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.

## تجنب التكبير الرقمي
التكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.

## جرب تطبيقات التصوير
تطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.

## التكوين مهم
فعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.

## الخلاصة
هاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.`,
    category: "معدات",
    author: {
      name: "جمال عبدالله",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      role: "مصور ومراجع تقني",
    },
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    date: "2026-01-03",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تصوير الهاتف", "نصائح", "مبتدئين"],
  },
  {
    id: 14,
    slug: "long-exposure-photography",
    title: "التعريض الطويل: كيف تصور الحركة والزمن",
    excerpt:
      "تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",
    content:
      "التعريض الطويل يحول الثواني إلى لوحات فنية. الماء يصبح حريراً، السيارات خطوطاً ضوئية، والغيوم أشرطة في السماء.\n\n## المعدات الضرورية\n\nحامل ثلاثي ثابت أساسي. فلاتر ND لتقليل الضوء في النهار. جهاز تحكم عن بعد لتجنب اهتزاز الكاميرا.\n\n## حساب التعريض\n\nفلتر ND 10 stops يمدد التعريض 1000 مرة. إذا كان التعريض الطبيعي 1/125، يصبح 8 ثوانٍ. استخدم تطبيقات الحساب.\n\n## مواضيع مثالية\n\nالشلالات والأنهار تتحول لحرير. أضواء السيارات تخلق خطوطاً. الغيوم المتحركة تضيف دراما. البحر يصبح ضباباً.\n\n## التركيز قبل الفلتر\n\nركز قبل وضع فلتر ND الداكن. الكاميرا لا ترى من خلاله. استخدم التركيز اليدوي ولا تغيره بعد وضع الفلتر.\n\n## التجربة والتعلم\n\nلا يوجد تعريض مثالي لكل مشهد. جرب أوقاتاً مختلفة. راجع النتائج على الشاشة. عدّل وكرر.\n\n## الإبداع بلا حدود\n\nجرب التصوير في أوقات مختلفة: غروب الشمس، الساعة الزرقاء، الليل. كل وقت يعطي نتائج مختلفة.\n\n## الخلاصة\n\nالتعريض الطويل يعلمك رؤية العالم بطريقة مختلفة. الزمن يصبح مادة تشكلها بإبداعك.",
    category: "إضاءة",
    author: {
      name: "باسم المصري",
      avatar:
        "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
      role: "مصور فني",
    },
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
    date: "2025-12-12",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تعريض طويل", "ND فلتر", "إبداع"],
  },
  {
    id: 8,
    slug: "street-photography-guide",
    title: "تصوير الشارع: فن التقاط الحياة اليومية",
    excerpt:
      "اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",
    content:
      "تصوير الشارع هو فن التقاط الحياة كما هي. لحظات عابرة، تعبيرات صادقة، وقصص إنسانية تحدث أمامنا كل يوم.\n\n## الكاميرا المناسبة\n\nالكاميرا الصغيرة غير الملفتة أفضل. الهاتف الذكي أو كاميرا ميرورليس صغيرة. تجنب المعدات الضخمة التي تجذب الانتباه.\n\n## كن غير مرئي\n\nارتدِ ملابس عادية. تحرك ببطء وثقة. لا تتصرف كمصور - كن جزءاً من المشهد. الناس يتجاهلون من يبدو طبيعياً.\n\n## التوقع والصبر\n\nالصورة الرائعة تتطلب انتظار اللحظة المناسبة. ابحث عن إضاءة جميلة أو خلفية مثيرة، ثم انتظر دخول الشخص المناسب.\n\n## احترام الخصوصية\n\nتصوير الشارع ليس تطفلاً. كن محترماً. إذا طلب شخص عدم تصويره، احترم رغبته. تجنب تصوير الأطفال بدون إذن.\n\n## سرد القصص\n\nالصورة الجيدة تحكي قصة. ابحث عن التفاعلات البشرية، التناقضات، والمشاعر. السياق والبيئة جزء من القصة.\n\n## الشجاعة\n\nالخوف من الاقتراب طبيعي لكنه عائق. كلما اقتربت، كانت الصورة أقوى. تدرب حتى يصبح الاقتراب طبيعياً.\n\n## الخلاصة\n\nتصوير الشارع يعلمك رؤية الجمال في العادي. اخرج بكاميرتك اليوم واستكشف مدينتك بعيون جديدة.",
    category: "بورتريه",
    author: {
      name: "نادر سعيد",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
      role: "مصور شوارع",
    },
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",
    date: "2025-12-28",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["تصوير شوارع", "توثيق", "حياة يومية"],
  },
  {
    id: 9,
    slug: "food-photography-basics",
    title: "تصوير الطعام: كيف تجعل أطباقك تبدو شهية",
    excerpt:
      "تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",
    content:
      "تصوير الطعام فن يجمع بين الطهي والتصوير. الهدف هو جعل المشاهد يشتهي الطبق من خلال الصورة وحدها.\n\n## الإضاءة الطبيعية\n\nالضوء الطبيعي الناعم هو الأفضل لتصوير الطعام. ضع الطبق بالقرب من نافذة كبيرة. استخدم عاكساً أبيض لملء الظلال.\n\n## زوايا التصوير\n\nثلاث زوايا رئيسية: من الأعلى مباشرة (90°) للأطباق المسطحة، 45° للأطباق ذات الارتفاع، ومستوى العين للمشروبات والطبقات.\n\n## تنسيق الطبق\n\nالتقديم مهم جداً. استخدم أطباق بسيطة لا تنافس الطعام. أضف عناصر ديكور مكملة: أعشاب طازجة، قماش، أدوات خشبية.\n\n## الألوان المتناسقة\n\nالألوان تؤثر على الشهية. الأخضر والأحمر يعززان الشهية. الأزرق يقللها. اختر ألوان الخلفية والإكسسوارات بعناية.\n\n## السرعة مهمة\n\nالطعام يفقد جاذبيته بسرعة. الآيس كريم يذوب، البخار يختفي. جهز كل شيء مسبقاً وصوّر بسرعة.\n\n## الخدع الاحترافية\n\nرشة ماء على الخضار تجعلها طازجة. الزيت يعطي لمعاناً. بخاخ الجلسرين يخلق قطرات ماء ثابتة.\n\n## الخلاصة\n\nتصوير الطعام يتطلب ممارسة. ابدأ بوجباتك اليومية وطور مهاراتك تدريجياً.",
    category: "تقنيات",
    author: {
      name: "هاني الشمري",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
      role: "مصور طعام",
    },
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",
    date: "2025-12-25",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تصوير طعام", "تنسيق", "إضاءة"],
  },
  {
    id: 10,
    slug: "wildlife-photography-tips",
    title: "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",
    excerpt:
      "دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",
    content:
      "تصوير الحياة البرية تحدٍ مثير يجمع بين المغامرة والفن. كل صورة ناجحة هي نتيجة ساعات من الانتظار والصبر.\n\n## المعدات الأساسية\n\nعدسة تليفوتو طويلة (200-600mm) ضرورية للاقتراب دون إزعاج الحيوانات. حامل أحادي أو ثلاثي للثبات. كاميرا سريعة في التركيز.\n\n## فهم سلوك الحيوان\n\nادرس الحيوان الذي تريد تصويره. اعرف أوقات نشاطه، أماكن تواجده، وسلوكياته. هذه المعرفة توقعك للحظة المثالية.\n\n## الصبر والانتظار\n\nالحياة البرية لا تنتظرك. قد تقضي ساعات دون نتيجة. استمتع بالوقت في الطبيعة واعتبر كل لقطة مكافأة.\n\n## احترام الحيوانات\n\nلا تقترب كثيراً. لا تطعم الحيوانات. لا تزعجها لتحصل على صورة. رفاهية الحيوان أهم من أي صورة.\n\n## الإضاءة والتوقيت\n\nالصباح الباكر والمساء أفضل الأوقات. الحيوانات أكثر نشاطاً والضوء أجمل. تجنب منتصف النهار.\n\n## إعدادات الكاميرا\n\nسرعة غالق عالية (1/500 أو أسرع) لتجميد الحركة. تركيز مستمر (AF-C) لمتابعة الحيوان. وضع التصوير المتتابع للحظات السريعة.\n\n## الخلاصة\n\nتصوير الحياة البرية رحلة طويلة من التعلم. كل يوم في الطبيعة يعلمك شيئاً جديداً عن عالم الحيوان.",
    category: "مناظر طبيعية",
    author: {
      name: "عمر الراشد",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
      role: "مصور حياة برية",
    },
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",
    date: "2025-12-22",
    readTime: "10 دقائق للقراءة",
    featured: false,
    tags: ["حياة برية", "طبيعة", "حيوانات"],
  },
  {
    id: 12,
    slug: "photo-editing-lightroom",
    title: "أساسيات تعديل الصور في Lightroom",
    excerpt:
      "تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",
    content:
      "Lightroom هو المعيار الذهبي لتعديل الصور. سواء كنت مبتدئاً أو محترفاً، هذا البرنامج يوفر كل ما تحتاجه.\n\n## استيراد وتنظيم\n\nابدأ بإنشاء نظام تنظيم فعال. استخدم الكلمات المفتاحية، التقييمات، والمجموعات. التنظيم الجيد يوفر ساعات لاحقاً.\n\n## التعديلات الأساسية\n\nابدأ بتصحيح التعريض وتوازن اللون الأبيض. ثم التباين والإبرازات والظلال. هذه التعديلات الأساسية تحسن معظم الصور.\n\n## منحنى الدرجات\n\nأداة قوية للتحكم الدقيق في التباين والألوان. منحنى S الخفيف يضيف عمقاً. تعلم استخدام منحنيات RGB الفردية.\n\n## HSL والألوان\n\nتحكم في كل لون على حدة: تشبعه، سطوعه، وتدرجه. هذا يعطيك سيطرة إبداعية كاملة على مظهر الصورة.\n\n## الحدة وتقليل الضوضاء\n\nكل صورة تحتاج قدراً من الحدة. قلل الضوضاء في صور ISO العالي. التوازن مهم - لا تفرط.\n\n## الأسلوب الشخصي\n\nطور أسلوباً بصرياً مميزاً. احفظه كـ Preset واستخدمه كنقطة بداية. أسلوبك يميز عملك عن الآخرين.\n\n## الخلاصة\n\nتعديل الصور جزء أساسي من التصوير الرقمي. تعلم Lightroom استثمار سيرافقك طوال رحلتك الفوتوغرافية.",
    category: "معدات",
    author: {
      name: "سامي الحربي",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
      role: "خبير تعديل صور",
    },
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",
    date: "2025-12-18",
    readTime: "12 دقائق للقراءة",
    featured: false,
    tags: ["Lightroom", "تعديل صور", "برامج"],
  },
];
export default function BlogDetails() {
  const { id } = useParams();
  console.log("id", id);

  const blogs = articles.find((article) => article.id === parseInt(id));
  const otherBlogs = articles.filter(
    (article) =>
      article.id !== parseInt(id) && article.category === blogs.category,
  );
  console.log("otherBlogs", otherBlogs);

  console.log("BlogDetails id:", blogs);
  function parseText(text) {
    const lines = text.split("\n");
    const object = { title: "", sections: [] };
    let currentSection = null;

    lines.forEach((line) => {
      line = line.trim();
      if (!line) return;

      if (!object.title) {
        object.title = line;
      } else if (line.startsWith("## ")) {
        currentSection = { name: line.replace("## ", ""), description: "" };
        object.sections.push(currentSection);
      } else if (currentSection) {
        currentSection.description += line;
      }
    });

    return object;
  }
  const blogContent = parseText(blogs.content);
  console.log("blogContent", blogContent);

  return (
    <>
      <div
        className="position-relative"
        style={{ height: "60vh", minHeight: "500px", overflow: "hidden" }}
      >
        <img
          src={blogs.image}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.3), transparent)",
          }}
        ></div>

        <div
          className="position-absolute"
          style={{ top: "100px", right: "50px" }}
        >
          <nav
            className="rounded-pill text-white d-inline-flex align-items-center gap-2 px-3 py-2 bg-dark bg-opacity-50 "
            style={{ backdropFilter: "blur(8px)" }}
          >
            <Link to="/" className="text-white-50 text-decoration-none">
              <i className="fas fa-home"></i>
            </Link>
            <i className="fas fa-chevron-left text-white-25 small"></i>
            <Link to="/blog" className="text-white-50 text-decoration-none">
              المدونة
            </Link>
            <i className="fas fa-chevron-left text-white-25 small"></i>
            <span className=" fw-medium" style={{ color: "#ea580c" }}>
              {blogs.category}
            </span>
          </nav>
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <Link
                to={"/blog/category/" + blogs.category}
                className="btn btn-warning btn-sm fw-bold rounded-pill px-3 py-1"
              >
                {blogs.category}
              </Link>
              <div className="d-flex gap-4 text-white-50 small">
                <span className="d-flex align-items-center gap-2">
                  <i className="far fa-calendar"></i>
                  {new Date(blogs.date).toLocaleDateString("ar-EG-u-nu-arab", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="d-flex align-items-center gap-2">
                  <i className="far fa-clock"></i> {blogs.readTime}
                </span>
              </div>
            </div>

            <h1
              className="text-white fw-bold mb-3"
              style={{ fontSize: "calc(1.5rem + 2vw)" }}
            >
              {blogs.title}
            </h1>

            <div
              className="d-flex gap-3 p-3 bg-white bg-opacity-10 rounded-3"
              style={{ width: "fit-content" }}
            >
              <img
                src={blogs.author.avatar}
                className="rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  border: "2px solid #ea580c",
                }}
              />
              <div>
                <p className="mb-0 fw-bold text-white">{blogs.author.name}</p>
                <p className="mb-0 text-white-50 small">{blogs.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="p-4 mb-4 rounded-3 border blog-header">
              <p className="fs-6 fst-italic">{blogs.excerpt}</p>
            </div>
            <p
              className="mt-5 text-light"
              style={{ fontSize: 18, fontWeight: 400 }}
            >
              {blogContent.title}
            </p>

            <article className="px-5 px-lg-0">
              {blogContent.sections.map((section, index) => (
                <section
                  id={`section-${index}`}
                  className="mt-5"
                  style={{ scrollMarginTop: "10rem" }}
                >
                  <h2 className="d-flex align-items-center gap-3 fw-bold text-white mt-4 f-30">
                    <span
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(255, 165, 0, 0.1)",
                        border: "1px solid rgba(255, 165, 0, 0.3)",
                      }}
                    >
                      <i
                        className="fa-solid fa-camera fs-4"
                        style={{ color: "#ea580c" }}
                      ></i>
                    </span>
                    {section.name}
                  </h2>
                  <p className="fs-5 mb-4 f-18" style={{ color: "#BAD4D4" }}>
                    {section.description}
                  </p>
                </section>
              ))}
            </article>

            <div className="mt-5 p-4 border rounded content">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span
                  className="d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(255, 165, 0, 0.1)",
                    border: "1px solid rgba(255, 165, 0, 0.3)",
                  }}
                >
                  <i
                    className="fa-solid fa-tags fs-5"
                    style={{ color: "#ea580c" }}
                  ></i>
                </span>
                <h5 className="text-white">الوسوم</h5>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {blogs.tags.map((tag) => (
                  <span className="badge rounded-pill tag px-3 py-2">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 p-4 rounded-3 border border-secondary share-article content">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center rounded shareicon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <h5 className="fw-bold text-white mb-0">شارك المقال</h5>
                </div>

                
                <div className="d-flex gap-2">
                  <button className="btn social-btn twitter d-flex align-items-center justify-content-center p-0 twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button className="btn social-btn linkedin d-flex align-items-center justify-content-center p-0 linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button className="btn social-btn whatsapp d-flex align-items-center justify-content-center p-0 whatsapp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </button>
                  <button className="btn social-btn link d-flex align-items-center justify-content-center p-0 link">
                    <i className="fa-solid fa-link"></i>
                  </button>
                </div>
              </div>
            </div>

            
            <div className="mt-5 p-4 border rounded d-flex gap-4 align-items-center flex-column flex-lg-row content">
              <img
                src={blogs.author.avatar}
                className="rounded-4"
                style={{ border: "2px solid #ea580c" }}
                width={90}
                height={90}
                
              />
              <div className="text-center text-lg-end">
                <p style={{ color: "#ea580c" }} className="m-0">
                  كاتب المقال
                </p>
                <h4 className="text-white mb-0">{blogs.author.name}</h4>
                <p className="text-secondary mb-0">{blogs.author.role}</p>
              </div>
            </div>
          </div>

          
          <aside className="col-lg-4 order-1 order-lg-2">
            <div className="position-sticky" style={{ top: 100 }}>
              
              <div className="p-4 border rounded-4 mb-4 content">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(255, 165, 0, 0.1)",
                      border: "1px solid rgba(255, 165, 0, 0.3)",
                    }}
                  >
                    <i
                      className="fa-solid fa-list fs-5"
                      style={{ color: "#ea580c" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold text-white mb-0 f-16">
                    محتويات المقال
                  </h5>
                </div>

                <nav className="d-flex flex-column gap-2">
                  {blogContent.sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="d-flex align-items-center gap-3 p-3 rounded text-decoration-none hover-link"
                    >
                      <span className="badge bg-secondary bg-opacity-25 text-secondary">
                        {index + 1}
                      </span>
                      <span style={{ color: "#BAD4D4" }}>{section.name}</span>
                    </a>
                  ))}
                </nav>
              </div>

              
              <div className="p-4 border rounded-4 mb-4 content">
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bg-black rounded">
                      <i
                        className="fa-regular fa-clock fs-5 mb-2"
                        style={{ color: "#ea580c" }}
                      ></i>
                      <p className="text-white fw-bold mb-0">
                        {blogs.readTime}
                      </p>
                      <small className="text-secondary">وقت القراءة</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-black rounded">
                      <i
                        className="fa-regular fa-calendar fs-5 mb-2"
                        style={{ color: "#ea580c" }}
                      ></i>
                      <p className="text-white fw-bold mb-0">
                        {new Date(blogs.date).toLocaleDateString(
                          "ar-EG-u-nu-arab",
                          {
                            day: "numeric",
                            month: "long",
                          },
                        )}
                      </p>
                      <small className="text-secondary">تاريخ النشر</small>
                    </div>
                  </div>
                </div>
              </div>

              
              <div
                className="p-4 rounded-4 border border-clr"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,165,0,0.15), rgba(255,193,7,0.05))",
                }}
              >
                <div className="text-center">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: 56,
                      height: 56,
                      background: "rgba(255,165,0,0.2)",
                    }}
                  >
                    <i
                      className="fa-solid fa-envelope fs-4"
                      style={{ color: "#ea580c" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold text-white">لا تفوّت جديدنا</h5>
                  <p className="text-secondary small mb-4">
                    اشترك للحصول على أحدث المقالات
                  </p>
                  <Link
                    to="/blog"
                    className="btn btn-warning w-100 fw-semibold rounded"
                  >
                    تصفّح المزيد
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <section className="py-5 bg-black border-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            
            <div className="d-flex align-items-center gap-3">
              <span
                className="d-flex align-items-center justify-content-center rounded-3 border"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(255,165,0,0.1)",
                  borderColor: "rgba(255,165,0,0.3)",
                }}
              >
                <i
                  className="fa-solid fa-images"
                  style={{ fontSize: "1.25rem", color: "#ea580c" }}
                ></i>
              </span>
              <div>
                <h2 className="h5 fw-bold text-white mb-1">مقالات قد تعجبك</h2>
                <p className="text-secondary small mb-0">
                  استكشف المزيد من المحتوى المميز
                </p>
              </div>
            </div>

            
            <Link
              to="/blog"
              className=" text-decoration-none orange d-sm-flex align-items-center gap-2"
              data-discover="true"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="row g-4">
            {otherBlogs.map((article) => (
              <div className="col-12 col-sm-6 col-lg-4">
                <Link
                  to={`/blog/${article.id}`}
                  className="text-decoration-none"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  data-discover="true"
                >
                  <div className="blog-card bg-danger h-100 rounded-4">
                    <div
                      className="position-relative overflow-hidden rounded-4"
                      style={{ height: "15rem" }}
                    >
                      <img
                        src={article.image}
                        className="w-100 h-100 object-fit-cover"
                        alt="تصوير الليل والنجوم: دليلك لالتقاط سماء الليل"
                      />

                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background:
                            "linear-gradient(to top, #111111 30%, transparent)",
                        }}
                      />

                      <span className="badge badge-dark rounded-pill position-absolute top-0 end-0 m-3">
                        {article.category}
                      </span>
                      <div className="p-3 position-absolute bottom-0 start-0 end-0">
                        <h5 className="fw-bold text-white line-clamp-2 mb-3">
                          {article.title}
                        </h5>

                        <div className="d-flex justify-content-between align-items-center text-secondary small">
                          <span className="d-flex align-items-center gap-2">
                            <img
                              src={article.author.avatar}
                              className="rounded-circle"
                              width={24}
                              height={24}
                              alt="خالد الفيصل"
                            />
                            {article.author.name}
                          </span>

                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
