# CV Ekleme Verileri - Hacker Terminal Portfolio

## 1) Proje Künyesi
- **Proje Adı:** U. A. A. Terminal Portfolio (Hacker-Themed Interactive Portfolio)
- **Proje Türü:** Kişisel marka odaklı, etkileşimli web portfolyo
- **Geliştirme Yaklaşımı:** Frontend odaklı, komut tabanlı UI simülasyonu
- **Canlı Ortam:** Vercel (SPA rewrite konfigürasyonu ile)

## 2) CV'ye Kısa Proje Açıklaması (Hazır Metin)
React ve Tailwind CSS ile terminal deneyimini web ortamına taşıyan, komut çalıştırma mantığına sahip interaktif bir kişisel portfolyo geliştirdim. Kullanıcılar klasik komut satırı benzeri komutlarla (`help`, `ls`, `cd`, `cat`, `projects`, `skills` vb.) içerikte gezinebiliyor; Matrix rain animasyonu, typing efekti, tema/renk yönetimi ve responsive yapı sayesinde güçlü bir kullanıcı deneyimi sunuluyor.

## 3) Kullanılan Teknolojiler
- **Frontend:** React (functional components, hooks), JavaScript (ES6+)
- **UI/Styling:** Tailwind CSS, özel tema renkleri, monospace tipografi
- **Animasyon/UX:** Custom typing effect hook, canvas tabanlı Matrix rain animasyonu
- **Veri ve Mimari:** Komut sözlüğü (command map), JSON-benzeri sanal dosya sistemi kurgusu
- **Servis Entegrasyonları:** GitHub API, Dictionary API, Joke API, OpenWeather API, figlet
- **Deploy:** Vercel (`vercel.json` ile tüm rotaları `index.html`'e yönlendirme)

## 4) Teknik Katkı Başlıkları (CV Madde Formu)
- React tabanlı modüler bir terminal arayüzü geliştirerek komut işleme, çıktı üretimi ve ekran durum yönetimini tek bir akışta birleştirdim.
- Komutları merkezi bir `commands` yapısında toplayıp alias, usage ve hata yönetimi kurallarıyla genişletilebilir bir komut mimarisi oluşturdum.
- `parseCommand`, `findCommand` ve sanal dosya sistemi (`getDirectory`, `resolvePath`, `findFile`) yardımcıları ile CLI benzeri gezinme deneyimini web ortamında simüle ettim.
- Typing efekti ve komut geçmişi için özel React hook'ları (`useTypingEffect`, `useCommandHistory`) geliştirerek kullanıcı etkileşimini iyileştirdim.
- Canvas + `requestAnimationFrame` kullanarak performans odaklı Matrix rain efektini implement ettim ve terminal deneyimini görsel olarak güçlendirdim.
- Dış API çağrılarını servis katmanında izole ederek (joke, dictionary, github, weather) komut sistemine asenkron veri akışı ekledim.
- Mobil cihazlarda kullanılabilirliği artırmak için responsive tipografi, touch hedef boyutları ve erişilebilirlik odaklı temel UI iyileştirmeleri uyguladım.
- Vercel dağıtımında SPA routing problemlerini rewrite konfigürasyonu ile çözüp tek sayfa uygulama davranışını production ortamına taşıdım.

## 5) Öne Çıkan Mühendislik Kararları
- **Komut-Tabanlı Mimari:** Her komut için bağımsız `execute` fonksiyonu ile okunabilirlik ve bakım kolaylığı sağlandı.
- **State Yönetimi:** Terminal geçmişi, aktif path, typing/matrix modları ve tema rengi ayrı state'lerle yönetildi.
- **UI Ayrıştırması:** Giriş satırı, çıktı satırı ve efekt katmanı (Matrix) ayrı bileşenlere bölünerek sorumluluklar netleştirildi.
- **Hata Toleransı:** API başarısızlıklarında kullanıcıya anlaşılır hata mesajları ve fallback davranışları tanımlandı.

## 6) CV'de Kullanılabilecek Güçlü Anahtar Kelimeler
- Interactive CLI Simulation
- React Hooks Architecture
- Component-Based UI Design
- Command Parser Design
- Virtual File System Modeling
- API Integration & Error Handling
- Canvas Animation (requestAnimationFrame)
- Responsive & Accessible Frontend
- Vercel Deployment / SPA Routing

## 7) Mülakatta Anlatım İçin Kısa Senaryo (30-45 sn)
Bu projede klasik portfolyo kart yapısı yerine terminal deneyimini merkeze alan bir arayüz tasarladım. React ile komut yorumlama ve sanal dosya sistemi kurgusu oluşturarak kullanıcıların komutlarla içerikte gezinebildiği bir yapı kurdum. Ayrıca typing efekti, Matrix animasyonu ve dış API entegrasyonlarıyla deneyimi zenginleştirdim. Projeyi Vercel üzerinde SPA rewrite ayarlarıyla canlıya aldım ve mobil uyumluluk ile erişilebilirlik tarafında temel optimizasyonlar yaptım.

## 8) Dikkat Notu (Doğruluk İçin)
- README içinde React 18 ifadesi geçse de proje bağımlılıklarında React 19 kullanılıyor. CV'de tek bir versiyon yazılacaksa `package.json` referans alınmalı.
- Ölçülebilir metrik (ziyaretçi, dönüşüm, performans skoru vb.) repo içinde raporlanmamış; CV'de metrik verilecekse ayrıca ölçüm eklenmesi önerilir.
