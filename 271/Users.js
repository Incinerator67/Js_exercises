let elems = document.querySelectorAll('li');
let sum = 0;

for (let elem of elems) {
	let text = +elem.textContent;
	let aa = text[0] + text[1] + text[2] + text[3]
	if (aa == 6) {sum += text;}
}
console.log(sum);