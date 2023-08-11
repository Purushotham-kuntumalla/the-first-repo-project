
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




//Given an array of numbers, use the map() method to transform each number into its square.

let arrayOfNumber = [1,2,3,4,5,6,7,8,9];
let i = 2
let mapping = arrayOfNumber.map((item) =>{
    return item * item
})
console.log(mapping)
//output [1, 4, 9, 16, 25, 36, 49, 64, 81]


//Given an array of user objects with name and age properties, transform it using the map() method to create an array of strings in the format "Name (Age)".

let arrayOfPersons = [
    {name : 'denver', age: 40},
    {name : 'santoor',age : 60},
    {name : 'rexona', age: 30},
    {name : 'cinthol',age : 30},
    {name : 'no 1', age: 10},
    {name : 'shampoo',age : 15},
    {name : 'pearce', age : 25},
    {name : 'ice-cream',age : 35},
    {name : 'bar', age : 45},
    {name : 'blender sprite', age : 55},
    {name : 'magic movements', age : 65},
    {name : '100pipes', age : 75},
    {name : 'odka', age : 15},
    {name : 'mango juice', age : 25}
]

let transform = arrayOfPersons.map((name) => `${name.name} (${name.age})`);
    console.log(transform)
    
/*output ['denver (40)', 'santoor (60)', 'rexona (30)', 'cinthol (30)', 'no 1 (10)', 'shampoo (15)', 'pearce (25)', 'ice-cream (35)', 'bar (45)', 'blender sprite (55)', 'magic movements (65)', '100pipes (75)', 'odka (15)', 'mango juice (25)']



//Given an array of objects representing books with properties title, author, and genre, use the filter() method to create an array of books by a specific author

let arrayOfBooks = [
    {title : 'Ramayana', author : 'Valmiki', genre : 'Itihasa narratives of past events'},
    {title : 'Mahabharata', author : 'Vyasa', genre : 'epic poem'},
    {title : 'Bhagavad Gita', author : 'Vyasa', genre : 'epic poem'},
    {title : 'Brahmasutras', author : 'Vyasa', genre : 'epic poem'},
    {title : 'Nasavu nenu sastha neek endhuku', author : 'Nene', genre : 'about life'}
]

let filterBooks = arrayOfBooks.filter(author => { 
    return author.author === 'Vyasa'
})
console.log(filterBooks)
*/

//Given an array of strings, use the map() method to convert each string to uppercase.

let arrayOfConvert = ['pavan','nithish','naveen'];
let conversion = arrayOfConvert.map((string) => {
    return string.toUpperCase()
})
console.log(conversion)

//output  (3) ['PAVAN', 'NITHISH', 'NAVEEN']

//Given an array of strings, sort them based on their length using the sort() method.

const strings = ['pavan','nithish','naveen','purushotham'];

strings.sort((a, b) => a.length - b.length);

console.log(strings);
// Output:  ['pavan', 'naveen', 'nithish', 'purushotham']
