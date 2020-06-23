// suppression d'une propriété d'objet
/*
var student =  {
    name : "David Rayy",
    class : "VI",
    rollno : 12  
};

console.log("student avant suppression de la propriété", student);
delete student.rollno;
console.log("student après suppression de la propriété", student);
*/

// objet de recette
/*
var recetteCrepes = {
    nom : "crepes",
    portions : "10",
    ingredients : ["oeufs", "farine", "sucre", "confiture"]
}

console.log("nom : " + recetteCrepes.nom);
console.log("portions : " + recetteCrepes.portions);
console.log("Ingrédients : ");
for(ingredient of recetteCrepes.ingredients) {
    console.log(ingredient);
}
*/

// Livres
var livres = [
    {
        nom : "Les Misérables",
        auteur : "Victor Hugo",
        etat : "bon"
    },
    {
        nom : "Notre Dame de Paris",
        auteur : "Victor Hugo",
        etat : "neuf"
    },
    {
        nom : "L'Assomoir",
        auteur : "Emile Zola",
        etat : "abimé"
    },
    {
        nom : "Le Colonel Chabert",
        auteur : "Honoré de Balzac",
        etat : "bon"
    },
    {
        nom : "L'Etranger",
        auteur : "ALbert Camus",
        etat : "très bon"
    },
    {
        nom : "Les Mains Sales",
        auteur : "Jean-Paul Sartre",
        etat : "détérorié"
    },
];

for(livre of livres) {
    console.log("Nom : " + livre.nom + " / Auteur : " + livre.auteur + " / Etat de lecture : " + livre.etat)
}