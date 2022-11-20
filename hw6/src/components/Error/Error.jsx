import React, {memo} from 'react';

const Error = memo(({handleReset, id}) => {
    return (
        <div className={"player-form"}>
            <h3>User not found</h3>
            <button onClick={() => handleReset(id)}>Try again</button>
        </div>
    );
});

export default Error;
