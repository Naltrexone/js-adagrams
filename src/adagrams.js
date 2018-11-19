// export default Adagrams;

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    let array = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M', 'M',
      'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y', 'Y',
      'Z'
    ];

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array.slice(0,10);
},

usesAvailableLetters(input,lettersInHand) {
    let value = true;
    // converting word into array of uppercase letters
    let inputLetters = input.toUpperCase().split('');
    // storing array in new variable to delete from
    let handCopy = lettersInHand;
    //
    for (let letter of inputLetters) {
      if (handCopy.includes(letter)) {
        let index = handCopy.findIndex((eachValue) => {
          return eachValue === letter;
        });
        if (index !== -1) {
          delete handCopy[index];
        }
      }

      else {
        value = false;
      }
    }
    return value;
  },

}

// // Do not remove this line or your tests will break;
export default Adagrams;
