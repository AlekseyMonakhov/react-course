import React, {memo} from "react";
import "./repo.css";
import {useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import {Repository} from "../../types";
import {RootState} from "../../redux/store";

const Repo = memo(() => {
    const repos = useSelector((store: RootState) => store.popular.repos)
    return (
        repos?.length ?
            <ul className='popular-list'>
                {repos.map((repo:Repository, index:number) => (
                    <li
                        key={repo.name}
                        className='popular-item'
                    >
                        <span className='popular-rank'>#{index + 1}</span>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={"Avatar for " + repo.owner.login}
                                />
                            </li>
                            <li>
                                <a href={repo.html_url}>{repo.name}</a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} start</li>
                        </ul>
                    </li>
                ))}
            </ul>
            : <Loader/>
    );
});

export default Repo;
