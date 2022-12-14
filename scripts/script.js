// var resEl = document.querySelector(".form__result--big");


// function Calc() {
//   let sqr, height, exch, sHum, eHum, tC, vol, airVol, vapContDiff, result;

//   sqr = document.getElementById('sqr').value;
//   height = document.getElementById('height').value;
//   exch = document.getElementById('exch').value;
//   sHum = document.getElementById('sHum').value;
//   eHum = document.getElementById('eHum').value;
//   tC = document.getElementById('tC').value;

//   vol = sqr * (height / 100);
//   airVol = vol * exch;
//   vapContDiff = vapCont[tC][eHum] - vapCont[tC][sHum];
//   result = vapContDiff * (airVol / 100);

//   resEl.innerHTML = result.toFixed(2);
// }

var showResEl = document.querySelectorAll(".form__result--big");

function calcDistance() {
    let fX, fY, fA, sX, sY, sA, tA;

    fX = +document.getElementById('x1').value;
    fY = +document.getElementById('y1').value;
    fA = +document.getElementById('a1').value;
    sX = +document.getElementById('x2').value;
    sY = +document.getElementById('y2').value;
    sA = +document.getElementById('a2').value;

    tA = 180 - (fA + sA);

    let baseLine = getLengthByPoints(fX, fY, sX, sY);
    let sDist = getLengthByAngle(baseLine, fA, tA);
    let fDist = getLengthByAngle(baseLine, sA, tA);

    showResEl[0].innerHTML = fDist.toFixed(2);
    showResEl[1].innerHTML = sDist.toFixed(2);
    
}

function getLengthByPoints(x1, y1, x2, y2) {
    let diff = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return diff;
}

function getLengthByAngle(baseLine, targetAngle, gammaAngle) {
    targetAngle = toRadians(targetAngle);
    gammaAngle = toRadians(gammaAngle);
    return (baseLine * Math.sin(targetAngle)) / Math.sin(gammaAngle);
}

function toRadians(deg) {
    return deg * (Math.PI / 180);
}