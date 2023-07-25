// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript
function center(strng, width, fill = ' ') {
  if (width < strng.length) { 
    return strng;
  }
  else {
    let first = Math.round((width - strng.length) / 2);
    let last = width - first - strng.length;
    return fill.repeat(first) + strng + fill.repeat(last);
  }
}
console.log(center("a", 3, ' '));
console.log(center("a", 3));
console.log(center("", 3, '_'));
console.log(center("abc", 10, '_'));

// KATA 2 7kyu
// https://www.codewars.com/kata/571c1e847beb0a8f8900153d
function rakeGarden(garden) {
  let zen = garden.split(' ').map((el,i) => {
    return (el !== 'gravel' && el !== 'rock') ? el.replace(el, 'gravel') : el;
  })
  return zen.join(' ');
}

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'));
console.log(rakeGarden('gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'));

// KATA 3 7kyu
//https://www.codewars.com/kata/56ff1667cc08cacf4b00171b
function countVegetables(string){
  const countMap = string.split(' ').reduce((map, item) => {
    map[item] = (map[item] || 0) +1;
    return map;
  }, {});
  return Object.entries(countMap).map(([name, count]) => [count, name]);
}

console.log(countVegetables("potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage"));

// KATA 4 8kyu
// https://www.codewars.com/kata/59fc72fe235f93838b002235/train/javascript
function power(x,y){
  return x**y;
}

console.log(power(2,2));
console.log(power(3,2));


// KATA 5 8kyu
// https://www.codewars.com/kata/5977618080ef220766000022
function usdcny(usd) {
  let cny = 6.75 * usd;
  return `${cny.toFixed(2)}`
}

console.log(usdcny(15))
console.log(usdcny(465))

