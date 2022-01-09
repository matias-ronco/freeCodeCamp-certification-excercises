function palindrome(str) {
  const OK_CHAR = /[A-Z0-9]/;
  let uppercased = str.toUpperCase();
  let strToArray = uppercased.split("");
  const cleanArr = [];
  for (let i = 0; i < strToArray.length; i++) {
    if (OK_CHAR.test(strToArray[i])) {
      cleanArr.push(strToArray[i]);
    }
  }
  let revArr = cleanArr.slice().reverse();
  let stringClean = cleanArr.join("");
  let stringRev = revArr.join("");
  return stringClean == stringRev ? true : false;
}

palindrome("eye");
