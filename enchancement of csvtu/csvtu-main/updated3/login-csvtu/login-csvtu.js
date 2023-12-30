// const wrapper = document.querySelector('.wrapper');
// function registerActive() {
//     wrapper.classList.toggle('active');
// }
// function loginActive() {
//     wrapper.classList.toggle('active');
// }

let passwordInput = document.getElementById('passwordInput');
let eyeIcon = document.getElementById('eyeIcon');

passwordInput.addEventListener('focus', function(){
	eyeIcon.classList.remove('inactive');
	eyeIcon.classList.add('active');
});


eyeIcon.addEventListener('click', function(){
	if (passwordInput.getAttribute('type') == 'password') {
		passwordInput.setAttribute('type','text');
		eyeIcon.classList.remove('fa-eye');
		eyeIcon.classList.add('fa-eye-slash');
	}else{
		passwordInput.setAttribute('type','password');
		eyeIcon.classList.remove('fa-eye-slash');
		eyeIcon.classList.add('fa-eye');
	}
});