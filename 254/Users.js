let elem = document.querySelector('#elem');
elem.addEventListener('blur', function() {this.value = '!!!';});
