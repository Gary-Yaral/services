const modal = document.querySelector('#modal-navbar'),
btnClose = document.querySelector('#btnClose'),
btnHamburguer = document.querySelector('#hamburguer'),
form = document.querySelector('#form'),
text = document.querySelector('textarea');

btnClose.addEventListener('click', () => {
    modal.classList.toggle('hidden');
})

btnHamburguer.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.toggle('hidden');
})

form.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    if(text.value.length === 0) {
        alert('Aún no me has escrito lo que necesitas');
        text.focus();
        return;
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
