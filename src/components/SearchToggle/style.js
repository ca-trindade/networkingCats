import { Link } from "react-router-dom";
import styled from "styled-components";


export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ToggleButton = styled.button`
  height: 70px;
  background-color: #f4dfba;
  color: #ca965c;
  border-radius: 12px;
  border: solid 1px #f4dfba;
  font-size: 2vw;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 0 110px;

  &:hover {
    color: #876445;
  }
  &:active {
    color: #ca965c;
  }
`;

export const ToggleContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  font-size: larger;
  padding-left: 0;
`;

export const ToggleLi = styled(Link)`
  display: flex;
  justify-content: center;
  background-color: #ca965c;
  color: #f4dfba;
  border-radius: 12px;
  border: solid 1px #876445;
  font-size: 2vw;
  font-weight: 500;
  font-family: "Quattrocento", serif;
  padding: 10px;
  margin: 3px 0px;
  text-decoration: none;

  &:hover {
    color: #876445;
    background-color: #f4dfba;
  }
  &:active {
    color: #ca965c;
  }
`;
