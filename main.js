const width = window.innerWidth;
const height = window.innerHeight;

console.log(width);

const body = (document.getElementById("body").style.width = width);    // The hight and width of the appication is given ,so it would be responsive


// Applying a background color for the navigation bar when visit the about page

const nav = document.querySelector("nav");
document.addEventListener("scroll", () => {
  if (window.scrollY > height) {
    nav.style.backgroundColor = "rgba(5.9, 9.8, 13.3,.65)";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
const introPage = document.getElementById("introPage").style.height = height;

var scrollButton = document.getElementById("button");
var targetElement = document.getElementById("aboutPage");
var aboutLink = document.getElementById("aboutLink");
var workLink = document.getElementById("workLink");
var contactLink = document.getElementById("contactLink");
var worksHeading = document.getElementById("worksHeading");
var contact = document.getElementById("contact");

scrollButton.addEventListener("click", moveInto);
aboutLink.addEventListener("click", moveInto);

// To create a smooth scroll 

function moveInto() {
  targetElement.scrollIntoView({ behavior: "smooth" });
}

workLink.addEventListener("click", () => {
  worksHeading.scrollIntoView({ behavior: "smooth" });
});

contactLink.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

// Links

const openPetWorld = () => {
  window.open('https://petworld-mu.vercel.app/')
}
const shoppingApp = () => {
  window.open('https://shopping-project-f3p6.vercel.app/')
}