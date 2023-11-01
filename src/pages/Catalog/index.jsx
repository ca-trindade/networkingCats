import { fetchTemperamentDescription } from "../../api/axios";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Meowdulating"
import { Navbar } from "../../components/Navbar";
import {
  ButtonContainer,
  GoBack,
  FullProfile,
  ContainerList,
  CardContainer,
  Title,
  SecondaryTitle,
  Paragraph,
} from "./style";

export const Catalog = () => {
  const [description, setDescription] = useState([]);
  const [temperament, setTemperament] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function getCatalogData() {
      try {
        const tempDescrData = await fetchTemperamentDescription();
        setDescription(tempDescrData.description);
        setTemperament(tempDescrData.temperament);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getCatalogData();
  }, []);

  return (
    <>
      <Navbar />
      <ButtonContainer>
        <GoBack to={"/"}>Choose other Expert</GoBack>
      </ButtonContainer>

      {loading ? (<Loading />) : (
        <>
      <Title>Affection Alchemist</Title>
      <ContainerList>
        <CardContainer>
          <div>
            <SecondaryTitle>Description:</SecondaryTitle>
            <Paragraph>
              {description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates obcaecati esse accusamus explicabo porro, distinctio
              molestias et perferendis natus, id consequuntur aliquam rem
              dignissimos odit animi, repellendus nemo repudiandae quidem!
            </Paragraph>
          </div>
          <div>
            <SecondaryTitle>Temperament:</SecondaryTitle>
            <Paragraph>
              {temperament}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis fugit natus quae molestias ad corrupti, earum
              aspernatur nesciunt eveniet illum fuga recusandae suscipit
              perferendis deserunt illo ipsa nostrum officia dolorem?
            </Paragraph>
            <ButtonContainer>
              <FullProfile>Full Profile</FullProfile>
            </ButtonContainer>
          </div>
        </CardContainer>
          </ContainerList>
          </>
        )}
    </>
  );
};
