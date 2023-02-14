var text = '{"mobiles":[' +
    '{"id":"1", "category":"mobile", "img":"/images/phone/phone1.jpg", "title":"OPPO","desc":"285415", "price":"20000"},' +
    '{"id":"2", "category":"mobile", "img":"./images/phone/phone2.jpg", "title":"9800543210","desc":"258441", "price":"15000"},' +
    '{"id":"3", "category":"mobile", "img":"./images/phone/phone3.jpg", "title":"7896543210", "desc":"201478","price":"salem"},' +
    '{"id":"4", "category":"mobile", "img":"./images/phone/phone4.jpg", "title":"9878952210","desc":"285415", "price":"trichy"},' +
    '{"id":"5", "category":"mobile", "img":"./images/phone/phone5.jpg", "title":"9876543210","desc":"258441", "price":"palani"},' +
    '{"id":"6", "category":"mobile", "img":"lokesh@gmail.com", "title":"8456543210", "desc":"201478","price":"chennai"},' +
    '{"id":"7", "category":"mobile", "img":"devi@gmail.com", "title":"8876543210","desc":"241546", "price":"dindugul"},'+
    '{"id":"8", "category":"mobile", "img":"selva@gmail.com", "title":"OPPO","desc":"285415", "price":"20000"},' +
    '{"id":"9", "category":"mobile", "img":"priya@gmail.com", "title":"9800543210","desc":"258441", "price":"15000"},' +
    '{"id":"10", "category":"mobile", "img":"kumar@gmail.com", "title":"7896543210", "desc":"201478","price":"salem"},' +
    '{"id":"11", "category":"mobile", "img":"karthik@gmail.com", "title":"9878952210","desc":"285415", "price":"trichy"},' +
    '{"id":"12", "category":"mobile", "img":"raja@gmail.com", "title":"9876543210","desc":"258441", "price":"palani"},' +
    '{"id":"13", "category":"mobile", "img":"lokesh@gmail.com", "title":"8456543210", "desc":"201478","price":"chennai"},' +
    '{"id":"14", "category":"mobile", "img":"devi@gmail.com", "title":"8876543210","desc":"241546", "price":"dindugul"}]}';
    var obj = JSON.parse(text);
    console.log(obj.mobiles);
    function getMobiles(){
        for (var i = 0; i < obj.mobiles.length; i++) {
console.log(obj.mobiles[i])
var mobdiv = document.createElement('div');

document.getElementById("mob").innerHTML=obj.mobiles[i].id;
        }
    }
    

