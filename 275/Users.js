let elem = document.querySelector('#elem');
console.log(elem.disabled); // выведет true
let elem2 = document.querySelector('button');
elem2.addEventListener('click', function func(){
	elem.disabled = false
})