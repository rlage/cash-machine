/**
 * Calculates the minimum number of bills needed
 * to reach the amount
 * @param {number} amount
 * @returns {array} returns an array with the bills
 */
const calculateBills = (amount) => {
  let availableBills = [100, 50, 20, 10];
  let resultBills = [];
  let index = 0;
  let rest = amount % availableBills[index];
  let quo = Math.floor(amount / availableBills[index]);

  while ( rest > 0 || quo > 1){
    rest = amount % availableBills[index];
    quo = Math.floor(amount / availableBills[index]);
    for (let j = 0; j < quo; j++) {
      resultBills.push(availableBills[index]);
    }
    index++;
    amount = rest;
  }
  if (amount > 0 ) {
    resultBills.push(availableBills[index]);
  }
  return resultBills;

}
/**
 * This function receives the requisition and response objects,
 * calls calculateBills
 * and respond with a list of bills
 * @param {object} req
 * @param {object} res
 */

exports.list_all_bills = (req, res) => {
  let amount = req.params.amount;
  res.json(calculateBills(amount));
};