import styled from "styled-components";

export const InputFullContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 350px;
  padding: 0 25px 40px 25px;
justify-content: center;
  border-radius: 12px;
  background-color: #f4dfba;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const InputLabel = styled.h3`
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
  color: #876445;
`;

export const InputUi = styled.input`
  height: 40px;
  border-radius: 12px;
  border: solid 1px #ccc;
  margin: 5px 0;
  font-size: larger;
  font-family: "Quattrocento", serif;
  background-color: #fdfdfd;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #ca965c;

  }
`;

export const Submit = styled.input`
  height: 45px;
  background-color: #ca965c;
  color: #f4dfba;
  border-radius: 12px;
  border: solid 1px #f4dfba;
  font-size: larger;
  font-family: "Quattrocento", serif;

  &:hover {
    background: #db974d;
  }
`;
