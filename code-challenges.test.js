// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

/*
Boiler Plate
describe("areYouHungry", () => {
    it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
    })
})
*/


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): 
const colors1Ouptut = ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): 
const colors2Output = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("difColor", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(difColor(colors1)).toEqual(expect.arrayContaining(colors1Ouptut))
    expect(difColor(colors2)).toEqual(expect.arrayContaining(colors2Output))
    })
})

// ReferenceError: difColor is not defined

// b) Create the function that makes the test pass.

/*
Create a function named difColor.
The function that will be created takes in one parameter called 'array'.
Create a new variable that will take in the length of the initial array and a randomIndex variable
Using a while loop with the new variable, call the randomIndex variable in order to create a randomize the indexes. Decrement by an individual index
Return the new array.
*/

const difColor = (array) => {
    let arrIndex = array.length, randomIndex;
    while (arrIndex != 0) {
        randomIndex = Math.floor(Math.random) * arrIndex
        arrIndex--
    }
    return array
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("voteCounter", () => {
    it("returns the end tally", () => {
    expect(voteCounter(votes1)).toEqual(11)
    expect(voteCounter(votes2)).toEqual(-31)
    })
})
// ReferenceError: voteCounter is not defined

// b) Create the function that makes the test pass.

/*
Create a function named voteCounter
The function will take in one parameter that will be named object
An object will be the argument that gets passed through the object
The object will contain upvotes and downvotes
Upvotes value need to be labled as a positive integer
While the downvotes value need to be labled as a negative integer
return the sum of both the upvotes and downvotes
*/

// const voteCounter = (object) => {
//     return Object.values(object).reduce((a, b) => a + b, 0);
// }
// Expected: 11
//     Received: 15
//result of the function ended up adding the values instead of subtracting them

// const voteCounter = (object) => {
//     return Object.values(object)
// }
// Expected: 11
//     Received: [13, 2]
//Remember that Objects.values turns the values into an array, I wanted to verify if each value was actually printed

const voteCounter = (object) => {
    let arr = Object.values(object)
    return arr[0] - arr[1]
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// I believe this worked because once that values are turned into an array, we can access the elements of the array by their index and put them into an equation that will subtract the downvotes from the upvotes


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("combineArr", () => {
    it("returns one array with no duplicate values", () => {
    expect(combineArr(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

// ReferenceError: combineArr is not defined

// b) Create the function that makes the test pass.

/*
create a function named combineArr
The function will take in two parameters named arr1, arr2
Each argument that will be passed into a new array
to combine both arrays
Iterate through the array
Filter out any elements that are doubles
return new string
*/

const combineArr = (arr1, arr2) => {
    let newArr = arr1.concat(arr2)
    return newArr.filter((item, index) => newArr.indexOf(item) == index)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total