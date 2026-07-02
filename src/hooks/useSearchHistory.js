import { useState, useEffect } from 'react';

const STORAGE_KEY = 'weatherSearchHistory';

export const useSearchHistory = () => {
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (city) => {
    const trimmed = city.trim();
    if (!trimmed) return;
    setHistory((prev) => {
      const filtered = prev.filter(
        (item) => item.toLowerCase() !== trimmed.toLowerCase()
      );
      return [trimmed, ...filtered].slice(0, 5);
    });
  };

  const removeFromHistory = (city) => {
    setHistory((prev) =>
      prev.filter((item) => item.toLowerCase() !== city.toLowerCase())
    );
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return { history, addToHistory, removeFromHistory, clearHistory };
};