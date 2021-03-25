var findSecretWord = function(wordlist, master) {

  //calculates matching characters between guessed word and wordlist word
 const findMatches = (word1, word2) => {
     let charMatches = 0
     for (let i = 0; i < word1.length; i++) {
         if (word1[i] === word2[i]) {
             charMatches++
         }
     }
     return charMatches
 }


 for (let i = 0; i < 10; i++) {
     const randomIdx = Math.floor(Math.random() * (wordlist.length - 1) + 0) // to include 0 as well
     const guessWord = wordlist[randomIdx]
     const matches = master.guess(guessWord)
     const candidates = []

     for (let word of wordlist) {
         if (matches === findMatches(guessWord, word)) {
             candidates.push(word)
         }
     }
     wordlist = candidates
 }
};
