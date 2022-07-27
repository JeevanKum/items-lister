var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);

form.addEventListener('submit', anotherFunction);

function anotherFunction(e) {
    e.preventDefault();

    //get input item
    var newItem = document.getElementById('item').value;

    //create a new list item
    var li = document.createElement("li");
    li.className = "list-group-item";

    //create delete button
    var deleteBtn = document.createElement('button');

    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    console.log(deleteBtn);

    //append creoss sign in the box
    deleteBtn.appendChild(document.createTextNode('X'));

    //append new item in li
    li.appendChild(document.createTextNode(newItem));

    //append cross button
    li.appendChild(deleteBtn);
    
    //append li into itemList
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        
    if (confirm("Are you sure you want to delete")) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItem);

//filterItem
function filterItem(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
    );
}