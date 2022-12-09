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
        return resp.data.items;
    } catch (error) {
        throw error;
    }
};

export const getUser = async (username: string): Promise<UserData> => {
    try {
        const user = await axios.get(
            `https://api.github.com/users/${username}`
        );
        
        return user.data;
    } catch (error) {
        throw error;
    }
};

export const getRepos = async (username: string): Promise<Array<Repository>> => {
    try {
        const repos = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );
        
        return repos.data;
    } catch (error) {
        throw error;
    }
};
