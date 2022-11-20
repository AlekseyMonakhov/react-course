import React, {memo, useEffect} from "react";
import "./selectedLang.css";
import {setLanguage} from "../../redux/Popular/popular.actions";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../redux/Popular/popular.thunk";

const languages = ["All", "Javascript", "Ruby", "CSS", "Python", "Java"];

const SelectedLang = memo(() => {
    const dispatch = useDispatch();
    const selectedLang = useSelector((store) => store.popularReducer.selectedLang)
    const loading = useSelector((store) => store.popularReducer.isLoading)

    console.log(selectedLang)
    useEffect(() => {
        dispatch(getRepos(selectedLang));

        // eslint-disable-next-line
    }, [selectedLang]);

    const selectLang = (selectedLang) => {
        dispatch(setLanguage(selectedLang));
    };

    return (
        <ul className='lang-container'>
            {languages.map((lang) => (
                <li
                    className={loading ? "disable" : undefined}
                    onClick={() => (selectedLang !== lang && !loading) && selectLang(lang)}
                    style={selectedLang === lang ? {color: "orange"} : null}
                    key={lang}
                >
                    {lang}
                </li>
            ))}
        </ul>
    );
});

export default SelectedLang;
