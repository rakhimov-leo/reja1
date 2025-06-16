console.log("__________TRAIN AREA!_____________");

//                      E-TASK
/*
Shunday function tuzing, u bitta 
string argumentni qabul qilib osha 
stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return 
qilsin "olleh"  */

function reverseWord(a) {
  return a.split("").reverse().join("");
}
console.log(reverseWord("galaxy"));

//                           D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin

// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// yechim:
/*
function checkContent(a, b) {
  if (a.length !== b.length) return false;

  const sortedA = a.split("").sort().join("");
  const sortedB = b.split("").sort().join("");
  if (sortedA === sortedB) {
    return true;
  } else {
    return false;
  }
}
console.log(checkContent("like", "lkie"));
// console.log(checkContent("olamm", "olma"));
*/
/////////////////////////////////////////////////////////////////////////

/*                       MITASK-C 

Shunday class tuzing nomi Shop, 
va uni constructoriga 3 hil mahsulot pass bolsin,
 hamda classning 3ta methodi bolsin, biri qoldiq,
  biri sotish va biri qabul. Har bir method ishga
   tushganda, vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); 
shop.qoldiq() return hozir 20:40da 4ta non,
 5ta lagmon va 2ta cola mavjud! 
 shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
 return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/

// YECHIMI:

// const moment = require("moment");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;

//     const time = moment().format("HH:mm:ss");
//     this.time = moment().format("HH:mm:ss");
//   }

//   sotish(productsName, miqdor) {
//     if (this[productsName] < miqdor) {
//       console.log(
//         `*${this.time}* Yetarlicha ${productsName} yo'q. jami: ${this[productsName]}ta ${productsName} bor`
//       );
//       return;
//     }
//     this[productsName] -= miqdor;
//     console.log(`*${this.time}* ${miqdor}ta ${productsName} sotildi`);
//   }

//   qabul(productsName, miqdor) {
//     this[productsName] += miqdor;
//     console.log(
//       `*${this.time}* ${miqdor}ta ${productsName} qoshildi: jami:${this[productsName]}ta ${productsName} bor`
//     );
//   }

//   qoldiq() {
//     console.log(
//       `*${this.time}* Skladda ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud.`
//     );
//   }
//   greet() {
//     console.log("Sizga ma'lumot berishdan xursandman.");
//   }
// }

// const myShop = new Shop(4, 5, 2);

// myShop.sotish("non", 3);
// myShop.qabul("cola", 4);
// myShop.qoldiq();

/////////////////////////////////////////////////////////////////////////

/*                                B-TASK:

Shunday function tuzing, u 1ta string parametrga ega bolsin,
 hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

                         Masalani yechimi;

const b = "jus7be4appy89";
let expectedNum = [];

function checkDigitsNums(incomingString) {
  const newArr = [...incomingString];

  for (let i = 0; i < newArr.length; i++) {
    if (!isNaN(newArr[i]) && newArr[i] >= "0" && newArr[i] <= "9") {
      expectedNum.push(newArr[i]);
    }
  }
  return console.log(expectedNum.length);
}
 checkDigitsNums(b);

////////////////////////////

function countLetter(letter, text) {
  let = 0;
  for (let i of text) {
    if (i == letter) {
      count++;
    }
  }
  return count;
}

const result = countLetter("a", "assalomu alekum");
console.log(result);

///////////////////
*/
/*
                       A-TASK:

Shunday 2 parametrli function tuzing,
hamda birinchi parametrdagi
letterni ikkinchi parametrdagi sozdan
 qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

            masalani yechimi:

console.log("TASK A.ni birgalikda yechamiz");

function countLetter(letter, word) {
  let count = 0;
  for (let char of word) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}

console.log(
  countLetter("a", "Elektromexanizatsiyalashtraololmaganligingizdandurda")
);

DEFINE 
function qoldiqliBolish(a, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng bololmaydi", null);
  } else {
    callback(null, a % b);
  }
}

// CALL
qoldiqliBolish(10, 0, (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Data:", data);
  }
});

21. NodeJS event loop va Callback functionlarni o'rganamiz

console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq endi", //60
];

       CALLBACK function

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

maslahatBering(50, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});

maslahatBering(32, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});

maslahatBering(45, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});

maslahatBering(salom, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});

console.log("passed here 0");
maslahatBering(16, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
console.log("passed here 1");

  22. Asynchronous functionlarni qo'llash

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
   setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

CALL via then/catch
console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1");

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

CALL via ASYN/AWAIT

async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(71);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
  javob = await maslahatBering(80);
  console.log(javob);
}
run();

         callback bn taxlash

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 2000);
  }
}

console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
console.log("passed here 1");

*/
