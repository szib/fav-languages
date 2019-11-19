import octokit from './api';
import linkParser from 'parse-link-header';

import { pipe, pathOr, curry, prop, map, __ } from 'ramda';

const getRepoList = async (username, page = 1) => {
  const { headers, data } = await octokit.repos.listForUser({
    username,
    per_page: 50,
    page
  });
  return { headers, data };
};

const convertToNumber = curry(Number.parseInt)(__, 10);

const getNextUrl = pipe(
  pathOr(null, ['headers', 'link']),
  linkParser,
  pathOr(null, ['next', 'page']),
  convertToNumber
);

const getRepoName = pipe(prop('data'), map(prop('name')));

export default async (username, limit = 5) => {
  let nextPage = 1;
  const allRepos = [];

  while (nextPage) {
    const page = await getRepoList(username, nextPage);
    const repos = getRepoName(page);
    allRepos.push(...repos);

    nextPage = getNextUrl(page);

    if (!nextPage || nextPage > limit) break;
  }
  return allRepos;
};
