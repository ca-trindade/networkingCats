import axios from "axios";
import { ENDPOINT } from "../utils/url";
import { header } from "../utils/headers";

export const fetchDataBreeds = () => {
  axios
    .get(ENDPOINT.breeds)
    .then((response) => {
      if (response.status === 200) {
        const extractedData = response.data.map((breed) => ({
          temperament: breed.temperament,
          description: breed.description,
          affection_level: breed.affection_level,
          child_friendly: breed.child_friendly,
          dog_friendly: breed.dog_friendly,
          energy_level: breed.energy_level,
          grooming: breed.grooming,
          social_needs: breed.social_needs,
          vocalisation: breed.vocalisation,
          hypoallergenic: breed.hypoallergenic,
          reference_image_id: breed.reference_image_id,
        }));
        console.log(extractedData);
        return extractedData;
      } else {
        throw new Error("Error call API");
      }
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};

export const fetchBreeds = () => {
  return axios
    .get(ENDPOINT.breeds)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchImages = () => {
  return axios
    .get(ENDPOINT.imageId, header )
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchBreedImage = async () => {
  try {
    const response = await axios.get(ENDPOINT.breeds, {
      headers: { "x-api-key": import.meta.env.VITE_KEY }
    })
    console.log(response.data.url)
  } catch (error) {
    throw new Error(error.message)
  }};