document.querySelector(".burger-span").addEventListener("click", () => {
	document.querySelector("body").classList.toggle("active");
	document.querySelector(".header").classList.toggle("active");
})
for (let index = 0; index < document.querySelectorAll(".burger__plus").length; index++) {
	const elem = document.querySelectorAll(".burger__plus")[index];
	elem.addEventListener("click", () => {
		let elem1 = document.querySelectorAll(".burger__subli")[index];
		elem1.classList.toggle("active");
		elem.classList.toggle("active");
	})
}

let swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 6,
	autoHeight: true,
	loop: true,
	pagination: {
		el: '.main-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

document.querySelector(".main__banner-arrow").addEventListener("click", () => {
	document.querySelector(".main__banner").classList.toggle("activate");
	document.querySelector(".main__banner-wrapper").classList.toggle("activate");
	document.querySelector(".main__banner-arrow").classList.toggle("activate");
})

