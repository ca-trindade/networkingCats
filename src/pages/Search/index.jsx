import { Navbar } from "../../components/Navbar";
import { ContainerSearch, CatImg } from "./style";
import { SearchToggle } from "../../components/SearchToggle";

import catLeft from "../../assets/catOnLeft.png";

export const Search = () => {
  return (
    <>
      <Navbar />
      <ContainerSearch>

        <SearchToggle />
      </ContainerSearch>
      <CatImg src={catLeft} alt="Cat on Left" />
    </>
  );
};
