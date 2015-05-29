/*
 * Based on Douglas Crockford's thoughts on using closures instead of
 * classes (no this and no new).
 */

import person from './person';

let p1 = person({
  name: 'Chuckie',
  city: 'Millbrae',
  state: 'California'
});

let p2 = person({
  name: 'Beetlejuice',
  city: 'Springfield',
  favFood: 'Peanut Butter'
});

p1.setFavFood('Jelly');
p2.setState('Missouri');

console.log('\np1:\n' + p1.getName());
console.log(p1.getCity());
console.log(p1.getState());
console.log(p1.getFavFood());

console.log('\np2:\n' + p2.getName());
console.log(p2.getCity());
console.log(p2.getState());
console.log(p2.getFavFood());
