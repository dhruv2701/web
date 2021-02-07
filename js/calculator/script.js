class Calculator{
    constructor(prevTextElement, currTextElement){
        this.prevTextElement = prevTextElement
        this.currTextElement  = currTextElement
        this.clear()
    }
    clear(){
        this.prevOperand = ''
        this.currOperand = ''
        this.operation   = undefined
    }
    delete(){
        this.currOperand = this.currOperand.slice(0,-1);
    }
    appendNumber(number){
        if(number==='.' && this.currOperand.includes('.'))return 
        this.currOperand  = this.currOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.currOperand==='')return
        if(this.prevOperand!==''){
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }
    compute(){
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)
        if(isNaN(prev)||isNaN(curr))return
        if(this.operation==='+')
        this.currOperand = prev + curr
        else if(this.operation==='-')
        this.currOperand = prev - curr
        else if(this.operation==='*')
        this.currOperand = prev * curr
        else if(this.operation==='/')
        this.currOperand = prev / curr
        this.operation = undefined
        this.prevOperand = ''
    }
    displayNumber(){
        this.currTextElement.innerText = this.currOperand
        //this.prevTextElement.innerText = this.prevOperand
        if(this.operation!=null)
        this.prevTextElement.innerText = `${this.prevOperand} ${this.operation}`
    }
}

const prevTextElement      =   document.querySelector('[data-upper-operand]');
const currTextElement      =   document.querySelector('[data-curr-operand]');
const numberButtons        =   document.querySelectorAll('[data-number]');
const operationButtons     =   document.querySelectorAll('[data-operation]');
const equalButton          =   document.querySelector('[data-equals]');
const deleteButton         =   document.querySelector('[data-del]');
const clearButton          =   document.querySelector('[data-clear]');

const calculator  = new Calculator(prevTextElement, currTextElement);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.displayNumber()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.displayNumber()
    })
})

equalButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.displayNumber()
})
clearButton.addEventListener('click',()=>{
    calculator.clear()
    calculator.displayNumber()
})

deleteButton.addEventListener('click',()=>{
    calculator.delete()
    calculator.displayNumber()
})

