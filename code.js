wordsToCut = "LISTE DE MOT AVEC LES VIRGULES"

words = wordsToCut.split(",")

btn = document.getElementById("pedantix-guess-btn")
input = document.getElementById("pedantix-guess")

(function fiveSeconds  (n) {
  if (n < words.length) setTimeout(function () {  
    fiveSeconds ( n ); // Redo if n < 5 (and pass n)
  }, 20);
  input.value=words[n]
  btn.click()
  n++
} (0)); // Initialize. n is 0
