// Deleting the element on clicking the check-mark appended to the end of the data entry

function removeElement(remove) {
	for(var i=0 ; i<remove.length ; i++){
		remove[i].onclick = function(){
			var item = this.parentElement;
			item.style.display="none";
		}
	}
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
  
  var newSpan = document.createElement("SPAN");               // New span element
  var checkMark = document.createTextNode("     \u2713");     // Creating a check mark using uni-code
  newSpan.className = "close";                                // Will be used furthur to basically remove the item on clicking the check mark
  newSpan.appendChild(checkMark);                             // Append the check mark to the new spam element
  newli.appendChild(newSpan);                                 // Append the spam element (the check mark) to the list element 

  // Calling the removeElement function to remove element if the check mark is clicked 

  var remove = document.getElementsByClassName("close");
  removeElement(remove);
}

// Appending to the list on typing in the text box and pressing enter

var pressEnter = document.getElementById("action");
pressEnter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {                                  //checks whether the pressed key is "Enter"
        addAction();
    }
});

