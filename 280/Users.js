let elem = document.querySelector('#elem');

elem.addEventListener('input', function() {
	if (length(elem.textContent >= 5)){
		console.log('hm');
	}
	console.log(this.value);
});