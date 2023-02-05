
let burger = document.querySelector('.burger')
let burgerImg = document.querySelector('.burger_img')
let nav = document.querySelector('.nav')
let nav_ul = document.querySelector('.nav_ul')
let wrapper = document.querySelector('.wrapper')

let Citys = [{
    city:'Yonkers, NY',
    phone:'+1 914 678 0003',
    office:'511 Warburton Ave'
},
{
    city:'Canandaigua, NY',
    phone:'+1 585 393 0001',
    office:'151 Charlotte Street'
},
{
    city:'Sherrill, NY',
    phone:'+1 315 908 0004',
    office:'14 WEST Noyes BLVD'
},
{
    city:'New York City',
    phone:'+1 212 456 0002',
    office:'9 East 91st Street'
}]



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
// --------------------------------------------------------------
let check = []
let counterGarden = 0;
let counterPlanting = 0
let counterLawn = 0
let counterAll = 0;
let firstBlur = 0

let gardensBtn = document.querySelector('.services_btn_gardens')
let service_item = document.querySelectorAll('.service_item')
let garden = document.querySelectorAll('.garden')

let plantingBtn = document.querySelector('.services_btn_planting')
let planting = document.querySelectorAll('.planting')

let lawnBtn = document.querySelector('.services_btn_lawn')
let lawn = document.querySelectorAll('.lawn')


function addBlurForAll(){
    if(firstBlur === 0){
        service_item.forEach(elem => elem.classList.add('blur'))
        gardensBtn.removeEventListener('click',addBlurForAll)
        firstBlur++
    }
}
function addBlur(arr,btn){
arr.forEach(elem => elem.classList.toggle('blur'))
btn.classList.toggle('btn_active')
console.log(counterAll);
}

function addGardens(){
    console.log(counterAll);
    if(counterAll < 2){
        addBlur(garden,gardensBtn)
        counterGarden = 1
        counterAll = counterGarden + counterLawn + counterPlanting
    }else{
        counterGarden = 0
        counterAll = counterGarden + counterLawn + counterPlanting
        garden.forEach(elem => elem.classList.add('blur'))
        gardensBtn.classList.remove('btn_active')
    }
    }
  

function addPlanting(){
    console.log(counterAll);
    if(counterAll < 2){
        addBlur(planting,plantingBtn)
        counterPlanting = 1
        counterAll = counterGarden + counterLawn + counterPlanting
    }else{
        counterPlanting = 0
        counterAll = counterGarden + counterLawn + counterPlanting
        planting.forEach(elem => elem.classList.add('blur'))
        plantingBtn.classList.remove('btn_active')
    }
    
}
function addLawn(){
    console.log(counterAll);  
    if(counterAll < 2){
        addBlur(lawn,lawnBtn)
        counterLawn = 1
        counterAll = counterGarden + counterLawn + counterPlanting
    }else{
        counterLawn = 0
        counterAll = counterGarden + counterLawn + counterPlanting
        lawn.forEach(elem => elem.classList.add('blur'))
        lawnBtn.classList.remove('btn_active')
    }
}




gardensBtn.addEventListener('click',addBlurForAll)
gardensBtn.addEventListener('click',addGardens)

plantingBtn.addEventListener('click',addBlurForAll)
plantingBtn.addEventListener('click',addPlanting)

lawnBtn.addEventListener('click',addBlurForAll)
lawnBtn.addEventListener('click',addLawn)
// ===========================================================

let accordion_btn = document.querySelectorAll('.accordion_btn')
let price_item_window = document.querySelectorAll('.price_item_window')

accordion_btn.forEach(elem => elem.addEventListener('click',addAcordionBtn))





