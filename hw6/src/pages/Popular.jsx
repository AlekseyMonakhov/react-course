import React, { useCallback, useEffect, useState } from "react";
import { fetchPopularRepo } from "../api";
import Repo from "../components/Repo/Repo";
import SelectedLang from "../components/SelectedLang/SelectedLang";

const Popular = () => {
  const [lang, setLang] = useState("All");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPopularRepo(lang).then((items) => setRepos(items));
    setLoading(true);
  }, [lang]);

  const selectLang = useCallback((selectedLang) => {
    setLang(selectedLang);
  }, []);

  console.log("popular");
  return (
    <>
      <SelectedLang
        selectLang={selectLang}
        selectedLang={lang}
      />
      {loading ?  <Repo repos={repos}/> : <p>Loading...</p>}
    </>
  );
};

export default Popular;
