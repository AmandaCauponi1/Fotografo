const myModal = document.getElementById('myModal')
const close = document.getElementById('close')
const btnCancel = document.getElementById('btnCancel')
const btnModal = document.getElementById('btnModal')
const enviar = document.getElementById('enviar')
const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')



window.addEventListener('DOMContentLoaded', () => {
    displayModal()
    // like()
})

function displayModal(){
btnModal.addEventListener('click', () => {
    myModal.style.display = 'flex'
})

close.addEventListener('click', () => {
    myModal.style.display = 'none'
})

btnCancel.addEventListener('click', () => {
    myModal.style.display = 'none'
})
enviar.addEventListener('click', () => {
    if((name.value) === '' || (email.value) === '' || (number.value) === ''){
        alert('Preencha os campos corretamente')
    }else{
        myModal.style.display = 'none'
    }
   
})
}
// function like(){
//     let numero = 0;
//     const heart = document.getElementById('heart')
//     heart.addEventListener('click', ()=>{
    
//         heart.style.color = 'red'
//         heart.style.borderColor = 'red'
    
    
//         numero++;
//         document.getElementById('number').innerHTML = numero;
//     })
// }



