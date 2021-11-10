//DOM Manipulation

//buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Ini paragraf baru');
//simpan kedalam paragraf
pBaru.appendChild(teksPBaru);
//simpan pBaru di akhir Section A
const SectionA = document.getElementById('a');
SectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('ini item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
SectionA.removeChild(link);
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';