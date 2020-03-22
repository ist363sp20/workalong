// You code goes here!

function load() {
    var todos = localStorage.getItem("todoList");
    console.log(todos);
    if (!todos) {
        todos = [];
    } else {
        todos = JSON.parse(todos);
    }
    return todos;
}

var todoList = load();
var addForm = document.getElementById("addForm");
var itemText = document.getElementById("itemText");
var listArea = document.getElementById("itemList");
var clearBtn = document.getElementById("clearBtn");

function addItem(evt) {
    evt.preventDefault();
    var formData = new FormData(addForm);
    item = {};
    for (var pair of formData.entries()) {
        item[pair[0]] = pair[1];
    }
    todoList.push({
        text: item.itemText,
        done: false   
    });
    itemText.value = "";
    renderList();

}

function renderList() {
    listArea.innerHTML = "";
    for(var item of todoList) {
        var listItem = document.createElement("li");
        listItem.innerHTML = item.text;
        listArea.appendChild(listItem);
        listItem.addEventListener("click", markDone);
        if(item.done) {
            listItem.classList.add("text-strikethrough");
        }
    }
    save();
}

function markDone(evt) {
    var itemText = evt.target.innerHTML;
    for(var item of todoList) {
        if(item.text === itemText) {
            item.done = !item.done;
        }
    }
    renderList();
}

function clearCompleted(evt) {
    evt.preventDefault();
    var copyList = []; 
    for (var i = 0 ; i < todoList.length ; i++) {
        if (!todoList[i].done) {
            copyList.push(todoList[i]);
        }
    }
    todoList = copyList;
    renderList();
}

function save() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


addForm.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearCompleted);

renderList();
