// SubMenu
const subMenuBtn_el = document.querySelector('.submenu-btn');
const subMenu_el = document.querySelector('.submenu');
console.log("app.js")
subMenuBtn_el.addEventListener('click',(e)=>{
    //  e.currentTarget => you click on this ,,, parentElement => go up to his parent 
    // ,,, you use TailWind ! so you can add a tailwind class
    e.currentTarget.parentElement.classList.toggle('text-orange-300');
 subMenu_el.classList.toggle('submenu--open');
});

// NavIcon
const navIcon = document.querySelector('.nav-icon');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

navIcon.addEventListener('click',()=>{
    nav.classList.remove('-right-64');
    nav.classList.add('right-0');
    overlay.classList.add('overlay--visible');
});

navClose.addEventListener('click',()=>{
    nav.classList.add('-right-64');
    nav.classList.remove('right-0');
    overlay.classList.remove('overlay--visible');
})
overlay.addEventListener('click',()=>{
    nav.classList.add('-right-64');
    nav.classList.remove('right-0');
    cart.classList.add('-left-64');
    cart.classList.remove('left-0');

    overlay.classList.remove('overlay--visible');
})


// Cart
const cartIcon = document.querySelector('.cart-icon');
const cartClose = document.querySelector('.cart-close');
const cart = document.querySelector('.cart');

cartIcon.addEventListener('click',()=>{
    cart.classList.remove('-left-64');
    cart.classList.add('left-0');
    overlay.classList.add('overlay--visible');
});
cartClose.addEventListener('click',()=>{
    cart.classList.add('-left-64');
    cart.classList.remove('left-0');
    overlay.classList.remove('overlay--visible');
})