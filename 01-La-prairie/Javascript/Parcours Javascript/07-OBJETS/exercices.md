# Exercice : PNJ (Personnage non-joueur)

* Créer un objet "Character" qui contient les informations suivantes : 

- name (string) 
- age (numero) 
- items_to_give (tableau)

- afficher chaque information sur une ligne séparés dans la console __(for in)__
- faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

# Exercice : Shop

Créer un tableau avec des *objets* à vendre (épée, hache, sceptre, etc.)

Caractéristiques de chaque objet :

- title (string) 
- physic (int)
- magic (int)
- minLevel (int)
- available (boolean)

Manipulation :

- faire une fonction pour afficher tous les objets
- faire une fonction pour afficher les objets disponibles
- faire une fonction pour afficher les objets dont le niveau minimum est de 10


# Exercice : Personnage

* créer un objet "mainCharacter" qui possède les propriétés suivantes : 
- name (string) 
- level (int) 
- life (int) 
- weapon (object) 
- attack (function) 

* l'objet "weapon" possède les propriétés suivantes :
- name (string) 
- damage (int) 

* Appeler la fonction "attack" du personnage
	- la fonction doit retourner :
		(le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)



# BONUS :

# Exercice : Adversaire

* créer un objet "character" qui possède les propriétés suivantes : 

- name (string) 
- level (int) 
- life (int) 
- weapon (object) 
- attack (function)
- receiveDamage (function)

* l'objet "weapon" possède les propriétés suivantes :

- name (string) 
- damage (int) 

* créer un objet "opponentCharacter" à partir de character
* créer un objet "mainCharacter" à partir de character

* Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"
- la fonction doit afficher dans la console (ligne par lige)
	+ (le nom du personnage) attaque (nom de l'adversaire)
	+ avec l'arme (nom de l'arme) 
	+ et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
	+ (nom de l'adversaire) à maintenant (life de l'adversaire) de vie






