var CreationTableauLangages = function() {
  var array = ["Html", "CSS", "Java", "PHP"];
  return array;
};

var CreationTableauNombres = function() {
  let numTest = [0, 1, 2, 3, 4, 5];
  return numTest;
};

var RemplacementElement = function(langages) {
  var arreglo = langages;
  arreglo.splice(2, 1, "Javascript");
  return arreglo;
};

var AjoutElementLangages = function(langages) {
  langages.push("Ruby");
  langages.push("Python");
  return langages;
};

var AjoutElementNombres = function(nombres) {
  nombres.unshift(-2, -1);
  return nombres;
};

var SuppressionPremierElement = function(langages) {
  langages.shift();
  return langages;
};

var SuppressionDernierElement = function(langages) {
    langages.pop();
    return langages;
};

var ConversionChaineTableau = function(reseaux_sociaux_chaine) {
    var a = reseaux_sociaux_chaine
    var separador = a.split(",");
    return separador;
};

var ConversionTableauChaine = function(langages) {
    var a = langages;
    var b = a.toString();
    return b;
};

var TriTableau = function(reseaux_sociaux) {
   var a = reseaux_sociaux;
   var b = a.sort();
   return b;
};

var InversionTableau = function(reseaux_sociaux) {
var a = reseaux_sociaux;   
var b = a.reverse();
 return b;
};
