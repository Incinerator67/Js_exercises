let arr = [2025, 12];
function func() {
	return (new Date).getDate();
}
let [year, month, day = func()] = arr;