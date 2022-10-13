// 1.1 ES6 -methods 
//array.from()
let arrayTest1 = Array.from('VisanAndrei')
console.log(arrayTest1) //formeaza un array cu numele "VisanAndrei" despartit de virgula fiecare litera

//array.of()
 let arrayTest2 = Array.of(12)
 console.log(arrayTest2) //formeaza un array cu un singur element (numrarul 12)

//array.prototype.find()

let arrayTest3 = [1,21,32,45,5];
let findArray = arrayTest3.find(x => x>20); // ->21


//Array.prototype.entries()

let arrayTest4 = ["ceapa", "rosii", "castraveti"];
let arrayEntries = arrayTest4.entries();

for(i of arrayEntries){
    console.log(i);
} // va afisa  fiecare index cu valoarea sa 


//Array.prototype.keys()

let arrayKeys = arrayTest4.keys();
console.log(...arrayKeys) // va afisa  0 1 2 (reprezinta indexul din array)

// 1.2 Diferences between var, let, const
// Variabila declarata cu "var" (globalVariable) este o variabila globala, 
// deoarece este declarata in afara unei functii (exemplul de mai jos). "var" are un dezavantaj, deoarece
// poti din greseala sa redefinesti variabila
var globalVariable = "Visan Andrei";
var numeMijlocii = 5;

if (numeMijlocii > 2) {
    var globalVariable = " Ai prea multe nume mijlocii";
}
console.log(globalVariable);
// "globalVariable" s-a modificat de la "Visan Andrei" la "Ai prea multe nume mijlocii"
/////////////////


///LET Exemplu 1
let gradesMath = [9,10,6,4]
if (true){
    let gradesEnglish = [7,7,8,9];
}

console.log(gradesEnglish)

// "gradesEnglish" chiar daca a fost declarat in interiorul functiei acesta este nedefinit,
// deoarece "let" este block scoped 


///LET Exemplu 2

let gradesFrench = [9,10,6,4]
if (true){
    let gradesFrench = [7,7,8,9];
    console.log(gradesFrench)
}

console.log(gradesFrench)
///Se vor afisa ambele variabile "gradesFrench", doarece fac parte din scope diferit

///Const
///"const" nu poate fi redefinit si nici reactualizat spre deosebire de "var"

const informatiiPersonale = {
    email: "visanandrei98@yahoo.com",
    nume: "Visan",
    prenume: "Andrei",
    varsta: 24

}

informatiiPersonale.telefon = '05645460';

console.log(informatiiPersonale)

/// "telefon" a putut fi adaugat in obiectul creeat chiar daca este o constanta


///1.3 Spread operator
///Cu ajutorul spread operator se pot adauga elemente intr-un array folosind elementele altui array deja creeate
let listaCumparaturiFructe = ['mere', 'banane'];
let listaCumparaturi = ['patrunjel', 'marar', 'castraveti', 'morcovi', ...listaCumparaturiFructe, 'ceapa'];


console.log(listaCumparaturi)

///Se pot folosi elementele unui array pentru a fi introduse ca argumente pentru o functie

function sum(a,b,c,d) {
    console.log(a + b + c +d)
}

let calculator = [5, 10, -1, -10]; 

sum(...calculator)

///Copy 

let marimiDulap = {
    inaltime: '40cm',
    latime:  '50cm',
    lungime: '10cm'
}

let marimiDulap2 = {...marimiDulap}
marimiDulap2.culoare = 'negru';

console.log(marimiDulap)
console.log(marimiDulap2)
/// Am copiat informatiile de la obiectul "marimiDulap" si am creeat un nou obiect"marimi dupal 2"
// la care am adaugat "culoare: 'negru'"


/// Concatenate

let informatiiPersoana1 = {
    facultate : "Politehnica",
    anStudiu : 4,  
}

let jobPersoana1 = {
    post : "Software Developer",
    vechime: "3 ani ",
    tip : "remote"
}

let persoana1 = {...informatiiPersoana1, ...jobPersoana1}

console.log(persoana1)

/// 'persoana1' are toate cele 5 valori enuntate mai sus in exercitiu


///1.4 Objects 

///Obiectele nu sunt iterabile, insa se pot transforma valorile acestora in arrays
// cu ajutorul unor metode: Object.keys(), object.values(), object.entries()

// Exemplu1:

const masiniVanzare = {
    dacia: 4,
    ford: 100,
    BMW: 50
}

let tipuriMasini = Object.keys(masiniVanzare);
console.log(tipuriMasini) // ["dacia", "ford", "BMW"]
tipuriMasini.forEach((tipuriMasini) =>console.log(tipuriMasini))
//Exemplu2:

const nrMasiniVanzare = {
    dacia: 4,
    ford: 100,
    BMW: 50
}

let nrMasini = Object.values(nrMasiniVanzare);
console.log(nrMasini) // [4,100,50]

nrMasini.forEach((nrMasini) => console.log(nrMasini))


//Exemplu3:

