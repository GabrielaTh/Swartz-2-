## DOM

- Télécharger fichier "file.zip"

## EXERCICE 1 : Manipulation de classes

- sélectionner le body 
- lui retirer la classe "bg-aqua"
- lui ajouter la classe "bg-olive"

- sélectionner first-paragraph
- lui retirer les classes "bg-lime" et "gray"
- lui ajouter la class "aqua"

- sélectionner tous les éléments qui ont la classe 'bg-silver'
- modifier tous ses éléments en leur ajoutant la classe "bg-teal"
- modifier tous ses éléments en leur supprimant la classe "bg-silver"

- sélectionner tous les éléments de type 'blockquote'
- modifier tous ses éléments en leur ajoutant la classe "bg-white"

## EXERCICE 2  : Selecteurs CSS

- avec `querySelector` sélectionner l'élément 'my-table'
- lui ajouter la classe "bg-purple"

- avec `querySelectorAll` sélectionner tous les paragraphes dans 'container'
- modifier tous ses éléments en leur ajoutant la classe 'shadow'

## EXERCICE 3

- sélectionner tous les éléments de type 'pre'
- avec la propriété `style` changer la couleur de texte
- avec la propriété `style` changer la couleur de fond grâce à `backgroundColor`

- avec la propriété `style` ajouter un `border-top` de `3px solid red` (n'oubliez pas que vous pouvez accéder aux propriétés d'un objet de cette manière : ["prop-name"] )
- avec la propriété `style` ajouter un `border-bottom` de `3px solid red`

- sélectionner le premier élément de type 'h3'
- remplacer son contenu HTML en `<em>Italic title ! yeah !</em>`

- sélectionner le premier élément de type 'h2'
- remplacer son contenu texte par `<strong>HTML doesn't work !</strong>`


## EXERCICE 4 : Création d'éléments

- sélectionner le premier 'ul'
- créer un élément de type 'li'
- ajouter ce texte `Mon meilleur ami est <a href='http://www.google.com'>Google</a>` dans le 'li'
- ajouter ce 'li' dans le ul

- sélectionner le premier lien dans le 'li' précedement créé
- avec la propriété `style` changer la couleur de texte du lien

## EXERCICE 5 : Création et suppression de plusieurs éléments

- sélectionner le premier élément 'ol'
- faire une boucle sur tous les enfants de ce dernier grâce à sa propriété `children`
- supprimer chaque enfant de 'ol' grâce à `removeChild()`

- déclarer dans un tableau les valeurs suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]
- faire une boucle sur tous les enfants du tableau précédement créé
- pour chaque valeur du tableau créer un élément 'li' grâce à `document.createElement()` 
- ajouter à chaque 'li' la valeur courante tableau
- ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné


### Reminder

Sélecteurs
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector()
- document.querySelectorAll()

Création d'éléments
- document.createElement()
- element.appendChild()

Manipulation de classes CSS
- element.className
- element.classList.remove()
- element.classList.add()
- element.classList.toggle()

Manipulation CSS
- element.style _( ex : `element.style.backgroundColor = "blue"`)_

Autres
- element.id
- element.innerHTML
- element.innerText




