(() => {

/* --- Mobile Menu --- */

const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-header');

function resizeUpdate() {
	if (document.body.offsetWidth >= 768) {
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		button.classList.remove('nav-header-button-close');
	}
}

function toggleMenu() {
	if (nav.getAttribute('aria-expanded') === 'false') {
		nav.setAttribute('aria-expanded', true);
		nav.classList.add('nav-header-show');
		button.classList.add('nav-header-button-close');
		document.body.style.overflow = 'hidden';
	} else {
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		button.classList.remove('nav-header-button-close');
		document.body.style.overflow = 'auto';
	}
}

window.addEventListener('resize', resizeUpdate);
button.addEventListener('click', toggleMenu);

/* --- Testimonials Slider --- */

const root = document.querySelector(':root');

function slideTestimonials(e) {
	root.style.setProperty('--t-index', parseInt(e.target.value) - 1);
}

const testimonials = document.querySelectorAll('.testimonial-button');
testimonials.forEach((testimonial) => {
	testimonial.addEventListener('click', slideTestimonials);
});

/* --- Subscriber Form (Footer) --- */

function subscribe(e) {
	e.preventDefault();

	const inputEmail = document.querySelector('#subscriber-email');

	if (inputEmail.validity.valueMissing) {
		inputEmail.setAttribute('aria-invalid', 'true');
		document.querySelector('#error-empty').style.display = 'block';
	} else if (inputEmail.validity.typeMismatch) {
		inputEmail.setAttribute('aria-invalid', 'true');
		document.querySelector('#error-format').style.display = 'block';
	} else {
		inputEmail.setAttribute('aria-invalid', 'false');
		document.querySelector('#error-empty').style.display = 'none';
		document.querySelector('#error-format').style.display = 'none';
	}
}

document.querySelector('.subscriber-button')
	.addEventListener('click', subscribe);

})();