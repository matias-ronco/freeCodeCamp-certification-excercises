function convertToRoman(num) {
  if (num <= 0 || num > 3999) {
    return `Please enter a number from 1 to 3999`;
  }
  const ROMAN = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM", "IV-*", "V-", "VI-", "VII-", "IX-"],
  ];
  let conv = [];
  let revDec = num.toString().split("").reverse();
  let x = revDec.length;
  if (x === 1) {
    conv.push(ROMAN[x - 1][revDec[x - 1]]);
  } else if (x === 2) {
    conv.push(ROMAN[x - 2][revDec[x - 2]], ROMAN[x - 1][revDec[x - 1]]);
  } else if (x === 3) {
    conv.push(
      ROMAN[x - 3][revDec[x - 3]],
      ROMAN[x - 2][revDec[x - 2]],
      ROMAN[x - 1][revDec[x - 1]]
    );
  } else if (x === 4) {
    conv.push(
      ROMAN[x - 4][revDec[x - 4]],
      ROMAN[x - 3][revDec[x - 3]],
      ROMAN[x - 2][revDec[x - 2]],
      ROMAN[x - 1][revDec[x - 1]]
    );
  }
  let result = conv.reverse().join("");
  return result;
}

convertToRoman(36);
