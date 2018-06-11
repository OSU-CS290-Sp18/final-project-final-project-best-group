// var descs = document.getElementsByClassName("desc-container");
// var chars = document.getElementsByClassName("char-desc");
//
// var allchars = [];
// for(var k = 0; k < chars.length; k++){
//     allchars.push(chars[k].cloneNode([true]));
// }
//
// function search() {
//     var newchars = [];
//
//     descs[0].innerHTML = "";
//     for(var l = 0; l < allchars.length; l++){
//         descs[0].appendChild(allchars[l]);
//     }
//
//     var n;
//     for(var i = 0; i < chars.length; i++){
//         n = chars[i].getElementsByClassName('list-name')[0].innerText.toLowerCase().includes(this.value.toLowerCase());
//
//         if(n)
//             newchars.push(chars[i].cloneNode([true]));
//     }
//
//     descs[0].innerHTML = "";
//
//     for(var j = 0; j < newchars.length; j++){
//         descs[0].appendChild(newchars[j]);
//     }
// }

document.getElementById("search-input").onkeyup = search;
