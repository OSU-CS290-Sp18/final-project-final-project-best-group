var container = document.getElementsByClassName("char-container");
var chars = document.getElementsByClassName("char-desc");

var allchars = [];
for(var k = 0; k < chars.length; k++){
    allchars.push(chars[k].cloneNode([true]));
}

function search() {
    var newchars = [];

    container[0].innerHTML = "";
    for(var l = 0; l < allchars.length; l++){
        container[0].appendChild(allchars[l]);
    }

    var n;
    for(var i = 0; i < chars.length; i++){
        n = chars[i].getElementsByClassName('list-name')[0].innerText.toLowerCase().includes(this.value.toLowerCase());

        if(n)
            newchars.push(chars[i].cloneNode([true]));
    }

    container[0].innerHTML = "";

    for(var j = 0; j < newchars.length; j++){
        container[0].appendChild(newchars[j]);
    }
}

document.getElementById("search-input").onkeyup = search;
