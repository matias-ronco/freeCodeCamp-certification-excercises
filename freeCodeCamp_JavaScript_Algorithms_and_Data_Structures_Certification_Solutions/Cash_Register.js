function checkCashRegister(price, cash, cid) {
  const CENTS = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  let giveBack = cash * 100 - price * 100;
  let giveBackCopy = giveBack;
  let change = [];
  let status = "";

  let totalCid = 0;
  let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem) => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    totalCid += currSum;
    let amount = 0;
    while (giveBack >= CENTS[curr] && currSum > 0) {
      amount += CENTS[curr];
      giveBack -= CENTS[curr];
      currSum -= CENTS[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (giveBack > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (giveBack == 0 && giveBackCopy == totalCid) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
