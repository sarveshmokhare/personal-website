// ***Navigation background active everywhere except section 1 ie active from section 2***
const navbar = document.querySelector(".nav-bar");
const section1 = document.querySelector("#home");
const viewPortWidth = document.documentElement.clientWidth;
document.addEventListener("scroll", () => {
  // current = navbar.classList.remove("navbar-bg");

  if (scrollY > section1.offsetTop && viewPortWidth > 695) {
    navbar.classList.add("navbar-bg");
  } else {
    navbar.classList.remove("navbar-bg");
  }
});

// ***Making navigation bar buttons active based on corresponding sections***
const sections = document.querySelectorAll("section");
const navbarBtns = document.querySelectorAll(".nav-bar-list li a");

//when user scrolls, this callback function is called
document.addEventListener("scroll", () => {
  let current = ""; //let this current be the empty string which then will have the value of a particular sections's id
  
  if (viewPortWidth > 695) {
    sections.forEach((section) => {
      if (scrollY > section.offsetTop - 300) {
        current = section.getAttribute("id");
      }
    }); //at the end of this forEach loop, current has the value of the bottom-most section the user has scrolled
  } else {
    sections.forEach((section) => {
      if (scrollY > section.offsetTop) {
        current = section.getAttribute("id");
      }
    });
  }


  navbarBtns.forEach((btn) => {
    //how do we decide to which anchor tag the active class gets applied to?
    //for this, we go inside every anchor tag in navbar, and first remove the active class and add it only if the current matches with its class
    btn.classList.remove("active");
    if (btn.classList.contains(current)) {
      btn.classList.add("active");
    }
  });
});

// ***Adding animations using animate.css ***
const aboutMe = document.querySelector("#about h1");
const sarveshImg = document.querySelector(".sarvesh");
const myDescription = document.querySelector(".content h3");
const interests = document.querySelector("#interests h1");
const interest1Head = document.querySelector(".interest1-content h3");
const interest1Body = document.querySelector(".interest1-content p");
const interest1Img = document.querySelector(".coding");
const interest2Img = document.querySelector(".swimming");
const interest2Head = document.querySelector(".interest2-content h3");
const interest2Body = document.querySelector(".interest2-content p");
const hr2 = document.querySelector(".interest2-content hr");
const getInTouch = document.querySelector("#contact h1");
const getInTouchH3 = document.querySelector("#contact h3");
const getInTouchContact = document.querySelector("#contact button");
const socials = document.querySelectorAll(".social a");
const contact = document.querySelector("#contact a");

document.addEventListener("scroll", () => {
  if (scrollY > sections[1].offsetTop - 500) {
    aboutMe.classList.add("animate__slideInUp");
  }

  // if (scrollY > (sections[1].offsetTop - 300)) {
  //   sarveshImg.classList.add("animate__animated", "animate__slideInLeft");
  // }
  if (scrollY > sections[1].offsetTop - 300) {
    myDescription.classList.add("animate__animated", "animate__slideInRight");
  }
  if (scrollY > sections[2].offsetTop - 500) {
    interests.classList.add("animate__animated", "animate__fadeInUp");
  }
  if (scrollY > sections[2].offsetTop - 300) {
    interest1Img.classList.add("animate__animated", "animate__fadeInLeft");
  }
  if (scrollY > sections[2].offsetTop - 300) {
    interest1Head.classList.add("animate__animated", "animate__fadeInLeft");
  }
  if (scrollY > sections[2].offsetTop - 300) {
    interest1Body.classList.add("animate__animated", "animate__fadeInLeft");
  }
  if (scrollY > sections[2].offsetTop - 300) {
    interest2Img.classList.add("animate__animated", "animate__fadeInRight");
  }
  if (scrollY > sections[2].offsetTop - 300) {
    interest2Head.classList.add("animate__animated", "animate__fadeInRight");
  }
  if (scrollY > sections[2].offsetTop) {
    interest2Body.classList.add("animate__animated", "animate__fadeInRight");
  }
  if (scrollY > sections[2].offsetTop + 200) {
    hr2.classList.add("animate__animated", "animate__zoomIn");
  }
  if (scrollY > sections[3].offsetTop - 500) {
    getInTouch.classList.add("animate__animated", "animate__fadeInUp");
  }
  if (scrollY > sections[3].offsetTop - 300) {
    getInTouchH3.classList.add("animate__animated", "animate__zoomIn");
  }
  if (scrollY > sections[3].offsetTop - 200) {
    contact.classList.add("animate__animated", "animate__zoomIn");
  }
});

socials.forEach((social) => {
  social.addEventListener("mouseover", () => {
    social.classList.add("animate__animated", "animate__heartBeat");
  });
  social.addEventListener("mouseout", () => {
    social.classList.remove("animate__animated", "animate__heartBeat");
  });
});

const burger = document.querySelector(".burger");
// const upperPlanets = document.querySelector(".upper-planets");
const home = document.querySelector("#home");
// const topLi = document.querySelector(".top-li");
const navBarList = document.querySelector(".nav-bar-list");

burger.addEventListener("click", () => {
  navBarList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
  home.classList.toggle("home-height-resp");
  // upperPlanets.style.margin = "0";
  // topLi.classList.add("top-li-resp");
  // section1.classList.add("active");
});
