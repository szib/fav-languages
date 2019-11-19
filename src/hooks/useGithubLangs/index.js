import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

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

export const useGithubLangs = (username, delay = 1000) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [debouncedUsername] = useDebounce(username, delay);

  useEffect(() => {
    setLoading(true);

    const asyncFn = async username => {
      const langs = await callAPI(username);
      setData(langs);
      setLoading(false);
    };

    if (debouncedUsername) asyncFn(debouncedUsername);
  }, [debouncedUsername]);

  return { loading, data };
};

export default useGithubLangs;
