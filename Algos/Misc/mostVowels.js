const mostVowels = (str) => {
  let maxWord = ''
  let maxVowels = 0
  let vowels = 'aeiouAEIOU'

  //sanitizes string
  str = str.replace(/[.'?',]/g, '').split(' ')

  //loop through string and grab each word
  for( let word of str) {
    let currVowels = 0

    //loops through characters in word
    for (let char of word) {
      //checks if character is a vowel
      if (vowels.includes(char)) {
        currVowels++ //increments vowel count
        }
    }
    //once out of word loop, determine if current word has most vowels and reassign
    if (currVowels > maxVowels) {
      maxVowels = currVowels
      maxWord = word
    }
  }
  return maxWord

}
