//0
let empty_Array = [];

//1
let array = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
];

let arrayLength = array.length;
let firstItem = array[0];
let middleItem = array[(array.length - 1) / 2];
let lastItem = array[arrayLength - 1];
console.log(arrayLength, firstItem, middleItem, lastItem);

//2
let mixedDataType = [
    'orange',
    '2624',
    'plane',
    5,
    'kitchen',
    16.4,
    'turtle'
];
let mixedLength = mixedDataType.length;
console.log(mixedLength);

//3
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

let numberOfCompanies = itCompanies.length;
console.log(itCompanies);
console.log(numberOfCompanies);
console.log(itCompanies[0], itCompanies[(itCompanies.length - 1) / 2], itCompanies[itCompanies.length - 1]);

let i = 0;
while (i < itCompanies.length)
{
    console.log(itCompanies[i]);
    i++;
}

i = 0;
let uppderCaseItCompanies = [];
while (i < itCompanies.length)
{
    uppderCaseItCompanies[i] = itCompanies[i].toUpperCase();
    console.log(uppderCaseItCompanies[i]);
    i++;
}

let sentence = '';

for (let i = 0; i < itCompanies.length; i++)
{
    if (i === 0) {
        sentence += itCompanies[i];
    } else if (i === itCompanies.length - 1) {
        sentence += ' and ' + itCompanies[i];
    } else {
        sentence += ', ' + itCompanies[i];
    }
}

sentence += ' are big IT companies.';
console.log(sentence);

let companyName = 'IBM';
let fakeCompanyName = 'Pokemon';
let found = false;
for (let i = 0; i < itCompanies.length; i++)
{
    if (itCompanies[i] === fakeCompanyName) {
        console.log(companyName, 'found at position', i);
        found = true;
    }
}
if (found === false) {
    console.log('Company not found');
}

//reverse array

let normalArray = [1, 2, 3, 4, 5, 6, 7];
let normalArrayLength = normalArray.length;
let reversedArray = [];
for (let i = normalArrayLength - 1; i >= 0; i--)
{
    reversedArray.push(normalArray[i]);
}

console.log(reversedArray);