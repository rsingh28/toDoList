var count = 0;                                                // This variable holds the number of entries in the list

// Deleting the element on clicking the check-mark appended to the end of the data entry

function removeElement(remove) {
	for(var i=0 ; i<remove.length ; i++){                     // Parse through all items with check marks  
		remove[i].onclick = function(){                       // Create a fuction to be called on clicking the check mark
			var item = this.parentElement;                    // Get the parent element of the check mark
			item.style.display="none";                        // Remove it from the list 

			// The following steps are for updating the message that shows the number of elements in the list

			count--;                                                                // Since the element got removed, decrease 1 from the total number of elements
			var message = document.querySelector("#count").textContent;             // Get the element with the ID = count and store its value in "message" variable
			if(count==0){                                                           // Self-expanatory if-else block 
				message = "You have nothing in you to-do List!!";
				document.querySelector("#count").textContent=message;               // Display the message 
			}
			else if(count==1){
				message = "You have " + count + " item in your to-do List";
				document.querySelector("#count").textContent=message;
			}
			else{
				message = "You have " + count + " items in your to-do List";
				document.querySelector("#count").textContent=message;
			}
			
		}
	}
}

// Adding a new element to the list on clicking the button 

function addAction () {
	var action = document.getElementById("action").value;           // Get the text from the text bar

	if(action.trim()){                   	                        // Trim all the unecessary white-spaces to prevent adding empty strings to the list

 		var newli = document.createElement('li');                   // Creating a new list item
  		var t = document.createTextNode(action);                    // Create a text node with the text from text bar
  		newli.appendChild(t);                                       // Setting the new list item with the value of text node 
  		document.getElementById("list").appendChild(newli);         // Appending the list item to the main list 
  		document.getElementById("action").value = "";               // Setting the text bar to blank

  		// Adding a check mark in front of the added element 
  
  		var newSpan = document.createElement("SPAN");               // New span element
  		var checkMark = document.createTextNode("\u2717");          // Creating a check mark using uni-code
  		newSpan.className = "close";                                // Will be used furthur to basically remove the item on clicking the check mark
  		newSpan.appendChild(checkMark);                             // Append the check mark to the new spam element
  		newli.appendChild(newSpan);                                 // Append the spam element (the check mark) to the list element 

  		// The following steps are for updating the message that shows the number of elements in the list

		count++;                                                                // Since the element got removed, decrease 1 from the total number of elements
		var message = document.querySelector("#count").textContent;             // Get the element with the ID = count and store its value in "message" variable
		if(count==0){                                                           // Self-expanatory if-else block 
			message = "You have nothing in you to-do List!!";
			document.querySelector("#count").textContent=message;               // Display the message 
		}
		else if(count==1){
			message = "You have " + count + " item in your to-do List";
			document.querySelector("#count").textContent=message;
		}
		else{
			message = "You have " + count + " items in your to-do List";
			document.querySelector("#count").textContent=message;
		}

  		// Calling the removeElement function to remove element if the check mark is clicked 

  		var remove = document.getElementsByClassName("close");
  		removeElement(remove);

  	}
}

// Add a "checked" symbol when clicking on a list item
var checkSymbol = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Appending to the list on typing in the text box and pressing enter

var pressEnter = document.getElementById("action");
pressEnter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {                                  //checks whether the pressed key is "Enter"
        addAction();
    }
});

