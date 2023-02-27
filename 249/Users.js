let elem = document.querySelector('#elem');
console.log(elem.id);   // выведет 'elem'
console.log(elem.type); // выведет 'email'
elem.type = 'submit';
function func1() {console.log(elem.type);}
button.addEventListener('click', func1);