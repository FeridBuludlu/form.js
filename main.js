const form = document.getElementById("form")
const table = document.getElementById("table")
const nameInp = document.getElementById("name")
const surnameInp = document.getElementById("surname")
const ageInp = document.getElementById("age")
const nationalityInp = document.getElementById("nationality")
const positionInp = document.getElementById("position")
const experienceInp = document.getElementById("experience")
const users = []

form.addEventListener("submit",(e) => {
    e.preventDefault()
    let newuser = {
        name : nameInp.value,
        surname : surnameInp.value,
        age : ageInp.value,
        nationality : nationalityInp.value,
        position : positionInp.value,
        experience : experienceInp.value,
    }
    users.push(newuser);
    renderUI(users);
    form.reset();
})

function renderUI() {
    let innerHTML = `
    <table class="table table-dark">
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Experience</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>`;
    users.forEach((user, index) => {
        innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.age}</td>
                <td>${user.nationality}</td>
                <td>${user.position}</td>
                <td>${user.experience}</td>
                <td><button onclick="editHandler(${index})">Edit</button></td>
                <td><button onclick="deleteHandler(${index})">Delete</button></td>
            </tr>`;
    });
    innerHTML += `</tbody></table>`;
    table.innerHTML = innerHTML;
}

function deleteHandler(index) {
    users.splice(index, 1);
    renderUI();
}
const editHandler = (index) => {
    let newUserName = prompt("adinizi yeniden daxil edin", users[index].name);
    let newUserSurname = prompt("soyadinizi yeniden daxil edin", users[index].surname);
    let newUserAge = parseInt(prompt("Yasinizi yeniden daxil edin"))

    if (newUserName !== null && newUserSurname !== null) {
        users[index].name = newUserName;
        users[index].surname = newUserSurname;
        users[index].age = newUserAge;
        renderUI();
    }
};

