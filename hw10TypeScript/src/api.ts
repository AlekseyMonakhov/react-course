import axios from "axios";
import {Repository} from "./types";

export const fetchPopularRepo = async (language:string):Promise<Repository[] | never> => {
    try {
        const resp = await axios.get("https://api.github.com/search/repositories?q=stars:>1+language:" + language + "&sort=stars&order=desc&type=Repositories");
        console.log(resp.data.items)
        return resp.data.items;
    } catch (err) {
        throw err;
    }
};


export const getUser = async (username:string) => {
    try {
        const user = await axios.get(`https://api.github.com/users/${username}`);
        return user.data;
    } catch (error) {
        // @ts-ignore
        throw error?.response?.status
    }
};

export const getRepos = async (username:string) => {
    try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
        return repos.data;
    } catch (error) {
        throw error
    }
};




