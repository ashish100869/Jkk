// ================scroll nav====================
var navbar = document.getElementById("navbar");
var menus = document.getElementById("menus");

window.onscroll = function () {
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
// const allVideos = document.querySelectorAll("video");
// allVideos.forEach((video) => {
// 	video.addEventListener("play", () => {
// 		allVideos.forEach((otherVideo) => {
// 			if (otherVideo != video) {
// 				otherVideo.pause();
// 			}
// 		});
// 	});
// });

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

const videoInserter = (count) => {
	const videoList = [
		{
			videoLink: "https://youtu.be/embed/c8z4A5nDoc0",
			videoCode: "c8z4A5nDoc0",
			title: "Cultural programmes",
		},
		{
			videoLink: "https://youtu.be/embed/ZbUOun6osww",
			videoCode: "ZbUOun6osww",
			title: "Stage Performance",
		},
		{
			videoLink: "https://youtu.be/embed/Qled__ttKos",
			videoCode: "Qled__ttKos",
			title: "JKK Event",
		},
		{
			videoLink: "https://youtu.be/embed/Ev_zy7q6zwY",
			videoCode: "Ev_zy7q6zwY",
			title: "Janmasthmi Event 2021",
		},
		{
			videoLink: "https://youtu.be/embed/FzTbsC3_85A",
			videoCode: "FzTbsC3_85A",
			title: "Saraswati Vandana",
		},
		{
			videoLink: "https://youtu.be/embed/xNr4BVax3PA",
			videoCode: "xNr4BVax3PA",
			title: "JKK workshop-2019",
		},
	];
	const videoContainer = document.querySelector(".video-container");
	for (let i = 0; i < count ? count : videoList.length; i++) {
		const video = document.createElement("div");
		video.classList.add("box");
		video.innerHTML = `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="320" height="200" type="text/html" src="https://www.youtube.com/embed/${videoList[i].videoCode}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode.com/nl/</a></small></div><div><small><a href="https://xn--utlndskabettingsidor-dzb.se/">utländskabettingsidor.se</a></small></div></iframe>
		<div class="video-content">
				<div class="date">
					<span>${videoList[i].title}</span>
				</div>
				<div class="icons">
						<i class="fas fa-film"></i>
				</div>
</div>`;
		videoContainer.appendChild(video);
	}
};
