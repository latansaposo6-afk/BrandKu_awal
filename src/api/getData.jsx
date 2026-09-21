import axios from "axios";

export default async function getData() {
  try {
    const request = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    });
    return request.data;
  } catch (error) {
    console.log(error);
  }
}