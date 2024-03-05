document.addEventListener('DOMContentLoaded', function () {
    const resultatKnapp = document.getElementById('knapp2');
    resultatKnapp.addEventListener('click', beraknaResultat);
});
function beraknaResultat() {
    console.log('ok');
    const allaSvar = new Array(10);
    for (let i = 1; i <= 10; i++) {
        //allaSvar[i - 1] = document.getElementsByName('fraga' + i);
        let nameId = "fraga" + i;
        let selectedId = document.getElementsByName(nameId);
        for (let j = 0; j < selectedId.length; j++) {
            if (selectedId[j].checked) {
                console.log(selectedId[j]);
                allaSvar[i - 1] = selectedId[j].value;
            }
        }
    }
    console.log(allaSvar);

    let gulPoang = 0;
    let gronPoang = 0;
    let rosaPoang = 0;

    for (let i = 0; i < allaSvar.length; i++) {

        if (allaSvar[i] == 'gul') {
            gulPoang++;
        }
        else if (allaSvar[i] == 'gron') {
            gronPoang++;
        }
        else if (allaSvar[i] == 'rosa') {
            rosaPoang++;
        }
    }

    console.log(gulPoang); console.log(rosaPoang); console.log(gronPoang);
    const resultatDiv = document.createElement('div');
    const resultatP = document.createElement('p1');
    resultatDiv.id = "resultat";
    let resultatKar = '';
    if (rosaPoang == 0) {
    } else if (gronPoang == 0) {
    } else if (gulPoang == 0) {
    } else {
       
        if (gulPoang > rosaPoang && gulPoang > gronPoang) {
            resultatKar = 'Du är Jonas!';
        }
        else if (rosaPoang > gulPoang && rosaPoang > gronPoang) {
            resultatKar = 'Du är Lisa!';
        } else if (gronPoang > gulPoang && gronPoang > rosaPoang) {
            resultatKar = 'Du är Sara!';
        } else if (gronPoang == gulPoang) {
            resultatKar = 'Du är en blandning av Sara & Jonas!';
        } else if (rosaPoang == gulPoang) {
            resultatKar = 'Du är en blandning av Lisa & Jonas!';
        } else if (gronPoang == rosaPoang) {
            resultatKar = 'Du är en blandning av Sara & Lisa!';
        } else if (gronPoang == gulPoang && gronPoang == rosaPoang && gulPoang == rosaPoang) {
            resultatKar = 'Du är en blandning av alla tre!';
        } const resultatText = document.createTextNode(resultatKar);
        resultatP.appendChild(resultatText);
        resultatDiv.appendChild(resultatP);/*
        document.getElementById("knapp2").appendChild(resultatDiv);*/
        if (document.getElementById('knapp2') != null) {
            console.log('test');
            const para = document.getElementById("knapp15");
                document.getElementById('knapp2').replaceChild(resultatDiv, para);
            }
    }


}
