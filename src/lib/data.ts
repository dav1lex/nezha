export interface Machine {
    id: string;
    slug: string;
    name: string;
    category: 'nail' | 'pearl' | 'hotfix' | 'ultrasonic';
    images: string[]; // URLs to cPanel CDN
    description: {
        en: string;
        ar: string;
        tr: string;
    };
    features: {
        en: string[];
        ar: string[];
        tr: string[];
    };
    bestFor: {
        en: string;
        ar: string;
        tr: string;
    };
    specs: {
        label: string; // Translation key
        value: string;
    }[];
}

export const machines: Machine[] = [
    {
        id: "ugr-906-nw",
        slug: "ugr-906-nw",
        name: "UGR-906-NW",
        category: "pearl",
        images: [
            "/nt-906-nw_1.jpg",
            "/nt-906-nw_2.jpg"
        ],
        description: {
            en: "The UGR-906-NW is an automatic dual-color pearl attaching machine for garment and textile production. It works with two pearl colors in the same size without changing machine parts, uses upper pearl supply for clearer operator visibility and supports 4 to 16 mm pearl sizes. Laser marking helps place pearls on the intended point, while the lower pin supply removes the need to mark the reverse side of the garment.",
            ar: "UGR-906-NW آلة أوتوماتيكية لتركيب اللؤلؤ بلونين لإنتاج الملابس والمنسوجات. تعمل بلونين من نفس مقاس اللؤلؤ دون تغيير أجزاء الماكينة، وتستخدم التغذية العلوية لرؤية أوضح للمشغل وتدعم مقاسات اللؤلؤ من 4 إلى 16 مم. يساعد التحديد بالليزر على وضع اللؤلؤ في النقطة المطلوبة، بينما تقلل تغذية الدبابيس من الأسفل الحاجة إلى تعليم الجهة الخلفية من القماش.",
            tr: "UGR-906-NW, hazır giyim ve tekstil üretimi için otomatik çift renkli inci çakma makinesidir. Makine parçası değiştirmeden aynı ölçüde iki inci rengiyle çalışır, daha net operatör görüşü için üstten inci besleme kullanır ve 4 ile 16 mm inci ölçülerini destekler. Lazer işaretleme incinin hedef noktaya yerleşmesine yardımcı olur, alttan çivi besleme ise giysinin ters tarafını işaretleme ihtiyacını azaltır."
        },
        features: {
            en: [
                "New technology for attaching pearls from upper supplying mold",
                "Pearl pins are supplied from lower side",
                "No need to mark on reverse side of garments any more",
                "Two colors in a same size can be worked without changing any part",
                "Simple change for other pearl sizes",
                "Accurate attaching on an exact point with laser marking",
                "Convenient working in a clear sight with upper attaching",
                "Excellently designed for strong durability and minimum error rate"
            ],
            ar: [
                "تقنية جديدة لتركيب اللؤلؤ من قالب التغذية العلوي",
                "يتم توريد مسامير اللؤلؤ من الجانب السفلي",
                "لا داعي لوضع علامات على الجانب الخلفي للملابس بعد الآن",
                "يمكن العمل بلونين بنفس الحجم دون تغيير أي جزء",
                "تغيير بسيط لأحجام اللؤلؤ الأخرى",
                "تركيب دقيق في نقطة محددة مع تحديد بالليزر",
                "عمل مريح في رؤية واضحة مع التركيب العلوي",
                "تصميم ممتاز لمتانة قوية وأقل معدل خطأ"
            ],
            tr: [
                "Üstten beslemeli kalıp ile inci çakma için yeni teknoloji",
                "İnci çivileri alt taraftan beslenir",
                "Artık giysilerin ters tarafını işaretlemeye gerek yok",
                "Herhangi bir parça değiştirmeden aynı boyutta iki renk çalışılabilir",
                "Diğer inci boyutları için basit değişim",
                "Lazer işaretleme ile tam noktaya doğru çakma",
                "Üstten çakma ile net görüş ve rahat çalışma",
                "Güçlü dayanıklılık ve minimum hata oranı için mükemmel tasarım"
            ]
        },
        bestFor: {
            en: "Garment workshops that need two pearl colors in the same size without changing machine parts.",
            ar: "ورش الملابس التي تحتاج إلى لونين من اللؤلؤ بنفس المقاس دون تغيير أجزاء الماكينة.",
            tr: "Makine parçası değiştirmeden aynı ölçüde iki inci rengi çalışmak isteyen hazır giyim atölyeleri."
        },
        specs: [
            { label: "speed", value: "190 pcs. / minute" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "colors", value: "Contact for current color options" },
            { label: "weight", value: "65 kgs / 70 kgs" },
            { label: "size", value: "550 mm (W) x 580 mm (L) x 1200 mm (H)" },
            { label: "air", value: "over 1.0 HP" },
            { label: "power", value: "220 volts, 1-phase, 50/60 Hz" },
            { label: "consumption", value: "200 watts" }
        ]
    },
    {
        id: "ugr-906-nf",
        slug: "ugr-906-nf",
        name: "UGR-906-NF",
        category: "pearl",
        images: [
            "/nt-906-nf_1.jpg",
            "/nt-906-nf_2.jpg"
        ],
        description: {
            en: "The UGR-906-NF is an automatic four-color pearl attaching machine for production lines that use multiple pearl colors on the same garment style. It has a 230 mm head size, supports 4 to 16 mm pearl sizes and lets operators work with four colors in the same size without mechanical changes. The upper attaching system keeps the work area visible, while laser marking supports accurate placement on textile panels and finished garments.",
            ar: "UGR-906-NF آلة أوتوماتيكية لتركيب اللؤلؤ بأربعة ألوان لخطوط الإنتاج التي تستخدم ألوانا متعددة من اللؤلؤ على نفس تصميم الملابس. تتميز برأس 230 مم، وتدعم مقاسات اللؤلؤ من 4 إلى 16 مم، وتتيح العمل بأربعة ألوان من نفس المقاس دون تعديلات ميكانيكية. يحافظ نظام التركيب العلوي على وضوح منطقة العمل، ويساعد التحديد بالليزر على دقة التثبيت على الملابس وقطع النسيج.",
            tr: "UGR-906-NF, aynı giysi modelinde birden fazla inci rengi kullanan üretim hatları için otomatik dört renkli inci çakma makinesidir. 230 mm kafa ölçüsüne sahiptir, 4 ile 16 mm inci ölçülerini destekler ve mekanik değişiklik yapmadan aynı ölçüde dört renkle çalışmayı sağlar. Üstten çakma sistemi çalışma alanını görünür tutar, lazer işaretleme ise tekstil panelleri ve bitmiş giysilerde hassas yerleşimi destekler."
        },
        features: {
            en: [
                "New technology for attaching pearls from upper supplying mold",
                "Pearl pins are supplied from lower side",
                "No need to mark on reverse side of garments any more",
                "Four colors in a same size can be worked without changing any part",
                "Simple change for other pearl sizes",
                "Accurate attaching on an exact point with laser marking",
                "Convenient working in a clear sight with upper attaching",
                "Excellently designed for strong durability and minimum error rate"
            ],
            ar: [
                "تقنية جديدة لتركيب اللؤلؤ من قالب التغذية العلوي",
                "يتم توريد مسامير اللؤلؤ من الجانب السفلي",
                "لا داعي لوضع علامات على الجانب الخلفي للملابس بعد الآن",
                "يمكن العمل بأربعة ألوان بنفس الحجم دون تغيير أي جزء",
                "تغيير بسيط لأحجام اللؤلؤ الأخرى",
                "تركيب دقيق في نقطة محددة مع تحديد بالليزر",
                "عمل مريح في رؤية واضحة مع التركيب العلوي",
                "تصميم ممتاز لمتانة قوية وأقل معدل خطأ"
            ],
            tr: [
                "Üstten beslemeli kalıp ile inci çakma için yeni teknoloji",
                "İnci çivileri alt taraftan beslenir",
                "Artık giysilerin ters tarafını işaretlemeye gerek yok",
                "Herhangi bir parça değiştirmeden aynı boyutta dört renk çalışılabilir",
                "Diğer inci boyutları için basit değişim",
                "Lazer işaretleme ile tam noktaya doğru çakma",
                "Üstten çakma ile net görüş ve rahat çalışma",
                "Güçlü dayanıklılık ve minimum hata oranı için mükemmel tasarım"
            ]
        },
        bestFor: {
            en: "Production lines that use up to four pearl colors in the same size on garments and textile panels.",
            ar: "خطوط الإنتاج التي تستخدم حتى أربعة ألوان من اللؤلؤ بنفس المقاس على الملابس وقطع النسيج.",
            tr: "Giysi ve tekstil panellerinde aynı ölçüde dört inci rengine kadar çalışan üretim hatları."
        },
        specs: [
            { label: "headSize", value: "230mm" },
            { label: "speed", value: "190 pcs. / minute" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "colors", value: "Contact for current color options" },
            { label: "weight", value: "65 kgs / 70 kgs" },
            { label: "size", value: "550 mm (W) x 580 mm (L) x 1200 mm (H)" },
            { label: "air", value: "over 1.0 HP" },
            { label: "power", value: "220 volts, 1-phase, 50/60 Hz" },
            { label: "consumption", value: "200 watts" }
        ]
    },
    {
        id: "ugr-906-nd-w",
        slug: "ugr-906-nd-w",
        name: "UGR-906-ND-W",
        category: "pearl",
        images: [
            "/nt-906-nd-w_1.jpg",
            "/nt-906-nd-w_2.jpg"
        ],
        description: {
            en: "The UGR-906-ND-W is built for factories that need one machine for standard pearl and half pearl work. It supports 4 to 16 mm pearl sizes, runs at 190 pieces per minute for pearl work and 160 pieces per minute for half pearl work. Upper attaching gives the operator a clear view of the placement point, while laser marking helps keep repeated patterns aligned on garments, accessories and textile panels.",
            ar: "UGR-906-ND-W مصممة للمصانع التي تحتاج إلى ماكينة واحدة لأعمال اللؤلؤ القياسي ونصف اللؤلؤ. تدعم مقاسات اللؤلؤ من 4 إلى 16 مم، وتعمل بسرعة 190 قطعة في الدقيقة للؤلؤ و160 قطعة في الدقيقة لنصف اللؤلؤ. يمنح التركيب من الأعلى رؤية واضحة لنقطة التثبيت، ويساعد التحديد بالليزر على الحفاظ على انتظام الأنماط المتكررة على الملابس والإكسسوارات وقطع النسيج.",
            tr: "UGR-906-ND-W, standart inci ve yarım inci işleri için tek makineye ihtiyaç duyan fabrikalar için geliştirilmiştir. 4 ile 16 mm inci ölçülerini destekler, inci işlerinde dakikada 190 adet ve yarım inci işlerinde dakikada 160 adet çalışma hızı sunar. Üstten çakma operatöre yerleşim noktasında net görüş sağlar, lazer işaretleme ise giysi, aksesuar ve tekstil panellerinde tekrarlı desenleri hizalı tutmaya yardımcı olur."
        },
        features: {
            en: [
                "New technology for attaching various half pearls from upper side",
                "Pearl pins are supplied from lower side",
                "Simple change for other pearl sizes",
                "Accurate attaching on an exact point with laser marking",
                "Convenient working in a clear sight with upper attaching",
                "Excellently designed for strong durability and minimum error rate"
            ],
            ar: [
                "تقنية جديدة لتركيب العديد من أنصاف اللؤلؤ من الجانب العلوي",
                "يتم توريد مسامير اللؤلؤ من الجانب السفلي",
                "تغيير بسيط لأحجام اللؤلؤ الأخرى",
                "تركيب دقيق في نقطة محددة مع تحديد بالليزر",
                "عمل مريح في رؤية واضحة مع التركيب العلوي",
                "تصميم ممتاز لمتانة قوية وأقل معدل خطأ"
            ],
            tr: [
                "Üst taraftan çeşitli yarım incileri çakmak için yeni teknoloji",
                "İnci çivileri alt taraftan beslenir",
                "Diğer inci boyutları için basit değişim",
                "Lazer işaretleme ile tam noktaya doğru çakma",
                "Üstten çakma ile net görüş ve rahat çalışma",
                "Güçlü dayanıklılık ve minimum hata oranı için mükemmel tasarım"
            ]
        },
        bestFor: {
            en: "Factories that attach both standard pearls and half pearls on varied garment designs.",
            ar: "المصانع التي تثبت اللؤلؤ القياسي ونصف اللؤلؤ على تصاميم ملابس مختلفة.",
            tr: "Farklı giysi tasarımlarında standart inci ve yarım inci çakan fabrikalar."
        },
        specs: [
            { label: "speed", value: "190 pcs./min (pearl) 160 pcs./min (half pearl)" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "halfPearlSize", value: "Contact for current half pearl options" },
            { label: "colors", value: "Contact for current color options" },
            { label: "weight", value: "65 kgs / 70 kgs" },
            { label: "size", value: "550 mm (W) x 580 mm (L) x 1200 mm (H)" },
            { label: "air", value: "over 1.0 HP" },
            { label: "power", value: "220 volts, 1-phase, 50/60 Hz" },
            { label: "consumption", value: "300 watts" }
        ]
    },
    {
        id: "ugr-nf-d9",
        slug: "ugr-nf-d9",
        name: "UGR-NF-D9",
        category: "ultrasonic",
        images: [
            "/nt-906-nf_d9_1.jpg",
            "/NT906-NF-D9-2.jpg"
        ],
        description: {
            en: "The UGR-NF-D9 is a computerized pearl design machine for pattern-based pearl placement on garments and textile products. It supports up to four pearl types without mechanical modification, works with dst and rst design files and includes design-making software with a basic tool set. The 420 mm by 330 mm work area suits decorative layouts where repeat accuracy, file control and operator visibility matter.",
            ar: "UGR-NF-D9 آلة محوسبة لتصميم وتركيب اللؤلؤ على الملابس ومنتجات النسيج حسب النمط. تدعم حتى أربعة أنواع من اللؤلؤ دون تعديل ميكانيكي، وتعمل مع ملفات dst و rst، وتشمل برنامج تصميم ومجموعة أدوات أساسية. مساحة العمل 420 مم × 330 مم مناسبة للتصاميم الزخرفية التي تحتاج إلى دقة التكرار والتحكم بالملفات ووضوح الرؤية للمشغل.",
            tr: "UGR-NF-D9, giysi ve tekstil ürünlerinde desene bağlı inci yerleşimi için bilgisayarlı inci desen makinesidir. Mekanik değişiklik olmadan dört inci tipine kadar çalışır, dst ve rst desen dosyalarıyla uyumludur ve desen hazırlama programı ile temel takım seti içerir. 420 mm x 330 mm çalışma alanı; tekrarlama hassasiyeti, dosya kontrolü ve operatör görüşünün önemli olduğu dekoratif işler için uygundur."
        },
        features: {
            en: [
                "All operations are performed automatically without errors",
                "Four types of pearls can be used without any mechanical modifications",
                "Accurate position due to laser marking",
                "High visibility and space for convenient operation",
                "Suitable for all kinds of garments and various fabrics",
                "Compatible with dst, rst files (Roland, Sierra)",
                "Includes design making program and basic tool set"
            ],
            ar: [
                "يتم تنفيذ جميع العمليات تلقائيًا دون أخطاء",
                "يمكن استخدام أربعة أنواع من اللؤلؤ دون أي تعديلات ميكانيكية",
                "موقع دقيق بفضل التحديد بالليزر",
                "رؤية ومساحة لمزيد من الراحة في التشغيل",
                "مناسبة لجميع أنواع الملابس والأقمشة المختلفة",
                "متوافقة مع ملفات dst و rst (Roland، Sierra)",
                "تتضمن برنامج صنع التصاميم ومجموعة الأدوات الأساسية"
            ],
            tr: [
                "Tüm işlemler hatasız ve otomatik olarak gerçekleştirilir",
                "Mekanik değişiklik yapmadan dört çeşit inci kullanılabilir",
                "Lazer işaretleme sayesinde hassas pozisyonlama",
                "Rahat çalışma için yüksek görüş ve alan sağlar",
                "Her türlü giysi ve çeşitli kumaşlar için uygundur",
                "dst, rst dosyaları (Roland, Sierra) ile uyumludur",
                "Desen yapma programı ve temel alet seti dahildir"
            ]
        },
        bestFor: {
            en: "Computerized pattern work where pearl placement is controlled from dst or rst design files.",
            ar: "أعمال الزخرفة المحوسبة حيث يتم التحكم في موضع اللؤلؤ من ملفات تصميم dst أو rst.",
            tr: "İnci yerleşiminin dst veya rst desen dosyalarıyla kontrol edildiği bilgisayarlı desen işleri."
        },
        specs: [
            { label: "workSpace", value: "420 mm (W) x 330 mm (L)" },
            { label: "speed", value: "100 rpm - 280 rpm (up to 500 rpm if necessary)" },
            { label: "pearlSize", value: "4~16 mm (pearl size is optional)" },
            { label: "weight", value: "100 kgs / 120 kgs" },
            { label: "size", value: "1010 mm (W) x 1040 mm (L) x 890 mm (H)" },
            { label: "air", value: "over 1.5 HP" },
            { label: "power", value: "110 VAC - 220 VAC, 1-phase, 50Hz / 60Hz" },
            { label: "consumption", value: "300 watts" }
        ]
    }
];
