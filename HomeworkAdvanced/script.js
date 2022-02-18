
// (-----------Exercise 01-----------)
console.log('---------------Return and print every property with their values from 23(10) user---------------');


document.getElementById('allUsers').addEventListener('click', function() {
let allUserResult = document.getElementById('allUserResult');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    
    for(let each of users){
        allUserResult.innerHTML += `<li>Id: ${each.id}</li> <li>Name: ${each.name}</li> <li>Username: ${each.username}</li> <li>Email: ${each.email}</li> <li>Street: ${each.address.street}</li> <li>Suite: ${each.address.suite}</li> <li>City: ${each.address.city}</li> <li>Zip code: ${each.address.zipcode}</li> <li>lat: ${each.address.geo.lat}</li> <li>Ing: ${each.address.geo.lng}</li> <li>Phone: ${each.phone}</li> <li>Website: ${each.website}</li> <li>Company Name: ${each.company.name}</li>  <li>Company Catch Phrase: ${each.company.catchPhrase}</li>
        <li>Company Bs: ${each.company.bs}</li><br/>`
    }

})
.catch(error => console.error(error)); 
})

// (-----------Exercise 02-----------)
console.log('---------------Show all albums that have "omnis" in their title---------------');



document.getElementById('omnisTitle').addEventListener('click', function(){
let omnisTitle = document.getElementById('omnisResult');
fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(albums =>{

    let albumArray = [];
    for(let each of albums) {
        if (each.title.search('omnis') != -1) {
            albumArray.push(each);
        }
    }
    for(let each of albumArray) {
        omnisTitle.innerHTML += `<li> User Id:${each.userId}</li> <li>Id:${each.id}</li> <li>Title:${each.title}</li>`
    }
})

})

// (-----------Exercise 03-----------)
console.log('---------------Create new user---------------');

function createNewUser(userId, name, username, email) {
    if (userId > 0 && name !== "" && username !== "" && email !== "") {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
                name: name,
                username: username,
                email: email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(response => response.json())
        .then(function(convertedJson) {
            console.log("Successfully created new user", convertedJson)
        })
        .catch(function(error) {console.error(error)});
    }
}

document.getElementById("createNewUser").addEventListener('click', function() {
    let userIdValue = document.getElementById("userIdValue").value;
    let nameValue = document.getElementById("nameValue").value;
    let usernameValue = document.getElementById("usernameValue").value;
    let emailValue = document.getElementById("emailValue").value;

    createNewUser(userIdValue, nameValue, usernameValue, emailValue );

    
})

// (-----------Exercise 04-----------)
console.log('---------------Delete random TODO---------------');

document.getElementById("deleteRandomTodo").addEventListener('click', function() {
    
    let randomNumber = Math.floor(Math.random() * 201);

    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(todoPost => console.log(`The random number is ${randomNumber}, and will delete the todo ${todoPost.id}`))
    .catch(error => console.error(error));
})