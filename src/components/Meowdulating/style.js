import styled, { keyframes } from "styled-components";

export const ContainerLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const CatImg = styled.img`
  height: 30vh;
  margin-left: 35%;
  animation: ${rotate} 5s linear infinite;
`;

export const Title = styled.h2`
  color: #f4dfba;
  font-size: 3vw;
  font-weight: 600;
  font-family: "Quattrocento", serif;
  text-align: center;
  margin: 30px 0;

`;

export const Sentence = styled.h3`
  font-size: 1.4vw;
  font-weight: 600;
  font-family: "Playfair Display", serif;
`;
export const SentenceAuthor = styled.h3`
display: flex;
  font-size: 1vw;
  font-weight: 400;
  font-family: "Playfair Display", serif;
  justify-content: end;
`;