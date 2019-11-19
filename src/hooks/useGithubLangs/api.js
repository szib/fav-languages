import dotenv from 'dotenv';
import Octokit from '@octokit/rest';

dotenv.config();

export default new Octokit({
  auth: process.env.REACT_APP_GITHUB_AUTH,
  log: {
    // debug: console.log,
    // info: console.log,
    warn: console.warn,
    error: console.error
  }
});
