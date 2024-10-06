
// let navbar = document.querySelector('.menu');
// let menuid = document.querySelector('#menuid');

// menuid.onclick = () =>{
//     menuid.classList.toggle('ff');
//     navbar.classList.toggle('activee');
// }
// window.onscroll = () =>{
    
//     menuid.classList.remove('ff');
//     navbar.classList.remove('activee');
// }





window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  
  menuid.classList.remove('ff');
  navbar.classList.remove('activee');
}