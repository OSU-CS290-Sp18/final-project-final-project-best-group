var descs = document.getElementsByClassName("desc-container");

var alldescs = [];
for(var k = 0; k < descs[0].length; k++){
    alldescs.push(descs[0].getElementsByClassName('desc-container')[k].cloneNode([true]));
}

function remove() {
    var newdescs = [];

    descs[0].innerHTML = "";
    for(var l = 0; l < alldescs.length; l++){
        descs[0].appendChild(alldescs[l]);
    }

    var n;
    var desc = document.getElementsByClassName('desc-container');
    for(var i = 0; i < descs[0].length; i++){
        n = desc[i].getElementsByClassName('desc-text')[0].innerText.toLowerCase().includes(this.value.toLowerCase());

        if(n)
            newdescs.push(twit[i].cloneNode([true]));
    }

    descs[0].innerHTML = "";

    for(var j = 0; j < newdescs.length; j++){
        descs[0].appendChild(newdescs[j]);
    }
}

document.getElementById('search-input').onkeyup = search;
