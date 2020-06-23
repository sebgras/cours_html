
// Exercice afficher jour
/*
var jours_de_la_semaine = [
'Dimanche',
'Lundi',
'Mardi',
'Mercredi',
'Jeudi',
'Vendredi',
'Samedi'
];
var aujourdhui = new Date();

console.log('Aujourd\'hui nous sommes '
 + jours_de_la_semaine[aujourdhui.getDay()]
 + ', et il est '
 + aujourdhui.getHours() + 'h'
 + aujourdhui.getMinutes() + 'min'
 + aujourdhui.getSeconds() + 's'
 );
 */

 // Exercice itération
 /*
 for(let i=1; i <= 100; i++) {
    if(i%3 == 0 && i%5 == 0) {
        console.log('FizzBuzz');
    } else if(i%3 == 0) {
        console.log('Fizz');
    } else if(i%5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
 }
 */

 // Exercice étudiants
var tableau_notes = [9, 7, 12, 11, 15, 16, 7, 9, 11, 4, 2, 16, 14, 12, 18];
function afficheTableauNotes (tab) {
    console.log(tab);
}

function compteNotesSuperieuresDix(tab) {
    console.log(
        tab.reduce(
            (sum,elem) => sum+(elem>10?1:0), 0
        )
    );
}

function calculMoyenne(tab) {
    console.log(
        tab.reduce(
            (sum,elem) => sum + elem
        ) / tab.length
    );
}

function noteMaximale(tab) {
    console.log(
        tab.reduce(
            (sum, elem) => (elem>sum?elem:sum), 0
        )
    );
}

function rechercheNote(tab, note) {
    console.log(tab.includes(note));
}

//afficheTableauNotes(tableau_notes);
//compteNotesSuperieuresDix(tableau_notes);
//calculMoyenne(tableau_notes);
//noteMaximale(tableau_notes);
rechercheNote(tableau_notes, 1);


