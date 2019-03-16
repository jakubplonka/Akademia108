'use strict'
// buttony
// const container = document.getElementsByClassName('container')[0];
// container.addEventListener('click', (e) => {
//     if(e.target.nodeName == "BUTTON"){
//         e.target.style.backgroundColor = e.target.value;
//         console.log(e.target.css);
//     }
// })

document.getElementsByClassName('container')[0].addEventListener('click', (e) => {
    if (e.target.nodeName === 'H2') {
        const p = document.querySelectorAll('.container-inside p');
        for (let i = 0; i < p.length; i++){
            p[i].classList.remove('display');
        }
        // e.target.classList.add('display');
        e.target.nextElementSibling.classList.toggle('display');
        
    }
})
