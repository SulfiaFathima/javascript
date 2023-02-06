var temp = "";
var selectedRow = null;

function onFormSubmit() {
    var id = document.getElementById('id').value;
    console.log("id", id);
    if (selectedRow == null)
        onFormCreate();
    else
        onFormEdit();
    // selectedRow = null
    resetForm();
}
// function prevPage() {
//     console.log("prev");
//     if (current_page > 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }

// function nextPage() {
//     console.log("next");

//     if (current_page < numPages) {
//         current_page++;
//         changePage(current_page);
//     }
// }
// function changePage(page) {
//     console.log("change");

//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var listing_table = document.getElementById("listingTable");
//     var page_span = document.getElementById("page");

//     // Validate page
//     if (page < 1) page = 1;
//     if (page > numPages) page = numPages;

//     listing_table.innerHTML = "";

//     for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
//         // listing_table.innerHTML += objJson[i].adName + "<br>";
//     }
//     page_span.innerHTML = page;
//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }

function importdata() {
    var current_page = 1;
    var records_per_page = 6;
    fetch('https://reqres.in/api/users').then(
        res => {
            res.json().then(
                data => {
                    numPages = data.total_pages;
                    console.log(data);
                    console.log(data.data);
                    console.log("page", data.page);
                    console.log("per_page", data.per_page);
                    console.log("total", data.total);
                    console.log("total_pages", data.total_pages);
                    apiUrl = data['next_page'];
                    if(apiUrl != '' && apiUrl != null){
                        console.log("HI");
                        fetch('https://reqres.in/api/users');
                    }
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
                        // changePage(1);
                    }


                   
                    





                    // if (data.data.length > 0) {
                    //     data.data.forEach((itemData) => {
                    //         temp += "<tr>";
                    //         temp += "<td>" + itemData.id + "</td>";
                    //         temp += "<td>" + itemData.email + "</td>";
                    //         temp += "<td>" + itemData.first_name + "</td>";
                    //         temp += "<td>" + itemData.last_name + "</td>";
                    //         temp += "<td>" + itemData.avatar + "</td>";
                    //         temp += "<td>" + `<a onClick="onEdit(this)">Edit</a>
                    //         <a onClick="onDelete(this)">Delete</a>` + "</td>";
                    //     });
                    //     document.getElementById('data').innerHTML = temp;
                    //     changePage(1);
                    // }
                }
            )
        }
    )


    // function paginated_fetch(
    //     url = is_required("https://reqres.in/api/users"), // Improvised required argument in JS
    //     page = 1,
    //     previousResponse = []
    //   ) {
    //     return fetch(`${url}&page=${page}`) // Append the page number to the base URL
    //       .then(response => response.json())
    //       .then(newResponse => {
    //         const response = [...previousResponse, ...newResponse]; // Combine the two arrays

    //         if (newResponse.length !== 0) {
    //           page++;

    //           return paginated_fetch(url, page, response);
    //         }

    //         return response;
    //       });
    //   }


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

            // fetch(`https://reqres.in/api/users/${personid}`).then(
            //     res => {
            //         res.json().then(
            //             data => {
            //                 console.log(data);
            //                 console.log(data.data);

            //                 if (data.data.length > 0) {
            //                     data.data.forEach((itemData) => {

            //                         selectedRow.cells[0].innerHTML = itemData.id;
            //                         selectedRow.cells[1].innerHTML = itemData.email;
            //                         selectedRow.cells[2].innerHTML = itemData.first_name;
            //                         selectedRow.cells[3].innerHTML = itemData.last_name;
            //                         selectedRow.cells[4].innerHTML = itemData.avatar;

            //         temp += "<tr>";
            //         temp += "<td>" + itemData.id + "</td>";
            //         temp += "<td>" + itemData.email + "</td>";
            //         temp += "<td>" + itemData.first_name + "</td>";
            //         temp += "<td>" + itemData.last_name + "</td>";
            //         temp += "<td>" + itemData.avatar + "</td>";
            //         temp += "<td>" + `<a onClick="onEdit(this)">Edit</a>
            // <a onClick="onDelete(this)">Delete</a>` + "</td>";
            //                     });
            //                     document.getElementById('data').innerHTML = temp;
            //                 }
            //             }
            //         )
            //     }
            // )

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
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        console.log(id);
        fetch(`https://reqres.in/api/users/${id}`, { method: 'DELETE' })
            .then((res) => {
                console.log('Response:', res)
            }
            );

        resetForm();
    }
}



