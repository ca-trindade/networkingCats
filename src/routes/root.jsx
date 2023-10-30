import { fetchDataBreeds } from "../api/axios";
import { Purr } from "../components/Logo";
import { SearchToggle } from "../components/SearchToggle";

fetchDataBreeds();


function Root() {
  return (
    <>
      <Purr />
      <SearchToggle />
    </>
  );
}

export default Root;
