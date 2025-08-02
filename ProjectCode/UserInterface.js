const importedFunction = require('./Logic.js');
const prompt = require('prompt-sync')();
//imported file logic.js which contains:
// - validateInput_StartFunc(num)



while(true){
   
    console.log("Enter a number");
    let UserInput = prompt();

    if(UserInput == "exit"){
        console.log("existing...");
        break;
    }else{
        
        let result=importedFunction.validateInput_StartFunc(UserInput);
        let exportedObj =importedFunction.ReadyObj;
        StringBuilder(exportedObj);
    }
}

function StringBuilder (obj){
    
  
    let StringFormula = StringBuilderForFormula(obj);
    let StringBlock = 
    [
        "____________________________________",
        "IEEE-754 Double-Precision Converter",
        "____________________________________",
        "• Original number:  " + obj.number,
        "• sign           :  " + obj.sign,
        "• exponent-Binary:  " + obj.exponent_Binary,
        "• exponent-bias  :  " + obj.exponent_int,
        "• mantissa-Binary:  " + obj.mantissa,
        "• Formula        :  " 
    ]

    for(let x=0;x<StringBlock.length;x++){
        console.log(StringBlock[x]);
    }
}

function StringBuilderForFormula(obj){
    //this method is specilsed in writing steps of applying formula
    //and building string blocks will be in three steps
    //1- showing applied formula with no values
    //2- showing applied formula with values
    //3- showing final result of formula with values

    
}


