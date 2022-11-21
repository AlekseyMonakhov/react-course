import React, {useCallback} from "react";
import {Link, useLocation} from "react-router-dom";
import PlayerPrev from "../../components/PlayerPrev/PlayerPrev";
import PlayerInput from "./../../components/PlayerInput/PlayerInput";
import "./Battle.css";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {resetPlayerOne, resetPlayerTwo} from "../../redux/Battle/battle.actions";
import {setUser} from "../../redux/Battle/battle.thunk";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const Battle = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const playerOne = useSelector((state) => state.battleReducer.playerOne, shallowEqual)
    const playerTwo = useSelector((state) => state.battleReducer.playerTwo, shallowEqual)

    const handleSubmit = (userName, id) => {
        dispatch(setUser(userName, id))
    };

    const handleReset = useCallback((id) => {
        if (id === "first") {
            dispatch(resetPlayerOne())
        } else {
            dispatch(resetPlayerTwo())
        }
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
                            handleReset={handleReset}
                            id='first'
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
