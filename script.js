/* 1 */
const arr = ['Sverige', 2, true, ['Adam', 'Bertil']];
console.log(arr);


/* 2 */
const numbers = [3, 1, 2];
numbers.forEach( (nbr) => console.log(nbr * 3) );


/* 3 */
const nbrs = [2, 4, 6, 8, 10];
const newArray = [];

for (let i = 0; i < nbrs.length; i++) {
    if (nbrs[i] > 5) {
        newArray.push(nbrs[i]);
    }
}
console.log(newArray);