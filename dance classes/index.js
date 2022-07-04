// ================scroll nav====================
var navbar = document.getElementById("navbar");
var menus = document.getElementById("menus");

window.onscroll = function() {
	if (window.pageYOffset >= menus.offsetTop) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
};

// ====================swiper ----------------------
const swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
console.log(window.outerWidth);
const swiper2 = new Swiper(".mySwiper", {
	slidesPerView: Math.floor(window.outerWidth / 250),
	loop: true,
	freehand: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	spaceBetween: 15,
});

const toggleNav = () => {
	const menuItem = document.querySelectorAll(".menu-responsive");
	const menus = document.querySelector("#menus");
	if (menuItem[0].classList.contains("d-block")) {
		setTimeout(() => {
			menuItem.forEach((item) => {
				item.classList.remove("d-block");
			});
		}, 100);
		menus.style.height = "70px";
	} else {
		menus.style.height = "600px";
		setTimeout(() => {
			menuItem.forEach((item) => {
				item.classList.add("d-block");
			});
		}, 200);
	}
};

// Play one video at once
const allVideos = document.querySelectorAll("video");
allVideos.forEach((video) => {
	video.addEventListener("play", () => {
		allVideos.forEach((otherVideo) => {
			if (otherVideo != video) {
				otherVideo.pause();
			}
		});
	});
});

// Modal
const openModal = (e) => {
	console.log(e.target);
	const modal = document.querySelector(".modal");
	modal.style.display = "flex";
	modalImage = document.querySelector("#modalImage");
	modalImage.src = e.target.src;
};
const closeModal = () => {
	const modal = document.querySelector(".modal");
	modal.style.display = "none";
};

document.querySelectorAll(".imge").forEach((item) => {
	item.addEventListener("click", openModal);
});
