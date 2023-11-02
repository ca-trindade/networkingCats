
import { useToggle } from "../../hooks/useToggle";
import {
  ToggleContainer,
  ToggleButton,
  ToggleContainerUl,
  ToggleLi,
} from "./style";

export const handleClick = (e) => {
    switch (e.target.id) {
      case "affectionAlchemist":
        console.log ("Affection Alchemist");
        break;
      case "tinyTotMentor":
        console.log ("Tiny Tot Mentor");
        break;
      case "dogWhispererDeluxe":
        console.log ("Dog Whisperer Deluxe");
        break;
      case "groomingSupreme":
        console.log ("Grooming Supreme");
      break;
      case "socialButterfly":
        console.log ("Social Butterfly");
      break;
      case "vocalMaestro":
        console.log ("Vocal Maestro");
      break;
      case "hypoallergenicOasis":
        console.log ("Hypoallergenic Oasis");
      break;
  }
  
};

export const SearchToggle = () => {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <ToggleContainer>
        <ToggleButton onClick={setToggle}>
          Which professional are you looking?
        </ToggleButton>
        {toggle && (
          <ToggleContainerUl>
            <ToggleLi
              to={"/Catalog"}
              id={"affectionAlchemist"}
              onClick={(e) => handleClick(e)}
            >
              Affection Alchemist
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"tinyTotMentor"}
              onClick={(e) => handleClick(e)}
            >
              Tiny Tot Mentor
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"dogWhispererDeluxe"}
              onClick={(e) => handleClick(e)}
            >
              Dog Whisperer Deluxe
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"groomingSupreme"}
              onClick={(e) => handleClick(e)}
            >
              Grooming Supreme
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"socialButterfly"}
              onClick={(e) => handleClick(e)}
            >
              Social Butterfly
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"vocalMaestro"}
              onClick={(e) => handleClick(e)}
            >
              Vocal Maestro
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"hypoallergenicOasis"}
              onClick={(e) => handleClick(e)}
            >
              Hypoallergenic Oasis
            </ToggleLi>
          </ToggleContainerUl>
        )}
      </ToggleContainer>
    </>
  );
};
