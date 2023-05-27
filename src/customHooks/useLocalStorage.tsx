/* import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>]{
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);

      if (storedValue) {
        setValue(JSON.parse(storedValue));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }
    }
  }, [key, initialValue]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
 */

import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const [value, setValue] = useState<T>((): T => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue !== null
      ? JSON.parse(storedValue)
      // : typeof initialValue === "function"
      //   ? (initialValue as () => T)()
        : initialValue 
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as [T, typeof setValue];
}

export default useLocalStorage;