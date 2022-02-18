class User {
	constructor(user, pass){
		this.user = user,
		this.pass = pass
	}
}

let objPeople = [	
	{ 
		user: "admin",
		pass: "admin"
	}

];


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

      
	
	
createAccountForm.addEventListener("submit", e => {
    e.preventDefault();
		
	document.getElementById("welcome").innerHTML = "User successfully created!";
	let newUser = new User();   
	newUser.user = document.getElementById("signupUsername").value ; 
	newUser.pass = document.getElementById("signupPassword").value;
	objPeople.push(newUser);
	console.log(objPeople);
});
	
	
	
loginForm.addEventListener("submit", e => {
    e.preventDefault();

	let userInput = document.getElementById("loginUsername").value;
	let passInput = document.getElementById("loginPassword").value;
		
	for(let i = 0; i < objPeople.length; i++) {
		if(userInput == objPeople[i].user && passInput == objPeople[i].pass) {
			console.log(userInput + " is logged in!!!");
			document.getElementById("welcome").innerHTML = `Welcome ${[userInput.value]} to our awesome app!`;
			loginForm.classList.add("form--hidden");
			createAccountForm.classList.add("form--hidden");
				
		return;
		}
		document.getElementById("myDiv").innerHTML += "Username: " + objPeople[i].user + " Password: "+ objPeople[i].pass + "<br>";
	}

    setFormMessage(loginForm, "error", "Invalid username/password combination");
});  
	

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 4) {
                setInputError(inputElement, "Username must be at least 4 characters in length");
            }
        });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
        });
    });
});