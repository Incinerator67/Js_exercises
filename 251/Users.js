let elem = document.querySelector('#elem');
console.log(elem.value);
elem.value = 'new text';
button.addEventListener('click',function() {
    elem.value = 'Something_wrong'
    console.log(elem.type);
});