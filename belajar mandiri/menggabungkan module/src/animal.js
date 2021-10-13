class Animal {
    constructor(name, age) {
        console.log("Hallo");
        this.name = name;
        this.age = age;
    }
    sapa() {
        console.log("selamat pagi tuan");
    }
    info() {
        console.log(`Nama saya adalah ${this.name} umur saya ${this.age}`);
        this.sapa();
    }
}

//eksport class
export default Animal;