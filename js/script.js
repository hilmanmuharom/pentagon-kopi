// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu di click

document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// ketika dilaur side bar humberger menu hilang nav nya

const humberger = document.querySelector("#hamberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
