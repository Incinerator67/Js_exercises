let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');
  
button.addEventListener('click', function() {
	if (checkbox.checked = true) {
		console.log('одно значение');
	} else {
		console.log('другое значение');
	}
});