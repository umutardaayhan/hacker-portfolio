/**
 * API Services - Terminal komutları için harici API entegrasyonları
 */

import figlet from 'figlet';

// Figlet font verilerini yükle
import standard from 'figlet/importable-fonts/Standard.js';
import slant from 'figlet/importable-fonts/Slant.js';
import big from 'figlet/importable-fonts/Big.js';
import small from 'figlet/importable-fonts/Small.js';
import block from 'figlet/importable-fonts/Block.js';
import banner from 'figlet/importable-fonts/Banner.js';
import digital from 'figlet/importable-fonts/Digital.js';
import bubble from 'figlet/importable-fonts/Bubble.js';
import lean from 'figlet/importable-fonts/Lean.js';
import mini from 'figlet/importable-fonts/Mini.js';

// Fontları kaydet
figlet.parseFont('Standard', standard);
figlet.parseFont('Slant', slant);
figlet.parseFont('Big', big);
figlet.parseFont('Small', small);
figlet.parseFont('Block', block);
figlet.parseFont('Banner', banner);
figlet.parseFont('Digital', digital);
figlet.parseFont('Bubble', bubble);
figlet.parseFont('Lean', lean);
figlet.parseFont('Mini', mini);

// JokeAPI - Rastgele şakalar
const JOKE_API_BASE = 'https://v2.jokeapi.dev/joke';

// Quotable API - Motivasyon sözleri
const QUOTABLE_API_BASE = 'https://api.quotable.io';

// GitHub API - Repo bilgileri
const GITHUB_API_BASE = 'https://api.github.com';

// Free Dictionary API - Kelime tanımları
const DICTIONARY_API_BASE = 'https://api.dictionaryapi.dev/api/v2/entries/en';

// OpenWeatherMap API - Hava durumu (Sabit API key)
const WEATHER_API_BASE = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = 'd75adf91af1fb69b2afdf6f744699e21'; // Buraya kendi API key'inizi ekleyin

/**
 * Text'i ASCII Art'a dönüştürür (figlet.js kullanarak - client-side)
 * @param {string} text - Dönüştürülecek metin
 * @param {string} font - Opsiyonel font adı
 * @returns {Promise<string>} ASCII art metni
 */
