const show = document.querySelector('.fa-eye')
const hidden = document.querySelector('.fa-eye-slash')
const pass = document.querySelector('#pass')
const body = document.querySelector('body')

pass.addEventListener('click', () =>{
    show.style.display = "block"
})

show.addEventListener('click', () => {
    show.style.display = 'none';
    hidden.style.display = 'block';
    pass.type = 'text';
})

hidden.addEventListener('click', () => {
    pass.type = "Password";
    show.style.display = 'block';
    hidden.style.display = 'none'
})

const emailInput = document.querySelector('#email')
       
emailInput.addEventListener("input", () =>{
     let email = emailInput.value.trim()
     if(
         email.includes("@")  &&
         email.includes(".")
     ){
         emailInput.style.borderBottom = "1px solid green";
     }else{
         emailInput.style.borderBottom = "1px solid red";
     }
 })

emailInput.addEventListener("blur", () =>{
    emailInput.style.borderBottom = "0.5px solid #1f2a2e";
})