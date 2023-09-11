import axios from "axios";
axios.defaults.baseURL = "https://api.example.com";

export async function searchArtist(name: string) {
  const proxy = " https://cors-anywhere.herokuapp.com";
  const url = `https://api.deezer.com/artist/${name}`;

  try {
    let data = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getArtistDetails(name: string) {
  const proxy = "https://cors-server.fly.dev/";
  const url = `https://api.deezer.com/artist/${name}`;

  try {
    let data = await axios.get(proxy + url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
