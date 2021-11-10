//Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });


//dom tranfersal
const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     });
// }

//caralain
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});

//parentNode menghasilkan node
//parentElement menghasilkan element
//nextSibing menghasilkan node
//nextElementSibling menghasilkan element
//previousSibling menghasilkan node
//previousElementSibling menghasilkan element


const nama = document.querySelector('.nama');
console.log(nama.parentElement); //menghasilkan card
console.log(nama.parentElement.parentElement); //menghasilkacontainer
console.log(nama.nextSibling); //menghasilkan node
console.log(nama.nextElementSibling); //menghasilkan node
console.log(nama.previousElementSibling); //menghasilkan node