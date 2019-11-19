import { pipe, toPairs, sortBy, nth, last } from 'ramda';

export default pipe(toPairs, sortBy(nth(1)), last, nth(0));
