/*
 * This improves on the idea of a class by using a closure. The
 * class is called without "new" and does not use "this".
 */
export default function (conf) {
  let {favFood} = conf;
  const getFavFood = () => `${favFood}!`,
        setFavFood = (ff) => favFood = ff;

  return Object.freeze({
    getFavFood,
    setFavFood
  });
}
