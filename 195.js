let result = every([1, 2, 3, 4, 5], elem => elem > 0);
let Result = every([1, 2, 3, 4, 5], (elem, index) => (elem * index > 10));
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let REsult = each(arr, (elem, index) => (elem * index > 10));