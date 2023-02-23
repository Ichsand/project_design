let name = prompt("Please enter your name:");
const nameElement = document.getElementById("name");
nameElement.innerHTML = name;

const form = document.querySelector('form');
const messageText = document.querySelector('.message-text-container p');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form data
  const name = form.elements.name.value;
  const birthdate = form.elements.birthdate.value;
  const gender = form.elements.gender.value;
  const message = form.elements.message.value;

  if (name=="" || birthdate=="" || gender=="" || message==""){
	alert("Please fill all blank form!!!!!!")
	return false;
  }

document.getElementById("msg-name").innerText = name
document.getElementById("msg-birthdate").innerText = birthdate
document.getElementById("msg-gender").innerText = gender
document.getElementById("msg-message").innerText = message

  // Create the message string
//   const messageString = `Name: ${name}\nBirthdate: ${birthdate}\nGender: ${gender}\nMessage: ${message}`;

  // Print the message string in the message text container
//   messageText.textContent = messageString;
});