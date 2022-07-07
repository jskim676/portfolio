// let ahjin = [1,2];

// let reverse = ahjin.reverse();
// console.log(reverse);

// let ele = ahjin.shift();
// console.log(ele);
// ahjin.push(ele);
// console.log(ahjin);

let temp;
let ahjin = [1,2];
temp = ahjin[1];
ahjin[1] = ahjin[0];
ahjin[0] = temp;
console.log(ahjin);