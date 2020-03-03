/*
Todo app V1

This is just a simple form that add and remove items from an array of items
There are two functions that you will be responsible for finishing.

addItem
removeItem

*/

var items = [
    {
        text: "Item 1"
    }
]; // this is the array that hold the items, the first items is entered as an example


// Add Function
function addItem(itemText) {
    // You must create a simple object and add it the the array
    
    // Then call the render function to render the list of items
}


// Remove Function
function removeItem(itemText) {
    // You must find the items in the array of items and remove it
    // https://lmgtfy.com/?q=remove+item+from+array+javascript
    console.log(itemText);
    // Then call the render function to render the list of items
}

// The function below renders the li tags in the ul tag
function RenderItems() {
    var el = document.getElementById('itemList');
    var ul = document.createElement('ul');
    items.forEach(function(item) {
        var li = document.createElement('li');

        // Add event listener for each li item that reacts to onclick
        li.addEventListener('click', function() {
            if(confirm("You sure you want to remove " + item.text)) {
                removeItem(item.text);
            }
        })
        li.textContent = item.text;
        ul.append(li);
    })
    el.innerHTML = '';
    el.append(ul);
}

// This is the form event listener that gets the item text form the input
// And calls the addItem function

function submitForm(evt) {
    evt.preventDefault();
    var val = document.getElementById('itemText').value;
    console.log(val);

    // call the addItem function
    addItem(val);
}

// EventListener for add form submit, takes a function as a callback (Higher Order)
document.getElementById('addForm').addEventListener('submit', submitForm);

// Initial call to render function so items get rendered
RenderItems();