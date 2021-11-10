//getElementById
const test = document.getElementById('judul'); //mengembalikan element

test.style.color = 'red';
test.style.backgroundColor = 'blue';
test.innerHTML = 'Bima Afrizal Malna'

console.log(test);
//getelemntbytagname
const p = document.getElementsByTagName('p'); //htmlcollection

for (let i = 0; i < p.length; i++) {
    let test2 = p[i].style.backgroundColor = 'lightblue';
    console.log(test2);
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//getelemtbyclass
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';

//dadkkaskdoa