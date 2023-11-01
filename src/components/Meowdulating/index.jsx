/* eslint-disable react/no-unescaped-entities */
import {
  CatImg,
  ContainerLoading,
  Title,
  Sentence,
  SentenceAuthor,
} from "./style";
import meowdulating from "../../assets/meowdulating.png";

export const Loading = () => {
  return (                               
    <>
      <ContainerLoading>
        <CatImg src={meowdulating} alt="Cat head spinning around" />
        <Title >Meowdulating</Title>
        <Sentence>
          "Efficiency is turning short breaks into productive and meaningful
          moments."
        </Sentence>
        <SentenceAuthor> - Confurcius</SentenceAuthor>
      </ContainerLoading>
    </>
  );
};
