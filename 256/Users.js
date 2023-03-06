let elems = document.querySelectorAll('.www');
let button = document.querySelectorAll('button')
button.addEventListener('click', function(){
	for (let elem of elems) {
		elem.textContent = elem.textContent * 2;
	}
})