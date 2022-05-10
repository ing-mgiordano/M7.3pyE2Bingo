const arrayLine1 = [];

console.log(arrayLine1);
let sumOcupate = 0;
let sumEmpty = 0;
for (let i = 0; i < 9; i++) {
  let place = Math.round(Math.random() * (0 - 1) + 1);
  if (sumOcupate >= 5) {
    place = 0;
  }
  if (sumEmpty >= 4) {
    place = 1;
  }

  if (i === 0) {
    let numberRan = Math.round(Math.random() * (1 - 3) + 3);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 1) {
    let numberRan = Math.round(Math.random() * (10 - 12) + 12);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 2) {
    let numberRan = Math.round(Math.random() * (20 - 22) + 22);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 3) {
    let numberRan = Math.round(Math.random() * (30 - 32) + 32);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 4) {
    let numberRan = Math.round(Math.random() * (40 - 42) + 42);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 5) {
    let numberRan = Math.round(Math.random() * (50 - 52) + 52);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 6) {
    let numberRan = Math.round(Math.random() * (60 - 62) + 62);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 7) {
    let numberRan = Math.round(Math.random() * (70 - 72) + 72);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
  if (i === 8) {
    let numberRan = Math.round(Math.random() * (80 - 82) + 82);
    if (place == 1) {
      sumOcupate += 1;
      arrayLine1.push(numberRan);
    }
    if (place == 0) {
      sumEmpty += 1;
      arrayLine1.push("");
    }
  }
}
console.log(arrayLine1);

const arrayLine2 = [];
let sumOcupate2 = 0;
let sumEmpty2 = 0;

for (let i = 0; i < 9; i++) {
  let place = Math.round(Math.random() * (0 - 1) + 1);
  if (sumOcupate2 >= 5) {
    place = 0;
  }
  if (sumEmpty2 >= 4) {
    place = 1;
  }

  if (i === 0) {
    let numberRan = Math.round(Math.random() * (4 - 6) + 6);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 1) {
    let numberRan = Math.round(Math.random() * (13 - 16) + 16);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 2) {
    let numberRan = Math.round(Math.random() * (23 - 26) + 26);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 3) {
    let numberRan = Math.round(Math.random() * (33 - 36) + 36);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 4) {
    let numberRan = Math.round(Math.random() * (43 - 46) + 46);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 5) {
    let numberRan = Math.round(Math.random() * (53 - 56) + 56);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 6) {
    let numberRan = Math.round(Math.random() * (63 - 66) + 66);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 7) {
    let numberRan = Math.round(Math.random() * (73 - 76) + 76);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
  if (i === 8) {
    let numberRan = Math.round(Math.random() * (83 - 86) + 86);
    if (place == 1) {
      sumOcupate2 += 1;
      arrayLine2.push(numberRan);
    }
    if (place == 0) {
      sumEmpty2 += 1;
      arrayLine2.push("");
    }
  }
}
console.log(arrayLine2);

const arrayLine3 = [];
let sumOcupate3 = 0;
let sumEmpty3 = 0;

for (let i = 0; i < 9; i++) {
  let place = Math.round(Math.random() * (0 - 1) + 1);
  if (sumOcupate3 >= 5) {
    place = 0;
  }
  if (sumEmpty3 >= 4) {
    place = 1;
  }

  if (i === 0) {
    let numberRan = Math.round(Math.random() * (7 - 9) + 9);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 1) {
    let numberRan = Math.round(Math.random() * (17 - 19) + 19);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 2) {
    let numberRan = Math.round(Math.random() * (27 - 29) + 29);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 3) {
    let numberRan = Math.round(Math.random() * (37 - 39) + 39);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 4) {
    let numberRan = Math.round(Math.random() * (47 - 49) + 49);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 5) {
    let numberRan = Math.round(Math.random() * (57 - 59) + 59);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 6) {
    let numberRan = Math.round(Math.random() * (67 - 69) + 69);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 7) {
    let numberRan = Math.round(Math.random() * (77 - 79) + 79);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
  if (i === 8) {
    let numberRan = Math.round(Math.random() * (87 - 90) + 90);
    if (place == 1) {
      sumOcupate3 += 1;
      arrayLine3.push(numberRan);
    }
    if (place == 0) {
      sumEmpty3 += 1;
      arrayLine3.push("");
    }
  }
}
console.log(arrayLine3);

const objetCart = {
  arrayLine1,
  arrayLine2,
  arrayLine3,
};

document.getElementById("1-1").innerHTML = objetCart.arrayLine1[0];
document.getElementById("1-2").innerHTML = objetCart.arrayLine1[1];
document.getElementById("1-3").innerHTML = objetCart.arrayLine1[2];
document.getElementById("1-4").innerHTML = objetCart.arrayLine1[3];
document.getElementById("1-5").innerHTML = objetCart.arrayLine1[4];
document.getElementById("1-6").innerHTML = objetCart.arrayLine1[5];
document.getElementById("1-7").innerHTML = objetCart.arrayLine1[6];
document.getElementById("1-8").innerHTML = objetCart.arrayLine1[7];
document.getElementById("1-9").innerHTML = objetCart.arrayLine1[8];

document.getElementById("2-1").innerHTML = objetCart.arrayLine2[0];
document.getElementById("2-2").innerHTML = objetCart.arrayLine2[1];
document.getElementById("2-3").innerHTML = objetCart.arrayLine2[2];
document.getElementById("2-4").innerHTML = objetCart.arrayLine2[3];
document.getElementById("2-5").innerHTML = objetCart.arrayLine2[4];
document.getElementById("2-6").innerHTML = objetCart.arrayLine2[5];
document.getElementById("2-7").innerHTML = objetCart.arrayLine2[6];
document.getElementById("2-8").innerHTML = objetCart.arrayLine2[7];
document.getElementById("2-9").innerHTML = objetCart.arrayLine2[8];

document.getElementById("3-1").innerHTML = objetCart.arrayLine3[0];
document.getElementById("3-2").innerHTML = objetCart.arrayLine3[1];
document.getElementById("3-3").innerHTML = objetCart.arrayLine3[2];
document.getElementById("3-4").innerHTML = objetCart.arrayLine3[3];
document.getElementById("3-5").innerHTML = objetCart.arrayLine3[4];
document.getElementById("3-6").innerHTML = objetCart.arrayLine3[5];
document.getElementById("3-7").innerHTML = objetCart.arrayLine3[6];
document.getElementById("3-8").innerHTML = objetCart.arrayLine3[7];
document.getElementById("3-9").innerHTML = objetCart.arrayLine3[8];

let objetCartPlay = { ...objetCart };
let numberCameOut = [];
let next;

function letsPlay() {

 
  let numberRanPlay = Math.round(Math.random() * (1 - 90) + 90);

  numberCameOut.unshift(numberRanPlay);
  
  document.getElementById("numberout").innerHTML = numberCameOut.join(' - ');

  document.getElementById("bola").innerHTML = numberRanPlay;
  let indexNum;

  indexNum = objetCartPlay.arrayLine1.indexOf(numberRanPlay);
  objetCartPlay.arrayLine1[indexNum] += "X";

  indexNum = objetCartPlay.arrayLine2.indexOf(numberRanPlay);
  objetCartPlay.arrayLine2[indexNum] += "X";

  indexNum = objetCartPlay.arrayLine3.indexOf(numberRanPlay);
  objetCartPlay.arrayLine3[indexNum] += "X";

  document.getElementById("1-1").innerHTML = objetCartPlay.arrayLine1[0];
  document.getElementById("1-2").innerHTML = objetCartPlay.arrayLine1[1];
  document.getElementById("1-3").innerHTML = objetCartPlay.arrayLine1[2];
  document.getElementById("1-4").innerHTML = objetCartPlay.arrayLine1[3];
  document.getElementById("1-5").innerHTML = objetCartPlay.arrayLine1[4];
  document.getElementById("1-6").innerHTML = objetCartPlay.arrayLine1[5];
  document.getElementById("1-7").innerHTML = objetCartPlay.arrayLine1[6];
  document.getElementById("1-8").innerHTML = objetCartPlay.arrayLine1[7];
  document.getElementById("1-9").innerHTML = objetCartPlay.arrayLine1[8];

  document.getElementById("2-1").innerHTML = objetCartPlay.arrayLine2[0];
  document.getElementById("2-2").innerHTML = objetCartPlay.arrayLine2[1];
  document.getElementById("2-3").innerHTML = objetCartPlay.arrayLine2[2];
  document.getElementById("2-4").innerHTML = objetCartPlay.arrayLine2[3];
  document.getElementById("2-5").innerHTML = objetCartPlay.arrayLine2[4];
  document.getElementById("2-6").innerHTML = objetCartPlay.arrayLine2[5];
  document.getElementById("2-7").innerHTML = objetCartPlay.arrayLine2[6];
  document.getElementById("2-8").innerHTML = objetCartPlay.arrayLine2[7];
  document.getElementById("2-9").innerHTML = objetCartPlay.arrayLine2[8];

  document.getElementById("3-1").innerHTML = objetCartPlay.arrayLine3[0];
  document.getElementById("3-2").innerHTML = objetCartPlay.arrayLine3[1];
  document.getElementById("3-3").innerHTML = objetCartPlay.arrayLine3[2];
  document.getElementById("3-4").innerHTML = objetCartPlay.arrayLine3[3];
  document.getElementById("3-5").innerHTML = objetCartPlay.arrayLine3[4];
  document.getElementById("3-6").innerHTML = objetCartPlay.arrayLine3[5];
  document.getElementById("3-7").innerHTML = objetCartPlay.arrayLine3[6];
  document.getElementById("3-8").innerHTML = objetCartPlay.arrayLine3[7];
  document.getElementById("3-9").innerHTML = objetCartPlay.arrayLine3[8];

}

