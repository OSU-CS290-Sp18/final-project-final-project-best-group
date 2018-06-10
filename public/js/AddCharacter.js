
var request = new XMLHttpsRequest();
request.setRequestHeader('Content-Type', 'application/json');

var requestURL = '/name/' + document.getElementById('name-text').innerText + '/submit'
request.open('POST', requestURL);

request.addEventListener('load', function(event) {
    if (event.target.status == 200){
        alert("sucess");
    }
});

var stats = {
    strength: document.getElementById('strength-text').innerText;
    dexterity: document.getElementById('dexterity-text').innerText;
    constitution: document.getElementById('constitution-text').innerText;
    intelligence: document.getElementById('intelligence-text').innerText;
    wisdom: document.getElementById('wisdom-text').innerText;
    charisma: document.getElementById('charisma-text').innerText;

}
var requestBody = JSON.strigify(stats);

function sendData(){
    request.send(requestBody);
}

document.getElementById('submit-input').onclick = sendData;
