const arrow = document.getElementById("click-arrow")
const show = document.getElementById("show")
const arrow2 = document.getElementById("click-arrow2")
const show2 = document.getElementById("show2")
const showBar = document.getElementById("show")
const closeBar = document.getElementById("close-bar")
const sideBar = document.getElementById("side-bar")
let right = false
function closeSidebar(){
    sideBar.style.display = "none"
    showBar.style.display = "block"
}
function showSidebar(){
    sideBar.style.display = "block"
}
function rotateDown(){
    arrow.style.rotate = "270deg"
    arrow.style.color = "#fff"
}
function rotateBack(){
    arrow.style.rotate = "180deg"
    arrow.style.color = "#fff"
}
function showSubmenu(){
    show.style.display = "flex"
}
function closeSubmenu(){
    show.style.display = "none"
}

arrow.addEventListener("click",()=>{
    right = !right

    if(right) showSubmenu()
        else closeSubmenu()
    if(right) rotateDown()
        else rotateBack()
})
closeBar.addEventListener("click",closeSidebar)
showBar.addEventListener("click",showSidebar)