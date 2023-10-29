const baseUrl = "https://api.thecatapi.com/";

export const ENDPOINT = {
  breeds: baseUrl + "v1/breeds",
  imageId:
    baseUrl + "v1/images/:image_id?sub_id&size&include_vote=&include_favourite",
};
