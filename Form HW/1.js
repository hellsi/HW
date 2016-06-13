document.forms[0].addEventListener('submit',validateForm);

			function hasValue(field){
				if(field.type == 'text') {
					if (field.value != "") {
						return true;
					}
				}
				else {
					return true;
				}
			}

			function validateForm (e) {
				var currentForm = this;
				var valid = true;
				var removeInvalid = function(){
					this.classList.remove('invalid');
				}


				// var nameField = document.getElementsByName('name')[0];
				// 	if (nameField.value == "") {
				// 		nameField.classList.add('invalid');
				// 		nameField.addEventListener("focus",removeInvalid);
				// 		valid = false;
				// 	}
				// var surnameField = document.getElementsByName('surname')[1];
				// 	if (surnameField.value == "") {
				// 		surnameField.classList.add('invalid');
				// 		valid = false;
				// 	}
				// var age = document.getElementsByName('age')[2];
				// 	if (age.value == "") {
				// 		age.classList.add('invalid');
				// 		valid = false;
				// 	}
				// else {
				// 	var reg = /^\d+$/;
				// 		if (!reg.test(ageField.value)) {
				// 			valid = false;
				// 		}
				// }	

				var fields = document.getElementsByClassName("field");

			for (var i=0; i<fields.length; i++) {
 				if (fields[i].getAttribute('mandatory') != null) {
 					if (!hasValue(fields[i])) {
 						fields[i].classList.add('invalid');
            			fields[i].addEventListener("focus", removeInvalid);
 						valid = false; ;
 				}
				}
			}
			if (!valid) {
				e.preventDefault()();
				return false;
			}

			else return true;
		}