import axios from "axios";
const apiEndPoint = "https://www.omdbapi.com/?&apikey=c36639e&";
export const fetchMovieInfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
