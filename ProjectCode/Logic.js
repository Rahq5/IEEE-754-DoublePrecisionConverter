/**
 *   ###### Weclome ######
 *   this module is the area of 
 *   core logic processed in this 
 *          application
 * @author: Rawi Alqurashi
 *   
 */




//this method validates datatype and calls other methods 
function validateInput_StartFunc(num){
    
    if(typeof num == 'string'  ){
       return "invalid input";
    }else{
       return makeObject(num);
    }
}



// our constructor makes an object to collect all data then sent to next phase
function makeObject(num){
    
    //object = {sign , exponent , mantissa , final_res , numberPassed}
    let object = {
        sign : (num < 0)? "N" : "P",
        exponent_Binary :"",
        exponent_int: 0,
        mantissa :"",
        final_Res:"",
        number: num, 
        formula : ""
    }
    return binaryLogic(object);
}

function binaryLogic(obj){
   
    let ExpoObj = ExponentCounter(obj.number); // to get all data once

    let signn = (obj.sign == "N")? "1" : "0";
    let exponentBin =ExpoObj.biasBinary;
    let exponentInt = ExpoObj.biasAdded;
    let mantissa = mantissaExtractor(obj.number);
    

    //### object assigning values section ###
    obj.sign = (signn == "1")? "Negative" : "Positive";
    obj.exponent_Binary = exponentBin;
    obj.exponent_int = exponentInt;
    obj.mantissa = mantissa;
   

    // binary presentation
    obj.final_Res = ""+signn+exponentBin+mantissa;
    //applying IEEE formula
    obj.formula = IEEE754_formaula(signn , exponentInt , obj.mantissa);
    
    return obj;

}

function IEEE754_formaula(sign , exp , mantissa){

    //converting to intger type with number base 2 (number base 2 means binary)
    let mantissaFraction = parseInt(mantissa , 2);
   
    //Convert the 52-bit integer back to its fractional value between 0 and 1.
    mantissaFraction = mantissaFraction / 2**52;
    
    //applying and returning formula
    return ((-1)**sign) * (2**(exp -1023)) * (1 + mantissaFraction);
    // return ((-1)**sign) * (2**(exp -1023)) * (1 + mantissaFraction); 


}



//this method extracts the exponent from the number given
// process: number>binary>count exponent> return result
function ExponentCounter(num){
    let binary = Math.abs(num.toString(2));
    let binnumber = binary;
    // delete the abs  !!!!
    
    if(binary == 0){
        return 0;
    }
    let expo = 0;

    
    while(binary >= 10){
        binary = binary / 10;
        expo++;
    }

    while(binary < 1){
        binary = binary * 10;
        expo--;
    }
    let biasAdded = expo + 1023;
    let biasBinary = biasAdded.toString(2);

    return { expo , biasAdded , biasBinary , binnumber };
    
    
}

// this method should extract mantissa from passed number 
// note: the function foucses on manuplating the number using string methods 
// due to number typed function inaccuracy
function mantissaExtractor(num) {

    let binary = num.toString(2); 
    
    //  Find index of first '1' and the dot
    let firstOne = binary.indexOf('1');
    let dotPos = binary.indexOf('.');
    
    // Calculate exponent using ternary operator (how far to move dot after first '1')
    let exponent = (dotPos > firstOne) 
        ? dotPos - firstOne - 1  // Cases x>=1 like "1001.11"
        : dotPos - firstOne;     // Cases x<1  like "0.0011"
    
    // 4. Extract mantissa bits after first '1'
    let mantissa = binary.slice(firstOne + 1).replace('.', '');
    mantissa = mantissa.padEnd(52, '0').slice(0, 52);
    
    return mantissa;
}







//###################################################
// ############## Expermint Field ###################
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// now to build up the big logic function , then String builder

console.log(validateInput_StartFunc(9.75));
console.log(validateInput_StartFunc(-9.75));
console.log(validateInput_StartFunc(0.1));
console.log(validateInput_StartFunc(13.342));


// correct output 1234567890








