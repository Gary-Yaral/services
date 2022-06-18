const modal = document.querySelector('#modal-navbar')
const btnHamburguer = document.querySelector('.fa-bars')
const logo = document.querySelector('.logo')

const form = document.querySelector('#form')
const text = document.querySelector('textarea')
const year = document.querySelector('#year')
const date = new Date();


btnHamburguer.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.toggle('visible');
})

logo.addEventListener('click', (event) => {
    window.location = "#title"
})

form.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    if(text.value.length === 0) {
         
        Swal.fire({
            title: "Atención",
            text: 'Debes escribir algo para enviar'
        })
        text.focus();
        return
    }
    let string = "";
    for(let i = 0; i< text.value.length; i++){
        let char = text.value[i];
        if(char === " "){
            char = "%20";
        }
        string = string + char;
    } 

    window.location = "https://api.whatsapp.com/send?phone=593982055157&text="+string;
})

modal.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('li')){
        modal.classList.toggle('hidden');
    }
})

year.innerHTML = date.getFullYear();
