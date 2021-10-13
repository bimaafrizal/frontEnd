//import class
import Animal from "./animal";

class Anjing extends Animal {
    //ovveriding constructor
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    //overriding method
    info() {
        const humanAge = this.getAgeHuman();
        console.log(`Halo namaku ${this.name} umurku sekarang  adalah ${humanAge} tahun dalam umur manusia`)
        console.log(`Aku berjenis ${this.breed}`)
    }
    getAgeHuman() {
        return this.age * 7;
    }
}