const portfolioData = {
  user: {
    name: "Umut Arda Ayhan",
    title: "Full Stack Geliştirici",
    bio: "Replik AI, Influencer Factory ve Grimoire gibi projelerde görev almış, LangGraph ve LangChain gibi teknolojilerle AI & Orchestration süreçlerinde uzmanlaşmış Full Stack Geliştirici.\nModüler mimari ve uçtan uca teslim odaklı çalışarak çoklu platform (web + desktop + bot) ürünler geliştiriyorum.",
    experience: "1+ yıl",
    location: "Türkiye",
    education: [
      {
        school: "Gazi Üniversitesi",
        degree: "Bilgisayar Mühendisliği",
        period: "2025 - günümüz",
        location: "Ankara"
      },
      {
        school: "Ankara Yıldırım Beyazıt Üniversitesi",
        degree: "Bilgisayar Programcılığı / Yüksek Onur Öğrencisi",
        period: "2023 - 2025",
        location: "Ankara"
      }
    ],
    languages: ["Türkçe (Anadil)", "İngilizce (B2)"]
  },

  contact: {
    email: "umutardaayhan1c@gmail.com",
    linkedin: "https://www.linkedin.com/in/umut-arda-ayhan-b20b9b268/",
    github: "https://github.com/umutardaayhan",
    twitter: null,
    website: null
  },

  skills: {
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Razor",
      "Responsive UI/UX"
    ],
    backend: [
      "Python",
      "FastAPI",
      "C#",
      "ASP.NET Core MVC",
      "REST API",
      "Async Processing",
      "Migration Yönetimi"
    ],
    ai_ekosistemi: [
      "LangGraph",
      "LangChain",
      "Prompt Engineering",
      "Structured Output",
      "Kalite Kontrol Döngüleri",
      "Multi-Agent Workflows",
      "RAG / FAISS",
      "Prompt Security"
    ],
    veri_depolama: [
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Prisma",
      "SQLAlchemy",
      "MsSQL"
    ],
    araclar: [
      "Docker",
      "PyInstaller",
      "Alembic",
      "Git",
      "Streamlit",
      "Vite"
    ]
  },

  projects: [
    {
      id: 1,
      name: "Neo Pokedex",
      description: "Neo Pokedex, ASP.NET Core 9.0 ile geliştirdiğim, performans ve kullanıcı deneyimi odaklı bir Pokemon veri platformu. Uygulama; gelişmiş filtreleme, favori yönetimi, tür analizleri ve SEO destekli sayfa yapısıyla hem teknik hem ürün tarafında güçlü bir örnek proje olarak konumlanıyor.",
      technologies: ["ASP.NET Core 9.0", "Entity Framework", "SQLite", "PokeAPI"],
      github: "https://github.com/umutardaayhan/NeoPokedex",
      demo: "https://neopokedex.runasp.net",
      featured: true
    },
    {
      id: 2,
      name: "NoireConverter",
      description: "NoireConverter, görsel/ ses/ video/ doküman dosyalarını tek bir uygulamada dönüştürme, optimize etme, yeniden boyutlandırma, GIF üretme, OCR ile metin çıkarma ve toplu dosya operasyonlarını yönetme ihtiyaçlarını birleştiren modüler bir araçtır. Projede masaüstü (CustomTkinter) kullanım deneyimi ile FastAPI tabanlı servis katmanı ve vanilla JavaScript web istemcisi birlikte kurgulanmıştır.",
      technologies: ["Python", "FastAPI", "CustomTkinter", "Vanilla JS"],
      github: "https://github.com/umutardaayhan/NoireConverter",
      demo: null,
      featured: true
    },
    {
      id: 3,
      name: "PromptNexus",
      description: "PromptNexus, kullanıcıdan alınan kısa/ dağınık fikirleri yapılandırılmış ve yüksek kaliteli AI promptlarına dönüştüren bir React tabanlı web uygulamasıdır. Uygulama, Gemini 2.5 Flash entegrasyonu ile prompt üretimini otomatikleştirirken; hedef model seçimi, proje türü bağlamı, karmaşıklık seviyesi, şablon sistemi ve çok dilli çıktı gibi özelliklerle üretim kalitesini artırır. API anahtarı, geçmiş, favoriler ve kullanım limiti yönetimi gibi kullanıcı odaklı fonksiyonlar tarayıcı tarafında güvenli şekilde yönetilir.",
      technologies: ["React", "Vite", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/umutardaayhan/PromptNexus",
      demo: "https://prompt-nexus-one.vercel.app",
      featured: true
    },
    {
      id: 4,
      name: "Hacker Terminal Portfolio",
      description: "React ve Tailwind CSS ile terminal deneyimini web ortamına taşıyan, komut çalıştırma mantığına sahip interaktif bir kişisel portfolyo geliştirdim. Kullanıcılar klasik komut satırı benzeri komutlarla (`help`, `ls`, `cd`, `cat`, `projects`, `skills` vb.) içerikte gezinebiliyor; Matrix rain animasyonu, typing efekti, tema/ renk yönetimi ve responsive yapı sayesinde güçlü bir kullanıcı deneyimi sunuluyor.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/umutardaayhan",
      demo: "https://hacker-portfolio-eta.vercel.app",
      featured: true
    },
    {
      id: 5,
      name: "Replik AI",
      description: "Üretken Yapay Zeka tabanlı senaryo üretim ve interaktif hikaye platformu. Replik AI projesinde, LangGraph tabanlı çok ajanlı (multi-agent) bir üretim mimarisiyle tiyatro/ rol yapma senaryoları üreten uçtan uca bir platform geliştirdim. FastAPI + PostgreSQL + Redis + Next.js + Telegram Bot entegrasyonunu aynı ürün çatısı altında çalıştırarak hem web hem de sohbet tabanlı kullanıcı deneyimi sağladım.",
      technologies: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "LangGraph", "Docker", "Telegram Bot API"],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 6,
      name: "Influencer Factory",
      description: "Uçtan uca çok ajanlı içerik üretim mimarisi tasarımı, persona pipeline'ı, kalite kontrol döngüsü, çıktı paketleme ve otomasyon entegrasyonları. Sosyal medya planları, görsel-video üretim promptları ve platforma uygun caption'lar üretir.",
      technologies: ["CLI", "Streamlit", "JSON / Markdown", "Multi-Agent"],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 7,
      name: "Grimoire",
      description: "Yazarların hikaye planlama, yazım, düzenleme ve dışa aktarma süreçlerini tek bir platformda yönetmesini sağlayan; AI destekli özellikler ve görsel hikaye kurgulama araçları içeren bir ürün. Zengin metin editörü, AI metin analizi, PDF/EPUB dışa aktarımı barındırır.",
      technologies: ["AI", "PDF / EPUB Export", "Rich Text Editor"],
      github: null,
      demo: null,
      featured: true
    }
  ],

  achievements: [
    {
      title: "Yüksek Onur Öğrencisi",
      organization: "Ankara Yıldırım Beyazıt Üniversitesi"
    }
  ],

  experience: [
    {
      company: "Replik AI",
      position: "Full-Stack AI Engineer",
      period: "Devam ediyor",
      description: "Üretken Yapay Zeka tabanlı senaryo üretim ve interaktif hikaye platformu. Replik AI projesinde, LangGraph tabanlı çok ajanlı (multi-agent) bir üretim mimarisiyle tiyatro/ rol yapma senaryoları üreten uçtan uca bir platform geliştirdim. FastAPI + PostgreSQL + Redis + Next.js + Telegram Bot entegrasyonunu aynı ürün çatısı altında çalıştırarak hem web hem de sohbet tabanlı kullanıcı deneyimi sağladım. Güvenlik, asenkron görev yönetimi ve Docker tabanlı dağıtım süreçleriyle üretim ortamına uygun, modüler bir sistem tasarladım."
    },
    {
      company: "Influencer Factory",
      position: "AI Automation Developer",
      period: "Geçmiş Deneyim",
      description: "Uçtan uca çok ajanlı içerik üretim mimarisi tasarımı, persona pipeline'ı, kalite kontrol döngüsü, çıktı paketleme ve otomasyon entegrasyonları. Sistem; persona verisi ve görsel referanslardan yola çıkarak günlük/ haftalık/ aylık sosyal medya planları, görsel-video üretim promptları, platforma uygun caption'lar ve web sitesi için uzun form içerikler üretir. Üretim sürecini CLI + Streamlit dashboard üzerinden yönetilebilir hale getirip çıktıları JSON/ Markdown formatında paketledim."
    },
    {
      company: "Grimoire",
      position: "Product Engineer",
      period: "Devam ediyor",
      description: "Yazarların hikaye planlama, yazım, düzenleme ve dışa aktarma süreçlerini tek bir platformda yönetmesini sağlayan; AI destekli özellikler ve görsel hikaye kurgulama araçları içeren bir ürün. Platform içinde hikaye kurgusunu görsel canvas üzerinde yönetme, zengin metin editörüyle yazım, AI destekli metin analizi/ üretimi ve PDF/ EPUB dışa aktarım akışları bulunuyor. Uygulamada kimlik doğrulama, abonelik planı kurgusu, çoklu dil desteği ve dashboard yönetimi gibi ürün seviyesinde bileşenler de yer alıyor."
    }
  ],

  fileSystem: {
    name: "/",
    type: "directory",
    children: [
      {
        name: "about",
        type: "directory",
        children: [
          {
            name: "whoami.txt",
            type: "file",
            content: `AD: Umut Arda Ayhan
UNVAN: Full Stack Geliştirici
KONUM: Türkiye

HAKKIMDA:
Replik AI, Influencer Factory ve Grimoire gibi projelerde görev almış, LangGraph ve LangChain gibi teknolojilerle AI & Orchestration süreçlerinde uzmanlaşmış Full Stack Geliştirici.
Modüler mimari ve uçtan uca teslim odaklı çalışarak çoklu platform (web + desktop + bot) ürünler geliştiriyorum.

EĞİTİM:
• Gazi Üniversitesi - Bilgisayar Mühendisliği (2025 - Devam Ediyor)
• Ankara Yıldırım Beyazıt Üniversitesi - Bilgisayar Programcılığı / Yüksek Onur Öğrencisi (2023 - 2025)

DİLLER:
• Türkçe (Anadil)
• İngilizce (B2)`
          },
          {
            name: "experience.txt",
            type: "file",
            content: `DENEYİM (PROJE BAZLI):

1. Full-Stack AI Engineer — Replik AI *(Devam ediyor)*
- Üretken Yapay Zeka tabanlı senaryo üretim ve interaktif hikaye platformu.
- LangGraph tabanlı çok ajanlı (multi-agent) üretim mimarisi.
- FastAPI + PostgreSQL + Redis + Next.js + Telegram Bot entegrasyonu.
- Güvenlik, asenkron görev yönetimi ve Docker tabanlı dağıtım.

2. AI Automation Developer — Influencer Factory
- Uçtan uca çok ajanlı içerik üretim mimarisi, persona pipeline'ı ve otomasyon.
- Sosyal medya planları, caption ve görsel-video prompt üretimi.
- CLI + Streamlit dashboard yönetimi ve JSON/Markdown formatında paketleme.

3. Product Engineer — Grimoire *(Devam ediyor)*
- Yazarlar için detaylı hikaye kurgulama, görsel canvas ve metin editörü.
- AI destekli metin analizi, PDF/EPUB dışa aktarımı.
- Kimlik doğrulama, abonelik altyapısı ve dashboard yönetimi.`
          }
        ]
      },
      {
        name: "projects",
        type: "directory",
        children: [
          {
            name: "neopokedex",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# Neo Pokedex
Neo Pokedex, ASP.NET Core 9.0 ile geliştirdiğim, performans ve kullanıcı deneyimi odaklı bir Pokemon veri platformu. Uygulama; gelişmiş filtreleme, favori yönetimi, tür analizleri ve SEO destekli sayfa yapısıyla hem teknik hem ürün tarafında güçlü bir örnek proje olarak konumlanıyor.

- Teknolojiler: ASP.NET Core 9.0, Entity Framework, SQLite, PokeAPI
- GitHub: github.com/umutardaayhan/NeoPokedex
- Website: neopokedex.runasp.net`
              }
            ]
          },
          {
            name: "noireconverter",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# NoireConverter
NoireConverter, görsel/ ses/ video/ doküman dosyalarını tek bir uygulamada dönüştürme, optimize etme, yeniden boyutlandırma, GIF üretme, OCR ile metin çıkarma ve toplu dosya operasyonlarını yönetme ihtiyaçlarını birleştiren modüler bir araçtır. Projede masaüstü (CustomTkinter) kullanım deneyimi ile FastAPI tabanlı servis katmanı ve vanilla JavaScript web istemcisi birlikte kurgulanmıştır.

- Teknolojiler: Python, FastAPI, CustomTkinter, Vanilla JS
- GitHub: github.com/umutardaayhan/NoireConverter`
              }
            ]
          },
          {
            name: "promptnexus",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# PromptNexus
PromptNexus, kullanıcıdan alınan kısa/ dağınık fikirleri yapılandırılmış ve yüksek kaliteli AI promptlarına dönüştüren bir React tabanlı web uygulamasıdır. Uygulama, Gemini 2.5 Flash entegrasyonu ile prompt üretimini otomatikleştirirken; hedef model seçimi, proje türü bağlamı, karmaşıklık seviyesi, şablon sistemi ve çok dilli çıktı gibi özelliklerle üretim kalitesini artırır. API anahtarı, geçmiş, favoriler ve kullanım limiti yönetimi gibi kullanıcı odaklı fonksiyonlar tarayıcı tarafında güvenli şekilde yönetilir.

- Teknolojiler: React, Vite, Tailwind CSS, Gemini API
- GitHub: github.com/umutardaayhan/PromptNexus
- Website: prompt-nexus-one.vercel.app`
              }
            ]
          },
          {
            name: "hackerportfolio",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# Hacker Terminal Portfolio
React ve Tailwind CSS ile terminal deneyimini web ortamına taşıyan, komut çalıştırma mantığına sahip interaktif bir kişisel portfolyo geliştirdim. Kullanıcılar klasik komut satırı benzeri komutlarla (\`help\`, \`ls\`, \`cd\`, \`cat\`, \`projects\`, \`skills\` vb.) içerikte gezinebiliyor; Matrix rain animasyonu, typing efekti, tema/ renk yönetimi ve responsive yapı sayesinde güçlü bir kullanıcı deneyimi sunuluyor.

- Teknolojiler: React, Tailwind CSS, JavaScript
- GitHub: github.com/umutardaayhan
- Website: hacker-portfolio-eta.vercel.app`
              }
            ]
          },
          {
            name: "replikai",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# Replik AI
Üretken Yapay Zeka tabanlı senaryo üretim ve interaktif hikaye platformu. Replik AI projesinde, LangGraph tabanlı çok ajanlı (multi-agent) bir üretim mimarisiyle tiyatro/ rol yapma senaryoları üreten uçtan uca bir platform geliştirdim. FastAPI + PostgreSQL + Redis + Next.js + Telegram Bot entegrasyonunu aynı ürün çatısı altında çalıştırarak hem web hem de sohbet tabanlı kullanıcı deneyimi sağladım.

- Teknolojiler: FastAPI, PostgreSQL, Redis, Next.js, LangGraph, Docker, Telegram Bot API`
              }
            ]
          },
          {
            name: "influencerfactory",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# Influencer Factory
Uçtan uca çok ajanlı içerik üretim mimarisi tasarımı, persona pipeline'ı, kalite kontrol döngüsü, çıktı paketleme ve otomasyon entegrasyonları. Sosyal medya planları, görsel-video üretim promptları ve platforma uygun caption'lar üretir.

- Teknolojiler: CLI, Streamlit, JSON / Markdown, Multi-Agent`
              }
            ]
          },
          {
            name: "grimoire",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# Grimoire
Yazarların hikaye planlama, yazım, düzenleme ve dışa aktarma süreçlerini tek bir platformda yönetmesini sağlayan; AI destekli özellikler ve görsel hikaye kurgulama araçları içeren bir ürün. Zengin metin editörü, AI metin analizi, PDF/EPUB dışa aktarımı barındırır.

- Teknolojiler: AI, PDF / EPUB Export, Rich Text Editor`
              }
            ]
          }
        ]
      },
      {
        name: "skills",
        type: "directory",
        children: [
          {
            name: "frontend.txt",
            type: "file",
            content: `FRONTEND EKO SİSTEMİ:
- Next.js
- React & TypeScript
- Tailwind CSS
- Razor
- Responsive UI/ UX`
          },
          {
            name: "backend.txt",
            type: "file",
            content: `BACKEND VE MİMARİ:
- Python, FastAPI
- C#, ASP.NET Core MVC
- REST API
- Async Processing
- Migration Yönetimi`
          },
          {
            name: "ai_ekosistemi.txt",
            type: "file",
            content: `AI VE ORKESTRASYON:
- LangGraph & LangChain
- Prompt Engineering & Prompt Security
- Structured Output & Kalite Kontrol Döngüleri
- Multi-Agent Workflows
- RAG / FAISS`
          },
          {
            name: "veri_ve_araclar.txt",
            type: "file",
            content: `VERİ ALTYAPISI VE ARAÇLAR:
- Veritabanları: PostgreSQL, SQLite, Redis, MsSQL
- ORM: Prisma, SQLAlchemy
- Altyapı/Araçlar: Docker, PyInstaller, Vite
- Versiyon Kontrol vb: Git, GitHub, Streamlit, Alembic`
          }
        ]
      },
      {
        name: "contact",
        type: "directory",
        children: [
          {
            name: "info.txt",
            type: "file",
            content: `BANA ULAŞABİLECEĞİNİZ KANALLAR:

E-Mail: umutardaayhan1c@gmail.com
LinkedIn: https://www.linkedin.com/in/umut-arda-ayhan-b20b9b268/
GitHub: https://github.com/umutardaayhan

İletişime geçmekten çekinmeyin!`
          }
        ]
      },
      {
        name: "README.md",
        type: "file",
        content: `# Sistem Başlatıldı... Umut'un Terminal Arayüzüne Hoş Geldiniz.

## Başlangıç Komutları:

- help       : Mevcut tüm komutları listeler.
- whoami     : Kişisel özet bilgileri görüntüle (Eğitim vb. dahil).
- experience : İş deneyimlerimi ve çalıştığım projeleri göster (YENİ).
- education  : Eğitim geçmişimi göster (YENİ).
- cv         : Tüm CV bilgilerimi eksiksiz listele (YENİ).
- projects   : Projelerimi incele.
- skills     : Donanımsal yeteneklerimi listele.
- contact    : İletişim bilgilerini getir.
- matrix     : Etrafı biraz yeşillendir.
- clear      : Ekranı temizle.

Ayrıca dosyalarda gezinmek için Linux (ls, cd, pwd, cat) komutlarını kullanabilirsiniz.`
      }
    ]
  }
};

export default portfolioData;
