
//EXERCICE 1 : Manipulation de classes
var body = document.getElementsByClassName("bg-aqua")[0];
body.className = "bg-olive";

var pI = document.getElementById("first-paragraph").classList.remove("bg-lime","gray")
document.getElementById("first-paragraph").classList.toggle("aqua");

var silver = document.getElementsByClassName("bg-silver")[0];
silver.classList.add ("bg-teal");
silver.classList.remove("bg-silver");
silver.classList.add("bg-white");

//EXERCICE 2 : Selecteurs CSS
var table = document.querySelector("#my-table");
table.classList.add ("bg-purple");

for (let i = 0; i < document.querySelectorAll("p").length ; i++) {
document.querySelectorAll("p")[i].classList.add("shadow");
console.log(document.querySelectorAll("p")[i]);
}



// //EXERCICE 3

var pret = document.getElementsByTagName("pre")[0];
pret.style.backgroundColor = "black";
pret.style.color = "white";
pret.style.borderTop= "3px solid red";
pret.style.borderBottom = "3px solid red";

var h3 = document.getElementsByTagName("h3")[0];
h3.innerHTML = "<em>Italic title! yeah !</em>";

var h2 = document.getElementsByTagName("h2")[0];
h2.innerHTML = "<strong>HTML doesn't work !</strong>";
h2.style.color = "white";

//EXERCICE 4 : Création d'éléments

var li = document.createElement("LI");   
var temlink = ' <a href="http://www.google.com">Google</a>';
li.innerHTML = " Mon meilleur ami est " +  temlink;                                      
document.getElementsByTagName("ul")[0].appendChild(li);
//change la couleur de link
var coli = document.getElementsByTagName("ul")[0];
var el = document.querySelectorAll("ul li a");
for (i=0; i < el.length; i++){
    el[i].style.color = "white";
    el[i].style.textDecoration = "none";
}

//EXERCICE 5 : Création et suppression de plusieurs éléments

var ultimo = document.getElementsByTagName("ol")[0];
while (ultimo.firstChild){
 ultimo.removeChild(ultimo.firstChild);
}


// var myArray = ["Silent Teacher","Code Monkey", "CodeCombat"];
// while (myArray.firstChild){
//  var addLi = document.createElement("LI");
//  addLi.innerHTML = "Silent Teacher";
//  document.getElementsByTagNameNs('myArray')[0].appendChild('addLi');
// }
//  console.log(myArray);




