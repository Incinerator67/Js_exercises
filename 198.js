let arr = [1, 2, 3, 4, 5];
let arr2 = []
let result = arr.map(function(elem) {
	arr2 += elem*elem
});

console.log(arr2);