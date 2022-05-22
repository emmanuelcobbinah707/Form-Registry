const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const userList = [];

    if(nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please fill all fields';
        msg.classList.add('error');

        setTimeout(() => {msg.remove()}, 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} 
        : ${emailInput.value}`));

        users.appendChild(li);


        // nameInput.value = '';
        // emailInput.value = '';

    }

    userList.push({"name":nameInput.value, "email":emailInput.value});
    localStorage.setItem("userList":JSON.stringify(userList));
}