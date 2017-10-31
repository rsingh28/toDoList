// Adding a check mark in front of the default element in the list (Repeated in the addAction() function - to add a check mark everytime an element is added)

var elementList = document.getElementsByTagName("LI");       // Make an array of elements currently in the to-do list 
for(var i=0 ; i<elementList.length ; i++){
  var newSpan = document.createElement("SPAN");              // New span element
  var checkMark = document.createTextNode("     \u2713");    // Creating a check mark using uni-code
  newSpan.className = "close";                               // Will be used furthur to basically remove the item on clicking the check mark
  newSpan.appendChild(checkMark);                            // Append the check mark to the new spam element
  elementList[i].appendChild(newSpan);                       // Append the spam element (the check mark) to the list element 
}

// Adding a new element to the list on clicking the button 

function addAction () {
  var action = document.getElementById("action").value;       // Get the text from the text bar
  var newli = document.createElement('li');                   // Creating a new list item
  var t = document.createTextNode(action);                    // Create a text node with the text from text bar
  newli.appendChild(t);                                       // Setting the new list item with the value of text node 
  document.getElementById("list").appendChild(newli);         // Appending the list item to the main list 
  document.getElementById("action").value = "";               // Setting the text bar to blank

// Adding a check mark in front of the added element 
  
  var newSpan = document.createElement("SPAN");
  var checkMark = document.createTextNode("     \u2713");
  newSpan.className = "close";
  newSpan.appendChild(checkMark);
  newli.appendChild(newSpan);
}

// Appending to the list on typing in the text box and pressing enter

var pressEnter = document.getElementById("action");
pressEnter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {                                  //checks whether the pressed key is "Enter"
        addAction();
    }
});
