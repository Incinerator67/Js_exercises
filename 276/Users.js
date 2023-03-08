let elem = document.querySelector('#elem');
let elem2 = document.querySelector('#b1');
let elem3 = document.querySelector('#b2');
elem2.addEventListener('click', function func(){
	elem.disabled = true
})
elem3.addEventListener('click', function func(){
	elem.disabled = false
})
console.log(elem.checked);