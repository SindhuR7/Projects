const menuClick = document.getElementById('menu-click')
const sidebar = document.getElementById('side-bar')
const closebar = document.getElementById("closebar")

function open(){
    sidebar.style.width = '300px';
}
function close(){
    sidebar.style.display = 'none'
    closebar.style.rotate = '360deg'
    closebar.style.transition = "all 0.5s ease"
}
menuClick.addEventListener("click", open)
closebar.addEventListener("click",close)
