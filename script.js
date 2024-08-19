window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.fontSize = "18px";
    document.getElementById("logo").style.fontSize = "18px";
  } else {
    document.getElementById("navbar").style.fontSize = "25px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('navbar a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 100;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height) {
      
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector(`navbar a[href=${id}]`).classList.add('active');
//       });
//       sec.classList.add('show-animate');
//     }
//     else {
//       sec.classList.remove('show-animate');
//     }
//   });
// }

const loginOpnBtn = document.querySelector("#button-openform");
const loginBox = document.querySelector(".container-login");
const signupOpnBtn = document.querySelector(".button-login-signup");
const signupBox = document.querySelector(".container-signup");
const closebtn = document.querySelector(".closeButton");
const closebtnSignUp =document.querySelector(".closeButtonSignup");
const forgetPWLin =document.querySelector(".forgetPWLink");
const forgetP =document.querySelector(".forgetPW");
const closeButtonForgetP =document.querySelector(".closeButtonForgetPW")


loginOpnBtn.addEventListener("click", function () {
    if (loginBox.style.display === "none" || loginBox.style.display === "") {
        loginBox.style.display = "block";
    } else {
        loginBox.style.display = "none";
    }
});

signupOpnBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    if (signupBox.style.display === "none" || signupBox.style.display === "") {
        signupBox.style.display = "block";
    } else {
        signupBox.style.display = "none";
    }
    loginBox.style.display = "none";
});


forgetPWLin.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    if (forgetP.style.display === "none" || forgetP.style.display === "") {
        forgetP.style.display = "block";
    } else {
        forgetP.style.display = "none";
    }
    loginBox.style.display = "none";
    signupBox.style.display = "none"
});

closebtn.addEventListener("click", function () {
    if(loginBox.style.display === "block")
    {
        loginBox.style.display = "none";
       
    }
})

closebtnSignUp.addEventListener("click", function(){
    if(signupBox.style.display === "block")
    {
        signupBox.style.display = "none";
    }
})

closeButtonForgetP.addEventListener("click", function(){
    if(forgetP.style.display === "block")
    {
        forgetP.style.display = "none";
    }
});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var countDownDate = new Date("Jan 5, 2026 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
