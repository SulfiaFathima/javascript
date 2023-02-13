localStorage.setItem('name', 'ajmal');
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
sessionStorage.setItem('name', 'nazi');
console.log(sessionStorage.getItem('name'));
sessionStorage.setItem('name', 'rabeek');
console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
document.cookie = 'name=sulfia; expires=' + new Date(2023, 10, 18).toUTCString();
document.cookie = 'lastname=fathima; expires=' + new Date(2023, 10, 18).toUTCString();
document.cookie = 'firstname=M';

// let x=document.cookie;
// console.log(x);

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    console.log("name", name);
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log("decodedCookie", decodedCookie);

    let ca = decodedCookie.split(';');
    console.log("ca", ca);

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        console.log("HI", c);
        while (c.charAt(0) == ' ') {
            console.log("11111C", c);
            c = c.substring(1);
            console.log("c222222222", c);
        }
        if (c.indexOf(name) == 0) {
            console.log("c3333333333", c);
            console.log("c4444", name);
            console.log("c555555", name.length);
            console.log("c6666", c.length);
            console.log(c.substring(name.length, c.length));

            return c.substring(name.length, c.length);

        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}