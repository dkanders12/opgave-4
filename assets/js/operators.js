// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = 30;
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B eller A er lig med D.

if (A == B) {
  console.log("statement true!");
} else {
  console.log("statement False");
}

//opgave 2: skrive en If then statement der bliver TRUE når  A er større end B og A er mindre end E.
if (A > B) {
  console.log("statement true!");
} else {
  console.log("statement False");
}
if (A < E) {
  console.log("statement true!");
} else {
  console.log("statement False");
}
//opgave 3: Skriv en If then statement med  && og  || der kun er sand når alle expressions er sande.
if ((A && B) || E) {
  console.log("statement true!");
} else {
  console.log("statement False");
}

//opgave 4: Skriv en If then statement der kan finde ud af om F er "undefined" eller har en værdi, ved at bruge !.
var F;

if (!F) {
  console.log("F er undefined eller har ingen værdi.");
} else {
  console.log("F har en værdi.");
}
