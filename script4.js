// function changeContent() {
//     let heading = document.getElementById("heading");

//     heading.innerHTML = "Text Changed!";
//     heading.style.color = "blue";
//     heading.style.fontSize = "40px";
// }

function addItem() {
    let input = document.getElementById("itemInput");
    let list = document.getElementById("itemList");

    let newItem = document.createElement("li");
    newItem.textContent = input.value;

    list.appendChild(newItem);

    input.value = "";
}