const detaliiMasiniVanzare = {
    dacia: 4,
    ford: 100,
    BMW: 50
}

let detaliiMasini = Object.entries(detaliiMasiniVanzare);
console.log(detaliiMasini)

detaliiMasini.forEach((detaliiMasini) => console.log(detaliiMasini)) // ["dacia", 4] ["ford", 100] ["BMW", 50]


//Deep copy 

//Deep copy folosit pentru un obiect are ca scop clonarea acestuia, iar in cazul in care
// modifici "masterul", clona nu este afectata. Pentru exemplul anterior unde s-a folosit
// spread syntax, nu s-a construit un deep copy

// Exemplu:

let ingredienteCiorba = ["morcovi", "ceapa", ["sare", "apa", "condimente"], "cartofi"]

let ingredienteCiorbaClone = JSON.parse(JSON.stringify(ingredienteCiorba));

ingredienteCiorba[2][0] = "oua"

console.log(ingredienteCiorba)
console.log(ingredienteCiorbaClone)

//Clona nu a fost afectata de schimbarea "ingredienteCiorba"


// 1.5 Arrays Accesor, Iteration, mutator methods
//1.5.1 Accesor
//Concat
const primulArray = [1,2,3,4,5];
const alDoileArray = [6,7,8,9,10];

const mergedArray = primulArray.concat(alDoileArray);
console.log (mergedArray);//[1,2,3,4,5,6,7,8,9,10] , uneste cele doua stringuri

//join

const array3 = [1,2,3,4,5];


const array4 = array3.join('/')
console.log (array4); //array5 este format dintr-un string cu toate valorile din array3 separate
//prin semnul "/"

//filter

const array5 = [1,2,-3,-4,5];
function numerePositive(numar){
    return numar > 0
}

const array6 = array5.filter(numerePositive)
console.log (array6);//[1,2,5] Arata doar numerele mai mari > 0 

//Slice

const array7 = [5,10,15,20,25];
const array8 = array7.slice(1,3);
console.log(array8) // [10,15] am exclus index 0 si tot ce e dupa index 3 inclusiv

/// Ca accesor methods mai sunt si: 
//indexOf() -verifica daca exista elementul preciza. Daca nu exista da return -1, iar daca apare de mai multe ori da return la numarul de cate ori apare 
//lastIndexOf() - Verifica ultima aparitie a elementului specificat. Daca nu gaseste deloc elementul da return la "-1"
//includes() - verifica daca se afla elementul cautat in array. Daca se afla da return un bolean "true"

//1.5.2 Iteration 
//forEach() Cheama functia folosita pentru fiecare element dintr-un array in ordine


const array9 = [5,6,7,8,9]

function arrayFunction(item){
    console.log (item)
}
array9.forEach(arrayFunction);//enumera fiecare element din array9

//map()

const array10 = [ 2, 3, 4, 5];
cube = x => Math.pow(x,3)
cubeArray10 = array10.map(cube);
console.log(cubeArray10)

//1.5.3 Mutator
// pop(). Folosit pentru a da remove la ultimul element din array

 let caini = ["labrador", "pomeranyan", "husky"];
 caini.pop();
 console.log (caini)

 //shift(). Folosit pentru a da remove la primul element dintr-un array

 let caini2 = ["labrador", "pomeranyan", "husky"];
 caini2.shift();
 console.log (caini2)

 //push(). Pentru a adauga la final un element
 let caini3 = ["labrador", "pomeranyan", "husky"];
 caini3.push("corgi");
 console.log (caini3)

 //splice. Pentru a adauga oriunde un element

 let caini4 = ["labrador", "pomeranyan", "husky"];
 caini4.splice(3,0,"pitbull");
 console.log (caini4)


 //1.6  Promise. Callback. 
//Promise creeat pentru a rezolva dificultatea "callback"

const arrayNou = [ 2, 3, 4, 5];
let task = new Promise((resolve, reject) => {
    let a = 5 + 5
    if (a==10) {
        resolve ('solved')
    } else {
        reject('failed')
    }
})

task.then((message) =>{
    console.log ('You will get a new task because you ' + message + " your job")
}).catch((message) => {
    console.log('You need to take another look because ' + message + " your task")
})


//Callback


setTimeout(() => {
    console.log("Message after 2 seconds passed")
}, 2000); //callback- functia se aplica dupa trecerea a doua secunde


//Async . Await


//Closures. Accesarea unor variabile globale care nu fac partte din acel scope (sunt in afara functiei)
// sau in cazul "nested functions", accesarea unor variabile din outer function de catre inner function.


function functiaPrimara (){
    var variabilaPrincipala = 1;
    setTimeout(() => {
        variabilaPrincipala += 1;
        console.log(variabilaPrincipala);

        setTimeout(() => {
            variabilaPrincipala += 1;
            console.log(variabilaPrincipala);
        }, 1000);
    }, 3000);  //apare mai intari 2 dupa 3 secunde si dupa aceea valoarea 3 dupa 1 secunda
}
functiaPrimara()

