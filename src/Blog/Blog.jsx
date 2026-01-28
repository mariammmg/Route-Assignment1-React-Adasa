import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./blog.css";

const categories = [
  "جميع المقالات",
  "إضاءة",
  "بورتريه",
  "مناظر طبيعية",
  "تقنيات",
  "معدات",
];

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

export default function Blog() {
  const { category } = useParams();
  console.log(category)
  const initialCategory = category || "جميع المقالات";
  console.log("initialCategory:", initialCategory);
  const [view, setView] = useState("grid");
  function getArticles(articles, category) {
    return category === "جميع المقالات"
      ? articles
      : articles.filter((article) => article.category === category);
  }
  function toggleView(viewType) {
    setView(viewType);
  }

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredArticles, setFilteredArticles] = useState(
    getArticles(articles, initialCategory),
  );
  console.log("filteredArticles:", filteredArticles);
  const [searchText, setSearchText] = useState("");
  const [flagReset, setFlagReset] = useState(false);

  function searchByCategory(category) {
    if (category == "جميع المقالات") {
      setFlagReset(false);
    }
    if (category != "جميع المقالات") {
      setFlagReset(true);
    }
    setSelectedCategory(category);
    setFilteredArticles(getArticles(articles, category));
    setSearchText("");
  }
  

  const searchedArticles = filteredArticles.filter((article) =>
    article.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  console.log("searchedArticles:", searchedArticles);

  return (
    <>
      <section className="hero">
        

        <div className="container hero-content">
          <span className="section-label gap-1 d-inline-flex align-items-center mb-5 rounded-pill px-3 py-1">
            <div className="small-circle"></div>
            <i className="fa-solid fa-calendar"></i>
            مدونتنا
          </span>
          <h1 className="fw-bold display-5 mb-3">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p
            className="text-secondary fs-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <section className="articles container py-5">
        <div className="filter-bar p-3">
          <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="position-relative flex-grow-1">
              <input
                type="text"
                className="form-control input-dark ps-5"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="ابحث في المقالات..."
              />
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${
                    selectedCategory === cat
                      ? "btn btn-orange rounded-pill px-4"
                      : "btn btn-dark-outline rounded-pill px-4"
                  }`}
                  onClick={() => searchByCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 d-flex justify-content-between align-items-center">
          <p className="text-secondary mb-0">
            عرض{" "}
            <span className="fw-bold text-white">
              {searchedArticles.length}
            </span>{" "}
            مقالات{" "}
            {selectedCategory !== "جميع المقالات" && (
              <span
                style={{
                  color: "#f97316",
                  fontWeight: "700",
                  marginRight: "5px",
                }}
              >
                في تصنيف "{selectedCategory}"
              </span>
            )}
          </p>

          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center rounded-3 p-1">
              <button
                className={`btn ${view === "grid" ? "btn-orange" : "btn-dark"} d-flex align-items-center justify-content-center p-2 rounded me-1}`}
                title="عرض شبكي"
                onClick={() => toggleView("grid")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="bi"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </button>

              <button
                className={`btn ${view === "عرض قائمة" ? "btn-orange" : "btn-dark"} btn  d-flex align-items-center justify-content-center p-2 rounded`}
                title="عرض قائمة"
                onClick={() => toggleView("عرض قائمة")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="bi"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              <button
                className={`btn btn-link text-decoration-none text-secondary d-flex align-items-center gap-1 p-0 ${flagReset ? "" : "d-none"}`}
                onClick={() => {
                  searchByCategory("جميع المقالات");
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                مسح الفلاتر
              </button>
            </div>
          </div>
        </div>

        <div
          className={`row g-4 ${searchedArticles.length > 0 && view == "grid" ? "" : "d-none"} `}
        >
          {searchedArticles.map((article) => (
            <Link
              to={`/blog/${article.id}`}
              className="col-md-6 col-lg-4 text-decoration-none"
              key={article.id}
            >
              <div className="card card-dark text-white h-100 rounded-4">
                <div className="position-relative overflow-hidden">
                  <img
                    src={article.image}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={article.title}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 overlay-card"></div>
                  <span className="badge badge-dark rounded-pill position-absolute top-0 end-0 m-3">
                    {article.category}
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="text-secondary small mb-2">
                    <i className="fa-regular fa-clock"></i>
                    {article.readTime}.{"   "}
                    {new Date(article.date).toLocaleDateString(
                      "ar-EG-u-nu-arab",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </div>
                  <h5 className="card-title">{article.title}</h5>
                  <p className="text-secondary small">{article.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto border-top border-secondary pt-3">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={article.author.avatar}
                        className="rounded-circle"
                        width="40"
                        height="40"
                        alt={article.author.name}
                      />
                      <div>
                        <div className="small fw-bold text-white">
                          {article.author.name}
                        </div>
                        <div className="small text-secondary">
                          {article.author.role}
                        </div>
                      </div>
                    </div>
                    <div className="arrow-item d-flex align-items-center justify-content-center">
                      <i
                        className="fa-solid fa-chevron-right"
                        style={{ color: "white", fontSize: 16 }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div
          className={`d-flex flex-column gap-4 ${searchedArticles.length > 0 && view == "عرض قائمة" ? "" : "d-none"} `}
        >
          {searchedArticles.map((article) => (
            <Link
              to={`/blog/${article.id}`}
              className="card card-dark text-white rounded-4 overflow-hidden text-decoration-none"
            >
              <div className="row g-0 flex-md-row flex-column">
                <div className="col-md-4 overflow-hidden position-relative">
                  <img
                    src={article.image}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    alt="إتقان تصوير الساعة الذهبية"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 overlay-card"></div>
                </div>
                <div className="col-md-8 p-4 d-flex flex-column justify-content-center">
                  <div className="d-flex flex-wrap gap-2 align-items-center mb-2">
                    <span className="badge-orange rounded-pill py-1 px-3">
                      {article.category}
                    </span>
                    <small className="text-secondary d-flex align-items-center gap-1">
                      <i className="fa-regular fa-clock"></i> {article.readTime}
                    </small>
                    <small className="text-secondary d-flex align-items-center gap-1">
                      <i className="fa-regular fa-calendar"></i>{" "}
                      {new Date(article.date).toLocaleDateString(
                        "ar-EG-u-nu-arab",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </small>
                  </div>
                  <h5 className="card-title mb-2">
                    {article.title}
                  </h5>
                  <p className="card-text text-secondary mb-3">
                    {article.excerpt}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={article.author.avatar}
                        className="rounded-circle"
                        width="40"
                        height="40"
                        alt="سالم أحمد"
                      />
                      <div>
                        <div className="small fw-bold text-white">
                          {article.author.name}
                        </div>
                        <div className="small text-secondary">
                          {article.author.role}
                        </div>
                      </div>
                    </div>
                    <span className="read-article d-flex align-items-center gap-3">
                      <span className="arrow"> اقرأ المقال </span>
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`text-center py-5 ${searchedArticles.length === 0 ? "" : "d-none"}`}
        >
          <div
            className="d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "96px",
              height: "96px",
              backgroundColor: "#161616",
              border: "1px solid #262626",
              borderRadius: "50%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="text-secondary"
            >
              <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>

          <h3 className="fw-bold text-white mb-3">لا توجد مقالات</h3>
          <p className="text-secondary mb-4">
            حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
          </p>

          <button
            type="button"
            className="btn btn-warning d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2"
            onClick={() => {
              setSelectedCategory("جميع المقالات");
              setFilteredArticles(articles);
              setSearchText("");
              setFlagReset(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            إعادة تعيين الفلاتر
          </button>
        </div>
      </section>

      
    </>
  );
}
