function func(...nums) {
	let sum = 0;
	let a = 0
	for (let num of nums) {
		sum += num;
		a += 1
	}
	
	console.log(sum/a);
}

func(1, 2, 3);