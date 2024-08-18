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