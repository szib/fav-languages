/**
 * Takes an array of object. Returns an object with all keys that any object
 * had integer value. The value of each key is the sum of all values with the
 * same key.
 *
 * @param {array} arr - Array of objects.
 * @return {object} An object.
 *
 */
import { mergeWith, add, pickBy, reduce } from 'ramda';

const addObjects = (a, b) =>
  mergeWith(add, pickBy(Number.isInteger, a), pickBy(Number.isInteger, b));

export default arr => {
  return arr ? reduce(addObjects, {}, arr) : {};
};
