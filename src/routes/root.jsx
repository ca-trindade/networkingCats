import GlobalStyle from "../GlobalStyle";
import { Purr } from "../components/Logo";
import { fetchDataBreeds } from "../api/axios";
import { SearchToggle } from "../components/SearchToggle";

fetchDataBreeds();


function Root() {
  return (
    <>
      <GlobalStyle />
      <Purr />
      <SearchToggle />

    </>
  );
}

export default Root;
