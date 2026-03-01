import { getDirectory, findFile, resolvePath } from '../utils/fileSystem';
import portfolioData from './portfolioData';
import { 
  textToAscii, 
  getRandomAsciiArt, 
  getRandomJoke, 
  getWordDefinition,
  getGitHubUser,
  getGitHubRepo,
  getWeather
} from '../services/apiServices';

// Oyun durumları - global state (module-level)
let currentRiddle = null;
let gameNumber = null;
let gameAttempts = 0;

const commands = {
  help: {
    name: 'help',
    description: 'Mevcut tüm komutları listeler',
    usage: 'help [komut_adı]',
    aliases: ['h', '?'],
    execute: (args, context) => {
      if (args.length > 0) {
        const cmd = args[0];
        if (commands[cmd]) {
          return {
            type: 'info',
            content: `
Komut: ${commands[cmd].name}
Açıklama: ${commands[cmd].description}
Kullanım: ${commands[cmd].usage}
Kısayollar: ${commands[cmd].aliases?.join(', ') || 'Yok'}
            `.trim()
          };
        }
        return {
          type: 'error',
          content: `help: '${cmd}' komutu bulunamadı.`
        };
      }
      
      const commandList = Object.values(commands)
        .map(cmd => `  ${cmd.name.padEnd(12)} - ${cmd.description}`)
        .join('\n');
      
      return {
        type: 'info',
        content: `Mevcut Komutlar:\n\n${commandList}\n\nDetaylı bilgi için: help <komut_adı>`
      };
    }
  },

  whoami: {
    name: 'whoami',
    description: 'Kullanıcı bilgilerini gösterir',
    usage: 'whoami',
    aliases: ['about', 'info'],
    execute: (args, context) => {
      const { user } = portfolioData;
      return {
        type: 'info',
        content: `
╔════════════════════════════════════════╗
║  ${user.name.padEnd(36)} ║
║  ${user.title.padEnd(36)} ║
╚════════════════════════════════════════╝

${user.bio}

Deneyim: ${user.experience}
Konum: ${user.location}
        `.trim(),
        options: { typingEffect: true, typingSpeed: 20 }
      };
    }
  },

  ls: {
    name: 'ls',
    description: 'Mevcut dizindeki dosyaları listeler',
    usage: 'ls [seçenekler]',
    aliases: ['dir', 'list'],
    execute: (args, context) => {
      const { currentPath } = context;
      const fileSystem = portfolioData.fileSystem;
      
      const currentDir = getDirectory(fileSystem, currentPath);
      
      if (!currentDir) {
        return {
          type: 'error',
          content: `ls: '${currentPath}': Böyle bir dizin yok`
        };
      }
      
      const items = currentDir.children.map(item => {
        const isDir = item.type === 'directory';
        const icon = isDir ? '📁' : '📄';
        const name = isDir ? item.name + '/' : item.name;
        return `${icon} ${name}`;
      });
      
      return {
        type: 'info',
        content: items.join('\n') || 'Boş dizin',
        options: { typingEffect: false }
      };
    }
  },

  cd: {
    name: 'cd',
    description: 'Dizin değiştir',
    usage: 'cd <dizin_adı>',
    aliases: [],
    execute: (args, context) => {
      const { currentPath, setCurrentPath } = context;
      const fileSystem = portfolioData.fileSystem;
      
      if (args.length === 0 || args[0] === '~') {
        setCurrentPath('/');
        return { type: 'success', content: '' };
      }
      
      const target = args[0];
      
      if (target === '..') {
        const parent = currentPath.split('/').slice(0, -1).join('/') || '/';
        setCurrentPath(parent);
        return { type: 'success', content: '' };
      }
      
      if (target === '/') {
        setCurrentPath('/');
        return { type: 'success', content: '' };
      }
      
      const newPath = resolvePath(currentPath, target);
      const dir = getDirectory(fileSystem, newPath);
      
      if (!dir) {
        return {
          type: 'error',
          content: `cd: '${target}': Böyle bir dizin yok`
        };
      }
      
      if (dir.type !== 'directory') {
        return {
          type: 'error',
          content: `cd: '${target}': Bir dosya değil`
        };
      }
      
      setCurrentPath(newPath);
      return { type: 'success', content: '' };
    }
  },

  cat: {
    name: 'cat',
    description: 'Dosya içeriğini göster',
    usage: 'cat <dosya_adı>',
    aliases: ['type', 'read'],
    execute: (args, context) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'cat: Dosya adı belirtilmedi'
        };
      }
      
      const { currentPath } = context;
      const fileName = args[0];
      const fileSystem = portfolioData.fileSystem;
      
      const file = findFile(fileSystem, currentPath, fileName);
      
      if (!file) {
        return {
          type: 'error',
          content: `cat: '${fileName}': Böyle bir dosya yok`
        };
      }
      
      if (file.type === 'directory') {
        return {
          type: 'error',
          content: `cat: '${fileName}': Bir dizin`
        };
      }
      
      return {
        type: 'info',
        content: file.content,
        options: { typingEffect: true, typingSpeed: 10 }
      };
    }
  },

  projects: {
    name: 'projects',
    description: 'Projeleri listele',
    usage: 'projects [proje_adı]',
    aliases: ['proj', 'works'],
    execute: (args, context) => {
      const { projects } = portfolioData;
      
      if (args.length > 0) {
        const projectName = args[0].toLowerCase();
        const project = projects.find(p => 
          p.name.toLowerCase().replace(/\s+/g, '') === projectName ||
          p.name.toLowerCase() === projectName
        );
        
        if (!project) {
          return {
            type: 'error',
            content: `projects: '${args[0]}' bulunamadı`
          };
        }
        
        return {
          type: 'info',
          content: `
╔════════════════════════════════════════╗
║  ${project.name.padEnd(36)} ║
╚════════════════════════════════════════╝

${project.description}

Teknolojiler: ${project.technologies.join(', ')}
GitHub: ${project.github || 'N/A'}
Demo: ${project.demo || 'N/A'}
          `.trim(),
          options: { typingEffect: true }
        };
      }
      
      const projectList = projects.map((p, i) => 
        `${i + 1}. ${p.name} ${p.featured ? '⭐' : ''} - ${p.technologies.slice(0, 3).join(', ')}...`
      ).join('\n');
      
      return {
        type: 'info',
        content: `Projelerim:\n\n${projectList}\n\nDetay için: projects <proje_adı>`,
        options: { typingEffect: true }
      };
    }
  },

  skills: {
    name: 'skills',
    description: 'Yetenekleri göster',
    usage: 'skills [kategori]',
    aliases: ['tech', 'stack'],
    execute: (args, context) => {
      const { skills } = portfolioData;
      
      if (args.length > 0) {
        const category = args[0].toLowerCase();
        const skillCategory = skills[category];
        
        if (!skillCategory) {
          const available = Object.keys(skills).join(', ');
          return {
            type: 'error',
            content: `skills: '${category}' kategorisi bulunamadı. Mevcut: ${available}`
          };
        }
        
        return {
          type: 'info',
          content: `${category.toUpperCase()}:\n\n${skillCategory.join('\n')}`,
          options: { typingEffect: true }
        };
      }
      
      let output = 'YETENEKLERİM\n' + '='.repeat(40) + '\n\n';
      
      for (const [category, items] of Object.entries(skills)) {
        output += `[${category.toUpperCase()}]\n`;
        output += items.map(s => `  • ${s}`).join('\n');
        output += '\n\n';
      }
      
      return {
        type: 'info',
        content: output.trim(),
        options: { typingEffect: true, typingSpeed: 15 }
      };
    }
  },

  contact: {
    name: 'contact',
    description: 'İletişim bilgilerini göster',
    usage: 'contact',
    aliases: ['reach', 'connect'],
    execute: (args, context) => {
      const { contact } = portfolioData;
      
      return {
        type: 'info',
        content: `
╔════════════════════════════════════════╗
║         İLETİŞİM BİLGİLERİ             ║
╚════════════════════════════════════════╝

📧 E-posta:    ${contact.email}
💼 LinkedIn:   ${contact.linkedin}
🐙 GitHub:     ${contact.github}
🐦 Twitter:    ${contact.twitter || 'N/A'}
🌐 Website:    ${contact.website || 'N/A'}

İletişime geçmekten çekinmeyin!
        `.trim(),
        options: { typingEffect: true }
      };
    }
  },

  clear: {
    name: 'clear',
    description: 'Terminal ekranını temizle',
    usage: 'clear',
    aliases: ['cls', 'clr'],
    execute: (args, context) => {
      context.clearHistory();
      return {
        type: 'success',
        content: '',
        options: { clearScreen: true }
      };
    }
  },

  pwd: {
    name: 'pwd',
    description: 'Mevcut dizini göster',
    usage: 'pwd',
    aliases: ['whereami', 'path'],
    execute: (args, context) => {
      return {
        type: 'info',
        content: context.currentPath
      };
    }
  },

  date: {
    name: 'date',
    description: 'Sistem tarihini göster',
    usage: 'date',
    aliases: ['time', 'now'],
    execute: (args, context) => {
      const now = new Date();
      return {
        type: 'info',
        content: now.toLocaleString('tr-TR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      };
    }
  },

  echo: {
    name: 'echo',
    description: 'Metin yazdır',
    usage: 'echo <metin>',
    aliases: ['say', 'print'],
    execute: (args, context) => {
      return {
        type: 'info',
        content: args.join(' ')
      };
    }
  },

  neofetch: {
    name: 'neofetch',
    description: 'Sistem bilgilerini göster (ASCII art ile)',
    usage: 'neofetch',
    aliases: ['sysinfo', 'about'],
    execute: (args, context) => {
      const { user } = portfolioData;
      
      return {
        type: 'ascii',
        content: `
    ██╗      ${user.name}
    ██║      ${user.title}
    ██║      OS: React Terminal Portfolio
    ██║      Shell: portfolio-cli
    ██║      Resolution: Responsive
    ██║      Theme: Hacker Green
    ╚═╝      Status: Available for hire
        `.trim(),
        options: { typingEffect: true }
      };
    }
  },

  // Eğlenceli ve Alışılmadık Komutlar
  
  matrix: {
    name: 'matrix',
    description: 'Matrix kod yağmuru efekti (çıkmak için: clear)',
    usage: 'matrix',
    aliases: ['rain', 'codefall'],
    execute: (args, context) => {
      // Matrix durumunu başlat
      return {
        type: 'matrix',
        content: 'Matrix efekti başlatıldı! Durdurmak için: clear',
        options: { 
          typingEffect: false,
          isMatrix: true
        }
      };
    }
  },

  coffee: {
    name: 'coffee',
    description: 'Kahve makinesi simülasyonu',
    usage: 'coffee [tur]',
    aliases: ['espresso', 'latte'],
    execute: (args, context) => {
      const types = ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Türk Kahvesi'];
      const type = args[0] || types[Math.floor(Math.random() * types.length)];
      
      return {
        type: 'info',
        content: `
☕ Kahve Makinesi Başlatılıyor...

[■■□□□□□□□□] 20% - Su ısıtılıyor
[■■■■□□□□□□] 40% - Kahve öğütülüyor  
[■■■■■■□□□□] 60% - ${type} hazırlanıyor
[■■■■■■■■□□] 80% - Köpük ekleniyor
[■■■■■■■■■■] 100% - Kahveniz hazır!

        ( (
         ) )
      .......
      |     |]
      \\     /
       '---'
       |   |
       |   |
       |   |
    
${type} hazır! Afiyet olsun ☕
        `.trim(),
        options: { typingEffect: true, typingSpeed: 30 }
      };
    }
  },

  hack: {
    name: 'hack',
    description: 'Hollywood tarzı hacking simülasyonu',
    usage: 'hack [hedef]',
    aliases: ['crack', 'penetrate'],
    execute: (args, context) => {
      const target = args[0] || 'mainframe';
      const steps = [
        'Bağlantı kuruluyor...',
        'Firewall aşılıyor...',
        'Şifreleme kırılıyor...',
        'Root erişimi sağlanıyor...',
        'Veri indiriliyor...',
        'İzler siliniyor...'
      ];
      
      let output = `🎯 Hedef: ${target}\n\n`;
      
      steps.forEach((step, i) => {
        const progress = Math.floor(Math.random() * 100);
        const hex = Array(8).fill(0).map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(' ');
        output += `[0x${hex}] ${step} %${progress}\n`;
      });
      
      output += '\n✅ ERİŞİM SAĞLANDI!\n';
      output += '⚠️  Bu bir simülasyondur. Gerçek hacking suçtur!\n';
      
      return {
        type: 'info',
        content: output,
        options: { typingEffect: true, typingSpeed: 25 }
      };
    }
  },

  riddle: {
    name: 'riddle',
    description: 'Zeka sorusu sorar',
    usage: 'riddle [cevap]',
    aliases: ['puzzle', 'bilmecen'],
    execute: (args, context) => {
      const riddles = [
        {
          q: 'Ne kadar çok alırsan o kadar çok arkanda bırakırsın?',
          a: ['adım', 'adim', 'adımlar', 'adimlar']
        },
        {
          q: 'Yürür ama ayakları yoktur, konuşur ama ağzı yoktur?',
          a: ['yol', 'yollar']
        },
        {
          q: 'Gören herkes onu atar, ama o yere düşmez?',
          a: ['gölge', 'golge']
        },
        {
          q: 'Başım var ama saçım yok, ayaklarım var ama yürüyemem?',
          a: ['yatak', 'masa', 'sandalye']
        },
        {
          q: 'Ne kadar çok verirsen o kadar çok olur?',
          a: ['sevgi', 'aşk', 'ask', 'saygı', 'saygi']
        }
      ];
      
      if (args.length === 0) {
        // Yeni soru sor
        const riddle = riddles[Math.floor(Math.random() * riddles.length)];
        currentRiddle = riddle;
        return {
          type: 'info',
          content: `🧩 Zeka Sorusu:\n\n${riddle.q}\n\nCevap için: riddle <cevabın>`,
          options: { typingEffect: true }
        };
      }
      
      if (!currentRiddle) {
        return {
          type: 'error',
          content: 'Önce bir soru sormalısın! "riddle" yazarak başla.'
        };
      }
      
      const answer = args.join(' ').toLowerCase().trim();
      const correct = currentRiddle.a.includes(answer);
      
      if (correct) {
        currentRiddle = null; // Doğru cevap verildi, sıfırla
      }
      
      return {
        type: correct ? 'success' : 'error',
        content: correct 
          ? '🎉 Doğru cevap! Tebrikler!' 
          : '❌ Yanlış cevap. Tekrar dene!'
      };
    }
  },

  ascii: {
    name: 'ascii',
    description: 'ASCII art oluşturur veya gösterir',
    usage: 'ascii [metin] - Metni ASCII art\'a çevirir\n  ascii random - Rastgele ASCII sanatı gösterir',
    aliases: ['art', 'draw'],
    execute: async (args, context) => {
      // Eğer parametre yoksa veya 'random' yazılmışsa rastgele ASCII göster
      if (args.length === 0 || args[0].toLowerCase() === 'random') {
        const randomArt = getRandomAsciiArt();
        return {
          type: 'ascii',
          content: randomArt,
          options: { typingEffect: false }
        };
      }

      // Kullanıcı metin girdiyse, API'ye gönder ve ASCII art oluştur
      const text = args.join(' ');
      
      // Metin çok uzunsa uyarı ver
      if (text.length > 50) {
        return {
          type: 'error',
          content: 'Metin çok uzun! Maksimum 50 karakter girebilirsiniz.'
        };
      }

      try {
        const asciiArt = await textToAscii(text);
        
        if (!asciiArt) {
          // API başarısız olursa yerel koleksiyondan göster
          const randomArt = getRandomAsciiArt();
          return {
            type: 'ascii',
            content: `⚠️ API hatası, rastgele ASCII gösteriliyor:\n${randomArt}`,
            options: { typingEffect: false }
          };
        }

        return {
          type: 'ascii',
          content: asciiArt,
          options: { typingEffect: false }
        };
      } catch (error) {
        return {
          type: 'error',
          content: `ASCII oluşturma hatası: ${error.message}`
        };
      }
    }
  },

  game: {
    name: 'game',
    description: 'Sayı tahmin oyunu (1-100)',
    usage: 'game [tahmin]',
    aliases: ['play', 'guess'],
    execute: (args, context) => {
      if (!gameNumber) {
        // Yeni oyun başlat
        gameNumber = Math.floor(Math.random() * 100) + 1;
        gameAttempts = 0;
        return {
          type: 'info',
          content: '🎮 Sayı Tahmin Oyunu!\n\n1-100 arası bir sayı tuttum.\nTahmin için: game <sayı>'
        };
      }
      
      if (args.length === 0) {
        return {
          type: 'info',
          content: `Oyun devam ediyor! ${gameAttempts} deneme yaptın.\nTahmin için: game <sayı>`
        };
      }
      
      const guess = parseInt(args[0]);
      
      if (isNaN(guess) || guess < 1 || guess > 100) {
        return {
          type: 'error',
          content: 'Lütfen 1-100 arası geçerli bir sayı gir!'
        };
      }
      
      gameAttempts++;
      
      if (guess === gameNumber) {
        const attempts = gameAttempts;
        const target = gameNumber;
        // Oyunu sıfırla
        gameNumber = null;
        gameAttempts = 0;
        return {
          type: 'success',
          content: `🎉 TEBRİKLER! ${attempts} denemede bildin!\nDoğru cevap: ${target}\n\nYeni oyun için: game`
        };
      }
      
      if (guess < gameNumber) {
        return {
          type: 'info',
          content: `📈 Daha YUKARI! (${gameAttempts}. deneme)`
        };
      }
      
      return {
        type: 'info',
        content: `📉 Daha AŞAĞI! (${gameAttempts}. deneme)`
      };
    }
  },

  // Yeni API tabanlı komutlar
  
  joke: {
    name: 'joke',
    description: 'Rastgele bir şaka gösterir',
    usage: 'joke [kategori] - Kategoriler: Programming, Misc, Dark, Pun',
    aliases: ['funny', 'laugh'],
    execute: async (args, context) => {
      const category = args[0] || 'Programming';
      const validCategories = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
      
      if (!validCategories.includes(category)) {
        return {
          type: 'error',
          content: `Geçersiz kategori. Kullanılabilir: ${validCategories.join(', ')}`
        };
      }

      try {
        const joke = await getRandomJoke(category);
        
        if (!joke) {
          return {
            type: 'error',
            content: 'Şaka yüklenirken bir hata oluştu.'
          };
        }

        let content;
        if (joke.type === 'single') {
          content = `😄 ${joke.joke}`;
        } else {
          content = `😄 ${joke.setup}\n\n🎯 ${joke.delivery}`;
        }

        return {
          type: 'info',
          content: content,
          options: { typingEffect: true, typingSpeed: 30 }
        };
      } catch (error) {
        return {
          type: 'error',
          content: `Şaka API hatası: ${error.message}`
        };
      }
    }
  },

  define: {
    name: 'define',
    description: 'Kelime tanımını gösterir (İngilizce)',
    usage: 'define <kelime>',
    aliases: ['dict', 'dictionary', 'meaning'],
    execute: async (args, context) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Kullanım: define <kelime>'
        };
      }

      const word = args[0].toLowerCase();

      try {
        const definition = await getWordDefinition(word);
        
        if (!definition) {
          return {
            type: 'error',
            content: `'${word}' kelimesinin tanımı yüklenirken hata oluştu.`
          };
        }

        if (definition.error) {
          return {
            type: 'error',
            content: definition.error
          };
        }

        let output = `📚 ${definition.word.toUpperCase()}\n`;
        output += '='.repeat(40) + '\n\n';

        definition.meanings.forEach((meaning, index) => {
          output += `[${meaning.partOfSpeech}]\n`;
          meaning.definitions.slice(0, 3).forEach((def, i) => {
            output += `  ${i + 1}. ${def.definition}\n`;
            if (def.example) {
              output += `     Örnek: "${def.example}"\n`;
            }
          });
          output += '\n';
        });

        return {
          type: 'info',
          content: output.trim(),
          options: { typingEffect: true, typingSpeed: 15 }
        };
      } catch (error) {
        return {
          type: 'error',
          content: `Sözlük API hatası: ${error.message}`
        };
      }
    }
  },

  github: {
    name: 'github',
    description: 'GitHub kullanıcı veya repo bilgisi gösterir',
    usage: 'github <kullanıcı_adı> [repo_adı]',
    aliases: ['gh', 'repo'],
    execute: async (args, context) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Kullanım: github <kullanıcı_adı> veya github <kullanıcı_adı> <repo_adı>'
        };
      }

      const username = args[0];
      const repoName = args[1];

      try {
        if (repoName) {
          // Repo bilgisi getir
          const repo = await getGitHubRepo(username, repoName);
          
          if (!repo) {
            return {
              type: 'error',
              content: 'Repo bilgisi yüklenirken hata oluştu.'
            };
          }

          if (repo.error) {
            return {
              type: 'error',
              content: repo.error
            };
          }

          return {
            type: 'info',
            content: `
╔════════════════════════════════════════╗
║  ${repo.full_name.padEnd(36)} ║
╚════════════════════════════════════════╝

${repo.description || 'Açıklama yok'}

⭐ Stars: ${repo.stargazers_count}
🍴 Forks: ${repo.forks_count}
🐛 Issues: ${repo.open_issues_count}
📝 Language: ${repo.language || 'N/A'}
🌐 URL: ${repo.html_url}
            `.trim(),
            options: { typingEffect: true }
          };
        } else {
          // Kullanıcı bilgisi getir
          const user = await getGitHubUser(username);
          
          if (!user) {
            return {
              type: 'error',
              content: 'Kullanıcı bilgisi yüklenirken hata oluştu.'
            };
          }

          if (user.error) {
            return {
              type: 'error',
              content: user.error
            };
          }

          return {
            type: 'info',
            content: `
╔════════════════════════════════════════╗
║  ${user.login.padEnd(36)} ║
╚════════════════════════════════════════╝

${user.name || ''}
${user.bio || ''}

📍 Location: ${user.location || 'N/A'}
🏢 Company: ${user.company || 'N/A'}
📝 Public Repos: ${user.public_repos}
👥 Followers: ${user.followers}
👤 Following: ${user.following}
🌐 URL: ${user.html_url}
            `.trim(),
            options: { typingEffect: true }
          };
        }
      } catch (error) {
        return {
          type: 'error',
          content: `GitHub API hatası: ${error.message}`
        };
      }
    }
  },

  weather: {
    name: 'weather',
    description: 'Hava durumu bilgisi gösterir',
    usage: 'weather <şehir_adı>',
    aliases: ['hava', 'forecast'],
    execute: async (args, context) => {
      if (args.length === 0) {
        return {
          type: 'error',
          content: 'Kullanım: weather <şehir_adı>'
        };
      }

      const city = args.join(' ');

      try {
        const weather = await getWeather(city);
        
        if (!weather) {
          return {
            type: 'error',
            content: 'Hava durumu bilgisi yüklenirken hata oluştu.'
          };
        }

        if (weather.error) {
          return {
            type: 'error',
            content: weather.error
          };
        }

        const temp = Math.round(weather.main.temp);
        const feelsLike = Math.round(weather.main.feels_like);
        const description = weather.weather[0].description;
        const humidity = weather.main.humidity;
        const wind = weather.wind.speed;

        return {
          type: 'info',
          content: `
╔════════════════════════════════════════╗
║  ${weather.name.padEnd(36)} ║
╚════════════════════════════════════════╝

🌡️  Sıcaklık: ${temp}°C (Hissedilen: ${feelsLike}°C)
☁️  Durum: ${description}
💧 Nem: %${humidity}
💨 Rüzgar: ${wind} m/s
          `.trim(),
          options: { typingEffect: true }
        };
      } catch (error) {
        return {
          type: 'error',
          content: `Hava durumu API hatası: ${error.message}`
        };
      }
    }
  },

  color: {
    name: 'color',
    description: 'Terminal rengini değiştirir (CMD tarzı)',
    usage: 'color <harf> - a:yeşil, b:mavi, c:kırmızı, d:mor, e:sarı, f:beyaz',
    aliases: ['renk', 'theme'],
    execute: (args, context) => {
      const { setTerminalColor } = context;
      
      if (args.length === 0) {
        return {
          type: 'info',
          content: `Mevcut renk: ${context.currentColor || 'yeşil (a)'}

Kullanım: color <harf>

Renkler:
  a - Yeşil (varsayılan)
  b - Mavi
  c - Kırmızı
  d - Mor
  e - Sarı
  f - Beyaz
  
Örnek: color b`
        };
      }
      
      const colorCode = args[0].toLowerCase();
      
      const colorMap = {
        'a': { name: 'yeşil', class: 'green', hex: '#00ff00' },
        'b': { name: 'mavi', class: 'blue', hex: '#58a6ff' },
        'c': { name: 'kırmızı', class: 'red', hex: '#f85149' },
        'd': { name: 'mor', class: 'purple', hex: '#a371f7' },
        'e': { name: 'sarı', class: 'yellow', hex: '#f0883e' },
        'f': { name: 'beyaz', class: 'white', hex: '#c9d1d9' }
      };
      
      if (!colorMap[colorCode]) {
        return {
          type: 'error',
          content: `Geçersiz renk kodu: ${colorCode}\nKullanım: color <a-f>`
        };
      }
      
      const color = colorMap[colorCode];
      setTerminalColor(colorCode);
      
      return {
        type: 'success',
        content: `Terminal rengi ${color.name} olarak değiştirildi.`
      };
    }
  }
};

export default commands;
