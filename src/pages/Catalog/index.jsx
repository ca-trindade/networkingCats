import { fetchBreeds } from "../../api/axios";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Meowdulating";
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreeds()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <ButtonContainer>
        <GoBack to={"/"}>Choose other Expert</GoBack>
      </ButtonContainer>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>Affection Alchemist</Title>
          <ContainerList>
            {data.map((data) => (
              <CardContainer key={data.id}>
                <div>
                  <SecondaryTitle>Description:</SecondaryTitle>
                  <Paragraph>{data.description}</Paragraph>
                </div>

                <div>
                  <SecondaryTitle>Temperament:</SecondaryTitle>
                  <Paragraph>{data.temperament}</Paragraph>
                </div>
                <ButtonContainer>
                  <FullProfile to={"/LoginPage"}>Full Profile</FullProfile>
                </ButtonContainer>
              </CardContainer>
            ))}
          </ContainerList>
        </>
      )}
    </>
  );
};
