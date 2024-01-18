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


/* 4 */
const numberSelectable = [3,2,1,4];
let sum = 0;

for (let i = 0; i < numberSelectable.length; i++) {
    sum += numberSelectable[i];   
}
console.log(sum);


/* 5 */
const names = ['Adam', 'Bertil', 'Carl', 'David', 'Erik'];

for (const name of names) {
    if(name === 'Bertil') {
        console.log(name);
        break;
    }
}


/* 6 */
const cars = ['Volvo', 'Saab', 'BMW'];

cars.splice(-1);

console.log(cars);

