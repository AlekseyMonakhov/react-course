import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./result.css";
import { getRepos, getUser } from "../../api";
import PlayerPrev from "../../components/PlayerPrev/PlayerPrev";
import Loader from "../../components/Loader/Loader";

const Results = () => {
    const { search } = useLocation();
    const [winner, setWinner] = useState({ login: "", avatar: "", score: 0 });
    const [loser, setLoser] = useState({ login: "", avatar: "", score: 0 });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const searchParams = new URLSearchParams(search);

        const getUserData = (username) => {
            return Promise.all([getUser(username), getRepos(username)])
                .then(([profile, repos]) => {
                    return {
                        login: profile.login,
                        avatar: profile.avatar_url,
                        score: calculateScore(profile, repos),
                    };
                })
                .catch((err) => {
                    errorHandler(err);
                });
        };
        const calculateScore = (profile, repos) => {
            const { followers } = profile;
            const totalStars = getStarCount(repos);
            return followers + totalStars;
        };

        const startBattle = (players) => {
            return Promise.all(players.map(getUserData))
                .then(sortPlayers)
                .catch(errorHandler);
        };

        startBattle([
            searchParams.get("playerOneName"),
            searchParams.get("playerTwoName"),
        ])
            .then(([winner, loser]) => {
                setWinner(winner);
                setLoser(loser);
            })
            .catch((error) => {
                errorHandler(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [search]);

    const getStarCount = (repos) => {
        return repos.reduce((prev, repo) => prev + repo.stargazers_count, 0);
    };

    const sortPlayers = (players) => {
        return players.sort((a, b) => b.score - a.score);
    };

    const errorHandler = (error) => {
        setError(true);
        console.log(error);
    };

    return (
        <div className='result-container'>
            {loading ? (
                <Loader />
            ) : error ? (
                <h3 className={"error"}>Some error</h3>
            ) : (
                <>
                    <PlayerPrev
                        avatar={winner.avatar}
                        username={winner.login}
                    >
                        <h3>
                            {winner.login} score: {winner.score}
                        </h3>
                    </PlayerPrev>
                    <PlayerPrev
                        avatar={loser.avatar}
                        username={loser.login}
                    >
                        <h3>
                            {loser.login} score: {loser.score}
                        </h3>
                    </PlayerPrev>
                </>
            )}
        </div>
    );
};

export default Results;
