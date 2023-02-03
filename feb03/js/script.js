var temp = "";
var selectedRow = null
function onFormSubmit() {
    var id = document.getElementById('id').value;
    console.log("id",id);
    if (selectedRow == null)
        onFormCreate();
    else
        onFormEdit();
        // selectedRow = null
    resetForm();
}

function importdata() {
    fetch('https://reqres.in/api/users').then(
        res => {
            res.json().then(
                data => {
                    console.log(data);
                    console.log(data.data);

                    if (data.data.length > 0) {
                        data.data.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td>" + itemData.id + "</td>";
                            temp += "<td>" + itemData.email + "</td>";
                            temp += "<td>" + itemData.first_name + "</td>";
                            temp += "<td>" + itemData.last_name + "</td>";
                            temp += "<td>" + itemData.avatar + "</td>";
                            temp += "<td>" + `<a onClick="onEdit(this)">Edit</a>
                            <a onClick="onDelete(this)">Delete</a>` + "</td>";
                        });
                        document.getElementById('data').innerHTML = temp;
                    }
                }
            )
        }
    )
}


function resetForm() {
    document.getElementById('id').value = "";
    document.getElementById('email').value = "";
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('avatar').value = "";
}

function onFormCreate() {
    let personid = document.getElementById('id').value;
    let personemail = document.getElementById('email').value;
    let personfname = document.getElementById('fname').value;
    let personlname = document.getElementById('lname').value;
    let personavatar = document.getElementById('avatar').value;
    console.log(personfname);
    console.log(personlname);
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify({
            id: personid,
            first_name: personfname,
            last_name: personlname,
            email: personemail,
            avatar: personavatar

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            console.log('Response:', response)

            return response.json()
        })
        .then(function (data) {
            console.log(data)

            temp += "<tr>";
            temp += "<td>" + personid + "</td>";
            temp += "<td>" + personemail + "</td>";
            temp += "<td>" + personfname + "</td>";
            temp += "<td>" + personlname + "</td>";
            temp += "<td>" + personavatar + "</td>";
            temp += "<td>" + `<a onClick="onEdit(this)">Edit</a>
                            <a onClick="onDelete(this)">Delete</a>` + "</td>";
            document.getElementById('data').innerHTML = temp;
            // resetForm();
        }).catch(error => console.error('Error:', error));
};

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[3].innerHTML;
    document.getElementById("avatar").value = selectedRow.cells[4].innerHTML;

}
function onFormEdit() {
    let personid = document.getElementById('id').value;
    let personemail = document.getElementById('email').value;
    let personfname = document.getElementById('fname').value;
    let personlname = document.getElementById('lname').value;
    let personavatar = document.getElementById('avatar').value;
    console.log(personfname);
    console.log(personlname);
    fetch(`https://reqres.in/api/users/${personid}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: personid,
            first_name: personfname,
            last_name: personlname,
            email: personemail,
            avatar: personavatar

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            console.log('Response:', response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            selectedRow.cells[0].innerHTML = personid;
            selectedRow.cells[1].innerHTML = personemail;
            selectedRow.cells[2].innerHTML = personfname;
            selectedRow.cells[3].innerHTML = personlname;
            selectedRow.cells[4].innerHTML = personavatar;

        }).catch(error => console.error('Error:', error));
};

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        let id= row.cells[0].innerHTML;
        // document.getElementById("employeetable").deleteRow(row.rowIndex);

        console.log(id);
        fetch(`https://reqres.in/api/users/${id}`, { method: 'DELETE' })
        .then((res) => {
            console.log('Response:', res)
        }
    );

resetForm();



    }
}



