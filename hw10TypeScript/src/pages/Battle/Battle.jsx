import React, {useCallback} from "react";
import {Link, useLocation} from "react-router-dom";
import PlayerPrev from "../../components/PlayerPrev/PlayerPrev";
import PlayerInput from "./../../components/PlayerInput/PlayerInput";
import "./Battle.css";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import {playerReset, setUser} from "../../redux/battleSlice";

const Battle = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const playerOne = useSelector((state) => state.battle.playerOne, shallowEqual)
    const playerTwo = useSelector((state) => state.battle.playerTwo, shallowEqual)

    const handleSubmit = (userName, id) => {
        dispatch(setUser({userName, id}))
    };

    const handleReset = useCallback((id) => {
        console.log(id)
        dispatch(playerReset(id))
    }, [dispatch]);

    return (
        <main>
            <div className='battle-container'>
                {playerOne.error ? (
                    <Error handleReset={handleReset} id={"first"}/>
                ) : playerOne.isLoading ?
                    <Loader/>
                    : playerOne.avatar ? (
                        <PlayerPrev
                            avatar={playerOne.avatar}
                            username={playerOne.login}
                        >
                            <button
                                className='reset'
                                onClick={() => handleReset(`first`)}
                            >
                                Reset
                            </button>
                        </PlayerPrev>
                    ) : (
                        <PlayerInput
                            label={`Player 1`}
                            id={"first"}
                            onSubmit={handleSubmit}
                        />
                    )}
                {playerTwo.error ?
                    <Error handleReset={handleReset} id={"second"}/>
                    : playerTwo.isLoading ?
                        <Loader/>
                        : playerTwo.avatar ? (
                            <PlayerPrev
                                avatar={playerTwo.avatar}
                                username={playerTwo.login}
                            >
                                <button
                                    className='reset'
                                    onClick={() => handleReset(`second`)}
                                >
                                    Reset
                                </button>
                            </PlayerPrev>
                        ) : (
                            <PlayerInput
                                label={`Player 2`}
                                id={"second"}
                                onSubmit={handleSubmit}
                            />
                        )}
                {playerOne.avatar && playerTwo.avatar && (
                    <Link
                        to={{
                            pathname: `${location.pathname}/results`,
                        }}
                        className='button'
                    >
                        Battle
                    </Link>
                )}
            </div>
        </main>
    );
};

export default Battle;
