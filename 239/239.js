let date  = new Date(1988, 3, 1);
let now = new Date(2010, 1, 1);

let diff = now.getTime() - date.getTime();
console.log(diff/(1000 * 60 * 60 * 24));