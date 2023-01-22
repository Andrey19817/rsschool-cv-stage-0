
let burger = document.querySelector('.burger')
let burgerImg = document.querySelector('.burger_img')
let nav = document.querySelector('.nav')
let nav_ul = document.querySelector('.nav_ul')

burger.addEventListener('click',function(){
    burger.classList.toggle('burger_active')
    nav.classList.toggle('nav_active')
    burgerImg.classList.toggle('burger_img_active')
    nav_ul.classList.toggle('nav_ul_active')
})



