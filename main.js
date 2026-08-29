// 1. What does getElementById() select?

// It selects one element using its unique id.

// document.getElementById("intro");

// It returns one element (or null if no matching ID exists).

// 2. What does getElementsByClassName() return?

// It selects all elements having the specified class and returns an HTMLCollection.

// document.getElementsByClassName("item");

// It is a live collection, meaning it automatically updates when matching elements are added or removed from the DOM.

// 3. What does getElementsByTagName() return?

// It selects all elements with a specific HTML tag and returns an HTMLCollection.

// Example:

// document.getElementsByTagName("p");

// This selects all <p> elements.

// Use case: Selecting all buttons, paragraphs, list items, etc.

// 4. Difference between querySelector() and querySelectorAll()
// Method	Returns
// querySelector()	First matching element
// querySelectorAll()	All matching elements

// Example:

// document.querySelector(".item");

// Returns the first .item.

// document.querySelectorAll(".item");

// Returns all .item elements as a NodeList.


let intro = document.getElementById("intro");
console.log(intro);


let items = document.getElementsByClassName("item");
console.log(items.length);


let buttons = document.getElementsByTagName("button");
console.log(buttons.length);


let texts = document.getElementsByClassName("text");
for (let i = 0; i < texts.length; i++) {
    texts[i].style.fontSize = "20px";
}


let activeItem = document.querySelector(".active");
console.log(activeItem);


let listItems = document.querySelectorAll("li.item");
listItems.forEach(function(item) {
    item.style.border = "1px solid black";
});


let paragraphs2 = document.querySelectorAll("p");
console.log(paragraphs2);


let allListItems = document.getElementsByTagName("li");
for (let i = 0; i < allListItems.length; i++) {
    console.log(allListItems[i].textContent);
}


let buttonsByClass = document.getElementsByClassName("btn");
let buttonsByQuery = document.querySelectorAll(".btn");
console.log(buttonsByClass);
console.log(buttonsByQuery);
//the out put shows the difference
