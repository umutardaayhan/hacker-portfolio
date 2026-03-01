import { useState, useCallback } from 'react';

export const useCommandHistory = () => {
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(-1);
  
  const addCommand = useCallback((command) => {
    if (command.trim()) {
      setHistory(prev => [...prev, command]);
      setIndex(-1);
    }
  }, []);
  
  const navigateHistory = useCallback((direction) => {
    if (history.length === 0) return null;
    
    let newIndex;
    if (direction === 'up') {
      newIndex = index === -1 ? history.length - 1 : Math.max(0, index - 1);
    } else {
      newIndex = index === -1 ? -1 : Math.min(history.length - 1, index + 1);
      if (newIndex === history.length - 1 && index === history.length - 1) {
        setIndex(-1);
        return '';
      }
    }
    
    setIndex(newIndex);
    return history[newIndex] || '';
  }, [history, index]);
  
  const resetIndex = useCallback(() => {
    setIndex(-1);
  }, []);
  
  return {
    history,
    addCommand,
    navigateHistory,
    resetIndex,
    currentIndex: index
  };
};

export default useCommandHistory;
