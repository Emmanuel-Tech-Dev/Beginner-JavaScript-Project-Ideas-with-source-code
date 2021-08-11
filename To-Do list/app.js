const AddBtn = document.getElementById("add"); //getting the add button
const DeleteBtn = document.getElementById("del"); //getting the delete button
const Input = document.getElementById("input"); //getting the input 
const ToDo = document.getElementById("to-dos"); //getting the todo id for the ul list
//  let checkBox = document.getElementById("checkbox"); //getting the checkbox id for the li list



let currentInput = "";
Input.addEventListener("input", (e) => {
    currentInput = e.target.value;
});


let newList;

//Adding and action to be triggered when the add button is clicked 
AddBtn.addEventListener("click", () => {
   
//   check if the input value is empty
    if (currentInput !== null && currentInput !== undefined && currentInput !== "") {
         
        // create an input box with type checkbox\
        checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.id = "checkbox";
        checkBox.classList.add("checkbox");

        
          //create a new li in the ul
        newList = document.createElement("li");
        
        newList.id = "item";//given the new li and id of item

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
   
})


//Adding and action to be triggered when the delete button is clicked 
DeleteBtn.addEventListener("click", () => {
    ToDo.lastChild.remove();
})