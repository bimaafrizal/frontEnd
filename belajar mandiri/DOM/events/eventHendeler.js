//mempresentasikan kejadian di dalam dom
//event hendler
//add eventlistener


//event hendler
//on<event>

const p3 = document.querySelector('.p3');

//masuk inline HTML attribute
//dengan onclik pada html
function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
}

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}




const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;


//event listener
const p4 = document.querySelector('.p4');
p4.addEventListener('click', function() {
    alert('ok');
});

const p5 = document.querySelector('section#b p');
p5.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');

    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

//cekk dokumentasi event