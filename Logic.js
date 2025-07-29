// testing case for positive intgers



//this method validates datatype and calls other methods 
function validateInput_StartFunc(num){
    
    if(typeof num == 'string'  ){
       return msgToUser("invalid input");
    }else{
       return makeObject(num);
    }
}
//function passed!!

//this function make an object and pass it to binarylogic()
function makeObject(num){
    
    //object = {sign , exponent , mantissa , final_res , numberPassed}
    let object = {
        sign : (num < 0)? "N" : "P",
        exponent :0,
        mantissa :0,
        final_Res:0,
        number: num
    }
    return binaryLogic(object);
}
//function passed !!

function binaryLogic(obj){
   
    let signn = (obj.sign == "N")? "1" : "0";
    let exponent = ExponentCounter(obj.number).biasBinary; 
    let mantissa = mantissaExtractor(obj.number);
    

    
    console.log(signn + ""+ exponent + "" + mantissa);

}


function msgToUser (word){

    if(word == "invalid input"){
         console.log("fuck you II");
    }

}
//console.log(makeObject("hello"));

//console.log(validateInput(22.5));
//



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

validateInput_StartFunc("hello");

// correct output 1234567890








