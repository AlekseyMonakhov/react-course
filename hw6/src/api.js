import axios from "axios";

export const fetchPopularRepo = async (language) => {
  try {
    const resp = await axios.get(
      "https://api.github.com/search/repositories?q=stars:>1+language:" +
        language +
        "&sort=stars&order=desc&type=Repositories"
    );
    return resp.status === 200 && resp.data.items;
  } catch (err) {
    console.log(err);
  }
};
