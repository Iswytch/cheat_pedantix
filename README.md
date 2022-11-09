# cheat_pedantix
## 1. Récupèration des données

Source de liste de mots : https://eduscol.education.fr/186/liste-de-frequence-lexicale

Copier coller le texte du pdf dans un  fichier txt "dictionnaire"

Enlever tout après le premier espace de chaque ligne :

sed 's/\s.*$//' dictionnaire >> wordsRetourLigne


Ajouter une virgule à la fin de chaque ligne :
sed '$!s/$/,/' wordsRetourLigne >> wordsRetourLigneVirgule

Copier coller le texte sur google pour supprimer tout les retour de ligne

## 2. Utilisation

Sous la console JS de la page :

wordsToCut = Notre liste de mot à coller ici

words = wordsToCut.split(",")

```javascript
btn = document.getElementById("pedantix-guess-btn")
input = document.getElementById("pedantix-guess")
```

```javascript
(function fiveSeconds  (n) {
  if (n < words.length) setTimeout(function () {  
    fiveSeconds ( n ); // Redo if n < 5 (and pass n)
  }, 20);
  input.value=words[n]
  btn.click()
  n++
} (0)); // Initialize. n is 0
```
