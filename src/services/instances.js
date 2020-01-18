import axios from "axios";

export const IsobarFM = axios.create({
  baseURL: "https://iws-recruiting-bands.herokuapp.com/api/"
});
