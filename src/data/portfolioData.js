const portfolioData = {
  user: {
    name: "Umut Arda Ayhan",
    title: "Full Stack Geliştirici",
    bio: "Replik AI, Influencer Factory ve Grimoire gibi yapay zeka ve orkestrasyon merkezli projelerde görev almış, LangGraph ve LangChain mimarileri ile uçtan uca Multi-Agent sistemler inşa eden Full Stack Geliştirici. Temiz ürün yaklaşımı ve çoklu platform çözümleri dahilinde çalışmaktayım.",
    experience: "3+ yıl",
    location: "Türkiye",
    education: "Gazi Üniversitesi - Bilgisayar Mühendisliği (Devam ediyor) | AYBÜ - Bilgisayar Programcılığı / Yüksek Onur Öğrencisi (Mezun)",
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
      "Multi-Agent Workflows",
      "RAG / FAISS",
      "Kalite Kontrol Döngüleri",
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
      "Git / GitHub",
      "Streamlit",
      "Vite"
    ]
  },

  projects: [
    {
      id: 1,
      name: "NeoPokedex",
      description: "ASP.NET Core 9.0 ile geliştirilmiş, performans ve kullanıcı deneyimi odaklı bir Pokemon veri platformu. 1025 Pokemonu barındırıyor. Gelişmiş filtreleme, favori yönetimi, tür analizleri ve SEO destekli sayfa yapısına sahiptir.",
      technologies: ["ASP.NET Core 9.0", "Entity Framework", "SQLite", "PokeAPI"],
      github: "https://github.com/umutardaayhan/NeoPokedex",
      demo: "https://neopokedex.runasp.net",
      featured: true
    },
    {
      id: 2,
      name: "NoireConverter",
      description: "Görsel, ses, video ve doküman dosyalarını tek uygulamada dönüştürme, optimize etme, OCR metin çıkarma ve toplu dosya operasyonlarını yönetme üzerine kurulu modüler bir masaüstü ve web hibrit aracı.",
      technologies: ["Python", "FastAPI", "CustomTkinter", "Vanilla JS"],
      github: "https://github.com/umutardaayhan/NoireConverter",
      demo: null,
      featured: true
    },
    {
      id: 3,
      name: "PromptNexus",
      description: "Google Gemini 2.5 Flash destekli AI Prompt Generator. Kullanıcıdan alınan kısa ve dağınık fikirleri yapılandırılmış, yüksek kaliteli promptlara dönüştüren React JS tabanlı web uygulaması.",
      technologies: ["React", "Vite", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/umutardaayhan/PromptNexus",
      demo: "https://prompt-nexus-one.vercel.app",
      featured: true
    },
    {
      id: 4,
      name: "Hacker Terminal Portfolio",
      description: "React ve Tailwind CSS ile terminal deneyimini web ortamına taşıyan, komut çalıştırma mantığına sahip (help, ls, cat vb.) interaktif kişisel portfolyo. Matrix efektli arayüz içeriyor.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Terminal UI"],
      github: "https://github.com/umutardaayhan",
      demo: "https://hacker-portfolio-eta.vercel.app",
      featured: true
    }
  ],

  achievements: [],

  experience: [
    {
      company: "Replik AI",
      position: "Full-Stack AI Engineer",
      period: "Devam ediyor",
      description: "LangGraph tabanlı çok ajanlı (multi-agent) üretim mimarisiyle interaktif hikaye platformu. FastAPI + PostgreSQL + Redis + Next.js + Telegram Bot entegrasyonu. Prompt Injection koruması ve Docker tabanlı dağıtım süreciyle modüler sistem tasarımı."
    },
    {
      company: "Influencer Factory",
      position: "AI Automation Developer",
      period: "Geçmiş Deneyim",
      description: "Persona verisi ve görsel referanslardan yola çıkarak sosyal medya planları, platform promptları ve içerikler üreten AI içerik otomasyonu. Üretim sürecini CLI ve Streamlit dashboardları ile ölçekleme imkanı."
    },
    {
      company: "Grimoire",
      position: "Product Engineer",
      period: "Devam ediyor",
      description: "Yazarların hikaye planlama, yazım ve düzenleme süreçlerini yönetmesini sağlayan AI destekli platform. PDF/EPUB dışa aktarımı, zengin metin düzenleme ve kimlik doğrulama, abonelik sistemi kurgusu ile ürün geliştirme."
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
Replik AI, Influencer Factory ve Grimoire gibi projelerde görev almış, 
LangGraph ve LangChain gibi teknolojilerle AI & Orchestration 
süreçlerinde uzmanlaşmış Full Stack Geliştirici. Modüler mimari ve
çoklu platform (web, desktop, bot) odaklı ürünler geliştirmeyi sever.

EĞİTİM:
• AYBÜ - Bilgisayar Programcılığı / Yüksek Onur Öğrencisi (Mezun)
• Gazi Üniversitesi - Bilgisayar Mühendisliği (2025 - Devam Ediyor)`
          },
          {
            name: "experience.txt",
            type: "file",
            content: `DENEYİM (PROJE BAZLI):

1. Full-Stack AI Engineer — Replik AI (Devam ediyor)
- Üretken Yapay Zeka (LangGraph) tabanlı senaryo/hikaye platformu.
- FastAPI + PostgreSQL + Redis + Next.js + Telegram Bot.
- Asenkron görev yönetimi, Docker, Prompt Injection koruması.

2. AI Automation Developer — Influencer Factory
- Uçtan uca çok ajanlı içerik üretim mimarisi tasarımı.
- Persona pipeline, CLI + Streamlit dashboard üzerinden otomasyon.

3. Product Engineer — Grimoire (Devam ediyor)
- Yazarlar için detaylı hikaye kurgulama, metin editörü.
- AI destekli metin analizi, PDF/EPUB dışa aktarımı, Abonelik altyapısı.`
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
                content: `# NeoPokedex
ASP.NET Core 9.0 ile geliştirdiğim, performans ve kullanıcı deneyimi odaklı bir Pokemon veri platformu (1025 Pokemon).

## Özellikler:
- Gelişmiş filtreleme ve detaylı gösterim.
- Favoriler sistemi ve tür/zayıflık analizleri.
- SEO destekli sayfa yapısı.

## Teknolojiler:
- ASP.NET Core 9.0, Entity Framework, SQLite, PokeAPI

Linkler: github.com/umutardaayhan/NeoPokedex | neopokedex.runasp.net`
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
Masaüstü (CustomTkinter) kullanım deneyimi ile FastAPI tabanlı servis katmanı ve vanilla JavaScript web istemcisini birleştiren modüler araç.

## Özellikler:
- Görsel/ses/video dönüştürme, optimize etme, GIF üretme.
- OCR metin çıkarma (PDF ve Resimlerden).
- Toplu dosya yönetimi.

## Teknolojiler:
- Python, FastAPI, CustomTkinter, Vanilla JS

Linkler: github.com/umutardaayhan/NoireConverter`
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
Kullanıcıdan alınan dağınık fikirleri yapılandırılmış ve yüksek kaliteli AI promptlarına dönüştüren web uygulaması.

## Özellikler:
- Gemini 2.5 Flash entegrasyonu (Çoklu AI hedef model kurgusu).
- Çok dilli çıktı, yaratıcılık seviyeleri ve karmaşıklık yönetimi.
- Tarayıcı tarafında API anahtarı yönetimi.

## Teknolojiler:
- React, Vite, Tailwind CSS, Gemini API

Linkler: github.com/umutardaayhan/PromptNexus | prompt-nexus-one.vercel.app`
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
Şu anda içerisinde bulunduğunuz bu kişisel web portfolyosu.

## Özellikler
- Tam teşekküllü Terminal arayüzü
- Matrix rain efekti ve interaktif komut istemleri 
- Yardım, oyun ve bilgi API'si (Zeka sorusu, Şaka vb.) entegrasyonu.

## Teknolojiler
- React, Tailwind CSS

Linkler: github.com/umutardaayhan`
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
- Responsive UI/ UX Tasarımı`
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
- Structured Outputs & Kalite Kontrol Döngüleri
- Multi-Agent Workflows
- RAG & FAISS`
          },
          {
            name: "veri_ve_araclar.txt",
            type: "file",
            content: `VERİ ALTYAPISI VE ARAÇLAR:
- Veritabanları: PostgreSQL, SQLite, Redis, MsSQL
- ORM: Prisma, SQLAlchemy
- Araçlar: Docker, PyInstaller, Vite
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

- help      : Yardım menüsünü ve mevcut komutları göster.
- whoami    : Kişisel özet bilgileri görüntüle.
- projects  : Projelerimi incele.
- skills    : Donanımsal yeteneklerimi listele.
- contact   : İletişim bilgilerini getir.
- matrix    : Etrafı biraz yeşillendir.
- clear     : Ekranı temizle.

Ayrıca dosyalarda gezinmek için her zamanki Linux (ls, cd, cat) 
komutlarını deneyimleyebilirsiniz. İyi keşifler!`
      }
    ]
  }
};

export default portfolioData;
