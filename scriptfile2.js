////Given an array of strings, use the sort() method to sort the strings in alphabetical order

let arrayOfStrings =['tarun', 'surendra', 'purushotham','a','c','b'];
let sorted = arrayOfStrings.sort();
console.log(sorted);

//output ['a', 'b', 'c', 'purushotham', 'surendra', 'tarun']

//Given an array of objects representing books, use the sort() method to arrange the books by their publication year in ascending order.


let arrayOfBooks = [
    {title : 'Ramayana', author : 'Valmiki', genre : 'Itihasa narratives of past events', year : 200 },
    {title : 'Mahabharata', author : 'Vyasa', genre : 'epic poem', year : 300 },
    {title : 'Bhagavad Gita', author : 'Vyasa', genre : 'epic poem' , year : 500},
    {title : 'Brahmasutras', author : 'Vyasa', genre : 'epic poem', year : 200},
    {title : 'Nasavu nenu sastha neek endhuku', author : 'Nene', genre : 'about life' , year : 2023}
]
let ascending = arrayOfBooks.sort((a,b) => a.year - b.year);
console.log(ascending)
