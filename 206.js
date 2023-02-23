func(1, 2);

function func(a, b, ...rest) {
	console.log(a);    // выведет 1
	console.log(b);    // выведет 2
	console.log(rest); // выведет []
}