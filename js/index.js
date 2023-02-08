const modal = document.querySelector('.nav-options')
const btnHamburguer = document.querySelector('.fa-bars')

const form = document.querySelector('#form')
const text = document.querySelector('textarea')
const year = document.querySelector('#year')
const date = new Date();


btnHamburguer.addEventListener('click', (event) => {
    modal.classList.toggle('hide-nav');
})


form.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    if(text.value.length === 0) {
         
        Swal.fire({
            title: "Atención",
            text: 'Debes escribir algo para enviar'
        })
        .then(ok => {
            if(ok.isConfirmed || ok.isDismissed) {
                text.focus();
                return
            }
            console.log(ok);
        })
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

modal.addEventListener('click', function(e) {
    this.classList.toggle('hide-nav');
    console.log("click");
})

year.innerHTML = date.getFullYear();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
