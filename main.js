const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('.users');
const deleteBtn = document.querySelector('#deleteBtn');

let userList = [];

myForm.addEventListener('submit', onSubmit);

//load list on page load
displayList();

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please fill all fields';
        msg.classList.add('error');
        setTimeout(() => { msg.remove() }, 3000)
    } else {
        //add the to the list and store in localStorage
        addUser();
    }
}

function addUser() {
    userList.push({ name: nameInput.value, email: emailInput.value });
    localStorage.setItem("userList", JSON.stringify(userList))
    nameInput.value = '';
    emailInput.value = '';
    displayList();
}

function displayList() {
    if(localStorage.getItem("userList")!=null){
        userList = JSON.parse(localStorage.getItem("userList"))
    }
    users.innerHTML = '';
    for (let i = 0; i < userList.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${userList[i].name} 
        : ${userList[i].email}`));
        users.appendChild(li);
    }
}

function deleteUser() {
  userList.pop();
  localStorage.setItem("userList", JSON.stringify(userList))
  displayNewList();
}

function displayNewList() {
    if(localStorage.getItem("userList")!=null){
        userList = JSON.parse(localStorage.getItem("userList"))
    }
    users.innerHTML = '';
    for (let i =0; i < userList.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${userList[i].name} 
        : ${userList[i].email}`));
        users.appendChild(li);
    }
}