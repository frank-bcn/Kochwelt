function cportion(){                                                // Rezept Croissants

    let cwert = +document.getElementById('cwert').value;

    if(cwert < 1){
        cwert = 1;
    }

    if(cwert > 10){
        cwert = 1;
        alert('Personenanzahl zu groß! Maximal 10 Personen!');
    }


    let cber1 = cwert * 500;
    document.getElementById('czeile1').innerHTML = `${cber1}`;

    let cber2 = cwert * 1;
    document.getElementById('czeile2').innerHTML = `${cber2}`;

    let cber3 = cwert * 48;
    document.getElementById('czeile3').innerHTML = `${cber3}`;

    let cber4 = cwert * 2;
    document.getElementById('czeile4').innerHTML = `${cber4}`;

    let cber5 = cwert * 40;
    document.getElementById('czeile5').innerHTML = `${cber5}`;

    let cber6 = cwert * 250;
    document.getElementById('czeile6').innerHTML = `${cber6}`;

    let cber7 = cwert * 1;
    document.getElementById('czeile7').innerHTML = `${cber7}`;

    let cber8 = cwert * 1;
    document.getElementById('czeile8').innerHTML = `${cber8}`;

    let cber9 = cwert * 250;
    document.getElementById('czeile9').innerHTML = `${cber9}`;

    let cber10 = cwert * 1;
    document.getElementById('czeile10').innerHTML = `${cber10}`;

    let cber11 = cwert * 1;
    document.getElementById('czeile11').innerHTML = `${cber11}`;

    let cber0 = cwert * 1;
    document.getElementById('cnumber').innerHTML = `${cber0}`;


    document.getElementById('cwert').value = `${cwert}`;

}


function fportion(){                                                // Rezept Frank

    let fwert = +document.getElementById('fwert').value;

    if(fwert < 1){
        fwert = 1;
    }

    if(fwert > 10){
        fwert = 1;
        alert('Personenanzahl zu groß! Maximal 10 Personen!');
    }


    let fber1 = fwert * 670;
    document.getElementById('fzeile1').innerHTML = `${fber1}`;

    let fber2 = fwert * 1.5;
    document.getElementById('fzeile2').innerHTML = `${fber2}`;

    let fber3 = fwert * 25;
    document.getElementById('fzeile3').innerHTML = `${fber3}`;

    let fber4 = fwert * 1;
    document.getElementById('fzeile4').innerHTML = `${fber4}`;

    let fber5 = fwert * 400;
    document.getElementById('fzeile5').innerHTML = `${fber5}`;

    let fber6 = fwert * 50;
    document.getElementById('fzeile6').innerHTML = `${fber6}`;


    let fber0 = fwert * 3;
    document.getElementById('fnumber').innerHTML = `${fber0}`;


    document.getElementById('fwert').value = `${fwert}`;

}


function mportion(){                                                // Berechnung Mohamet
    let mwert = +document.getElementById('mwert').value;

    if(mwert < 1){ 
        mwert = 1;
    }

    if(mwert > 10){
        mwert = 1;
        alert('Personenanzahl zu groß! Maximal 10 Personen!');
    }

    let mber1 = mwert * 1;
    document.getElementById('mzeile1').innerHTML = `${mber1}`;

    let mber2 = mwert * 2;
    document.getElementById('mzeile2').innerHTML = `${mber2}`;

    let mber3 = mwert * 500;
    document.getElementById('mzeile3').innerHTML = `${mber3}`;

    let mber4 = mwert * 2;
    document.getElementById('mzeile4').innerHTML = `${mber4}`;

    let mber5 = mwert * 200;
    document.getElementById('mzeile5').innerHTML = `${mber5}`;

    let mber6 = mwert * 1;
    document.getElementById('mzeile6').innerHTML = `${mber6}`;

    let mber7 = mwert * 1;
    document.getElementById('mzeile7').innerHTML = `${mber7}`;

    let mber8 = mwert * 125;
    document.getElementById('mzeile8').innerHTML = `${mber8}`;

    let mber0 = mwert * 1;
    document.getElementById('mnumber').innerHTML = `${mber0}`;

    document.getElementById('mwert').value = `${mwert}`;
}


function sportion(){                                                // Berechnung Basti

    let swert = +document.getElementById('swert').value;

    if(swert < 2){
        swert = 2;
    }

    if(swert > 10){
        swert = 2;
        alert('Personenanzahl zu groß! Maximal 10 Personen!');
    }

    let sber1 = swert * 0.5;
    document.getElementById('szeile1').innerHTML = `${sber1}`;

    let sber2 = swert * 0.5;
    document.getElementById('szeile2').innerHTML = `${sber2}`;

    let sber3 = swert * 1;
    document.getElementById('szeile3').innerHTML = `${sber3}`;

    let sber4 = swert * 150;
    document.getElementById('szeile4').innerHTML = `${sber4}`;

    let sber6 = swert * 50;
    document.getElementById('szeile6').innerHTML = `${sber6}`;

    let sber7 = swert * 17;
    document.getElementById('szeile7').innerHTML = `${sber7}`;

    let sber8 = swert * 1;
    document.getElementById('szeile8').innerHTML = `${sber8}`;

    let sber9 = swert * 100;
    document.getElementById('szeile9').innerHTML = `${sber9}`;

    let sber10 = swert * 0.5;
    document.getElementById('szeile10').innerHTML = `${sber10}`;

    let sber11 = swert * 125;
    document.getElementById('szeile11').innerHTML = `${sber11}`;

    let sber0 = swert;
    document.getElementById('snumber').innerHTML = `${sber0}`;

    document.getElementById('swert').value = `${swert}`;

}