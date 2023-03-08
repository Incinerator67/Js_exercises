let elem = document.querySelector('#elem');
let elem2 = document.querySelector('p');
elem.addEventListener('change', function() {
	elem2.textContent += this.value 
	console.log(elem2.textContent);
});