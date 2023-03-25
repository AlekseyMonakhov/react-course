import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={"home-container"}>
            <h1>
                GitHub Battle: <br />
                Battle your friends... and stuff.
            </h1>
            <Link className="button" to="/battle">
                Battle
            </Link>
        </div>
    );
};

export default Home;
