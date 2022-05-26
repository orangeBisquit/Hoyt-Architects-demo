import { gsap } from 'gsap';

global.gsap = gsap;

gsap.defaults({
	overwrite: 'auto',
});

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			Signal: require('./classes/Signal').default,
		};
		this.components = {};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});

		this.initP();
	}

	initP = () => {
		const body = document.querySelector('body');
		const layout = document.querySelector('[data-layout]');
		const logo = document.querySelector('._v1');
		const work = document.querySelector('._v2');
		const sarasota = document.querySelector('._v3');
		const studio = document.querySelector('._v4');
		const contact = document.querySelector('._v5');
		const lab = document.querySelector('._v6');

		logo.addEventListener('click', () => {
			layout.dataset.layout = 'v1';
			body.classList = '';
			body.classList.add('salmon');
		});
		work.addEventListener('click', () => {
			layout.dataset.layout = 'v2';
			body.classList = '';
			body.classList.add('green');
		});

		studio.addEventListener('click', () => {
			layout.dataset.layout = 'v3';
			body.classList = '';
			body.classList.add('pink');
		});
		lab.addEventListener('click', () => {
			layout.dataset.layout = 'v4';
			body.classList = '';
			body.classList.add('yellow');
		});
		contact.addEventListener('click', () => {
			layout.dataset.layout = 'v5';
			body.classList = '';
			body.classList.add('orange');
		});
		sarasota.addEventListener('click', () => {
			layout.dataset.layout = 'v6';
			body.classList = '';
			body.classList.add('purple');
		});
	};
}

global.ProjectApp = new ProjectApp();

if (module.hot) {
	module.hot.accept();
}
