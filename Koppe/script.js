const blackNav = document.querySelector(".black-nav")
const whiteNav = document.querySelector(".white-nav")
const iceCream = document.querySelector(".ice")


window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        blackNav.style.display = "none";
        whiteNav.style.height = "15vh"
        whiteNav.style.visibility = "visible";
        whiteNav.style.opacity = "999";
    }else{
        blackNav.style.display = "flex";
        whiteNav.style.visibility = "hidden";
        whiteNav.style.opacity = "0";
    }
})

const flavours = [
    {img: "./assets/images/strawberry.png"},
    {img: "./assets/images/chocolate.png" }
]

let current= 0;

setInterval(() => {
    current = (current + 1) % flavours.length;
    iceCream.src = flavours[current].img;
}, 10000)