


// =========================================================
//              Functions-Vertiefung-Level-1_1
// =========================================================

console.log("%c  –––––––––Functions-Vertiefung-Level-1_1–––––––––", "color:yellow; fontsize: 16px;" )

function intro1() {
    console.log("Hello Function")
}

intro1()


// .........................................................

const intro2 = () => console.log("Hello Arrow-Function");

intro2();



// =========================================================
//              Functions-Vertiefung-Level-1_2
// =========================================================

console.log("%c  –––––––––Functions-Vertiefung-Level-1_2–––––––––", "color:yellow; fontsize: 16px;");


// function greeting() {
//     document.write("Hallo! <br>");
//     console.log("Hallo!");
// }

const greeting = () => document.write("Hallo! <br>"); console.log("Hallo!");

greeting()


// .........................................................

// function sum(x, y) {
//     document.write(x + y);
//     console.log(x + y);
// }

const sum = (x, y) => {
    document.write(x + y);
    console.log(x + y);
}

sum(2, 3);

// .........................................................


// function mult(x, y) {
//     alert(x * y);
//     console.log(x * y);
// }

const mult = (x, y) => {
    alert(x * y);
     console.log(x * y);
}

mult(2, 3);

// .........................................................

const i = true;
const j = "hi";
const k = 1; 
const l = {name: "John"}; 
const a = [0,1]

// function typeCheck(parameter) {
//     console.log(typeof(parameter));
//     console.log(parameter);
// }

const typeCheck = (parameter) => {
    console.log(typeof(parameter));
    console.log(parameter);
}


typeCheck(i);
typeCheck(j);
typeCheck(k);
typeCheck(l);
typeCheck(a);



// =========================================================
//              Functions-Vertiefung-Level-1_4
// =========================================================

console.log("%c  –––––––––Functions-Vertiefung-Level-1_4–––––––––", "color:yellow; fontsize: 16px;");


const hero = (name, power, enemy) => {
    const a = `Mein:e Lieblingsheld:in ist: ${name}`;
    const b = `Er/sie hat die Fähigkeit: ${power} Sein/ihr größte/r Gegner:in ist: ${enemy}`;

    console.log(a , b);
}

console.log("Batman", "Reichtum", "Joker");

hero ("Batman", "Reichtum", "Joker");