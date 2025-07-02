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

const calculatorDisplay = document.getElementById("displayText")



let operation = '';
let calculatorArray= [];
let arrayX =``;
let arrayY = ``;
let operatorCheck = false;

// button1.addEventListener("click", ()=> calculatorArray.push(1))
button1.addEventListener("click", ()=> test(1))
button2.addEventListener("click", ()=> calculatorArray.push(2))
button3.addEventListener("click", ()=> calculatorArray.push(3))
button4.addEventListener("click", ()=> calculatorArray.push(4))
button5.addEventListener("click", ()=> calculatorArray.push(5))
button6.addEventListener("click", ()=> calculatorArray.push(6))
button7.addEventListener("click", ()=> calculatorArray.push(7))
button8.addEventListener("click", ()=> calculatorArray.push(8))
button9.addEventListener("click", ()=> calculatorArray.push(9))
button0.addEventListener("click", ()=> calculatorArray.push(0))
// buttonMultiply.addEventListener("click", ()=> operation = `*`)
buttonMultiply.addEventListener("click", ()=> operatorSet(`*`))
buttonDivide.addEventListener("click", ()=> operation = `/`)
buttonAdd.addEventListener("click", ()=> operation = `+`)
buttonSubtract.addEventListener("click", ()=> operation = `-`)
// buttonEnter.addEventListener("click", inputOperation)
buttonEnter.addEventListener("click", executionCheck)


function test(num){
    console.log(`test function here`);
    
    if (operatorCheck === false){
        arrayX += (num);
        console.log(`arrayX check 1, ${arrayX}`);
        console.log(operatorCheck);
        
        
    } else if (operatorCheck === true){
        arrayY += (num);
        console.log(`arrayY check 1, ${arrayY}`);
    }
}

function operatorSet(operation){
    operator = operation;
    operatorCheck = true;
    console.log(`operatorSet fucntion check : ${operator}`);
    return operator;
    
}


function executionCheck(){
    let result;
    let x = Number(arrayX);
    let y = Number(arrayY);
     
    if (operatorCheck === true){

        switch (operator) {
            case `*`: result = x * y ;
            console.log(`execution check 1: ${result}`)
            break;
            case `/`: result = x / y;
            break;
            case `+`: result = x + y;
            break;
            case `-`: result = x - y;
            break;
        }
        console.log(`execution check 2: ${result}`)
    }
    console.log(`execution check 3: ${result}`)
}


for (i = 0; calculatorArray[i]; i++){
    numberString = calculatorArray.toString(calculatorArray[i])
}

function inputOperation(){
    x = calculatorArray[0];
    console.log(x);
    y = calculatorArray[1];
    console.log(y);

    switch (operation) {
        case `*`: result = x * y;
        break;
        case `/`: result = x / y;
        break;
        case `+`: result = x + y;
        break;
        case `-`: result = x - y;
        break;
    }

    calculatorDisplay.innerText = `${x} ${operation} ${y} = ${result}`;
    console.log(calculatorArray);
    console.log(operation)
    console.log(calculatorDisplay)
}
