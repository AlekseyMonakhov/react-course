import React, {memo} from 'react';
import {useSelector} from "react-redux";

interface Props {
    handleReset: (id:string) => void,
    id: string,
}


const Error = memo(({handleReset, id}: Props) => {
    const error = useSelector((state) => state.battleReducer[id === "first" ? "playerOne" : "playerTwo"].error)
    return (
        <div className={"player-form"}>
            <h3>{error === 404 ? "User not found" : "Github API request count limit"}</h3>
            <button onClick={() => handleReset(id)}>Try again</button>
        </div>
    );
});

export default Error;
