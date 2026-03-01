import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const OutputLine = ({ type, content, options = {}, colorClass = 'text-terminal-green' }) => {
  const { typingEffect = false, typingSpeed = 20 } = options;

  const { displayedText, isTyping } = useTypingEffect(
    content || '',
    typingSpeed,
    typingEffect
  );

  const getTypeStyles = () => {
    switch (type) {
      case 'command':
        return colorClass;
      case 'error':
        return 'text-terminal-error';
      case 'success':
        return colorClass;
      case 'ascii':
        return `${colorClass} whitespace-pre`;
      case 'info':
      default:
        return 'text-terminal-text';
    }
  };

  const renderContent = () => {
    if (type === 'command') {
      return <span className="font-bold">$ {content}</span>;
    }

    if (type === 'ascii') {
      return <pre className="font-mono text-xs sm:text-sm">{typingEffect ? displayedText : content}</pre>;
    }

    const text = typingEffect ? displayedText : content;

    return text.split('\n').map((line, i) => (
      <div key={i} className="whitespace-pre-wrap break-words">
        {line || ' '}
      </div>
    ));
  };

  return (
    <div className={`mb-1 ${getTypeStyles()}`}>
      {renderContent()}
      {isTyping && typingEffect && (
        <span className="inline-block w-2 h-4 bg-terminal-green ml-1 animate-blink" />
      )}
    </div>
  );
};

export default OutputLine;
