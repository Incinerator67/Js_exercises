let p = document.querySelector('p');
p.addEventListener('click', func)

function func(){
    aa = this.textContent
    aa.value += '!'
}