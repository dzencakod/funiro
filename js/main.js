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

