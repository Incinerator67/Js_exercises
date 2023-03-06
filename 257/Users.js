let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', function func() {
        a = int(elem.textContent)
        elem.textContent = a * a
    });
}

