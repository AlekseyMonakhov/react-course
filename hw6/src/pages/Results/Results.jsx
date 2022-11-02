import React, { useId, useState } from "react";
import { useEffect } from "react";
import { getRepos, getUser } from "../../api";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import PlayerPrev from "../../components/PlayerPrev/PlayerPrev";
import "./result.css";

const Results = () => {
    const [searchParams] = useSearchParams();
    const [userOne, setUserOne] = useState({ login: "", avatar: "", score: 0 });
    const [userTwo, setUserTwo] = useState({ login: "", avatar: "", score: 0 });
    const [error, setError] = useState(0);
    const [loading, setLoading] = useState(true);
    const id = useId();

    useEffect(() => {
        const currentParams = new Map(...[searchParams]);

        currentParams.forEach(async (param, key) => {
            try {
                const responceUser = await getUser(param);
                const responceUserRepos = await getRepos(param);

                (key === "playerOneName" ? setUserOne : setUserTwo)((prev) => ({
                    ...prev,
                    login: responceUser?.login,
                    avatar: responceUser?.avatar_url,
                    score:
                        prev.score +
                        responceUser?.followers +
                        responceUserRepos?.reduce((prev, current) => {
                            return prev + current.stargazers_count;
                        }, 0),
                }));
            } catch (err) {
                console.log(err);
                if (err.response.status === 404) {
                    setLoading(false);
                    setError(err.response.status);
                }
                if (err.response.status === 403) {
                    setLoading(false);
                    setError(err.response.status);
                }
            }
        });
        setLoading(false);
    }, [searchParams]);
    console.log("render");
    return (
        <div className='result-container'>
            {loading ? (
                <Loader />
            ) : error ? (
                <h2 className='error'>
                    {error === 403
                        ? "I like github API"
                        : "Sorry, invalid user"}
                </h2>
            ) : (
                [userOne, userTwo]
                    .sort((a, b) => b.score - a.score)
                    .map((user, index) => (
                        <PlayerPrev
                            username={user.login}
                            avatar={user.avatar}
                            key={index + `${id}`}
                        >
                            <h2>{index ? "Second place" : "First place"}</h2>
                        </PlayerPrev>
                    ))
            )}
        </div>
    );
};

export default Results;
