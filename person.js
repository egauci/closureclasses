/*
 * This improves on the idea of classes by using a closure. The
 * class is instantiated without "new" and does not use "this".
 *
 * The person factory returns an object with serveral methods, some
 * implemented here and some mixed in from another class.
 *
 * Each call to the factory function returns an identical interface with
 * private data. This is not based on prototypical inheritance. Each
 * object created by the factory function is independent.
 */
import favFood from './favfood';

export default function (conf) {
  let {name, city, state} = conf;
  const {getFavFood, setFavFood} = favFood(conf),  // mixin methods from favFood
        getName = () => name,
        getCity = () => city,
        getState = () => state,
        setState = (st) => state = st;

  // return frozen object with methods
  return Object.freeze({
    getName,
    getCity,
    getState,
    setState,
    getFavFood,
    setFavFood
  });
}
