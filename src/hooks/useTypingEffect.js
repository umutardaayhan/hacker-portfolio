import { useState, useEffect } from 'react';

export const useTypingEffect = (text, speed = 30, enabled = true, onComplete = null) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsTyping(false);
      return;
    }
    
    setIsTyping(true);
    setDisplayedText('');
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, enabled, onComplete]);
  
  return { displayedText, isTyping };
};

export default useTypingEffect;
