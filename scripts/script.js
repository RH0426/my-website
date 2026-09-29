// this is a single line comment and is ignored by the browser

/*
this is a 
multi-line 
comment
*/

// console.log(10)       // same as print() in python

// let is a variable that can change
// const is a variable that will always stay the same

// console.log("Reid Hughes", 16)
// console.warn("this is a warning")
// console.error("This is an error")

// arithmetic operatos
// basic operators: +, -, *(multiplication), /(divison),
// console.log(5*2)

// Modulus Operator: a % b -> remainder after dividing a by b

// Exponents: a ** b -> a raised to the b power

// Increment (++) & Decrement (--): Quick +1 or -1 operations

// let lives = 3
// lives--
// console.log(lives)

// Concatination and Template Literals
// Concatination is a method of combining strings by adding them

// const userName = "Sam"
// const userAge = "17"
// const favoriteSubject = "Math"

// Method 1: Concatination
// const message = "Hello, my name is " + userName + " and I am " + userAge + " years old."

// console.log(message)

// Method 2: Template Literals (python f{} strings)
// const messageTwo = `Hello, my name is ${userName} and I am ${userAge+1} years old.`

// console.log(messageTwo)

// Multi=Line String withough \n
// const bio = `
// === USER PROFILE ===
// Name: ${userName}
// Age: ${userAge}
// Favorie Subject: ${favoriteSubject}
// `

// console.log(Number(userAge) * .04)


const amount = prompt("What is the bill amount?")
const tipPercentage = prompt("How much to you want to tip? (Percentage)")
const tipAmount = (Number(amount) / 100) * Number(tipPercentage)
const totalCost = Number(amount) + tipAmount
const receipt = `
===== Receipt =====
Bill: $${amount}
Tip Percentage: ${tipPercentage}%
Tip Cost: $${tipAmount}
Total Cost: $${totalCost}
`
console.log(receipt)
