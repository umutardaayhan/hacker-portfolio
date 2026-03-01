const portfolioData = {
  user: {
    name: "Umut Arda Ayhan",
    title: "Software Developer",
    bio: "Yazılım geliştirme süreçlerini optimize etmeye odaklanan, kod mimarisi ve proje yönetimi konularında uzmanlaşan bir geliştirici. Yapay zeka teknolojilerine özel ilgi duyuyor.",
    experience: "2+ yıl",
    location: "Türkiye",
    education: "Gazi Üniversitesi - Bilgisayar Mühendisliği (3. sınıf)",
    languages: ["Türkçe (Ana dil)", "İngilizce"]
  },

  contact: {
    email: "umutardaayhan1c@gmail.com",
    linkedin: "https://www.linkedin.com/in/umut-arda-ayhan-b20b9b268/",
    github: "https://github.com/umutardaayhan",
    twitter: "https://x.com/UArdaAyhan",
    website: "https://umutardaayhan.com"
  },

  skills: {
    frontend: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Vite"
    ],
    backend: [
      "ASP.NET Core",
      "C#",
      "C++",
      "Python",
      "SQLite"
    ],
    tools: [
      "Git/GitHub",
      "Vercel",
      "VS Code",
      "FFmpeg"
    ],
    methodologies: [
      "MVC",
      "REST API",
      "AI / Machine Learning"
    ]
  },

  projects: [
    {
      id: 1,
      name: "NeoPokedex",
      description: "Modern, yüksek performanslı Pokedex uygulaması. ASP.NET Core 9.0 ile geliştirilmiştir. 1025 Pokemon'u destekler, yerel önbellekleme, tip eşleşme motoru ve favoriler sistemi içerir.",
      technologies: ["ASP.NET Core 9.0", "Entity Framework", "SQLite", "PokeAPI"],
      github: "https://github.com/umutardaayhan/NeoPokedex",
      demo: "https://neopokedex.runasp.net",
      featured: true
    },
    {
      id: 2,
      name: "NoireConverter",
      description: "Python ve FFmpeg ile geliştirilmiş hepsi-bir-arada medya işleme aracı. Görüntü/dönüştürme, PDF işlemleri, toplu yeniden adlandırma ve GIF oluşturma özellikleri sunar.",
      technologies: ["Python", "FFmpeg", "PyQt"],
      github: "https://github.com/umutardaayhan/NoireConverter",
      demo: null,
      featured: true
    },
    {
      id: 3,
      name: "NoirePlanner",
      description: "C++ ile geliştirilmiş planlama ve organizasyon uygulaması.",
      technologies: ["C++"],
      github: "https://github.com/umutardaayhan/NoirePlanner",
      demo: null,
      featured: false
    },
    {
      id: 4,
      name: "PromptNexus",
      description: "Google Gemini 2.5 Flash destekli AI Prompt Generator. React ile geliştirilmiş modern web uygulaması. 29 hazır şablon, çoklu AI desteği ve IDE agent entegrasyonu sunar.",
      technologies: ["React", "Vite", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/umutardaayhan/PromptNexus",
      demo: "https://prompt-nexus-one.vercel.app",
      featured: true
    }
  ],

  achievements: [],

  experience: [
    {
      company: "Open Source",
      position: "Software Developer",
      period: "2020 - Günümüz",
      description: "GitHub'da kişisel projeler geliştirme. ASP.NET Core, C++, JavaScript projeleri."
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
UNVAN: Software Developer
KONUM: Türkiye

HAKKIMDA:
Yazılım geliştirme süreçlerini optimize etmeye odaklanan,
kod mimarisi ve proje yönetimi konularında uzmanlaşan
bir geliştirici. Yapay zeka teknolojilerine özel ilgi duyuyor.

EĞİTİM:
• AYBU - Bilgisayar Programcılığı (Mezun)
• Gazi Üniversitesi - Bilgisayar Mühendisliği (3. sınıf, Devam Ediyor)`
          },
          {
            name: "experience.txt",
            type: "file",
            content: `DENEYİM:

2020 - Günümüz | Open Source
Software Developer
- GitHub'da kişisel projeler
- ASP.NET Core, C++, JavaScript
- 2+ yıllık geliştirme deneyimi`
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
                content: `# NeoPokedex v1.6

Modern, yüksek performanslı Pokedex uygulaması.

## Özellikler
- 1025 Pokemon (Gen 9 desteği)
- Yerel önbellekleme
- Tip eşleşme motoru (Weaknesses/Resistances)
- Favoriler sistemi
- Shiny mod ve ses efektleri

## Teknolojiler
- ASP.NET Core 9.0
- Entity Framework Core
- SQLite
- PokeAPI

## Linkler
- GitHub: github.com/umutardaayhan/NeoPokedex
- Demo: neopokedex.runasp.net`
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
                content: `# NoireConverter v1.6

Python ve FFmpeg ile geliştirilmiş hepsi-bir-arada medya işleme aracı.

## Özellikler
- Görüntü format dönüştürme (WEBP, PNG, JPG, ICO)
- Ses dönüştürme (MP3, WAV)
- PDF işlemleri (Word/PowerPoint dönüşümü)
- Toplu yeniden adlandırma
- GIF oluşturma
- Text extraction

## Teknolojiler
- Python
- FFmpeg
- PyQt

## Linkler
- GitHub: github.com/umutardaayhan/NoireConverter`
              }
            ]
          },
          {
            name: "noireplanner",
            type: "directory",
            children: [
              {
                name: "README.md",
                type: "file",
                content: `# NoirePlanner

C++ ile geliştirilmiş planlama uygulaması.

## Teknolojiler
- C++

## Linkler
- GitHub: github.com/umutardaayhan/NoirePlanner`
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
                content: `# PromptNexus v1.2

Google Gemini 2.5 Flash destekli AI Prompt Generator.

## Özellikler
- 29 hazır prompt şablonu
- Çoklu AI desteği (ChatGPT, Claude, Midjourney, DALL-E, Gemini)
- IDE Agent entegrasyonu (Cursor, GitHub Copilot, Windsurf)
- 12 farklı dilde çıktı
- Yaratıcılık seviyesi ayarı
- Responsive tasarım

## Teknolojiler
- React
- Vite
- Tailwind CSS
- Google Gemini API

## Linkler
- GitHub: github.com/umutardaayhan/PromptNexus
- Demo: prompt-nexus-one.vercel.app`
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
            content: `FRONTEND:
- React
- JavaScript
- HTML/CSS
- Tailwind CSS
- Vite`
          },
          {
            name: "backend.txt",
            type: "file",
            content: `BACKEND:
- ASP.NET Core
- C#
- C++
- Python
- SQLite`
          },
          {
            name: "tools.txt",
            type: "file",
            content: `ARAÇLAR:
- Git/GitHub
- Vercel
- VS Code
- FFmpeg

İLGİ ALANLARI:
- AI / Machine Learning`
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
            content: `İLETİŞİM BİLGİLERİ:

GitHub: github.com/umutardaayhan

Diğer iletişim bilgileri yakında eklenecek.

İletişime geçmekten çekinmeyin!`
          }
        ]
      },
      {
        name: "README.md",
        type: "file",
        content: `# Hoş Geldiniz!

Bu interaktif terminal portfolyosuna hoş geldiniz.

## Başlangıç

Mevcut komutları görmek için: help
Kullanıcı bilgileri için: whoami
Projeleri görmek için: projects

## Komutlar
- help: Yardım menüsü
- ls: Dosyaları listele
- cd: Dizin değiştir
- cat: Dosya içeriğini göster
- whoami: Kullanıcı bilgileri
- projects: Projeler
- skills: Yetenekler
- contact: İletişim
- clear: Ekranı temizle

İyi gezintiler!`
      }
    ]
  }
};

export default portfolioData;
