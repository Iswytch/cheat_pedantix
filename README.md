# cheat_pedantix
## 1. Récuperation des données

Source de liste de mots : https://eduscol.education.fr/186/liste-de-frequence-lexicale

Copier coller le texte du pdf dans un  fichier txt de nom "dictionnaire", dans notre cas

Enlever le reste de la ligne après le premier espace pour chacune des lignes :
```shell
sed 's/\s.*$//' dictionnaire >> wordsRetourLigne
```

Ajouter une virgule à la fin de chaque ligne :
```shell
sed '$!s/$/,/' wordsRetourLigne >> wordsRetourLigneVirgule
```

Copier coller le texte sur google pour supprimer tout les retour de ligne

## 2. Utilisation

Sous la console JS de la page https://cemantix.certitudes.org/pedantix

wordsToCut = Notre liste de mot à coller ici

```javascript
words = wordsToCut.split(",")
```

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
