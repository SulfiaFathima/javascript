// import data from '../example.json' assert { type: 'JSON' };

// fetch('../example.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const data = require('./example.json');
// console.log(data);

//    data=JSON.parse(data);
//    console.log(data[1].firstname);

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

}
function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["telephone"] = document.getElementById("telephone").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.telephone;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
    document.getElementById("telephone").value = selectedRow.cells[4].innerHTML;
    document.getElementById("city").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.contact;
    selectedRow.cells[4].innerHTML = formData.telephone;
    selectedRow.cells[5].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    mob = (document.getElementById("contact").value);
    tel = (document.getElementById("telephone").value);
    if (mob == "" && tel == "") {
        isValid = false;
        document.getElementById("contactValidationError").classList.remove("hide");
        document.getElementById("telephoneValidationError").classList.remove("hide");
    }
    else if (mob == "" && tel != "") {
        isValid = true;
        // if (!document.getElementById("telephoneValidationError").classList.contains("hide"))
        //     document.getElementById("telephoneValidationError").classList.add("hide");
    }
    else if (mob != "" && tel == "") {
        isValid = true;
        // if (!document.getElementById("telephoneValidationError").classList.contains("hide"))
        //     document.getElementById("telephoneValidationError").classList.add("hide");
    }
    return isValid;

}