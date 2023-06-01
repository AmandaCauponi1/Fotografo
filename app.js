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
     like()
    
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
 function like(){
    const likes = document.querySelectorAll('.heart')
likes.forEach((heart) => {
    heart.addEventListener('click', (e) => {
        let style = e.currentTarget.classList
        if(style.contains('desativado')){
            heart.setAttribute('src', 'assets/icones/CoracaoVermelho.svg')
            heart.classList = 'like ativado'
    }
    else{
        heart.setAttribute('src', 'assets/icones/Coracao.svg')
        heart.classList = 'like desativado'
    }
    })
})  
 }



