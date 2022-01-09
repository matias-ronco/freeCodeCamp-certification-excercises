function rot13(inputcito) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  let upperCased = inputcito.toUpperCase();
  let codedArray = upperCased.split("");
  let decodedArray = [];
  for (let i = 0; i < codedArray.length; i++) {
    if (!alphabet.includes(codedArray[i])) {
      decodedArray.push(codedArray[i]);
    }
    for (let j = 0; j < alphabet.length; j++) {
      if (codedArray[i] == alphabet[j]) {
        decodedArray.push(alphabet[j + 13]);
      }
    }
  }
  let decodedToString = decodedArray.join("");
  return decodedToString;
}

rot13("SERR PBQR PNZC");
