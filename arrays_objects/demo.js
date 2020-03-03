

// let listOfStrings = ["joe", "bob", "mary", "jen"];
// let listOfNumbers = [2, 4, 6, 8, 10];

// // Some methods

// var l = listOfNumbers.length // 5
// console.log(l)
// listOfNumbers.push(12) // [2, 4, 6, 8, 10, 12];
// var x = listOfNumbers.pop() // x = 10 and the array is [2, 4, 6, 8, 10]
// var x = listOfNumbers.shift() // x = 2 and the array is [4, 6, 8, 10, 12]
// listOfNumbers.unshift(0) // [0, 2, 4, 6, 8, 10, 12]

// for (let i = 0; i < listOfNumbers.length; i++) {
//     let entry = listOfNumbers[i];
//     // Do something with the number
// }

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();        // First sort the elements of fruits
// fruits.reverse();     // Then reverse the order of the elements

// // Objects
// var person = {
//     name: "John Smith",
//     phone: "(315) 555-5555",
//     age: 50,
//     address: "123 Somewhere",
//     active: true
// }

// var people = [
//     {
//         name: "John Smith",
//         phone: "(315) 555-5555",
//         age: 50,
//         address: "123 Somewhere",
//         active: true
//     },
//     {
//         name: "Jane Smith",
//         phone: "(315) 555-5555",
//         age: 50,
//         address: "123 Somewhere",
//         active: true
//     }
// ]

todoitem = {
    number: "Text 1"
  }
  
anothertodo = {
text: "Item 2"
}
  
  items = []
  items.push(todoitem)
  items.push(anothertodo)
  
  for (var i = 0; i < items.length ; i++) {
    console.log(items[i])
    var item = items[i];
    if(item.text === "Item 2") {
      items.splice(i, 1)
    }
  }
