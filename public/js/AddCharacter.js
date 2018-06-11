
var request = new XMLHttpsRequest();
request.setRequestHeader('Content-Type', 'application/json');

var requestURL = '/name/' + document.getElementById('name-text').innerText
                    + '/' + document.getElementById('race-text').innerText
                    + '/submit'

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

    strengthsave: document.getElementById('strength-save').checked;
    athletics: document.getElementById('athletics').checked;

    dexsave: document.getElementById('dexterity-save').checked;
    acrobatics: document.getElementById('acrobatics').checked;
    sleight: document.getElementById('sleight-of-hand').checked;
    stealth: document.getElementById('stealth').checked;

    consave: document.getElementById('constitution-save').checked;

    intsave: document.getElementById('intelligence-save').checked;
    arcana: document.getElementById('arcana').checked;
    history: document.getElementById('history').checked;
    investigation: document.getElementById('investigation').checked;
    nature: document.getElementById('nature').checked;
    religion: document.getElementById('religion').checked;

    wisdomsave: document.getElementById('wisdom-save').checked;
    animal: document.getElementById('animal-handling').checked;
    insight: document.getElementById('insight').checked;
    medicine: document.getElementById('medicine').checked;
    perception: document.getElementById('perception').checked;
    survival: document.getElementById('survival').checked;

    charismasave: document.getElementById('charisma-save').checked;
    deception: document.getElementById('deception').checked;
    intimidation: document.getElementById('intimidation').checked;
    performance: document.getElementById('performance').checked;
    pursuasion: document.getElementById('pursuasion').checked;

}

function fillData(){
    document.getElementById('name-text').innerText = oldstats.name;
    document.getElementById('class-text').innerText = oldstats.class;
    document.getElementById('level-text').innerText = oldstats.level;
    document.getElementById('background-text').innerText = oldstats.background;
    document.getElementById('race-text').innerText = oldstats.race;
    document.getElementById('alignment-text').innerText = oldstats.alignment;
    document.getElementById('exp-text').innerText = oldstats.exp;

    document.getElementById('ac-text').innerText = oldstats.ac;
    document.getElementById('initiative-text').innerText = oldstats.initiative;
    document.getElementById('hp-text').innerText = oldstats.hp;
    document.getElementById('speed-text').innerText = oldstats.speed;

    document.getElementById('pbonus-text').innerText = oldstats.pbonus;
    document.getElementById('pp-text').innerText = oldstats.pp;

    document.getElementById('equipment-text').innerText = oldstats.equipment;
    document.getElementById('proficiencies-text').innerText = oldstats.proficiencies;
    document.getElementById('feats-text').innerText = oldstats.feats;

    document.getElementById('strength-text').innerText = oldstats.strength;
    document.getElementById('strength-text').innerText = oldstats.strengthmod;

    document.getElementById('dexterity-text').innerText = oldstats.dexterity;
    document.getElementById('dexterity-text').innerText = oldstats.dexmod;

    document.getElementById('constitution-text').innerText = oldstats.constitution;
    document.getElementById('strength-text').innerText = oldstats.conmod

    document.getElementById('intelligence-text').innerText = oldstats.intelligence;
    document.getElementById('strength-text').innerText = oldstats.intmod;

    document.getElementById('wisdom-text').innerText = oldstats.wisdom;
    document.getElementById('strength-text').innerText = oldstats.wisdommod;

    document.getElementById('charisma-text').innerText = oldstats.charisma;
    document.getElementById('strength-text').innerTex = oldstats.charismamod;

    document.getElementById('strength-save').checked = oldstats.strengthsave;
    document.getElementById('athletics').checked = oldstats.athletics;

    document.getElementById('dexterity-save').checked = oldstats.dexsave;
    document.getElementById('acrobatics').checked = oldstats.acrobatics;
    document.getElementById('sleight-of-hand').checked = oldstats.sleight;
    document.getElementById('stealth').checked = oldstats.stealth;

    document.getElementById('constitution-save').checked = oldstats.consave;

    document.getElementById('intelligence-save').checked = oldstats.intsave;
    document.getElementById('arcana').checked = oldstats.arcana;
    document.getElementById('history').checked = oldstats.history;
    document.getElementById('investigation').checked = oldstats.investigation;
    document.getElementById('nature').checked = oldstats.nature;
    document.getElementById('religion').checked = oldstats.religion;

    document.getElementById('wisdom-save').checked = oldstats.wisdomsave;
    document.getElementById('animal-handling').checked = oldstats.animal;
    document.getElementById('insight').checked = oldstats.insight;
    document.getElementById('medicine').checked = oldstats.medicine;
    document.getElementById('perception').checked = oldstats.perception;
    document.getElementById('survival').checked = oldstats.survival;

    document.getElementById('charisma-save').checked = oldstats.charismasave;
    document.getElementById('deception').checked = oldstats.deception;
    document.getElementById('intimidation').checked = oldstats.intimidation;
    document.getElementById('performance').checked = oldstats.performance;
    document.getElementById('pursuasion').checked = oldstats.pursuasion;

}

var requestBody = JSON.strigify(stats);

function sendData(){
    request.send(requestBody);
}

document.getElementById('submit-input').onclick = sendData;
