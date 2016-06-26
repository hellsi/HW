var key = document.getElementsByName("key")[0];
var value = document.getElementsByName("value")[0];
var all = document.getElementById("allCookies");

document.getElementById("addCookie").addEventListener("click", addCookie);
document.getElementById("showAll").addEventListener("click", showAll);


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    var expMs = d.getTime() + (exdays*24*60*60*1000);
    d.setTime(expMs);
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function showAll () {
    all.innerHTML = '';
    var cookiesStrings = document.cookie.split(";");

    for(var i = 0; i < cookiesStrings.length; i++){
                var cookie = cookiesStrings[i].split('=');
                var li = document.createElement('li');
                
                var key = document.createElement('span');
                key.appendChild(document.createTextNode(cookie[0]));
                
                var value = document.createElement('span');
                value.appendChild(document.createTextNode(cookie[1]));
                
                li.appendChild(key);
                li.appendChild(document.createTextNode(': '));
                li.appendChild(value);
                
                all.appendChild(li);
            }
}

function addCookie () {
    setCookie(key.value, value.value, 2);
}


document.getElementsByTagName("input")[0].addEventListener


// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//             }
//         }
//     return "";
// }
