import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPopularRepo } from "../../api";
import Loader from "../../components/Loader/Loader";
import Repo from "../../components/Repo/Repo";
import SelectedLang from "../../components/SelectedLang/SelectedLang";
import "./popular.css";

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams({ lang: "All" });
  const [repos, setRepos] = useState({ loading: true, items: [] });
  const lang = searchParams.get("lang");

  useEffect(() => {
    fetchPopularRepo(lang).then((repositories) =>
      setRepos({ loading: false, items: repositories })
    );
  }, [lang]);

  const selectLang = useCallback(
    (selectedLang) => {
      setSearchParams({ lang: selectedLang });
      setRepos((prev) =>
        lang === selectedLang ? prev : { loading: true, items: [] }
      );
    },
    [setSearchParams, lang]
  );

  return (
    <>
      <SelectedLang
        selectLang={selectLang}
        selectedLang={lang}
        loading={repos.loading}
      />
      {repos.items.length ? <Repo repos={repos.items} /> : <Loader />}
    </>
  );
};

export default Popular;
