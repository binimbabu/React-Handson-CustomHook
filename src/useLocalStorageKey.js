import { useState } from "react";

export default function useLocalStorageKey(key, initialValue) {
  var [value, setValue] = useState(() => {
    var savedTheme = localStorage.getItem(key, initialValue);
    return savedTheme ? JSON.parse(savedTheme) : initialValue;
  });

  function updatedValue(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }
  return [value, updatedValue];
}
