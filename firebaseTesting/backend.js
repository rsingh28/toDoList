var data = document.getElementById('input');
var data1 = document.getElementById('input1');
var btn = document.getElementById('btn');
var header = document.getElementById('header');

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