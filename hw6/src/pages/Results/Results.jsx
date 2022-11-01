import React, { useState } from "react";
import { useEffect } from "react";
import { getRepos, getUser } from "../../api";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [userOne, setUserOne] = useState({ login: "", stars: 0, followers: 0 });
  const [userTwo, setUserTwo] = useState({ login: "", stars: 0, followers: 0 });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentParams = new Map(...[searchParams]);

    currentParams.forEach(async (param, key) => {
      try {
        const responceUser = await getUser(param);
        const responceUserRepos = await getRepos(param);

        (key === "playerOneName" ? setUserOne : setUserTwo)((prev) => ({
          ...prev,
          login: responceUser?.login,
          stars: responceUserRepos?.reduce((prev, current) => {
            return prev + current.stargazers_count;
          }, 0),
          followers: responceUser?.followers,
        }));
      } catch (err) {
        err.response.status === 404 && setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    });
  }, [searchParams]);
  console.log("render");

  const calcResult = (userOne, userTwo) => {
    return userOne.stars + userOne.followers > userTwo.stars + userTwo.follower;
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>Sorry, user is invalid</h2>
      ) : calcResult(userOne, userTwo) ? (
        userOne.login
      ) : (
        userTwo.login
      )}
    </div>
  );
};

export default Results;
