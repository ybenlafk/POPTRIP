/*$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20) 
        $(".navbarr").addClass("sticky");
      else
        $(".navbarr").removeClass("sticky");
    });
  */
    const scrollHeader = ()=>{
      const nav_menu = document.getElementById('navbarr');
      if(this.scrollY >20) nav_menu.classList.add('sticky'); 
      else nav_menu.classList.remove('sticky');
  }
  window.addEventListener('scroll', scrollHeader);

    //---------------------------------------------------------------------------------------

    $(document).ready(function(){
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".Navigation").toggleClass("active");
    });
  });

  //---------------------------------------------------------------------------------------

  const cnt = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  cnt.forEach((item, i) => {
      let w = item.getBoundingClientRect();
      let T = w.width;
  
      nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += T;
      })

      preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= T;
      })
  })
  //--------------------------------------------------------------------------------------

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }
/*---------------------------------------------------------------*/

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",()=>{
 showPopup();
})

function showPopup(){
      const timer = setInterval(function(){
        clearInterval(timer);
        loginPopup.classList.add("show");
      },500);
}


close.addEventListener("click",()=>{
  let LG=document.querySelector(".formLG");
  let SUP=document.querySelector(".formSN");
  let frm=document.querySelector(".cnnt");
  loginPopup.classList.remove("show");
  const timer = setInterval(()=>{
    clearInterval(timer);
      frm.classList.remove("none");
      SUP.classList.remove('shw');
      LG.classList.remove('shw1');
  },500);
})

//-------------------------------------------------------------------------

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
/*----------------------------------------------------------------------*/
let login=document.querySelector('.lgnModal')

function Login(){
  document.body.style.overflow = 'hidden';
  login.classList.add('show1')
}
const clos=document.querySelector('.close1');
clos.addEventListener('click',()=>{
login.classList.remove('show1');
document.body.style.overflow = 'auto';
const timer = setInterval(()=>{
  clearInterval(timer);
  $(".form").show();
  $(".form1").hide();
},500);
})
$(".form1").hide();
const nx=document.querySelector(".nxt");
nx.addEventListener('click',()=>{
  $(".form").hide();
  $(".form1").show();
});
const ps=document.querySelector(".prs");
ps.addEventListener('click',()=>{
  $(".form1").hide();
  $(".form").show();
})
// $(".p2").click(()=> { 
//   const p=$(".p").val()
//   console.log(p);
    
// })

const cls=document.querySelector('.close_')
cls.addEventListener('click',()=>{
  $('.paymentpopup').hide();
})


// alert

function msg(){
  alert(" Veuillez d'abord vous inscrire sur le site.")
}
// $("#closebtn").click(()=>{
//   var div = this.parentElement;
//   div.classList.remove('vis');
// });