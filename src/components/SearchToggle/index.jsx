
import { useSelectedProfession } from "../../hooks/useContext/professionContext";
import { useToggle } from "../../hooks/useToggle";
import {
  ToggleContainer,
  ToggleButton,
  ToggleContainerUl,
  ToggleLi,
} from "./style";



export const SearchToggle = () => {
  const [toggle, setToggle] = useToggle();
  const { setSelectedProfession } = useSelectedProfession();

  const handleClick = (e) => {
      const selectedId = e.target.id;

  switch (selectedId) {
    case "affectionAlchemist":
      setSelectedProfession("Affection Alchemist");
      break;
    case "tinyTotMentor":
      setSelectedProfession("Tiny Tot Mentor");
      break;
    case "dogWhispererDeluxe":
      setSelectedProfession("Dog Whisperer Deluxe");
      break;
    case "groomingSupreme":
      setSelectedProfession("Grooming Supreme");
      break;
    case "socialButterfly":
      setSelectedProfession("Social Butterfly");
      break;
    case "vocalMaestro":
      setSelectedProfession("Vocal Maestro");
      break;
    case "hypoallergenicOasis":
      setSelectedProfession("Hypoallergenic Oasis");
      break;
  }
};

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
              onClick={handleClick}
            >
              Affection Alchemist
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"tinyTotMentor"}
              onClick={handleClick}
            >
              Tiny Tot Mentor
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"dogWhispererDeluxe"}
              onClick={handleClick}
            >
              Dog Whisperer Deluxe
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"groomingSupreme"}
              onClick={handleClick}
            >
              Grooming Supreme
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"socialButterfly"}
              onClick={handleClick}
            >
              Social Butterfly
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"vocalMaestro"}
              onClick={handleClick}
            >
              Vocal Maestro
            </ToggleLi>
            <ToggleLi
              to={"/Catalog"}
              id={"hypoallergenicOasis"}
              onClick={handleClick}
            >
              Hypoallergenic Oasis
            </ToggleLi>
          </ToggleContainerUl>
        )}
      </ToggleContainer>
    </>
  );
};
