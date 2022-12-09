export interface Repository {
    name: string,
    owner: {
        avatar_url: string,
        login: string,
    }
    html_url: string,
    stargazers_count: number,
}

export interface User {
    login: string,
    avatar: string,
    score: number,
    error: string | null,
    isLoading: boolean
}

export interface UserData {
    avatar_url: string,
    followers: number,
    following: number,
    public_repos: string,
}

export interface BattleState<UserType> {
    playerOne: UserType,
    playerTwo: UserType,
}

export type setUserProps = {
    userName: string;
    id: string;
}

export interface PopularState {
    selectedLang: string;
    repos: Repository[],
    isLoading: boolean;
    error: string;
}