import axios from "axios";
import { ENDPOINT } from "../utils/url";

//const apiKey = process.env.REACT_APP_API_KEY;


export const fetchDataBreeds = () => {
    axios
      .get(ENDPOINT.breeds)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}
