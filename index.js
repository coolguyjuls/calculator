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
const calculatorDisplay2 = document.getElementById("displayText2")

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
let operator = ``;

// variable check for switching between setting the value for stringA and string B. False: stringA. True: stringB.
let operatorCheck = false;
// Disables button to make sure variables a and b will have values before being allowed to move onto the execution function.
buttonEnter.disabled = true;
// if false, numbers entered will concatenate. If true, the first variable is already initialized with the value from result, and a number entered afterwards will clear it out.
let resultEqualToA = false;

// +++++++++++++++++++++++++++++++++++++++++++++++++//
let displayArray = [];
let ErrorCheck = false;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function test(string){
    console.log(`test function here`);
    if (ErrorCheck === true){
        return;
    }

    if (operatorCheck === false){

        if (resultEqualToA === true){
            stringA = string;
            resultEqualToA = false;
            // calculatorDisplay.innerText = stringA;
            console.log(`stringA check: `, stringA)
            console.log(string)


// +++++++++++++++++++++++++++++++++++++Test Array Herer ----------------//
            displayArray[0] = (stringA);
            console.log(`stringA array check :`, displayArray);
            // updateDisplay(stringA);
            updateDisplay();
// -+++++++++++++++++++++++++++++++++++++++---------------------------------//


        } else if (resultEqualToA != true){
            stringA += string;
            // calculatorDisplay.innerText = stringA

// +++++++++++++++++++++++++++++++++Test Array Herer ---++++++++++-------------//
            displayArray[0] = stringA;
            console.log(`stringA array check 2:`, displayArray);
            // updateDisplay(stringA);
            updateDisplay();
// --------------------------------++++++++++++++++++++++++++++++++++++++++++--//
            
            
            console.log(`stringA check, ${stringA}`);
            console.log(`operator check 1: ${operatorCheck}`);
            console.log(`result equal to A check 1: ${resultEqualToA}`);
            
        }
    // calculatorDisplay.innerText += string
        
    } else if (operatorCheck === true){
        stringB += string;

        // calculatorDisplay.innerText = `${stringA} ${operator} ${stringB}`;
        buttonEnter.disabled = false;


//--------- Test Array Herer ----------------------------------------------------//
        // displayArray.push(stringB);
        displayArray.splice(2,1, stringB)
        console.log(`stringB array check :`, displayArray);
        // updateDisplay(stringB);
        updateDisplay();
// ------------------------------------------------------------------------------//

        console.log(`stringB check, ${stringB}`);
        console.log(`operator check 1: ${operatorCheck}`);
        console.log(`result equal to A check 2: ${resultEqualToA}`);
    }
    updateDisplay();
}

function operatorSet(operation){
    if (ErrorCheck === true){
        return;
    }
    operator = operation;
    operatorCheck = true;
    // calculatorDisplay.innerText = `${stringA} ${operator} `;
    
// ----------------------Test Array Here --------------------------------//
    // displayArray.push(operator);
    // displayArray.splice(1,1, operator);
    console.log(`operator array check :`, displayArray);
    updateDisplay(operator);
//------------------------------------------------------------------------//

    console.log(`operatorSet function check : ${operator}`);
    console.log(`result equal to A check 3: ${resultEqualToA}`);
    return operator;
    
}

// function infinityCheck(){
//     if (stringA == Infinity){
        
//     }
// }

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
//new line here ---------------- reying it out.
    if (b === 0 && operator === `/`){
        stringA =``;
        operator = ``;
        stringB = ``;
        displayArray[0] = `ERR-PLS CLR`;
        // let zero = `ERROR - Cannot Divide By Zero`
        operatorCheck = false;
        buttonEnter.disabled = true;
        ErrorCheck = true;
        console.log(`display arrray check id-111:`, displayArray);
        updateDisplay();
        return;
    }

    operatorCheck = false;
    stringA = String(result);
    operator = ``;
    stringB = ``;

    displayArray.splice(1);
    console.log(`display array check`, displayArray);
    resultEqualToA = true;
    buttonEnter.disabled = true;

    updateDisplay();
    console.log(`display array check`, displayArray);

    console.log(`stringA:`, stringA);
    console.log(`stringB:`, stringB);
    console.log(`operator:`, operator);
    console.log(`result equal to A check 4: ${resultEqualToA}`);
    
    
}

// for clear button display text +++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

function clearButton(){
    //disables operator buttons. resets values.

    if (ErrorCheck === true){
        ErrorCheck = false;
        stringA = ``;
        stringB = ``;
        operator = ``;
        operatorCheck = false;
        resultEqualToA = false;
        displayArray = [];
        calculatorDisplay.innerText = "";
        updateDisplay();
    }

    if (stringB.length > 0){
        stringB = ``;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
        buttonEnter.disabled = true;
        displayArray.pop()
        console.log(`popped stringB from array display`, displayArray)
        updateDisplay();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    } else if (operator.length > 0){
        operator = '';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
        displayArray.pop()
        console.log(`popped operator from array display`, displayArray)
        updateDisplay();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    } else if (stringA.length > 0){
        stringA = ``;
        operatorCheck = false;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
        displayArray.pop()
        console.log(`popped stringA from array display`, displayArray)
        updateDisplay();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    }

    
}

function updateDisplay(){
    if (displayArray[0] === `ERR-PLS CLR`){
        displayArray.splice(1,2);
    }
    if (stringA){
        displayArray[0] = (stringA)
    }
    if (operator){
        displayArray.splice(1,1, operator);
    }
    if(stringB){
        displayArray.splice(2,1, stringB)
    }
    calculatorDisplay.innerText = displayArray.join(" ");
    clearButtonText();
}


function clearButtonText(){
    if (displayArray.length > 1){
        buttonClear.innerText = `CE`
    }else{
        buttonClear.innerText = `AC`
    }
}