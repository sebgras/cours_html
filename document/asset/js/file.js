/*function maFonction() {
    var str = prompt("Votre nom", "John Wick");
    alert(str);
}*/

/*function check(){
    var nbr;
    nbr = Number(document.getElementById("myInput").value);
    console.log(nbr)
}*/

function maFonction2() {
    /*
    var x = 1;
    var y = 3;
    var z = '8';
    var t = "2";
    var u = "bonjour";
    var v = "3bonjour";
    var m;
    var n = 2.5;
    console.log(x + y); // 4
    console.log(x + z); // 18
    console.log(x + parseInt(z)); // 9
    console.log(x + t); // 12
    console.log(x + y + z); // 48
    console.log(z + y + x); // 831
    console.log(x + u); // 1bonjour
    console.log(x + parseInt(u)); // NaN
    console.log(x + v); // 13bonjour
    console.log(x + parseInt(v)); // 4
    console.log(u + v); // bonjour3bonjour
    console.log(x + m); // NaN
    console.log(x + n); // 3.5
    */

    /*
   var a = "bon";
   var b = 'jour';
   var resultat = a * b;
   console.log(resultat);
   // affiche NaN
   console.log(b + parseInt(a));
   // affiche jourNaN
   */

   /*
   var x = 4;
   if(x%2 == 0)  {
    console.log("x est pair");
   } else {
    console.log("x est impair");
   }
   */

   for(var i = 0; i < 10; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
   }

}
maFonction2();

function checkTwoNumbers(){
    var nombre1 = Number(document.getElementById("numberCheck1").value);
    var nombre2 = Number(document.getElementById("numberCheck2").value);
    // affiche le plus grand de deux nombres
   if(nombre1 > nombre2) {
    alert(nombre1);
   } else {
    alert(nombre2);
   }
}

function sortThreeNumbers(){
    var nombre1 = Number(document.getElementById("numberSort1").value);
    var nombre2 = Number(document.getElementById("numberSort2").value);
    var nombre3 = Number(document.getElementById("numberSort3").value);
    if(nombre1 < nombre2) {
        if(nombre3 < nombre1) {
            alert(nombre3 + "-" + nombre1 + "-" + nombre2);
        } else if(nombre2 < nombre3) {
            alert("" + nombre1 + "-" + nombre2 + "-" + nombre3);
        } else {
            alert("" + nombre1 + "-" + nombre3 + "-" + nombre2);
        }
    } else {
        if(nombre3 < nombre2) {
            alert("" + nombre3 + "-" + nombre2 + "-" + nombre1);
        } else if(nombre1 < nombre3) {
            alert("" + nombre2 + "-" + nombre1 + "-" + nombre3);
        } else {
            alert("" + nombre2 + "-" + nombre3 + "-" + nombre1);
        }
    }
}

function greaterFiveNumbers(){
    var nombre1 = Number(document.getElementById("numberGreater1").value);
    var nombre2 = Number(document.getElementById("numberGreater2").value);
    var nombre3 = Number(document.getElementById("numberGreater3").value);
    var nombre4 = Number(document.getElementById("numberGreater4").value);
    var nombre5 = Number(document.getElementById("numberGreater5").value);
    var nombreLePlusGrand = nombre1;
    if(nombre2 > nombreLePlusGrand) {
        nombreLePlusGrand = nombre2;
    }

    if(nombre3 > nombreLePlusGrand) {
        nombreLePlusGrand = nombre3;
    }
    
    if(nombre4 > nombreLePlusGrand) {
        nombreLePlusGrand = nombre4;
    }

    if(nombre5 > nombreLePlusGrand) {
        nombreLePlusGrand = nombre5;
    }

    alert(nombreLePlusGrand);
}
