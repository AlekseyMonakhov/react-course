import React, {memo, useEffect} from "react";
import "./selectedLang.css";
import {useDispatch, useSelector} from "react-redux";
import {getPopular, setLanguage} from "../../redux/popularSlice";
import {AppDispatch, RootState} from "../../redux/store";

const languages = ["All", "Javascript", "Ruby", "CSS", "Python", "Java"];

const SelectedLang = memo(() => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedLang = useSelector((store:RootState) => store.popular.selectedLang)
    const loading = useSelector((store:RootState) => store.popular.isLoading)

    useEffect(() => {
        dispatch(getPopular({selectedLang}));

        // eslint-disable-next-line
    }, [selectedLang]);

    const selectLang = (selectedLang:string) => {
        dispatch(setLanguage(selectedLang));
    };

    return (
        <ul className='lang-container'>
            {languages.map((lang) => (
                <li
                    className={loading ? "disable" : undefined}
                    onClick={() => (selectedLang !== lang && !loading) && selectLang(lang)}
                    style={selectedLang === lang ? {color: "orange"} : undefined}
                    key={lang}
                >
                    {lang}
                </li>
            ))}
        </ul>
    );
});

export default SelectedLang;
