// //document.querySelector(); -> element
// const p4 = document.querySelector('#b p')
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); //yang dirubah hanya p yang ditemui pertama

// //document.querySelectorAll();

// const pSemua = document.querySelectorAll('p');
// //untuk memanipulasi memerlukan index

// for (let i = 0; i < pSemua.length; i++) {
//     pSemua[i].style.backgroundColor = 'lightblue';
// }


//merubah root node
const sectionB = document.querySelector('#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';