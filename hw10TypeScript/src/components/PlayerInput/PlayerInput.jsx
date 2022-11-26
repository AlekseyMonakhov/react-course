import React, {memo, useState} from "react";
import "./PlayerInput.css";

const PlayerInput = memo(({label, id, onSubmit}) => {
    const [userName, setUserName] = useState(``);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(userName, id)
    };

    return (
        <form
            className='player-form'
            onSubmit={handleSubmit}
        >
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type='text'
                autoComplete='off'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Github username'
                required
            />
            <button style={!userName ? {cursor: "not-allowed"} : undefined}>
                Submit
            </button>
        </form>
    );
});

export default PlayerInput;