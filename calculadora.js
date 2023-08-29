var num1 = parseFloat(prompt("ingrese el primer numero"));
var num2 = parseFloat(prompt("ingrese el segundo numero"));
var operation = prompt("ingrese la operacion (+,-,*,/):");

var result;

if(isNaN(num1)|| isNaN(num2)){
    result="entrada invalida";

}else{
    switch(operation){
        case"+":
            result=num1+num2;
            break;
        case"-":
            result=num1-num2;
            break;
        case"*":
            result=num1*num2;
            break;
        case"/":
        if(num2 !== 0){
                result=num1/num2;
        } else {
                result="division por cero no permitida";
        }
                
        break;
    
        default:
        
    
        result="operacion no valida";
    }
     
    

    
}   
console.log("Resultado", result);