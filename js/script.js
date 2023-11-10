"use script"

let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__content');
let body = document.querySelector('body');

burger.addEventListener('click', (e) => {
	burger.classList.toggle('active');
	headerMenu.classList.toggle('header__content_active');
	body.classList.toggle('active');
})

function showhide() {
  let textblocks = document.querySelectorAll(".about__text");
	textblocks[1].classList.toggle('show'); 

}
/* ------------------------------------------------------------ */
// TABS

let tabs = document.querySelectorAll('.tabs-portfolio__btn');
let tabsContent = document.querySelectorAll('.content-portfolio');

tabs.forEach((tab, index) => {
	tab.addEventListener('click', (e) => {
		tabs.forEach(tab => tab.classList.remove('active'));
		tab.classList.add('active');

		tabsContent.forEach(item => item.classList.remove('active'));
		tabsContent[index].classList.add('active');
	})
})

/* ---------------------------------------------- */
// Slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
	breakpoints: {
		
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		
	},
});