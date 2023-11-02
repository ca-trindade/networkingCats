import axios from "axios";
import { ENDPOINT } from "../../utils/url";
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
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT.breeds)
      .then((res) => {
        setLoading(false);
        setData(res.data);
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
