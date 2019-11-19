import octokit from './api';

import { splitEvery, map, flatten, curry } from 'ramda';

const getLanguages = curry(async (owner, repo) => {
  const { data } = await octokit.repos.listLanguages({
    owner,
    repo
  });
  return data;
});

export default async (owner, repos, batchSize = 15) => {
  const languages = [];
  const batches = splitEvery(batchSize, repos);

  const getOwnersRepo = getLanguages(owner);
  const processBatch = map(getOwnersRepo);

  for (const batch of batches) {
    languages.push(await Promise.all(processBatch(batch)));
  }

  return flatten(languages);
};
