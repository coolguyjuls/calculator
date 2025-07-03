const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button0 = document.getElementById("button0")
const buttonMultiply = document.getElementById("buttonMultiply")
const buttonDivide = document.getElementById("buttonDivide")
const buttonAdd = document.getElementById("buttonAdd")
const buttonSubtract = document.getElementById("buttonSubtract")
const buttonEnter = document.getElementById("buttonEnter")
const buttonClear = document.getElementById("buttonClear")

const calculatorDisplay = document.getElementById("displayText")

button9.addEventListener("click", ()=> test(`9`))
button8.addEventListener("click", ()=> test(`8`))
button7.addEventListener("click", ()=> test(`7`))
button6.addEventListener("click", ()=> test(`6`))
button5.addEventListener("click", ()=> test(`5`))
button4.addEventListener("click", ()=> test(`4`))
button3.addEventListener("click", ()=> test(`3`))
button2.addEventListener("click", ()=> test(`2`))
button1.addEventListener("click", ()=> test(`1`))
button0.addEventListener("click", ()=> test(`0`))
buttonMultiply.addEventListener("click", ()=> operatorSet(`*`))
buttonDivide.addEventListener("click", ()=> operatorSet(`/`))
buttonAdd.addEventListener("click", ()=> operatorSet(`+`))
buttonSubtract.addEventListener("click", ()=> operatorSet(`-`))
buttonEnter.addEventListener("click", executionCheck)
buttonClear.addEventListener("click", clearButton)


let operation = '';
let stringA =``;
let stringB = ``;
let a;
let b;

// variable check for switching between setting the value for stringA and string B. False: stringA. True: stringB.
let operatorCheck = false;
// Disables button to make sure variables a and b will have values before being allowed to move onto the execution function.
buttonEnter.disabled = true;
// if false, numbers entered will concatenate. If true, the first variable is already initialized with the value from result, and a number entered afterwards will clear it out.
resultEqualToA = false;


// +++++++++++++++++++++++++++++++++++++++++++++++++//
let displayArray = [];
//++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function test(string){
    console.log(`test function here`);
    
    if (operatorCheck === false){

        if (resultEqualToA === true){
            stringA = string;
            resultEqualToA = false;
            calculatorDisplay.innerText = stringA;
            console.log(`stringA check: `, stringA)
            console.log(string)


// +++++++++++++++++++++++++++++++++++++Test Array Herer ----------------//
            displayArray.push(stringA);
            console.log(`stringA array check :`, displayArray);
// -+++++++++++++++++++++++++++++++++++++++---------------------------------//


        } else if (resultEqualToA != true){
            stringA += string;
            calculatorDisplay.innerText = stringA

// +++++++++++++++++++++++++++++++++Test Array Herer ---++++++++++-------------//
            displayArray[0] = stringA;
            console.log(`stringA array check :`, displayArray);
// --------------------------------++++++++++++++++++++++++++++++++++++++++++--//
            
            
            console.log(`stringA check, ${stringA}`);
            console.log(`operator check 1: ${operatorCheck}`);
            console.log(`result equal to A check 1: ${resultEqualToA}`);
            
        }
    // calculatorDisplay.innerText += string
        
    } else if (operatorCheck === true){
        stringB += string;

        calculatorDisplay.innerText = `${stringA} ${operator} ${stringB}`;
        buttonEnter.disabled = false;


//--------- Test Array Herer ----------------------------------------------------//
        displayArray.push(stringB);
        console.log(`stringB array check :`, displayArray);
// ------------------------------------------------------------------------------//

        console.log(`stringB check, ${stringB}`);
        console.log(`operator check 1: ${operatorCheck}`);
        console.log(`result equal to A check 2: ${resultEqualToA}`);
    }
}

function operatorSet(operation){
    operator = operation;
    operatorCheck = true;
    calculatorDisplay.innerText = `${stringA} ${operator} `;
    
// ----------------------Test Array Herr --------------------------------//
    displayArray.push(operator);
    console.log(`operator array check :`, displayArray);
//------------------------------------------------------------------------//

    console.log(`operatorSet function check : ${operator}`);
    console.log(`result equal to A check 3: ${resultEqualToA}`);
    return operator;
    
}

function infinityCheck(){
    if (stringA == Infinity){
        
    }
}

function executionCheck(){
    let result;
    let a = Number(stringA);
    let b = Number(stringB);
     
    if (operatorCheck === true){

        switch (operator) {
            case `*`: result = a * b ;
            break;
            case `/`: result = a / b;
            break;
            case `+`: result = a + b;
            break;
            case `-`: result = a - b;
            break;
        }
    } else if(operatorCheck === false){
        console.log(`pick a second number`)
    }
    console.log(`execution check 3: ${result}`)

    operatorCheck = false;
    a = result;
    stringA = String(result);
    b = 0;
    operator = ``;
    stringB = ``;
    if (stringA == Infinity){
        calculatorDisplay.innerText = `Error`
        stringA = 0;
        resultEqualToA = false;
        buttonClear.innerText = `AC`
    } else{
        calculatorDisplay.innerText = stringA;
        resultEqualToA = true;
    }
    buttonEnter.disabled = true;

    console.log(`stringA:`, stringA);
    console.log(`stringB:`, stringB);
    console.log(`operator:`, operator);
    console.log(`result equal to A check 4: ${resultEqualToA}`);
    
    
}

function clearButton(){
    //disables operator buttons. resets values.
    if (calculatorDisplay.innerText === `Error`){
        stringA = ``;
        result = 0;
        calculatorDisplay.innerText = ``
        buttonClear.innerText = `AC`
    }
    if (stringB.length > 0){
        buttonClear.innerText = `CE`
        stringB = ``;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
        displayArray.pop()
        console.log(`popped stringB from array display`, displayArray)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    } else if (operator.length > 0){
        operatorCheck = false;buttonClear.innerText = `CE`
        operator = '';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
        displayArray.pop()
        console.log(`popped operator from array display`, displayArray)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    } else if (stringA.length > 0){
        buttonClear.innerText = `AC`
        stringA = ``;
        operatorCheck = false;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
        displayArray.pop()
        console.log(`popped stringA from array display`, displayArray)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    }

    
}