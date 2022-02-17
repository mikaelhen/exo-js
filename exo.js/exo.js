//1-Prendre une variables en php (la déclaration d'une variable se fait avec un $ en php), affecter une valeur à cette variable et l'afficher

let a = 5;
console.log(a);

//2-Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables

let d = 5;
let b = 10;
let c = a + b;
console.log(c);

//3-Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher

let chainedecharactere = 'coucou ptite perruche';
console.log(chainedecharactere);

//4-Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables)

let carac1 = "grosse";
let carac2 = "perruche";
console.log(carac1+" "+carac2);

//5-Permutter le contenu de la variable a et de la variable b

var perm1 = 5;
var perm2 = 6;

var perm3 = perm1;
perm1 = perm2;
perm2 = perm3;

console.log(perm1+" "+perm2);

//6-A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités

var e = 50 ;
var f = 30 ;

if (e > f){
  console.log ("La variable $a > $b");
} else if (f > e){
 console.log ("La variable $b > $a");
} else {
  console.log ("Les variables sont égaux : $a=$b");
}

//7-faire une fonction qui prend en parametres deux variables ( a et b par exemple ) et qui définis quel chiffre est le plus grand

var b1 = 8;
var b2 = 7;

var result = Math.max(b1, b2);
console.log (result);

//8-afficher 10 nombre aléatoire à partir de la fonction rand() en utilisant une boucle

for (var pas = 0; pas <10; pas++) {
    var nombre = Math.floor(Math.random(0,100));
    console.log(nombre);
}

//afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90 
var b3 = 0

while ( b3 <90) {
     b3 = Math.floor(Math.random()*100);
    console.log(b3);
}

