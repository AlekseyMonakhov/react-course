import React from "react";
import Repo from "../../components/Repo/Repo";
import SelectedLang from "../../components/SelectedLang/SelectedLang";
import "./popular.css";

const Popular = () => {
    return (
        <main>
            <SelectedLang/>
            <Repo/>
        </main>
    );
};

export default Popular;
