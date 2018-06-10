
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
    name: document.getElementById('name-text').innerText;
    class: document.getElementById('class-text').innerText;
    level: document.getElementById('level-text').innerText;
    background: document.getElementById('background-text').innerText;
    race: document.getElementById('race-text').innerText;
    alignment: document.getElementById('alignment-text').innerText;
    exp: document.getElementById('exp-text').innerText;

    ac: document.getElementById('ac-text').innerText;
    initiative: document.getElementById('initiative-text').innerText;
    hp: document.getElementById('hp-text').innerText;
    speed: document.getElementById('speed-text').innerText;

    pbonus: document.getElementById('pbonus-text').innerText;
    pp: document.getElementById('pp-text').innerText;

    equipment: document.getElementById('equipment-text').innerText;
    proficiencies: document.getElementById('proficiencies-text').innerText;
    feats: document.getElementById('feats-text').innerText;

    strength: document.getElementById('strength-text').innerText;
    strengthmod: (parseInt(document.getElementById('strength-text').innerText)-10)/2;

    dexterity: document.getElementById('dexterity-text').innerText;
    dexmod: (parseInt(document.getElementById('dexterity-text').innerText)-10)/2;

    constitution: document.getElementById('constitution-text').innerText;
    conmod: (parseInt(document.getElementById('strength-text').innerText)-10)/2;

    intelligence: document.getElementById('intelligence-text').innerText;
    intmod: (parseInt(document.getElementById('strength-text').innerText)-10)/2;

    wisdom: document.getElementById('wisdom-text').innerText;
    wisdommod: (parseInt(document.getElementById('strength-text').innerText)-10)/2;

    charisma: document.getElementById('charisma-text').innerText;
    charismamod: (parseInt(document.getElementById('strength-text').innerText)-10)/2;



}
var requestBody = JSON.strigify(stats);

function sendData(){
    request.send(requestBody);
}

document.getElementById('submit-input').onclick = sendData;
