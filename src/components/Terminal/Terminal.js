import React, { useState, useRef, useEffect, useCallback } from 'react';
import OutputLine from '../OutputLine/OutputLine';
import InputLine from '../InputLine/InputLine';
import MatrixRain from '../MatrixRain/MatrixRain';
import commands from '../../data/commands';
import { parseCommand, findCommand } from '../../utils/commandParser';
import portfolioData from '../../data/portfolioData';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');
  const [isTyping, setIsTyping] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [terminalColor, setTerminalColor] = useState('a'); // Varsayılan yeşil
  const outputContainerRef = useRef(null);
  const outputEndRef = useRef(null);

  // Renk kodlarına göre Tailwind sınıfları
  const colorClasses = {
    'a': 'text-terminal-green',      // Yeşil
    'b': 'text-blue-400',            // Mavi
    'c': 'text-red-400',             // Kırmızı
    'd': 'text-purple-400',          // Mor
    'e': 'text-yellow-400',          // Sarı
    'f': 'text-gray-200'             // Beyaz
  };

  // Renk kodlarına göre caret rengi
  const caretColors = {
    'a': '#00ff00',
    'b': '#58a6ff',
    'c': '#f85149',
    'd': '#a371f7',
    'e': '#f0883e',
    'f': '#c9d1d9'
  };

  useEffect(() => {
    const welcomeMessage = {
      type: 'ascii',
      content: `
  ██╗   ██╗███╗   ███╗██╗   ██╗████████╗     █████╗ ██████╗ ██████╗  █████╗     █████╗ ██╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗
  ██║   ██║████╗ ████║██║   ██║╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗╚██╗ ██╔╝██║  ██║██╔══██╗████╗  ██║
  ██║   ██║██╔████╔██║██║   ██║   ██║       ███████║██████╔╝██║  ██║███████║    ███████║ ╚████╔╝ ███████║███████║██╔██╗ ██║
  ██║   ██║██║╚██╔╝██║██║   ██║   ██║       ██╔══██║██╔══██╗██║  ██║██╔══██║    ██╔══██║  ╚██╔╝  ██╔══██║██╔══██║██║╚██╗██║
  ╚██████╔╝██║ ╚═╝ ██║╚██████╔╝   ██║       ██║  ██║██║  ██║██████╔╝██║  ██║    ██║  ██║   ██║   ██║  ██║██║  ██║██║ ╚████║
   ╚═════╝ ╚═╝     ╚═╝ ╚═════╝    ╚═╝      ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ 
    
    Hoş geldiniz! 'help' yazarak komutları görüntüleyebilirsiniz.
      `,
      options: { typingEffect: false }
    };
    setHistory([welcomeMessage]);
  }, []);

  useEffect(() => {
    if (outputEndRef.current && outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [history]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setIsMatrixMode(false);
  }, []);

  const executeCommand = useCallback(async (input) => {
    const parsed = parseCommand(input);

    if (!parsed) return;

    // Add command to history display
    setHistory(prev => [...prev, { type: 'command', content: input, options: {} }]);

    const command = findCommand(parsed.command, commands);

    if (!command) {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `portfolio: komut bulunamadı: ${parsed.command}\n'help' yazarak mevcut komutları görüntüleyebilirsiniz.`,
        options: {}
      }]);
      return;
    }

    const context = {
      currentPath,
      setCurrentPath,
      portfolioData,
      clearHistory,
      currentColor: terminalColor,
      setTerminalColor
    };

    try {
      setIsTyping(true);
      const result = await command.execute(parsed.args, context);

      if (result.options?.clearScreen) {
        setHistory([]);
        setIsMatrixMode(false);
      } else if (result.options?.isMatrix) {
        setIsMatrixMode(true);
        setIsTyping(false);
      } else if (result.content) {
        setHistory(prev => [...prev, result]);
      }

      // Simulate typing delay for typing effects
      if (result.options?.typingEffect) {
        const textLength = result.content.length;
        const delay = textLength * (result.options.typingSpeed || 20);
        setTimeout(() => setIsTyping(false), Math.min(delay, 2000));
      } else if (!result.options?.isMatrix) {
        setIsTyping(false);
      }
    } catch (error) {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Hata: ${error.message}`,
        options: {}
      }]);
      setIsTyping(false);
    }
  }, [currentPath, clearHistory, terminalColor]);

  const handleCommandSubmit = useCallback((input) => {
    executeCommand(input);
  }, [executeCommand]);

  const currentColorClass = colorClasses[terminalColor] || colorClasses['a'];
  const currentCaretColor = caretColors[terminalColor] || caretColors['a'];

  return (
    <div
      className={`h-screen flex flex-col bg-terminal-bg ${currentColorClass} font-mono overflow-hidden`}
      role="region"
      aria-label="Terminal Portfolyo"
    >
      {/* Terminal Header */}
      <div className="flex-none flex items-center justify-between bg-terminal-bg-alt px-3 py-2 border-b border-terminal-gray">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-terminal-error" />
          <div className="w-3 h-3 rounded-full bg-terminal-warning" />
          <div className={`w-3 h-3 rounded-full ${currentColorClass}`} />
        </div>
        <span className="text-terminal-gray text-xs sm:text-sm">portfolio@terminal</span>
        <div className="w-12" />
      </div>

      {/* Output Area - Scrollable */}
      <div
        ref={outputContainerRef}
        className="flex-1 overflow-y-auto p-2 sm:p-4 md:p-6 relative"
      >
        {isMatrixMode ? (
          <div className="absolute inset-0 w-full h-full">
            <MatrixRain onStop={() => setIsMatrixMode(false)} />
          </div>
        ) : (
          <>
            {history.map((item, index) => (
              <OutputLine
                key={index}
                type={item.type}
                content={item.content}
                options={item.options}
                colorClass={currentColorClass}
              />
            ))}
            <div ref={outputEndRef} />
          </>
        )}
      </div>

      {/* Input Area - Fixed at bottom */}
      <div className="flex-none p-2 sm:p-4 md:p-6 border-t border-terminal-gray bg-terminal-bg">
        <InputLine
          onSubmit={handleCommandSubmit}
          currentPath={currentPath}
          disabled={isTyping}
          colorClass={currentColorClass}
          caretColor={currentCaretColor}
        />
      </div>
    </div>
  );
};

export default Terminal;
