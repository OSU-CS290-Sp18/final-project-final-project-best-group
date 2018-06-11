var chars = document.getElementsByClassName("char-container");

var allchars = [];
for(var k = 0; k < char[0].length; k++){
    allchars.push(chars[0].getElementsByClassName('char')[k].cloneNode([true]));
}

function remove() {
    var newchars = [];

    chars[0].innerHTML = "";
    for(var l = 0; l < allchars.length; l++){
        chars[0].appendChild(allchars[l]);
    }

    var n;
    var char = document.getElementsByClassName("char");
    for(var i = 0; i < chars[0].length; i++){
        n = char[i].getElementsByClassName('char-text')[0].innerText.toLowerCase().includes(this.value.toLowerCase());

        if(n)
            newchars.push(twit[i].cloneNode([true]));
    }

    chars[0].innerHTML = "";

    for(var j = 0; j < newchars.length; j++){
        chars[0].appendChild(newchars[j]);
    }
}

document.getElementById('search-input').onkeyup = search;
