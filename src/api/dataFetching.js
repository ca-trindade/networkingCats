import axios from "axios";
import { ENDPOINT } from "../utils/url";

export const dataFetching = () => {
      axios.get(ENDPOINT.breeds)
          .then(response => {
              console.log(response)
              return response
          }).catch(error => {
          console.log(error)
      })

    
};
