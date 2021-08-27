const menu = document.querySelector('img.menu')
const close = document.querySelector('img.close')
const nav = document.querySelector('nav.right')
menu.addEventListener('click',()=>{
    nav.classList.toggle("show")
    menu.classList.toggle("hide")
    close.classList.toggle("hide")

})
close.addEventListener('click',()=>{
    nav.classList.toggle("show")
    close.classList.toggle("hide")
    menu.classList.toggle("hide")

})
nav.addEventListener("click",()=>{
    nav.classList.toggle("show")
    close.classList.toggle("hide")
    menu.classList.toggle("hide")
})

