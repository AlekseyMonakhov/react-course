import axios from "axios";

// const id = "AlekseyMonakhov";
// const sec = `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`;
// const params = "?client_id=" + id + "?client_secret=" + sec;

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

export const getUser = async (username) => {
  const resp = await axios.get(`https://api.github.com/users/${username}`);
  return resp.status === 200 && resp.data;
};

export const getRepos = async (username) => {
  const resp = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return resp.status === 200 && resp.data;
};
