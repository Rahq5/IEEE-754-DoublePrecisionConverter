const importedFunction = require('./Logic.js');
const prompt = require('prompt-sync')();
//imported file logic.js which contains:
// - validateInput_StartFunc(num)



while(true){
   
    console.log("Enter a number / type 'exit' to shutdown");
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
        "_______________________________________________________",
        "IEEE-754 Double-Precision Converter",
        "_______________________________________________________",
        "• Original number:  " + obj.number,
        "• sign           :  " + obj.sign,
        "• exponent-Binary:  " + obj.exponent_Binary,
        "• exponent-bias  :  " + obj.exponent_int,
        "• mantissa-Binary:  " + obj.mantissa,
        "• Formula        :  " ,
        "                          ",
        "   •Step 1:General form",
        "    (-1)^sign * (1*mantissa) * 2^(exponent - 1023)",
        "                          ",
        "   •Step 2:applying given value",
        "    (-1)^"+obj.sign+" * (1 * " +obj.mantissa.slice(0,8)+") * 2^("+(obj.exponent_int-1023)+" -1023)",
        "                          ",
        "   •Step 3: calculation:",
        "    = " + obj.formula ,
        "_______________________________________________________"

    ]

    for(let x=0;x<StringBlock.length;x++){
        console.log(StringBlock[x]);
    }
}