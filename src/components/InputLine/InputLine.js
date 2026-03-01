import React, { useState, useRef, useEffect } from 'react';
import { useCommandHistory } from '../../hooks/useCommandHistory';

const InputLine = ({ onSubmit, currentPath, disabled, colorClass = 'text-terminal-green', caretColor = '#00ff00' }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const { addCommand, navigateHistory, resetIndex } = useCommandHistory();

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        if (input.trim()) {
          addCommand(input);
          onSubmit(input);
          setInput('');
          resetIndex();
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        const prevCommand = navigateHistory('up');
        if (prevCommand !== null) {
          setInput(prevCommand);
        }
        break;

      case 'ArrowDown':
        e.preventDefault();
        const nextCommand = navigateHistory('down');
        if (nextCommand !== null) {
          setInput(nextCommand);
        }
        break;

      case 'l':
        if (e.ctrlKey) {
          e.preventDefault();
          onSubmit('clear');
        }
        break;

      case 'c':
        if (e.ctrlKey && disabled) {
          e.preventDefault();
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const displayPath = currentPath === '/' ? '~' : currentPath;

  return (
    <div className="flex items-center mt-2 text-xs sm:text-sm md:text-base">
      <span className={`${colorClass} font-bold whitespace-nowrap select-none shrink-0`}>
        user@portfolio:{displayPath}$
      </span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`flex-1 ml-2 bg-transparent border-none outline-none ${colorClass} font-mono min-w-0`}
        style={{ caretColor: caretColor }}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        aria-label="Terminal komut girişi"
      />
      {!disabled && (
        <span
          className="inline-block w-2 h-4 sm:h-5 ml-1 animate-blink shrink-0"
          style={{ backgroundColor: caretColor }}
        />
      )}
    </div>
  );
};

export default InputLine;
