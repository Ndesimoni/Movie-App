import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    console.log(storedValue);
    return storedValue ? storedValue : initialState;
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
