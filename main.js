const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
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

function deleteUser(i){
    userList.splice(i, 1)
    localStorage.setItem("userList", JSON.stringify(userList));
    displayList();
}

function displayList() {
    if(localStorage.getItem("userList")!=null){
        userList = JSON.parse(localStorage.getItem("userList"))
    }
    users.innerHTML = '';
    for (let i = 0; i < userList.length; i++) {
        const li = document.createElement('li');
        let content = "<div>"+userList[i].name+" - "+userList[i].email+"<button class=\"btn\" onclick=\"deleteUser("+i+")\">Delete</button></div>";
        li.innerHTML = content;
        users.appendChild(li);
    }
}