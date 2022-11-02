import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerPrev from "../../components/PlayerPrev/PlayerPrev";
import PlayerInput from "./../../components/PlayerInput/PlayerInput";
import "./Battle.css";

const Battle = () => {
    const [playerOneName, setPlayerOneName] = useState(``);
    const [playerTwoName, setPlayerTwoName] = useState(``);
    const [playerOneImage, setPlayerOneImage] = useState(``);
    const [playerTwoImage, setPlayerTwoImage] = useState(``);

    const location = useLocation();

    const handleSubmit = (userName, id) => {
        if (id === "first") {
            setPlayerOneName(userName);
            setPlayerOneImage(`https://github.com/${userName}.png?size=200`);
        } else {
            setPlayerTwoName(userName);
            setPlayerTwoImage(`https://github.com/${userName}.png?size=200`);
        }
    };

    const handleReset = (id) => {
        if (id === "first") {
            setPlayerOneName(``);
            setPlayerOneImage(``);
        } else {
            setPlayerTwoName(``);
            setPlayerTwoImage(``);
        }
    };

    return (
        <main>
            <div className='battle-container'>
                {!playerOneImage ? (
                    <PlayerInput
                        label={`Player 1`}
                        id={"first"}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPrev
                        avatar={playerOneImage}
                        username={playerOneName}
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
                )}
                {!playerTwoImage ? (
                    <PlayerInput
                        label={`Player 2`}
                        id={"second"}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPrev
                        avatar={playerTwoImage}
                        username={playerTwoName}
                    >
                        <button
                            className='reset'
                            onClick={() => handleReset(`second`)}
                        >
                            Reset
                        </button>
                    </PlayerPrev>
                )}
                {playerOneImage && playerTwoImage && (
                    <Link
                        to={{
                            pathname: `${location.pathname}/results`,
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
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
