var text = '{"students":[' +
    '{"firstname":"Selva", "lastname":"priya", "email":"selva@gmail.com", "contact":"9876543210","telephone":"285415", "city":"theni"},' +
    '{"firstname":"priya", "lastname":"S", "email":"priya@gmail.com", "contact":"9800543210","telephone":"258441", "city":"madurai"},' +
    '{"firstname":"kumar", "lastname":"N", "email":"kumar@gmail.com", "contact":"7896543210", "telephone":"201478","city":"salem"},' +
    '{"firstname":"karthik", "lastname":"raja", "email":"karthik@gmail.com", "contact":"9878952210","telephone":"285415", "city":"trichy"},' +
    '{"firstname":"raja", "lastname":"pandi", "email":"raja@gmail.com", "contact":"9876543210","telephone":"258441", "city":"palani"},' +
    '{"firstname":"lokesh", "lastname":"sharma", "email":"lokesh@gmail.com", "contact":"8456543210", "telephone":"201478","city":"chennai"},' +
    '{"firstname":"devi", "lastname":"sri", "email":"devi@gmail.com", "contact":"8876543210","telephone":"241546", "city":"dindugul"}]}';

var obj = JSON.parse(text);
function importdata() {
    for (var i = 0; i < obj.students.length; i++) {

        var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        document.getElementById('noRecordTR').style.display = "none";

        cell1 = newRow.insertCell(0);
        cell1.innerHTML = obj.students[i].firstname;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = obj.students[i].lastname;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = obj.students[i].email;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = obj.students[i].contact;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = obj.students[i].telephone;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = obj.students[i].city;
        cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    }
}

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
    formData["firstname"] = document.getElementById("firstname").value;
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
    document.getElementById('noRecordTR').style.display = "none";

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    if (data.contact == "") {
        cell4.innerHTML = "-"
    }
    else {
        cell4.innerHTML = data.contact;
    }
    cell5 = newRow.insertCell(4);
    if (data.telephone == "") {
        cell5.innerHTML = "-"
    }
    else {
        cell5.innerHTML = data.telephone;
    }
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
    document.getElementById("telephone").value = selectedRow.cells[4].innerHTML;
    document.getElementById("city").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.email;
    if (formData.contact == "") {
        selectedRow.cells[3].innerHTML = "-"
    }
    else {
        selectedRow.cells[3].innerHTML = formData.contact;
    }
    if (formData.telephone == "") {
        selectedRow.cells[4].innerHTML = "-"
    }
    else {
        selectedRow.cells[4].innerHTML = formData.telephone;
    }

    selectedRow.cells[5].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
    var table = document.getElementById('studentList');
    var rowCount = table.rows.length;
    if (rowCount < 3) {
        document.getElementById('noRecordTR').style.display = "";

    }

}

function deleteall() {
    var tableHeaderRow = 2;
    var table = document.getElementById('studentList');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRow; i < rowCount; i++) {
        table.deleteRow(tableHeaderRow);
    }
    var delCount = table.rows.length;
    if (delCount < 3) {
        document.getElementById('noRecordTR').style.display = "";

    }
}

function validate() {
    isValid = true;
    let validvalue = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    mob = (document.getElementById("contact").value);
    tel = (document.getElementById("telephone").value);

    mobResult = mob.match(validvalue);
    telResult = tel.match(validvalue);

    if (mob == "" && tel != "") {
        contact.required = false;
        contact.optional = true;
    }
    else if (mob != "" && tel == "") {
        telephone.required = false;
        telephone.optional = true;

    }

    if (mob != "") {
        if (!mobResult) {
            document.getElementById("contactValidationError").classList.remove("hide");
            isValid = false;
        }
        else {
            isValid = true;
            if (!document.getElementById("contactValidationError").classList.contains("hide"))
                document.getElementById("contactValidationError").classList.add("hide");
        }
    }
    if (tel != "") {
        if (!telResult) {
            document.getElementById("telephoneValidationError").classList.remove("hide");
            isValid = false;

        }
        else {
            isValid = true;
            if (!document.getElementById("telephoneValidationError").classList.contains("hide"))
                document.getElementById("telephoneValidationError").classList.add("hide");
        }
    }

    return isValid;

}