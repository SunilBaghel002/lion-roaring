const typing=document.querySelector(".typing")
const image=document.querySelector(".image")
const body=document.body

image.addEventListener(("mouseover"),()=>{
    typing.style.display="block"
    body.classList.add("color")
})
image.addEventListener(("mouseout"),()=>{
    typing.style.display="none"
    body.classList.remove("color")
})