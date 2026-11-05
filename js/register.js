
// 1. LAY CAC PHAN TU HTML
let form = document.getElementById("registerForm");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let contentInput = document.getElementById("content");

let tableBody = document.getElementById("tableBody");


// 2. XU LY SU KIEN DANG KY
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Lay gia tri tu Form
    let name = nameInput.value;
    let email = emailInput.value;
    let content = contentInput.value;

    // Tao hang moi
    let row = document.createElement("tr");

    // Tao 4 o
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");

    // Gan du lieu
    cell1.textContent = tableBody.rows.length + 1;
    cell2.textContent = name;
    cell3.textContent = email;
    cell4.textContent = content;

    // Them cac o vao hang
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    // Them hang vao bang
    tableBody.appendChild(row);

});
