let myArray =["empanada","helado","papas"];

myArray[0]="tacos";
myArray[1]="haburguesa";

myArray.unshift("pasta");

var Array=myArray.join("-");

console.log("array actualizado",myArray);
console.log("array como string",Array);


