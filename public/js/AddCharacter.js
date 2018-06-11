
var request = new XMLHttpRequest();



request.addEventListener('load', function(event) {
    if (event.target.status == 200){
        alert("sucess");
    }
});


function fillData(){
    document.getElementById('name-text').innerText = oldstats.name;
    document.getElementById('class-text').innerText = oldstats.class;
    document.getElementById('level-text').innerText = oldstats.level;
    document.getElementById('background-text').innerText = oldstats.background;
    document.getElementById('race-text').innerText = oldstats.race;
    document.getElementById('alignment-text').innerText = oldstats.alignment;
    document.getElementById('experience-text').innerText = oldstats.exp;

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

    document.getElementById('dexterity-text').innerText = oldstats.dexterity;

    document.getElementById('constitution-text').innerText = oldstats.constitution;

    document.getElementById('intelligence-text').innerText = oldstats.intelligence;

    document.getElementById('wisdom-text').innerText = oldstats.wisdom;

    document.getElementById('charisma-text').innerText = oldstats.charisma;

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


function checkData() {
    var n = true;

    if( parseInt(document.getElementById('strength-text').value) < 2 ||
        parseInt(document.getElementById('strength-text').value) > 20 ){
            document.getElementById('strength-text').backgroundcolor = "red";
            //document.getElementById('strength-text').value = "";
            n = false;
        }

    if( parseInt(document.getElementById('dexterity-text').value) < 2 ||
        parseInt(document.getElementById('dexterity-text').value) > 20 ){
            document.getElementById('dexterity-text').backgroundcolor = "red";
            n = false;
        }

    if( parseInt(document.getElementById('constitution-text').value) < 2 ||
        parseInt(document.getElementById('constitution-text').value) > 20 ){
            document.getElementById('constitution-text').backgroundcolor = "red";
            n = false;
        }

    if( parseInt(document.getElementById('intelligence-text').value) < 2 ||
        parseInt(document.getElementById('intelligence-text').value) > 20 ){
            document.getElementById('intelligence-text').backgroundcolor = "red";
            n = false;
        }

    if( parseInt(document.getElementById('wisdom-text').value) < 2 ||
        parseInt(document.getElementById('wisdom-text').value) > 20 ){
            document.getElementById('wisdom-text').backgroundcolor = "red";
            n = false;
        }

    if( parseInt(document.getElementById('charisma-text').value) < 2 ||
        parseInt(document.getElementById('charisma-text').value) > 20 ){
            document.getElementById('charisma-text').backgroundcolor = "red";
            n = false;
        }

    if( parseInt(document.getElementById('ac-text').value) > 30 ||
        parseInt(document.getElementById('ac-text').value) < 1 ){
        document.getElementById('ac-text').backgroundcolor = "red";
        n = false;
    }

    if( document.getElementById('name-text').value == "" || document.getElementById('race-text').value == "") {
        alert("Character sheet must have name and race");
        console.log(document.getElementById('name-text').value);
        console.log(document.getElementById('race-text').value);
        n = false;
    }

    if(n)
        var stats = {
            name: document.getElementById('name-text').value,
            class: document.getElementById('class-text').value,
            level: document.getElementById('level-text').value,
            background: document.getElementById('background-text').value,
            race: document.getElementById('race-text').value,
            alignment: document.getElementById('alignment-text').value,
            exp: document.getElementById('experience-text').value,

            ac: document.getElementById('ac-text').value,
            initiative: document.getElementById('initiative-text').value,
            hp: document.getElementById('hp-text').value,
            speed: document.getElementById('speed-text').value,

            pbonus: document.getElementById('pbonus-text').value,
            pp: document.getElementById('pp-text').value,

            equipment: document.getElementById('equipment-text').value,
            proficiencies: document.getElementById('proficiencies-text').value,
            feats: document.getElementById('feats-text').value,

            strength: document.getElementById('strength-text').value,
            strengthmod: (parseInt(document.getElementById('strength-text').value)-10)/2,

            dexterity: document.getElementById('dexterity-text').value,
            dexmod: (parseInt(document.getElementById('dexterity-text').value)-10)/2,

            constitution: document.getElementById('constitution-text').value,
            conmod: (parseInt(document.getElementById('strength-text').value)-10)/2,

            intelligence: document.getElementById('intelligence-text').value,
            intmod: (parseInt(document.getElementById('strength-text').value)-10)/2,

            wisdom: document.getElementById('wisdom-text').value,
            wisdommod: (parseInt(document.getElementById('strength-text').value)-10)/2,

            charisma: document.getElementById('charisma-text').value,
            charismamod: (parseInt(document.getElementById('strength-text').value)-10)/2,

            strengthsave: document.getElementById('strength-save').checked,
            athletics: document.getElementById('athletics').checked,

            dexsave: document.getElementById('dexterity-save').checked,
            acrobatics: document.getElementById('acrobatics').checked,
            sleight: document.getElementById('sleight-of-hand').checked,
            stealth: document.getElementById('stealth').checked,

            consave: document.getElementById('constitution-save').checked,

            intsave: document.getElementById('intelligence-save').checked,
            arcana: document.getElementById('arcana').checked,
            history: document.getElementById('history').checked,
            investigation: document.getElementById('investigation').checked,
            nature: document.getElementById('nature').checked,
            religion: document.getElementById('religion').checked,

            wisdomsave: document.getElementById('wisdom-save').checked,
            animal: document.getElementById('animal-handling').checked,
            insight: document.getElementById('insight').checked,
            medicine: document.getElementById('medicine').checked,
            perception: document.getElementById('perception').checked,
            survival: document.getElementById('survival').checked,

            charismasave: document.getElementById('charisma-save').checked,
            deception: document.getElementById('deception').checked,
            intimidation: document.getElementById('intimidation').checked,
            performance: document.getElementById('performance').checked,
            pursuasion: document.getElementById('persuasion').checked

        }
        var requestURL = '/name/' + document.getElementById('name-text').value
                    + '/' + document.getElementById('race-text').value
                    + '/submit'
        request.open('POST', requestURL);
        request.setRequestHeader('Content-Type', 'application/json');
        sendData(JSON.stringify(stats));
}

function sendData(data){
    request.send(data);
}


window.onload = function() {
    document.getElementById('save-button').onclick = checkData;
}
