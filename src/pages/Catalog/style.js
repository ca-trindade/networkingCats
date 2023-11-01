import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBack = styled(Link)`
  background-color: #f4dfba;
  color: #ca965c;
  border-radius: 12px;
  border: solid 1px #f4dfba;
  font-size: 1vw;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 5px 20px;
  text-decoration: none;

  &:hover {
    color: #876445;
  }
  &:active {
    color: #ca965c;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px;
`;

export const Title = styled.h2`
  color: #f4dfba;
  font-size: 3vw;
  font-weight: 600;
  font-family: "Quattrocento", serif;
  text-align: center;
  margin: 30px 0;
`;

export const ContainerList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35vw;
  border-radius: 12px;
  background-color: #eec373;
  padding: 10px 25px 20px 25px;
`;

export const SecondaryTitle = styled.h3`
  color: #876445;
  font-size: 1.4vw;
  font-weight: 600;
  font-family: "Playfair Display", serif;
`;

export const Paragraph = styled.p`
  color: #876445;
  font-size: 1vw;
  font-weight: 600;
  font-family: "Quattrocento", serif;
`;

export const FullProfile = styled(Link)`
  background-color: #f4dfba;
  color: #ca965c;
  border-radius: 12px;
  border: solid 1px #f4dfba;
  font-size: 1.2vw;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 5px 20px;
  text-decoration: none;
  margin-top: 10px;


  &:hover {
    color: #876445;
  }
  &:active {
    color: #ca965c;
  }
`;
