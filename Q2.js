// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function innerFunc(a, b){
    return a * b
}

function outerFunc(innerFunc, num1, num2){
    const result = innerFunc(num1, num2)
    console.log(`The multiplication ${num1} and ${num2} is equal ${result}`);
    
}

outerFunc(innerFunc, 2, 3)
outerFunc(innerFunc, 4, 5)