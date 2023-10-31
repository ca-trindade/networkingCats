

import { useToggle } from "../../hooks/useToggle";
import {
  ToggleContainer,
  ToggleButton,
  ToggleContainerUl,
  ToggleLi,
} from "./style";

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
            <ToggleLi to={"/Catalog"}>Affection Alchemist</ToggleLi>
            <ToggleLi to={"/Catalog"}>Tiny Tot Mentor</ToggleLi>
            <ToggleLi to={"/Catalog"}>Dog Whisperer Deluxe</ToggleLi>
            <ToggleLi to={"/Catalog"}>Grooming Supreme</ToggleLi>
            <ToggleLi to={"/Catalog"}>Social Butterfly</ToggleLi>
            <ToggleLi to={"/Catalog"}>Vocal Maestro</ToggleLi>
            <ToggleLi to={"/Catalog"}>Hypoallergenic Oasis</ToggleLi>
          </ToggleContainerUl>
        )}
      </ToggleContainer>
    </>
  );
};
