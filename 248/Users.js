let elem = document.querySelector('#elem');
let button = document.querySelector('#elem');
console.log(elem.innerHTML); // выведет <b>text</b>
elem.innerHTML = '<i>!!!</i>';

button.addEventListener('click', function(){console.log(elem.innerHTML)})