function addAcordionBtn(e){
    if(e.target.classList.contains('btn_window_1') || e.target.parentElement.classList.contains('btn_window_1')){
        document.querySelector('.btn_window_3').style.position = 'static'
        document.querySelector('.btn_window_2').style.position = 'static'
        document.querySelector('.btn_window_1').style.position = 'relative'
        document.querySelector('.btn_window_1').style.transform = 'rotate(180deg)';
        document.querySelector('.btn_window_1').previousElementSibling.previousElementSibling.classList.toggle('price_item_window_1')
       }else{
        document.querySelector('.btn_window_1').previousElementSibling.previousElementSibling.classList.add('price_item_window_1')
       }if(document.querySelector('.btn_window_1').previousElementSibling.previousElementSibling.classList.contains('price_item_window_1')){
        document.querySelector('.btn_window_1').style.transform = 'none';
       }else{
        document.querySelector('.btn_window_1').style.transform = 'rotate(180deg)';
       }
       if(e.target.classList.contains('btn_window_2') || e.target.parentElement.classList.contains('btn_window_2')){
        document.querySelector('.btn_window_1').style.position = 'static'
        document.querySelector('.btn_window_3').style.position = 'static'
        document.querySelector('.btn_window_2').style.position = 'relative'
        document.querySelector('.btn_window_2').style.transform = 'rotate(180deg)';
        document.querySelector('.btn_window_2').previousElementSibling.previousElementSibling.classList.toggle('price_item_window_2')
       }else{
        document.querySelector('.btn_window_2').previousElementSibling.previousElementSibling.classList.add('price_item_window_2')
       }if(document.querySelector('.btn_window_2').previousElementSibling.previousElementSibling.classList.contains('price_item_window_2')){
        document.querySelector('.btn_window_2').style.transform = 'none';
       }else{
        document.querySelector('.btn_window_2').style.transform = 'rotate(180deg)';
       }
       if(e.target.classList.contains('btn_window_3') || e.target.parentElement.classList.contains('btn_window_3')){
        document.querySelector('.btn_window_1').style.position = 'static'
        document.querySelector('.btn_window_2').style.position = 'static'
        document.querySelector('.btn_window_3').style.position = 'relative'
        document.querySelector('.btn_window_3').previousElementSibling.previousElementSibling.classList.toggle('price_item_window_3')
       }else{
        document.querySelector('.btn_window_3').previousElementSibling.previousElementSibling.classList.add('price_item_window_3')
       }if(document.querySelector('.btn_window_3').previousElementSibling.previousElementSibling.classList.contains('price_item_window_3')){
        document.querySelector('.btn_window_3').style.transform = 'none';
       }else{
        document.querySelector('.btn_window_3').style.transform = 'rotate(180deg)';
       }
}
// ======================================================== contacts
document.querySelector('.contacts_city_btn').addEventListener('click',()=>{
    document.querySelector('.contacts_city_window').classList.toggle('contacts_city_window_active')
    if(document.querySelector('.contacts_city_window').classList.contains('contacts_city_window_active')){
        document.querySelector('.contacts_city_btn').style.transform = 'rotate(180deg)'
        document.querySelector('.contacts_city_btn').style.background = '#8BA07E'
        document.querySelector('.contacts_city').style.background = '#C1E698'
        document.querySelector('.city_card').style.display = 'none'
    }else{
        document.querySelector('.contacts_city_btn').style.transform = 'none'
        document.querySelector('.contacts_city_btn').style.background = '#AEA1A1'
        document.querySelector('.contacts_city').style.background = '#D6E7D2'
    }
})

for(let elem of document.querySelectorAll('.item_city')){
elem.addEventListener('mouseover',(e)=>{
    e.target.nextElementSibling.classList.add('item_city_line_active')
    })
    elem.addEventListener('mouseout',(e)=>{
        e.target.nextElementSibling.classList.remove('item_city_line_active')
        })
        elem.addEventListener('click',(e)=>{
            document.querySelector('.contacts_city_text').textContent = e.target.textContent
            document.querySelector('.contacts_city_window').classList.remove('contacts_city_window_active')
            for(let i = 0;i < Citys.length;i++){
                if(Citys[i]['city'] === document.querySelector('.contacts_city_text').textContent){
                    document.querySelector('.city_card').style.display = 'block'
                    document.querySelector('.city_name').textContent = Citys[i]['city']
                    document.querySelector('.city_phone').textContent = Citys[i]['phone']
                    document.querySelector('.city_office').textContent = Citys[i]['office']
                    document.querySelector('.tel_telephon_number').href = `tel:${Citys[i]['phone']}`
                }
            }
        })
}



















