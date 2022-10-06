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

let swiper = new Swiper('.main-swiper', {
	slidesPerView: 1,
	spaceBetween: 6,
	autoHeight: true,
	loop: true,
	autoplay: true,
	pagination: {
		el: '.main-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.main-swiper-button-next',
		prevEl: '.main-swiper-button-prev',
	},
});
if (innerWidth <= 876) {
	let room = new Swiper('.room__slider', {
		slidesPerView: 1,
		spaceBetween: 6,
		autoHeight: true,
		navigation: {
			nextEl: '.room-button-next',
			prevEl: '.room-button-prev',
		},
	});
} else {
	let room = new Swiper('.room__slider', {
		slidesPerView: 2,
		spaceBetween: 6,
		autoHeight: true,
		navigation: {
			nextEl: '.room-button-next',
			prevEl: '.room-button-prev',
		},
	});
}
if (innerWidth >= 600 && innerWidth <= 1000) {
	let tips = new Swiper('.tips__slider', {
		slidesPerView: 2,
		spaceBetween: 20,
		autoHeight: true,
		loop: true,
		pagination: {
			el: '.tips__pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.tips__button-next',
			prevEl: '.tips__button-prev',
		},
	});
} else if (innerWidth <= 600) {
	let tips = new Swiper('.tips__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		autoHeight: true,
		loop: true,
		pagination: {
			el: '.tips__pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.tips__button-next',
			prevEl: '.tips__button-prev',
		},
	});
} else {
	let tips = new Swiper('.tips__slider', {
		slidesPerView: 3,
		spaceBetween: 20,
		autoHeight: true,
		loop: true,
		pagination: {
			el: '.tips__pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.tips__button-next',
			prevEl: '.tips__button-prev',
		},
	});
}
document.querySelector(".main__banner-arrow").addEventListener("click", () => {
	document.querySelector(".main__banner").classList.toggle("activate");
	document.querySelector(".main__banner-wrapper").classList.toggle("activate");
	document.querySelector(".main__banner-arrow").classList.toggle("activate");
})
let dataProduct = [];
let response = fetch("js/products.json")
	.then(response => response.json())
	.then(data => dataUpdate(data))
function dataUpdate(data) {
	for (let index = 0; index < data.length; index++) {
		let htmlLIstProduct = document.querySelector(".products__list").innerHTML;
		const element = data[index];
		if (element.discountOr) {
			document.querySelector(".products__list").innerHTML = htmlLIstProduct + `<div class="card">
			<div div class="card__image"><img src="${element.img}" alt=""></div>
		<div class="card__block">
			<div class="card__title">${element.title}</div>
			<div class="card__text">${element.text}</div>
			<div class="card__price">
				<p>Rp ${element.price}</p><span>${element.priceLast === '' ? '' : "Rp " + element.priceLast}</span>
			</div>
		</div>
		<div class="card__status card__discount">${element.discount}</div>
		<div class="card__substrate">
			<button class="card__substrate-button">Add to cart</button>
			<div class="card__substrate-icon">
				<button class="card__substrate-share"><img src="img/share-icon.png" alt="">Share</button>
				<button class="card__substrate-like"><img src="img/like-icon.png" alt="">Like</button>
			</div>
		</div>
	</div>`;
		} else if (element.now) {
			document.querySelector(".products__list").innerHTML = htmlLIstProduct + `<div class="card">
			<div div class="card__image"><img src="${element.img}" alt=""></div>
		<div class="card__block">
			<div class="card__title">${element.title}</div>
			<div class="card__text">${element.text}</div>
			<div class="card__price">
				<p>Rp ${element.price}</p><span>${element.priceLast === '' ? '' : "Rp " + element.priceLast}</span>
			</div>
		</div>
		<div class="card__status card__new">New</div>
		<div class="card__substrate">
			<button class="card__substrate-button">Add to cart</button>
			<div class="card__substrate-icon">
				<button class="card__substrate-share"><img src="img/share-icon.png" alt="">Share</button>
				<button class="card__substrate-like"><img src="img/like-icon.png" alt="">Like</button>
			</div>
		</div>
	</div>`;
		} else {
			document.querySelector(".products__list").innerHTML = htmlLIstProduct + `<div class="card">
			<div div class="card__image"><img src="${element.img}" alt=""></div>
		<div class="card__block">
			<div class="card__title">${element.title}</div>
			<div class="card__text">${element.text}</div>
			<div class="card__price">
				<p>${element.price}</p><span>${element.priceLast === '' ? '' : "Rp " + element.priceLast}</span>
			</div>
		</div>
		<div class="card__substrate">
			<button class="card__substrate-button">Add to cart</button>
			<div class="card__substrate-icon">
				<button class="card__substrate-share"><img src="img/share-icon.png" alt="">Share</button>
				<button class="card__substrate-like"><img src="img/like-icon.png" alt="">Like</button>
			</div>
		</div>
	</div>`;
		}
	}
}
