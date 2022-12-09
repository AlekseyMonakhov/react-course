import axios from "axios";
import { Repository, UserData } from "./types";

export const fetchPopularRepo = async (
    language: string
): Promise<Repository[] | never> => {
    try {
        const resp = await axios.get(
            "https://api.github.com/search/repositories?q=stars:>1+language:" +
                language +
                "&sort=stars&order=desc&type=Repositories"
        );
        console.log(resp.data.items);
        return resp.data.items;
    } catch (err) {
        throw err;
    }
};

export const getUser = async (username: string): Promise<UserData | never> => {
    try {
        const user = await axios.get(
            `https://api.github.com/users/${username}`
        );
        
        
        return user.data;
    } catch (error) {
        throw error;
    }
};

export const getRepos = async (username: string): Promise<Array<Repository> | never> => {
    try {
        const repos = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );
        
        return repos.data;
    } catch (error) {
        throw error;
    }
};
