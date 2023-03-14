let select = document.querySelector('#select');

for (let option of select) {
	option += select.value;
}