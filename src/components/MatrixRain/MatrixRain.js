import React, { useEffect, useRef, useState } from 'react';

const MatrixRain = ({ onStop }) => {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Canvas boyutlarını ayarla
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix karakterleri
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const charArray = chars.split('');

    // Sütun sayısı
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Her sütunun y pozisyonu
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Rastgele başlangıç yüksekliği
    }

    // Parlaklık değerleri (trail efekti için)
    const brightness = [];
    for (let i = 0; i < columns; i++) {
      brightness[i] = Math.random();
    }

    const draw = () => {
      if (!isRunning) return;

      // Yarı saydam siyah arka plan (trail efekti)
      ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Rastgele karakter
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // x koordinatı
        const x = i * fontSize;
        // y koordinatı
        const y = drops[i] * fontSize;

        // Parlaklık değişimi
        brightness[i] += (Math.random() - 0.5) * 0.1;
        if (brightness[i] < 0.3) brightness[i] = 0.3;
        if (brightness[i] > 1) brightness[i] = 1;

        // Ana karakter (parlak beyaz/yeşil)
        ctx.fillStyle = `rgba(0, 255, 0, ${brightness[i]})`;
        ctx.fillText(char, x, y);

        // Trail karakterleri (soluk)
        for (let t = 1; t <= 5; t++) {
          if (y - t * fontSize > 0) {
            const trailChar = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillStyle = `rgba(0, 255, 0, ${brightness[i] * (0.6 - t * 0.1)})`;
            ctx.fillText(trailChar, x, y - t * fontSize);
          }
        }

        // Sütunu aşağı hareket ettir
        drops[i]++;

        // Ekranın altına ulaştığında veya rastgele sıfırla
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          brightness[i] = Math.random();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (onStop) onStop();
  };

  return (
    <div className="relative w-full h-full bg-terminal-bg">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ background: '#0d1117' }}
      />
      <button
        onClick={handleStop}
        className="absolute bottom-4 right-4 px-4 py-2 bg-terminal-green text-terminal-bg font-bold rounded hover:bg-terminal-green-dim transition-colors"
      >
        Durdur (clear)
      </button>
      <div className="absolute top-4 left-4 text-terminal-green text-sm">
        Matrix Mode - Çıkmak için "clear" yazabilirsiniz
      </div>
    </div>
  );
};

export default MatrixRain;
