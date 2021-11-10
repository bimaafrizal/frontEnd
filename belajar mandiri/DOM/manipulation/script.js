//innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Bima</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

//propertiCSS
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'blue';


//attribute
judul.setAttribute('name', 'bima');
const a = document.querySelector('a');
a.setAttribute('id', 'link');

//remove
a.removeAttribute('id');

//add atribute class
const p2 = document.querySelector('.p2');

// p2.classList.add ->menambah
// p2.classList.remove->menghilangkan
// p2.classList.toggle -> menambahkan class pada element jika belum ada jika sudah maka akan dihapus
// p2.classList.item -> mengetahui item pada class tertentu
// p2.classList.contains -> mengecek apakah element tertentu punya class tertentu
// p2.classList.replace -> mengganti class yang ada
// p2.classList