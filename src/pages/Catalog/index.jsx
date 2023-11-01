import { Navbar } from "../../components/Navbar";
import {
  ButtonContainer,
  GoBack,
  FullProfile,
  CardContainer,
  Title,
  SecondaryTitle,
  Paragraph,
} from "./style";

export const Catalog = () => {
  return (
    <>
      <Navbar />
      <ButtonContainer>
        <GoBack to={"/"}>Choose other Expert</GoBack>
      </ButtonContainer>
      <Title>Affection Alchemist</Title>
      <CardContainer>
        <div>
          <SecondaryTitle>Description:</SecondaryTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            obcaecati esse accusamus explicabo porro, distinctio molestias et
            perferendis natus, id consequuntur aliquam rem dignissimos odit
            animi, repellendus nemo repudiandae quidem!
          </Paragraph>
        </div>
        <div>
          <SecondaryTitle>Temperament:</SecondaryTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            fugit natus quae molestias ad corrupti, earum aspernatur nesciunt
            eveniet illum fuga recusandae suscipit perferendis deserunt illo
            ipsa nostrum officia dolorem?
          </Paragraph>
          <ButtonContainer>
            <FullProfile>Full Profile</FullProfile>
          </ButtonContainer>
        </div>
      </CardContainer>
    </>
  );
};
