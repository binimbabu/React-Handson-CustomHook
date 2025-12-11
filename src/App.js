import useLocalStorage from "./useLocalStorageKey";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div>
      <h1>Current: {theme}</h1>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default App;
