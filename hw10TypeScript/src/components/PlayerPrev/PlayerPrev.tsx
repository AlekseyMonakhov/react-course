import React, {ReactNode} from "react";

type props = {
    avatar: string | undefined;
    username: string | undefined;
    children: ReactNode;
}


const PlayerPrev = ({avatar, username, children} :props) => {
    return (
        <div className="userCart">
            {avatar && <img src={avatar} alt="userPhoto" width="200" height="200"/>}
            <h2>{username ? username : "Empty name"}</h2>
            {children}
        </div>
    );
};

export default PlayerPrev;
