function importdata() {
    fetch('https://reqres.in/api/users').then(
        res => {
            res.json().then(
                data => {
                    console.log(data);
                    console.log(data.data);

                    if (data.data.length > 0) {
                        var temp = "";
                        data.data.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td>" + itemData.id + "</td>";
                            temp += "<td>" + itemData.email + "</td>";
                            temp += "<td>" + itemData.first_name + "</td>";
                            temp += "<td>" + itemData.last_name + "</td>";
                            temp += "<td>" + itemData.avatar + "</td>";
                        });
                        document.getElementById('data').innerHTML = temp;
                    }
                }
            )
        }
    )
}

// fetch('https://reqres.in/api/users', {
// 	method: "POST",
// 	body: JSON.stringify(
//         {
//             "name": "morpheus",
//             "job": "leader"
//         }
//     ),
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8"
// 	}
// })
// .then(response => response.json())
// .then(json => console.log(json));



formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: 
      JSON.stringify(
                
                    new FormData(formElem)
                
            ),

    });

    let result = await response.json();
    console.log(result);
  };

