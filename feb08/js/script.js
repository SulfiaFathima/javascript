var temp = "";
var selectedRow = null;
var pgno;
const pageSize = 6;
var curPage = 1,cpage=1;
var result, result2;
var nPages = 13;
var page, per_page;
function gettable() {
    var url = window.location.search;
    console.log("url:", url);
    const params = new URLSearchParams(url)
    page = (params.get('page'));
    per_page = (params.get('per_page'));
    console.log("page:", page);
    console.log("perPage:", per_page);

    if (page > 0) {
        cpage = page;
        // console.log(curPage);
        importdata(cpage, per_page);

    }
    else {
        // console.log(curPage);
        importdata(cpage, per_page);

    }

    temp = "";
    document.getElementById('data').innerHTML = temp;
}

function previousPage() {

    if (curPage !== 1) {
        console.log("per_page",per_page);
        curPage = curPage - 1;
        console.log("curentPage", curPage);
        temp = "";
        document.getElementById('data').innerHTML = temp;
        importdata(curPage,per_page);
    }
}
function nextPage() {

    if (curPage !== nPages) {
        console.log("per_page",per_page);

        // console.log("HI", curPage);
        curPage = curPage + 1;
        console.log("curentPage", curPage);
        temp = "";
        document.getElementById('data').innerHTML = temp;

        importdata(curPage, per_page);
    }

}


document.querySelector('#prev').addEventListener('click', previousPage, false)
document.querySelector('#next').addEventListener('click', nextPage, false)


function onFormSubmit() {
    var id = document.getElementById('id').value;
    console.log("id", id);
    if (selectedRow == null)
        onFormCreate();
    else
        onFormEdit();
    resetForm();
}


function importdata(a,b) {
    // console.log(a);
    var pgno = a;
     var limit=b;

    fetch('https://reqres.in/api/users?page=' + pgno+ '&per_page=' +limit).then(
        res => {
            res.json().then(
                data => {
                    console.log(data.data);
                    result2 = data.data;
                    

                    if (result2.length > 0) {
                        document.getElementById('noRecordTR').style.display = "none";
                        result2.forEach((itemData) => {
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
    var table = document.getElementById('employeelist');
    var rowCount = table.rows.length;
    console.log(rowCount);
    if (rowCount < 3) {
        console.log("hi")
        document.getElementById('noRecordTR').style.display = "";

    }
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

            //DOM insert
            temp += "<tr>";
            temp += "<td>" + personid + "</td>";
            temp += "<td>" + personemail + "</td>";
            temp += "<td>" + personfname + "</td>";
            temp += "<td>" + personlname + "</td>";
            temp += "<td>" + personavatar + "</td>";
            temp += "<td>" + `<a onClick="onEdit(this)">Edit</a>
                            <a onClick="onDelete(this)">Delete</a>` + "</td>";
            document.getElementById('noRecordTR').style.display = "none";

            document.getElementById('data').innerHTML = temp;
            resetForm();
        }).catch(error => console.error('Error:', error));
};

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[3].innerHTML;
    document.getElementById("avatar").value = selectedRow.cells[4].innerHTML;
    // selectedRow=null;
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
            console.log("data", data)
            //DOM Edit
            // itemData.email + "</td>";

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
        let id = row.cells[0].innerHTML;
        //DOM Delete
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        console.log(id);
        fetch(`https://reqres.in/api/users/${id}`, { method: 'DELETE' })
            .then((res) => {
                console.log('Response:', res)
            }
            );

        resetForm();
    }
    var table = document.getElementById('employeelist');
    var rowCount = table.rows.length;
    if (rowCount < 3) {
        document.getElementById('noRecordTR').style.display = "";

    }
}



