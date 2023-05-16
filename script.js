let timeOut = document.querySelector(".time");
const navItem = document.querySelectorAll(".nav_link");

navItem.forEach((link) =>
  link.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    link.classList.add("active");
  })
);
const navLinks = document.querySelector(".nav_links");
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const contentServices = document.querySelector(".ourServicesContent");
const ourServices = document.querySelectorAll(".ourServicesBox");
contentServices.addEventListener("mouseover", function (e) {
  const on = e.target;
  if (e.target.classList.contains("ourServicesBox")) {
    on.classList.add("ourServicesBoxActive");
  }
});
contentServices.addEventListener("mouseout", function () {
  ourServices.forEach((box) => box.classList.remove("ourServicesBoxActive"));
});
