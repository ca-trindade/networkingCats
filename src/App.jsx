import GlobalStyle from "./GlobalStyle";
import { Purr } from "./components/Logo";
import { fetchDataBreeds } from "./api/axios"
import { SearchToggle } from "./components/SearchToggle";

fetchDataBreeds();
console.log("VITE_KEY:", import.meta.env.VITE_KEY);

function App() {
  return (
    <>
      <GlobalStyle />
      <Purr />
      <SearchToggle />
      <p>{import.meta.env.VITE_KEY}</p>
    </>
  );
}

export default App;
