
let burger = document.querySelector('.burger')
let burgerImg = document.querySelector('.burger_img')
let nav = document.querySelector('.nav')
let nav_ul = document.querySelector('.nav_ul')
let wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click',function(e){
    if(e.target === burgerImg){
        burger.classList.toggle('burger_active')
        nav.classList.toggle('nav_active')
        burgerImg.classList.toggle('burger_img_active')
        nav_ul.classList.toggle('nav_ul_active')
    }else{
        burger.classList.remove('burger_active')
                nav.classList.remove('nav_active')
                burgerImg.classList.remove('burger_img_active')
                nav_ul.classList.remove('nav_ul_active')
    }

})



