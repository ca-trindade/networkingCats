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
        <ToggleButton onClick={(setToggle)}>
          Which professional are you looking?
        </ToggleButton>
        {toggle && (
          <ToggleContainerUl>
            <ToggleLi>Affection Alchemist</ToggleLi>
            <ToggleLi>Tiny Tot Mentor</ToggleLi>
            <ToggleLi>Dog Whisperer Deluxe</ToggleLi>
            <ToggleLi>Grooming Supreme</ToggleLi>
            <ToggleLi>Social Butterfly</ToggleLi>
            <ToggleLi>Vocal Maestro</ToggleLi>
            <ToggleLi>Hypoallergenic Oasis</ToggleLi>
          </ToggleContainerUl>
        )}
      </ToggleContainer>
    </>
  );
};
