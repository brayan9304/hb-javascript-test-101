//Function that is capable of generate a random RGB color object.
function generateRandomNumber(){
    var o = Math.round, r = Math.random, s = 255;
    var rgb={r:o(r()*s), g:o(r()*s), b:o(r()*s) };
    return rgb;
}

//Function that is capable of filtering out numbers less than 0 from an array of numbers.
function filterNegativeNumbers(numbers){
    var len = numbers.length;
    var filterArray= [];
    for (var i = 0; i < len; i++) {
        if(numbers[i] >= 0){
            filterArray.push(numbers[i]);
        }
    }
    return filterArray;
}

//Functional function that is capable of filtering out numbers less than 0 from an array of numbers.
function funtionalFilterNegativeNumbers(numbers){
    return numbers.filter(checkNumber);
}
function checkNumber(number) {
    return number >= 0;
}

//Function that is capable of maping an array of numbers into strings. 
function mapNumbersIntoStrings(numbers){
    var len = numbers.length;
    var numberStrings= [];
    for (var i = 0; i < len; i++) {
        numberStrings.push(numbers[i].toString());
    }
    return numberStrings;
}
//Functional function that is capable of maping an array of numbers into strings. 
function functionalMapNumbersIntoStrings(numbers){
    return numbers.map(String);
}

//Function that is capable of printing into the console the type of the passed variable.
function printType(value){
    console.log(typeof value);
}

//Function that is capable of identify if the passed string is a palindrome or not. It should return a boolean.
function isPalindrome(str){
    var strAux = str.toLowerCase();
    var len = strAux.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (strAux[i] !== strAux[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

//Class in Javascript that represents a person capable of having "name" and "age" as instance variables, and a method that prints out the name into the console.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.printName = function() {
    console.log(this.name);
};
//Function that is capable of receiving an instance of the Person Class and print into the console it's age.
function printOutPersonAge(student){
    console.log(student.age);
}

const student = new Person('John', 25);
student.printName(); // "John"
printOutPersonAge(student);


