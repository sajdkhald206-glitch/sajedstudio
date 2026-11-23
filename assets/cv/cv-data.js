/* Single source of truth for the CV — used by /cv (web) and /cv-print (PDF). */
window.CV = {
  links: {
    phone: '+970 59 831 5527', phoneHref: 'https://wa.me/972598315527',
    email: 'sajdkhald206@gmail.com',
    site: 'sajedstudio.netlify.app', siteHref: 'https://sajedstudio.netlify.app/',
    ig: '@sajed_saad1', igHref: 'https://www.instagram.com/sajed_saad1'
  },
  clients: [
    { k: 'badr', img: 'assets/img/dad8a5e81acd.webp', en: ['Badr Al-Suwaih Law Office', 'Legal · Identity'], ar: ['مكتب بدر السويح للمحاماة', 'قانون · هوية'] },
    { k: 'ezz', img: 'assets/img/hersh-thumb.webp', en: ['Al Ezz Oud · Hersh Lahab', 'Perfume · AI ad film'], ar: ['العز للعود · هيرش لهب', 'عطور · إعلان AI'] },
    { k: 'hamama', img: 'assets/img/hamama-thumb.webp', en: ['Hamama Delivery', 'Delivery app · Motion ad'], ar: ['حمامة ديليفري', 'تطبيق توصيل · إعلان موشن'] },
    { k: 'raha', img: 'assets/img/867e36fae43f.webp', en: ['Raha Medical', 'Healthcare · Social'], ar: ['راحة للخدمات الطبية', 'صحة · سوشال'] },
    { k: 'villa', img: 'assets/img/b875c434e108.webp', en: ['Saudi Villa Contracting', 'Construction · Print'], ar: ['الفيلا السعودية للمقاولات', 'مقاولات · مطبوعات'] },
    { k: 'hamdy', img: 'assets/img/377b7881bd2a.webp', en: ['Hamdy Motors', 'Automotive · Identity'], ar: ['حمدي موتورز', 'سيارات · هوية'] },
    { k: 'hassi', img: 'assets/img/6a77c95b3b5f.webp', en: ['Al-Hassi Transport', 'Logistics · Identity'], ar: ['مؤسسة الحسي للنقليات', 'نقل · هوية'] },
    { k: 'samar', img: 'assets/img/bc1027197222.webp', en: ['Samar Restaurant', 'Hospitality · Identity'], ar: ['مطعم سمار', 'مطاعم · هوية'] },
    { k: 'bela', img: 'assets/img/fbb383359c5c.webp', en: ['Bela Viva Perfume', 'Fragrance · Logo'], ar: ['بيلا فيفا للعطور', 'عطور · شعار'] },
    { k: 'yalla', img: 'assets/img/73614864c3d4.webp', en: ['Yalla Gai', 'Ride app · Social'], ar: ['يلا جاي', 'تطبيق نقل · سوشال'] },
    { k: 'rinse', img: 'assets/img/b2938d5e366b.webp', en: ['RinseNRide', 'Car care · Logo'], ar: ['رينس إن رايد', 'غسيل سيارات · شعار'] },
    { k: 'great', img: 'assets/img/a62d28e1b7af.webp', en: ['Great Land', 'Travel · Social'], ar: ['جريت لاند', 'سياحة · سوشال'] },
    { k: 'crystal', img: 'assets/img/aec475a04509.webp', en: ['Crystal Care', 'Clinic · Print'], ar: ['كريستال كير', 'عيادة · مطبوعات'] },
    { k: 'rawa', img: 'assets/img/ec58f45088dc.webp', en: ['Rawat Wated', 'Retail · Logo'], ar: ['روعة واتد', 'تجارة · شعار'] },
    { k: 'kod', img: 'assets/img/f1cfef738a16.webp', en: ['KOD', 'Brand · Mockups'], ar: ['KOD', 'علامة · موك أب'] },
    { k: 'book', img: 'assets/img/b4a677756964.webp', en: ['Palestinian Christian Community, Gaza', 'Publishing · Book cover'], ar: ['المجتمع المسيحي الفلسطيني في غزة', 'نشر · غلاف كتاب'] },
    { k: 'zaza', img: 'assets/img/aefae6597416.webp', en: ['ZAZA', 'Corporate · ID cards'], ar: ['زازا', 'شركات · بطاقات'] }
  ],
  en: {
    dir: 'ltr', lang: 'en', other: 'العربية', otherCode: 'ar',
    kicker: 'Curriculum Vitae · 2026',
    first: 'SAJED', last: 'SAAD',
    role: 'AI Creative & Multimedia Designer',
    pitch: 'I turn a brief into a finished brand story: film, motion, voice, identity and web. AI is my production studio. Design craft is my standard.',
    location: 'Gaza, Palestine · Open to remote roles worldwide',
    available: 'Available for full-time & remote work',
    dl: 'Download CV (PDF)', hire: 'Hire me on WhatsApp', back: 'Back to the studio', portfolio: 'View portfolio',
    badges: ['Google Gemini · Certified Trainer', 'Claude · Expert Certified', '4 years in multimedia'],
    stats: [[4, '+', 'Years of experience'], [20, '+', 'Brands served'], [4, '', 'AI ad films'], [3, '', 'Live 3D websites'], [2, '', 'Working languages']],
    h: { profile: 'Profile', why: 'Why teams hire me', skills: 'Core expertise', exp: 'Experience', clients: 'Selected clients', proj: 'Signature projects', certs: 'Certifications & training', tools: 'Tools & stack', edu: 'Education', lang: 'Languages', contact: 'Let’s work together' },
    profile: 'Multimedia designer and certified AI expert with 4 years of experience building brand identities and producing ad films for 20+ brands. I combine the craft of the Adobe suite with the power of AI tools (Gemini, Claude) to deliver complete projects with the output of a full agency.',
    why: [
      ['A full studio in one person', 'Concept, script, design, AI generation, voiceover, edit, motion and web, all under one roof and one standard.'],
      ['AI-native speed', 'Certified in Gemini and Claude. I build AI into every step, so campaigns ship in days without losing finish.'],
      ['Brand-ready delivery', 'Every project ends with organised files, formats and guidelines your team can use from day one.']
    ],
    skills: [
      ['AI Films & Commercials', 'Concept, script, AI image and video generation, edit and grade: complete ad films from brief to final cut.'],
      ['Motion Graphics & Voiceover', 'Kinetic typography, chat-style and UI animation, AI voiceover in Arabic dialects, sound design and music.'],
      ['Brand Identity', 'Logos, visual systems, stationery and mockups, ready to hand over to print and digital teams.'],
      ['Social Media Design', 'Campaign systems, offer layouts and content packages built for consistent, on-brand publishing.'],
      ['Websites & 3D Experiences', 'Bilingual websites with real-time 3D (Three.js / WebGL), built with AI-assisted development and deployed live.'],
      ['AI Workflow Training', 'Certified trainer: I help teams adopt Gemini and Claude in creative production and daily work.']
    ],
    exp: [
      { role: 'Founder & Creative Director', org: 'SAJED STUDIO · Independent creative studio', place: 'Gaza, Palestine · Remote', date: '2022 — Present',
        pts: [
          'Designed brand identities and logo systems for companies in law, hospitality, fragrance, automotive, car care, logistics and retail, including Badr Al-Suwaih Law Office, Hamdy Motors, Al-Hassi Transport, Samar Restaurant and Bela Viva.',
          'Produced AI commercials end to end (script, generation, voiceover, edit and motion), including “58 Seconds” for Al Ezz Oud’s Hersh Lahab perfume, “Burj Watan” for real estate, a dental clinic film and an animated anti-smoking story, plus the motion-graphics launch film for the Hamama Delivery app in Gaza.',
          'Built social media campaigns for Raha Medical, Yalla Gai and Great Land, plus print and stationery for Saudi Villa Contracting, Crystal Care and ZAZA.',
          'Designed and shipped bilingual real-time 3D websites (Three.js / WebGL): Sphere Decoded, ATHAR Specialty Coffee and the SAJED STUDIO portfolio.',
          'Run every project through one documented pipeline from brief to delivery files, keeping agency-level finish at freelancer speed.'
        ] },
      { role: 'Freelance Multimedia Designer & Video Editor', org: 'International freelance platforms & direct clients', place: 'Remote', date: '2022 — Present',
        pts: [
          'Delivered design, video editing and motion projects for local and international clients through professional freelance platforms, managing briefs, revisions and deadlines end to end.',
          'Edited and finished commercials and social videos in Adobe Premiere Pro, After Effects and CapCut, with colour, sound and captions ready for every platform.',
          'Adapted each brand’s voice across print, social and video, keeping one consistent visual language.'
        ] }
    ],
    proj: [
      ['58 Seconds: The AI Ad Team', 'Al Ezz Oud · Hersh Lahab', 'AI ad film told as a group chat racing a 58-second clock. Saudi dialect, motion graphics, AI voices.'],
      ['Sphere, Decoded', 'Interactive website', 'Bilingual 3D scrollytelling website about the Las Vegas Sphere, live on the web.'],
      ['Burj Watan', 'Real estate · AI film', 'A tower rebuilt floor by floor, from rubble to a finished façade.'],
      ['Hamama Delivery: Anywhere in Gaza', 'Motion graphics · App launch', 'A 46-second launch film: real problems, a two-tap solution, live map routes and a download call to action, at 1080p 60 fps.']
    ],
    certs: [
      ['Certified Trainer', 'Google Gemini', 'Certified to train teams and individuals on Gemini.'],
      ['Expert Certification', 'Claude by Anthropic', 'Certified expertise in Claude for creative and professional work.'],
      ['Professional training', 'Freelancing & AI tools', 'Multiple programmes in freelancing platforms, AI production and creative tools.']
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Audition', 'Adobe InDesign', 'CapCut', 'Claude', 'Gemini', 'ElevenLabs', 'AI image & video models', 'Canva', 'Three.js / WebGL', 'Netlify'],
    edu: [['Bachelor of Multimedia', 'Gaza University', '2022 — 2026']],
    langs: [['Arabic', 'Native'], ['English', '']],
    contactLine: 'Send a brief, a role or a question. I reply within a day.',
    print: { hdr: 'Curriculum Vitae', p: 'Portfolio', ref: 'Portfolio, films and live websites:' }
  },
  ar: {
    dir: 'rtl', lang: 'ar', other: 'English', otherCode: 'en',
    kicker: 'السيرة الذاتية · 2026',
    first: 'ساجد', last: 'سعد',
    role: 'مصمم وسائط متعددة وصانع محتوى إبداعي بالذكاء الاصطناعي',
    pitch: 'أحوّل الفكرة إلى قصة علامة تجارية مكتملة: فيلم وموشن وصوت وهوية وموقع. الذكاء الاصطناعي استوديو الإنتاج عندي، والحِرفة في التصميم هي معياري.',
    location: 'غزة، فلسطين · متاح للعمل عن بُعد حول العالم',
    available: 'متاح للعمل بدوام كامل وعن بُعد',
    dl: 'تحميل السيرة (PDF)', hire: 'تواصل عبر واتساب', back: 'العودة إلى الاستوديو', portfolio: 'شاهد الأعمال',
    badges: ['جيميناي من جوجل · مدرّب معتمد', 'Claude · شهادة خبير', '4 سنوات في الوسائط المتعددة'],
    stats: [[4, '+', 'سنوات خبرة'], [20, '+', 'علامة تجارية'], [4, '', 'أفلام إعلانية بالذكاء الاصطناعي'], [3, '', 'مواقع ثلاثية الأبعاد'], [2, '', 'لغتان للعمل']],
    h: { profile: 'نبذة', why: 'لماذا تختارني الشركات', skills: 'مجالات الخبرة', exp: 'الخبرة العملية', clients: 'عملاء عملت معهم', proj: 'مشاريع مميزة', certs: 'الشهادات والتدريب', tools: 'الأدوات والتقنيات', edu: 'التعليم', lang: 'اللغات', contact: 'لنعمل معاً' },
    profile: 'مصمم وسائط متعددة وخبير معتمد في الذكاء الاصطناعي بخبرة 4 سنوات في بناء الهويات وإنتاج الأفلام الإعلانية لأكثر من 20 علامة تجارية. أدمج بين احترافية برامج أدوبي وقوة أدوات الذكاء الاصطناعي (Gemini, Claude) لتقديم مشاريع متكاملة بإنتاجية وكالة كاملة.',
    why: [
      ['استوديو كامل في شخص واحد', 'الفكرة والسيناريو والتصميم والتوليد بالذكاء الاصطناعي والتعليق الصوتي والمونتاج والموشن والموقع، كلها تحت سقف واحد وبمعيار واحد.'],
      ['سرعة بعقلية الذكاء الاصطناعي', 'معتمد في جيميناي وClaude، وأدمج الذكاء الاصطناعي في كل مرحلة، فتنطلق الحملات خلال أيام دون أن تفقد جودتها.'],
      ['تسليم جاهز للعلامة', 'كل مشروع ينتهي بملفات منظّمة وصيغ وأدلة استخدام يستطيع فريقك العمل بها من اليوم الأول.']
    ],
    skills: [
      ['الأفلام والإعلانات بالذكاء الاصطناعي', 'الفكرة والسيناريو وتوليد الصور والفيديو والمونتاج وتصحيح الألوان: إعلان كامل من الفكرة حتى النسخة النهائية.'],
      ['الموشن جرافيك والتعليق الصوتي', 'تحريك النصوص وواجهات المحادثة، وتعليق صوتي بالذكاء الاصطناعي باللهجات العربية، وتصميم الصوت والموسيقى.'],
      ['الهوية البصرية', 'شعارات وأنظمة بصرية ومطبوعات وموك أب، جاهزة للتسليم لفرق الطباعة والتسويق الرقمي.'],
      ['تصميم السوشال ميديا', 'أنظمة حملات وقوالب عروض وباقات محتوى تحافظ على هوية العلامة في كل منشور.'],
      ['المواقع والتجارب ثلاثية الأبعاد', 'مواقع ثنائية اللغة بمجسمات ثلاثية الأبعاد لحظية (Three.js / WebGL)، مبنية بتطوير مدعوم بالذكاء الاصطناعي ومنشورة مباشرة.'],
      ['تدريب الفرق على الذكاء الاصطناعي', 'مدرّب معتمد: أساعد الفرق على استخدام جيميناي وClaude في الإنتاج الإبداعي والعمل اليومي.']
    ],
    exp: [
      { role: 'المؤسس والمدير الإبداعي', org: 'SAJED STUDIO · استوديو إبداعي مستقل', place: 'غزة، فلسطين · عن بُعد', date: '2022 — حتى الآن',
        pts: [
          'صمّمت هويات بصرية وأنظمة شعارات لشركات في المحاماة والمطاعم والعطور والسيارات وغسيل السيارات والنقل والتجارة، منها مكتب بدر السويح للمحاماة وحمدي موتورز ومؤسسة الحسي للنقليات ومطعم سمار وبيلا فيفا.',
          'أنتجت إعلانات كاملة بالذكاء الاصطناعي (سيناريو وتوليد وتعليق صوتي ومونتاج وموشن)، منها «58 ثانية» لعطر هيرش لهب من العز للعود، و«برج وطن» للعقارات، وفيلم لعيادة أسنان، وقصة متحركة للتوعية بأضرار التدخين، إضافة إلى فيلم الموشن جرافيك لإطلاق تطبيق حمامة ديليفري في غزة.',
          'صمّمت حملات سوشال ميديا لراحة للخدمات الطبية ويلا جاي وجريت لاند، ومطبوعات وأدوات مكتبية للفيلا السعودية للمقاولات وكريستال كير وزازا.',
          'صمّمت ونشرت مواقع ثنائية اللغة بمجسمات ثلاثية الأبعاد لحظية (Three.js / WebGL): سفير بلا أسرار، وأثر للقهوة المختصة، وموقع أعمال SAJED STUDIO.',
          'أدير كل مشروع عبر مسار عمل موثّق من الفكرة حتى ملفات التسليم، بجودة الوكالات وسرعة العمل الحر.'
        ] },
      { role: 'مصمم وسائط متعددة ومونتير مستقل', org: 'منصات العمل الحر الدولية وعملاء مباشرون', place: 'عن بُعد', date: '2022 — حتى الآن',
        pts: [
          'نفّذت مشاريع تصميم ومونتاج وموشن لعملاء محليين ودوليين عبر منصات العمل الحر الاحترافية، وأدرت المتطلبات والتعديلات والمواعيد من البداية للنهاية.',
          'أنجزت مونتاج الإعلانات وفيديوهات السوشال على أدوبي بريمير برو وأفتر إفكتس وكاب كات، مع تصحيح الألوان والصوت والترجمة النصية لكل منصة.',
          'نقلت صوت كل علامة عبر المطبوعات والسوشال والفيديو بلغة بصرية واحدة متماسكة.'
        ] }
    ],
    proj: [
      ['58 ثانية: فريق الإعلان', 'العز للعود · هيرش لهب', 'إعلان بالذكاء الاصطناعي يُروى كمحادثة جماعية تسابق 58 ثانية، باللهجة السعودية مع موشن وأصوات AI.'],
      ['سفير، بلا أسرار', 'موقع تفاعلي', 'موقع ثلاثي الأبعاد بلغتين يروي قصة مبنى سفير في لاس فيغاس، منشور ويعمل الآن.'],
      ['برج وطن', 'عقارات · فيلم AI', 'برج يُعاد بناؤه طابقاً بعد طابق، من الركام إلى واجهة مكتملة.'],
      ['حمامة ديليفري: وين ما كنت بغزة', 'موشن جرافيك · إطلاق تطبيق', 'فيلم إطلاق مدته 46 ثانية: مشكلة حقيقية، وحل بخطوتين، ومسارات حيّة على الخريطة، ودعوة للتحميل، بجودة 1080p و60 إطاراً.']
    ],
    certs: [
      ['مدرّب معتمد', 'جيميناي من جوجل', 'معتمد لتدريب الأفراد والفرق على استخدام جيميناي.'],
      ['شهادة خبير', 'Claude من Anthropic', 'خبرة معتمدة في استخدام Claude للعمل الإبداعي والمهني.'],
      ['تدريبات مهنية', 'العمل الحر وأدوات الذكاء الاصطناعي', 'برامج متعددة في العمل الحر والإنتاج بالذكاء الاصطناعي والأدوات الإبداعية.']
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Audition', 'Adobe InDesign', 'CapCut', 'Claude', 'Gemini', 'ElevenLabs', 'نماذج توليد الصور والفيديو', 'Canva', 'Three.js / WebGL', 'Netlify'],
    edu: [['بكالوريوس وسائط متعددة', 'جامعة غزة', '2022 — 2026']],
    langs: [['العربية', 'اللغة الأم'], ['الإنجليزية', '']],
    contactLine: 'أرسل فكرتك أو الوظيفة أو سؤالك، وأرد خلال يوم.',
    print: { hdr: 'السيرة الذاتية', p: 'الأعمال', ref: 'الأعمال والأفلام والمواقع الحية:' }
  }
};
