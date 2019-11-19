import { useState, useEffect } from 'react';

import getRepos from './getRepos';
import getLanguages from './getLanguages';
import sumLanguages from './sumObjects';
import favorite from './favouriteLanguage';

const callAPI = async username => {
  try {
    const repos = await getRepos(username);
    const languages = await getLanguages(username, repos);
    const summary = sumLanguages(languages);
    return {
      languages: summary,
      favoriteLanguage: favorite(summary)
    };
  } catch (error) {
    return {
      error: {
        status: error.status,
        message: error.message
      }
    };
  }
};

export const useGithubLangs = username => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);

    const asyncFn = async username => {
      const langs = await callAPI(username);
      setData(langs);
      setLoading(false);
    };

    asyncFn(username);
  }, [username]);

  return { loading, data };
};

export default useGithubLangs;
