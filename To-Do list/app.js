const AddBtn = document.getElementById("add"); //getting the add button
const DeleteBtn = document.getElementById("del"); //getting the delete button
const Input = document.getElementById("input"); //getting the input with id of input
const ToDo = document.getElementById("to-dos"); //getting the todo id for the ul list


let currentInput = "";
Input.addEventListener("input", (e) => {
    currentInput = e.target.value;
});




//function to add list item
function AddListItem() {
    //   check if the input value is empty
    if (currentInput !== null && currentInput !== undefined && currentInput !== "") {

        // create an input box with type checkbox\
        checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        // checkBox.id = "checkbox";
        checkBox.classList.add("checkbox");


        //create a new li in the ul
      let newList = document.createElement("li");
        newList.id = "item" + (ToDo.childElementCount + 1);//given the new li and id of item
        newList.classList.add("item");
        /*create a text in the new li created => first to do
           and create an element count function to give numbers to your list
        */
        let TodoNode = document.createTextNode((ToDo.childElementCount + 1) + ". " + currentInput)

        //add the newly created text to your ul
        newList.appendChild(TodoNode);

        // add check input to li
        newList.appendChild(checkBox);

        //add the new list to your ul 
        ToDo.appendChild(newList);

        //reset the input value and current input to nothing after adding the list
        currentInput = "";
        Input.value = "";
    } else {
        alert("Please Enter a valid ToDO");//alert the user to enter a valid todo
    }

};

//funtion to delete list item
function DeleteItem() {
        //delete items that have been checked
        var element = document.querySelectorAll('.item');
        element.forEach(x => {
            if (x.querySelector('input').checked) {
                x.remove();   
            }
        });
       
};
//Adding and action to be triggered when the add button is clicked 
AddBtn.addEventListener("click", () => {
    AddListItem();// add list item fuction called
});

// if the user presses the enter key
window.addEventListener("keyup", (e) => {
  
    // Add todo list item when user presses the Enter key on the keyboard
    if (e.code === "Enter") {
       
        //calls the function to add the todo item to the list
        AddListItem();
    }
    
    // delete todo list item when user presses the Delete key on the keyboard
    if (e.code === "Delete") {
       
        //calls the function to delete the todo items from list
        DeleteItem()
    }
});

//Adding and action to be triggered when the delete button is clicked 
DeleteBtn.addEventListener("click", () => {
    DeleteItem();//delete item list function called
});

//auto check all checked boxes
const checkboxes = document.getElementsByClassName("checkbox");
const selectAllBtn = document.getElementById("select-Allbtn");
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", () => {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked === false) {
                selectAllBtn.checked = false;
                break;
            } else {
                selectAllBtn.checked = true;
            }
        }
    });
}
// select all button

selectAllBtn.addEventListener("change", (e) => {
    for (let i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = e.target.checked;

    }
});