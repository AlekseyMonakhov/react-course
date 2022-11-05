import axios from "axios";

export const fetchPopularRepo = async (language) => {
    try {
        const resp = await axios.get("https://api.github.com/search/repositories?q=stars:>1+language:" + language + "&sort=stars&order=desc&type=Repositories");
        return resp.status === 200 && resp.data.items;
    } catch (err) {
        console.log(err);
    }
};


export const getUser = async (username) => {
    try {
        const user = await axios.get(`https://api.github.com/users/${username}`);
        return user.data;
    } catch (error) {
        console.log(error);
    }
};

export const getRepos = async (username) => {
    try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
        return repos.data;
    } catch (error) {
        console.log(error);
    }
};




