var data = document.getElementById('input');
var data1 = document.getElementById('input1');
var data2 = document.getElementById('input2');
var btn = document.getElementById('btn');
var header = document.getElementById('header');
var elemNum = 0;

// Retrieving data using the exact location of the child element 

function displayDBcontent(elemNum,data){

	// Creating new list element 
	var newItem = document.createElement("li");

	// Setting reference to the exactchild element from which we want to retrieve data 
	var displayRef = firebase.database().ref().child("Element"+elemNum);

	// Retreiving data from the child element 
	displayRef.on("value",function (snapshot){
		var data = snapshot.val();            // Data is stored in snapshot and can be retrieved using snapshot.val()
		console.log(data);                    // Displaying retreived data on console for debugging 
	});

	// Creating text node from the retreived data 
	var text = document.createTextNode(data);

	// New list item ready
	newItem.appendChild(text);

	// Appending the item to the listto display using HTML
	document.getElementById("List").appendChild(newItem);

	//Making the text field blank
	document.getElementById("input2").value="";
}

function addToDB(){

	// Set a reference to the root object
	var firebaseRef = firebase.database().ref();

	// Create a key by the name of "Text" and assigning its value to "Test Value"
	firebaseRef.child("Text").set("Test Value");

    // Set a reference to the key by the ID "Text" 
	var tempRef = firebaseRef.child("Text");

	// Replacing the header by the value of the key "Text"
	tempRef.on('value', snap => header.innerText = snap.val());

	// Creating a new key "New Text" and assiging it the value typed in the text box 
	firebaseRef.child("Text").set(data.value);

}

function addToDB1(){

	// Set a reference to the root object
	var firebaseRef = firebase.database().ref();

	// Generate a random key everytime and assign value to it
	firebaseRef.push(data1.value);

}

function addToDB2(){

	// Setting reference to database
	var firebaseRef = firebase.database().ref();

	//Increasing element count
	elemNum++;

	// Setting the child name and initializing it
	firebaseRef.child("Element"+elemNum).set(data2.value);

	// Function call
	displayDBcontent(elemNum,data2.value);
}