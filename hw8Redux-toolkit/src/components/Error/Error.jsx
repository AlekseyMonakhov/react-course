import React, {memo} from 'react';
import {useSelector} from "react-redux";

const Error = memo(({handleReset, id}) => {
    const error = useSelector((state) => state.battle[id === "first" ? "playerOne" : "playerTwo"].error)
    return (
        <div className={"player-form"}>
            <h3>{error === 404 ? "User not found" : "Github API request count limit"}</h3>
            <button onClick={() => handleReset(id)}>Try again</button>
        </div>
    );
});

export default Error;
