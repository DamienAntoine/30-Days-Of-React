const dog = {
    'Name': 'Doggo',
    'Legs': 4,
    'Color': 'red',
    'Age': 94,
    'Bark': 'Woof'
};

console.log(dog);
const entries = Object.entries(dog);
console.log(entries);

dog.Breed = 'Red Dalmatian';
dog.getDogInfo = function () {
    return `The dog is a ${this.Breed}, named ${this.Name}, ${this.Age} years old. He has ${this.Legs} legs and a ${this.Color} fur.`
};

console.log(dog);

dog.getDogInfo();