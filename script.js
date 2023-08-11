// Given an array of strings, use the filter() method to create a new array containing only strings with a length greater than 5 characters.

let body = document.querySelector('body');
let arrayOfStrings = ['one','two','three','pavan','nithish','naveen','purushotham'];
let filteredArray = arrayOfStrings.filter((item)=>{
    return item.length > 5
})
console.log(filteredArray.join(' ')) // output nithish naveen purushotham



//Given an array of products, use the filter() method to create a new array containing products with a price less than $50.
let arrayOfProducts = [
    {product : 'denver', price : 40},
    {product : 'santoor', price : 60},
    {product : 'rexona', price : 30},
    {product : 'cinthol', price : 30},
    {product : 'no 1', price : 10},
    {product : 'shampoo', price : 15},
    {product : 'pearce', price : 25},
    {product : 'ice-cream', price : 35},
    {product : 'bar', price : 45},
    {product : 'blender sprite', price : 55},
    {product : 'magic movements', price : 65},
    {product : '100pipes', price : 75},
    {product : 'odka', price : 15},
    {product : 'mango juice', price : 25}
]
let filteredPrices = arrayOfProducts.filter((item) => {
    return item.price < 50
})
console.log(filteredPrices) /* output  (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {product: 'denver', price: 40}
1: {product: 'rexona', price: 30}
2: {product: 'cinthol', price: 30}
3: {product: 'no 1', price: 10}
4: {product: 'shampoo', price: 15}
5: {product: 'pearce', price: 25}
6: {product: 'ice-cream', price: 35}
7: {product: 'bar', price: 45}
8: {product: 'odka', price: 15}
9: {product: 'mango juice', price: 25}
length: 10  */



//Given an array of numbers, remove duplicate values using the filter() method


let arrayOfNumbers = [1,2,3,4,5,1,2,3,4,5,6,7,8,9];
let filteredArrayOfNumbers = arrayOfNumbers.filter((value, index, self) => {
    return self.indexOf(value) === index;
})

console.log(filteredArrayOfNumbers)

//output  [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Given two arrays of numbers, use the concat() method to merge the arrays into a single array

let array1 = [1,2,3];
let array2 = [4,5,6];
let concatMethodOutPut = array1.concat(array2);
console.log(concatMethodOutPut)

//output  [1, 2, 3, 4, 5, 6]

/*Question: Given an array of numbers, use the splice() method to remove all negative numbers from the array.
Question: Given an array of strings, use the splice() method to replace the second and third strings with a new string. */

let arrayNumbers = [1, 2, 3, 4, 5,-1,-2,-3]
function negative(arrayNumbers) {
    arrayNumbers
}
console.log(result)