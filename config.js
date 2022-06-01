var channel = "YourChannel"

// Choose input mode, either directly from chat or with a command before.
var inputMode = "chat" // chat or command

// Choose custom input command : !customCommand input
var inputCommand = "word"

// Choose accent mode. If true, then accent must be correct. If false, accents won't matter.
var accentMode = true

// The correct answer to be found
var answer = "San Francisco"

// Here are the words that will be displayed at the beginning
var whitelist = ["est", "un", "du", "de", "des", "c", "à", "a", "et", "l", "le", "la", "les" ]

// Text to be displayed below the answer/title
var texte = `
C'est une maison bleue
Adossée à la colline
On y vient à pied
On ne frappe pas
Ceux qui vivent là
Ont jeté la clé
On se retrouve ensemble
Après des années de route
Et on vient s'asseoir
Autour du repas
Tout le monde est là
À cinq heures du soir
Quand San Francisco s'embrume
Quand San Francisco s'allume
San Franciso
Où êtes-vous?
Lizzard et Luc
Psylvia, attendez-moi
Nageant dans le brouillard
Enlacés, roulant dans l'herbe
On écoutera Tom à la guitare
Phil à la quena jusqu'à la nuit noire
Un autre arrivera
Pour nous dire des nouvelles
D'un qui reviendra
Dans un an ou deux
Puisqu'il est heureux
On s'endormira
Quand San Francisco se lève
Quand San Francisco se lève
San Francisco
Où êtes-vous?
Lizzard et Luc
Psylvia, attendez-moi
C'est une maison bleue
Accrochée à ma mémoire
On y vient à pied
On ne frappe pas
Ceux qui vivent là
Ont jeté la clé
Peuplée de cheveux longs
De grands lits et de musique
Peuplée de lumière
Et peuplée de fous
Elle sera dernière
À rester debout
Si San Francisco s'effondre
Si San Francisco s'effondre
San Francisco
Où êtes-vous?
Lizzard et Luc
Psylvia, attendez-moi
`
