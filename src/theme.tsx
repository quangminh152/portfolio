import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeContext, type Theme } from './theme-context';

const STORAGE_KEY = 'portfolio-theme';

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme());
  const [hasUserChoice, setHasUserChoice] = useState(() => Boolean(getStoredTheme()));

  useEffect(() => {
    applyTheme(theme);

    if (hasUserChoice) {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // Theme still updates for the current session if storage is unavailable.
      }
    }
  }, [hasUserChoice, theme]);

  useEffect(() => {
    if (hasUserChoice) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [hasUserChoice]);

  const toggleTheme = useCallback(() => {
    setHasUserChoice(true);
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
