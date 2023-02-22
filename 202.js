let arr = [2, 4, 6, 8];

let result = arr.some((elem,index) => (elem * index > 0));
console.log(result);