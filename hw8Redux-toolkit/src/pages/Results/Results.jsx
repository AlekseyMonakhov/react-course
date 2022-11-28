import React, {useEffect, useState} from "react";
import "./result.css";
import PlayerPrev from "../../components/PlayerPrev/PlayerPrev";
import {shallowEqual, useSelector} from "react-redux";

const Results = () => {
    const userOne = useSelector((state) => state.battle.playerOne, shallowEqual)
    const userTwo = useSelector((state) => state.battle.playerTwo, shallowEqual)
    const [winner, setWinner] = useState({});
    const [loser, setLoser] = useState({});
    const [equalResult, setEqualResult] = useState(false);

    useEffect(() => {
        if (userOne.score > userTwo.score) {
            setWinner(userOne)
            setLoser(userTwo)
        } else if (userOne.score === userTwo.score) {
            setEqualResult(true);
            setWinner(userOne)
            setLoser(userTwo)
        } else {
            setWinner(userTwo)
            setLoser(userOne)
        }
        // eslint-disable-next-line
    }, [userOne.score, userTwo.score])

    return (
        <div className="result-container">
            <>
                <PlayerPrev avatar={winner.avatar} username={winner.login}>
                    <h3>
                        Winner: {winner.login}, score: {winner.score}
                    </h3>
                </PlayerPrev>
                <PlayerPrev avatar={loser.avatar} username={loser.login}>
                    <h3>
                        {equalResult ? "Winner" : "SecondPlace"}: {loser.login},
                        score: {loser.score}
                    </h3>
                </PlayerPrev>
            </>
        </div>
    );
};

export default Results;
