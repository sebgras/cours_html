function sommeTableau(tab1, tab2) {
    var result = [];
    if(
        tab1 !== undefined && tab1 !== null && tab1.length > 0
        && tab2 !== undefined && tab2 !== null && tab2.length > 0
        && tab1.length === tab2.length
    ) {
        for(var i=0; i < tab1.length; i++) {
            result.push(tab1[i] + tab2[i]);
        }
    } else {
        // somme impossible
        return null;
    }
    return result
    
}

function produitTableau(tab1, tab2) {
    var result = [];
    if(
        tab1 !== undefined && tab1 !== null && tab1.length > 0
        && tab2 !== undefined && tab2 !== null && tab2.length > 0
        && tab1.length === tab2.length
    ) {
        for(var i=0; i < tab1.length; i++) {
            result.push(tab1[i] * tab2[i]);
        }
    } else {
        // produit impossible
        return null;
    }
    return result
    
}

function pairOuImpair()  {
    for(var i=0; i < 16; i++) {
        if(i%2==0) {
            document.writeln(i + ': pair' + '<br/>');
        } else {
            document.writeln(i + ': impair' + '<br/>');
        }
    }
}

function calculMoyenneEtudiants(tab) {
    var somme = 0
    /*
    for(var i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    */
    somme = tab.reduce(function(sum, elem){
        return sum + elem;
    });
    var moyenne = somme / (tab.length);

    if(moyenne < 60) {
        return 'F';
    } else if(moyenne < 70) {
        return 'D';
    } else if(moyenne < 80) {
        return 'C';
    } else if(moyenne < 90) {
        return 'B';
    } else if(moyenne < 100) {
        return 'A';
    }
}

var tableau1 = [1, 5, 2, 20];
var tableau2 = [3, 4, 17, 100];
console.log("somme : " + sommeTableau(tableau1, tableau2));
console.log("produit : " + produitTableau(tableau1, tableau2));

console.log("Note moyenne des étudiants : " + calculMoyenneEtudiants([80, 77, 88, 95, 68]));

var listeParticipants = [];

function ajouterParticipant() {
    var nomParticipant = prompt("Entrez le nom du participant");
    listeParticipants.push(nomParticipant);
    console.log(listeParticipants);
}

function initialiserListeParticipants() {
    listeParticipants = [];
}

function tirageGagnant() {
    var randomNumber = Math.floor(Math.random() * listeParticipants.length);
    var gagnant = listeParticipants[randomNumber]
    alert(gagnant);
}
