function addAction () {
  var action = document.getElementById("action").value;  // Get the text from the text bar
  var newli = document.createElement('li');              // Creating a new list item
  var t = document.createTextNode(action);               // Create a text node with the text from text bar
  //document.body.appendChild(t);
  newli.appendChild(t);                                  // Appending the text node to the new list item 
  document.getElementById("list").appendChild(newli);    // Appending the list item to the main list 
  document.getElementById("action").value = "";          // Setting the text bar to blank
}

