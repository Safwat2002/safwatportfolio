// This Code Is For Header To Controll Menu-icon In Responsive Design

let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
  document.querySelector(".navbar").classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.addEventListener("scroll", () => {
  menu.classList.remove("move");
  document.querySelector(".navbar").classList.remove("open-menu");
});

/* this section is for top of the page progress page */

function progressBar() {
  let bar = document.querySelector(".progress");

  let fullHeight = document.documentElement.scrollHeight;
  let seenHeight = document.documentElement.clientHeight;

  let avilableForScroll = fullHeight - seenHeight;

  window.addEventListener("scroll", () => {
    let width = (window.scrollY / avilableForScroll) * 100;
    bar.style.width = width + "%";
  });
}
progressBar();

/* This Code Is For Change Background for active navbar link */
window.onload = function () {
  document.getElementById("homelink").classList.add("active-link");
};
window.onhashchange = function () {
  let hash = window.location.hash;
  hash = hash.slice(1).concat("link");

  let links = document.querySelectorAll(".nav-link");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active-link");
  }
  document.getElementById(hash).classList.add("active-link");
};

// Swiper add for Reviews Section
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Email JS Verfiction And Connection

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let message = document.querySelector(".message");
  let send_btn = document.querySelector(".send-btn");

  //  console.log(name, email, message);

  send_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || message.value == "") {
      emptyError();
    } else {
      sendmail(name, email, message);
      success();
    }
  });
}
validate();

function sendmail(name, email, message) {
  emailjs.send("service_wmvibn8", "template_chvwoqd", {
    to_name: name.value,
    from_name: email.value,
    message: message.value,
  });

  name.value = "";
  email.value = "";
  message.value = "";
}

function emptyError() {
  swal({
    title: "Error!",
    text: "You Should Fill All Fields!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Done",
    text: "The Email Sent Successfully",
    icon: "success",
  });
}

// Header Background Change On Scroll

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header-background-controller");
  } else {
    header.classList.remove("header-background-controller");
  }
});

/* Comming Soon Alert For Inactive Links */

// footer inactive links

function commingSoon() {
  let destination1 = document.querySelector(".footer").children[1].children[1].children;
  let destination2 = document.querySelectorAll(".portfolio-overlay a");
  let destination = [...destination1 , ...destination2];

  for (var i = 0; i < destination.length; i++) {
    destination[i].addEventListener("click", () => {
      swal({
        title: "Comming Soom",
        text: "This Feature Will Be Added Soon, Thanks For Your Participation",
        icon: "warning",
      });
    });
  }
}

commingSoon();

/* Scroll To Top Botton Controll */
function scrollTop() {
  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".scroll-top").classList.add("show-scroll-top");
    } else {
      document.querySelector(".scroll-top").classList.remove("show-scroll-top");
    }
  };
}

scrollTop();