export const textToAscii = async (text, font = 'Standard') => {
  try {
    return new Promise((resolve, reject) => {
      figlet.text(text, { font: font }, (err, data) => {
        if (err) {
          console.error('Figlet error:', err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } catch (error) {
    console.error('Text to ASCII error:', error);
    return null;
  }
};

/**
 * Mevcut font listesini getirir (figlet.js fontları)
 * @returns {Promise<string[]>} Font listesi
 */
export const getAsciiFonts = async () => {
  try {
    return new Promise((resolve) => {
      figlet.fonts((err, fonts) => {
        if (err) {
          console.error('Font list error:', err);
          resolve(['Standard', 'Big', 'Small', 'Slant', 'Block']);
        } else {
          resolve(fonts);
        }
      });
    });
  } catch (error) {
    console.error('Font list error:', error);
    return ['Standard', 'Big', 'Small', 'Slant', 'Block'];
  }
};

/**
 * Rastgele bir şaka getirir
 * @param {string} category - Şaka kategorisi (Programming, Misc, Dark, Pun, Spooky, Christmas)
 * @returns {Promise<{setup?: string, delivery?: string, joke?: string}>}
 */
export const getRandomJoke = async (category = 'Programming') => {
  try {
    const response = await fetch(
      `${JOKE_API_BASE}/${category}?type=single,twopart&safe-mode`
    );
    if (!response.ok) throw new Error('Joke API error');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Joke API error:', error);
    return null;
  }
};

/**
 * Rastgele bir motivasyon sözü getirir
 * @returns {Promise<{content: string, author: string}>}
 */
export const getRandomQuote = async () => {
  try {
    const response = await fetch(`${QUOTABLE_API_BASE}/random`);
    if (!response.ok) throw new Error('Quote API error');
    const data = await response.json();
    return {
      content: data.content,
      author: data.author
    };
  } catch (error) {
    console.error('Quote API error:', error);
    return null;
  }
};

/**
 * Kelime tanımını getirir
 * @param {string} word - Aranacak kelime
 * @returns {Promise<{word: string, meanings: Array}>}
 */
export const getWordDefinition = async (word) => {
  try {
    const response = await fetch(`${DICTIONARY_API_BASE}/${encodeURIComponent(word)}`);
    if (!response.ok) {
      if (response.status === 404) {
        return { error: 'Kelime bulunamadı' };
      }
      throw new Error('Dictionary API error');
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Dictionary API error:', error);
    return null;
  }
};

/**
 * GitHub kullanıcı bilgilerini getirir
 * @param {string} username - GitHub kullanıcı adı
 * @returns {Promise<Object>}
 */
export const getGitHubUser = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${encodeURIComponent(username)}`);
    if (!response.ok) {
      if (response.status === 404) {
        return { error: 'Kullanıcı bulunamadı' };
      }
      throw new Error('GitHub API error');
    }
    return await response.json();
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
};

/**
 * GitHub reposu bilgilerini getirir
 * @param {string} owner - Repo sahibi
 * @param {string} repo - Repo adı
 * @returns {Promise<Object>}
 */
export const getGitHubRepo = async (owner, repo) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        return { error: 'Repo bulunamadı' };
      }
      throw new Error('GitHub API error');
    }
    return await response.json();
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
};

/**
 * Hava durumu bilgisi getirir (Sabit API key kullanır)
 * @param {string} city - Şehir adı
 * @returns {Promise<Object>}
 */
export const getWeather = async (city) => {
  if (!WEATHER_API_KEY || WEATHER_API_KEY === 'YOUR_API_KEY_HERE') {
    return { error: 'Hava durumu API key henüz ayarlanmamış. Lütfen apiServices.js dosyasındaki WEATHER_API_KEY değişkenini güncelleyin.' };
  }
  
  try {
    const response = await fetch(
      `${WEATHER_API_BASE}?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}&units=metric&lang=tr`
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Weather API response error:', response.status, errorData);
      
      if (response.status === 404) {
        return { error: 'Şehir bulunamadı' };
      } else if (response.status === 401) {
        return { error: 'Geçersiz API key. Lütfen OpenWeatherMap API key\'inizi kontrol edin.' };
      }
      return { error: `API Hatası: ${errorData.message || response.statusText}` };
    }
    
    return await response.json();
  } catch (error) {
    console.error('Weather API error:', error);
    return { error: `Bağlantı hatası: ${error.message}` };
  }
};

/**
 * Rastgele ASCII sanatı getirir (yerel koleksiyondan)
 * @returns {string} ASCII sanatı
 */
export const getRandomAsciiArt = () => {
  const arts = [
    // Cat
    `
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)
    `,
    // Dog
    `
   / \\__
  (    @\\___
  /         O
 /   (_____/
/_____/   U
    `,
    // Coffee
    `
     ( (
      ) )
    .......
    |     |]
    \\     /
     '---'
    `,
    // Computer
    `
   +--------+
   |.------.|
   ||      ||
   ||      ||
   |'------'|
   +--------+
    `,
    // Rocket
    `
       |
      / \\
     / _ \\
    |.o '.|
    |'._.'|
    |     |
   /'|  |'\\
   \\ |  | /
    |  |/
     |  |
     |  |
    /'  '\\
    |    |
    |    |
    |____|
    `,
    // Heart
    `
   .-"-.
  /|6 6|\\
 {/(_0_)\\}
  _/ ^ \\_
 (/_/^\\_\\)
    `,
    // Alien
    `
       .-.
      (o o)
      | O \
     /   \\
    (  |  )
     \\|/
    `,
    // Skull
    `
      _____
   .-'     '-.
  /           \
 |   O     O   |
 |     ___     |
  \\   \\___/   /
   '-._____.-'
    `
  ];
  
  return arts[Math.floor(Math.random() * arts.length)];
};

export default {
  textToAscii,
  getAsciiFonts,
  getRandomJoke,
  getRandomQuote,
  getWordDefinition,
  getGitHubUser,
  getGitHubRepo,
  getWeather,
  getRandomAsciiArt
};