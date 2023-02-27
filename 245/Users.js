function func1() {console.log('1');}
function func2() {console.log('2');}
function func3() {console.log('3');}
let button = document.querySelector('#elem');
button.addEventListener('click', func1);
button.addEventListener('click', func2);
button.addEventListener('click', func3);