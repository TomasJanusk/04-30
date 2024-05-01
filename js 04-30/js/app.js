function syHi(){
    console.log('Hi')
}
syHi()
//-------------------------------------
//Global scope
function syHi(){
    //function scope
    let firstName='Tomas'
    return [
        'ass',
        112,
        true
    ]    
}
console.log(syHi())
console.log(firstName)

//-------------------------------------
//Global scope
function syHi(){
    //function scope
    let firstName='Tomas'
    return firstName;
        
}
console.log(syHi())
console.log(firstName)

//-------------------------------------
//Global scope
const syHi = function (){
    //function scope
    let firstName='Tomas'
    return firstName;
        
}
console.log(syHi())
console.log(typeof syHi) //function

//--------------------------------------------------
// Arow function

const login = ()=>{
    console.log('You are loged in')
}
login()

//-------------------------------------------------
(function(){ // IIFE pati save iskviecianti funkcija
    console.log('testas')
})();

//--------------------------------------------------
(function(){ // IIFE izoliuoja koda nuo isoriniu failu 
        //Global scope
        let firstName='Test';
    const syHi = function (){
        //function scope
        let firstName='Tomas'
        return firstName;
            
    }
    console.log(syHi())
    console.log(typeof syHi) //function
    console.log(firstName)

    // Arow function

    const login = ()=>{
        console.log('You are loged in')
    }
    login()
})();
//----------------------------------------------------

(function(){ // IIFE pati save iskviecianti funkcija
    const addNumber = (numberOne, numberTwo)=>{
          return numberOne + numberTwo;
    }
    console.log(addNumber(123,567))
})();
//----------------------------------------------------


(function(){ 
    const addNumber = (...numbers)=>{
          return numbers;//return array of numbers
    }
    console.log(addNumber(123,567,3344,122223232,444,777,111,0))
})();
// ------------------------------------------------------------------
//Pakeisti funkcijos koda, skaiciai butu sudedami

(function(){ 
    const addNumber = (...numbers)=>{
       let sum=0;
       for(let i=0; i<numbers.length; i++){
           sum+=numbers[i];
       }  
       return sum; 
    }
console.log(addNumber(200,300,400))
})();
//----------------------------------------------------------

(function(){ 
    const addNumber = (...numbers)=>{
       const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
        );
       return sum;
    }
console.log(addNumber(200,300,400))
})();
