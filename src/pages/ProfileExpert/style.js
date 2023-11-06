import { Link } from "react-router-dom";
import styled from "styled-components";



export const Title = styled.h2`
  color: #f4dfba;
  font-size: 3vw;
  font-weight: 600;
  font-family: "Quattrocento", serif;
  text-align: center;
  margin: 30px 0;
`;

export const ContainerList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-evenly;
  margin: auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  border-radius: 12px;
  background-color: #eec373;
  padding: 10px 25px 20px 25px;
  margin: 15px 0;
`;

export const Label = styled.label`
  color: #876445;
  font-size: 1.6vw;
  font-weight: 600;
  font-family: "Playfair Display", serif;
`;

export const ProgressContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
width: 400px;
height: 50px;

`;

export const Buttons = styled(Link)`
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
  justify-content: space-between;
  margin: 15px;
`;