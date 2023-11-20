// Slider in header

const headerSwiper = new Swiper(".header-swiper", {
  direction: "vertical",
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".header-swiper-pagination",
    clickable: true,
  },
});

// Slider in news

const newsSwiper = new Swiper(".news-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".news-swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".news-swiper-button-next",
    prevEl: ".news-swiper-button-prev",
  },
});

// Gallery

let gallery = document.querySelector(".gallery-items");
let modal = document.querySelector(".gallery-modal");
let modalImg = document.querySelector(".gallery-modal-img");
let modalCloseBtn = document.querySelector(".gallery-modal-close-btn");

function toggleModal(event) {
  if (event.target.localName !== "ul") {
    modal.style.display = "flex";
    modalImg["src"] =
      event.target["src"] || event.target.firstElementChild["src"];
    modalCloseBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

gallery.addEventListener("click", toggleModal);

// Map

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 40.6686, lng: -73.8999 },
    zoom: 13.5,
    mapId: "2f084b4895741534",
    zoomControl: false,
    mapTypeControl: false,
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981 },
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}
window.initMap = initMap;

// Scroll to projects

let scrollBtn = document.querySelector(".header-scroll-button");
let projectSection = document.querySelector("#projects");

function scrollTo() {
  projectSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

scrollBtn.addEventListener("click", scrollTo);

// Change menu during scroll

let headerContainer = document.querySelector(".header-container");
let header = document.querySelector("header");

function changeMenuBackground() {
  if (window.scrollY > 500) {
    headerContainer.style.top = 0;
    headerContainer.style.background = "#7e5aff";
    headerContainer.style.width = "100%";
    headerContainer.style.justifyContent = "space-around";
  } else {
    headerContainer.style.top = "53px";
    headerContainer.style.background = "transparent";
    headerContainer.style.width = "1170px";
    headerContainer.style.justifyContent = "unset";
  }
}

window.addEventListener("scroll", changeMenuBackground);

// Scroll to sections

let menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();
  let link = this.getAttribute("href").substring(1);

  const scrollTarget = document.getElementById(link);
  const topOffset = 53;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// Painting navigation

document.addEventListener("DOMContentLoaded", function () {
  const navInit = () => {
    const links = document.querySelectorAll(".header-menu-item-link");
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.dataset.section === section.dataset.section) {
            link.classList.add("active");
          }
        });
      }
    });
  };
  navInit();
  window.addEventListener("scroll", () => {
    navInit();
  });
});
