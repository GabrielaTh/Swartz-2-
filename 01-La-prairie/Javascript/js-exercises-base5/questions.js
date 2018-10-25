/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function(texte) {
  return texte.length;
};
var remplaceECar = function(texte) {
  return texte.replace("Ce", "C ");
};
var concatString = function(texte1, texte2) {
  return texte1.concat(texte2);
};
var afficherCar5 = function(texte) {
  return texte.charAt(6);
};
var afficher9Car = function(texte) {
  return texte.substr(0, 9);
};
var majusculeString = function(texte) {
  return texte.toUpperCase();
};
var minusculeString = function(texte) {
  return texte.toLowerCase();
};
var SupprEspaceString = function(texte) {
  return texte.trim();
};
var IsString = function(texte) {
  return Boolean(texte);
};

var AfficherExtensionString = function(texte) {
  return texte.substr(15);
};
var NombreEspaceString = function(texte) {
  return texte.split(" ").length;
};
var InverseString = function(texte) {
  function reverseString(texte) {
    return texte
      .split("")
      .reverse()
      .join("");
  }
  return reverseString(texte);

  reverseString();
};

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function(x, y) {
  return Math.pow(x, y);
};
var valeurAbsolue = function(nombre) {
  return Math.abs(nombre);
};
var valeurAbsolueArray = function(array) {
  var nueva = [];
  for (i = 0; i < array.length; i++) {
    var total = parseInt(array);
    if(total == array[i]){
      return Math.abs(total);
    }
    return total.push(nueva);
  }
  return nueva;
};
var sufaceCercle = function(rayon) {
  return rayon;
};
var hypothenuse = function(ab, ac) {};
var calculIMC = function(poids, taille) {};
