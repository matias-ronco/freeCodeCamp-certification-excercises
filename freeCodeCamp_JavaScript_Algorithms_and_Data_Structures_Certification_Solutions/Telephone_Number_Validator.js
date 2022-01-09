function telephoneCheck(str) {
  let requirementRegEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return requirementRegEx.test(str);
}

telephoneCheck("555-555-5555");
