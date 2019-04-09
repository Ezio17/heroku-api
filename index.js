'use strict'

let userList = document.getElementById('user-list')
let form = document.getElementById('form')

let usersList = [];
render()

form.onsubmit = (event) => {
  event.preventDefault();

  const user = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    email: form.elements.email.value,
    password: form.elements.password.value
  };

  createUser(user)
};

function createUser(user) {
  fetch('https://heroku-api-test-shcherba.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then(data => {
      usersList = data;
      render();
    });
}


fetch('https://heroku-api-test-shcherba.herokuapp.com/users')
  .then(response => response.json())
  .then(users => {
    usersList = users
    render()
  })

function render() {
  if (usersList.length === 0) {
    return
  }

  userList.innerHTML = ` 
  <tr>
   <th class="th">First Name</th>
   <th class="th">Last Name</th>
   <th class="th">Email</th>
   <th class="th">Password</th>
  <tr>
  ${
    usersList.map(user => `
    <tr>
     <td class="td">${user.firstName}</td>
     <td class="td">${user.lastName}</td>
     <td class="td">${user.email}</td>
     <td class="td">${user.password}</td>
   </tr>
  `).join('')
    }`
}

