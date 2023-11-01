import axios from "axios";
import { ENDPOINT } from "../utils/url";

//const apiKey = import.meta.env.VITE_KEY

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

export const fetchTemperamentDescription = async () => {
  try {
    const response = await axios.get(ENDPOINT.breeds);
        const extractedData = response.data.map((breed) => ({
          temperament: breed.temperament,
          description: breed.description,

        }));
    console.log(extractedData);
    return extractedData;
  } catch (error) {
    console.log(error)
  }
};