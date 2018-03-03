const InvalidArgumentException = require("../../errors/InvalidArgumentException");
const NoteUnavailableException = require("../../errors/NoteUnavailableException");

/**
 * Calculates the minimum number of notes needed
 * to reach the amount
 * @param {number} amount
 * @returns {array} returns an array with the notes
 */
exports.calculateNotes = (amount) => {
  if(amount){
    if(amount < 0) {
      throw new InvalidArgumentException;
    }

    let availableNotes = [100, 50, 20, 10];
    let resultNotes = [];
    let index = 0;
    let rest = amount % availableNotes[index];
    let quo = Math.floor(amount / availableNotes[index]);

    while (index < availableNotes.length && (rest > 0 || quo > 1)){
      rest = amount % availableNotes[index];
      quo = Math.floor(amount / availableNotes[index]);

      for (let j = 0; j < quo; j++) {
        resultNotes.push(availableNotes[index]);
      }

      index++;
      amount = rest;
    }
    if (amount > 0) {
      resultNotes.push(availableNotes[index]);
    }
    if(rest !== 0){
      throw new NoteUnavailableException;
    }
    return resultNotes;
  }
  return [];

}

/**
 * This function receives the requisition and response objects,
 * calls calculateNotes
 * and respond with a list of notes
 * @param {object} req
 * @param {object} res
 */
exports.list_all_notes = (req, res) => {
  let amount = req.params.amount;
  try {
    res.json(this.calculateNotes(amount));
  } catch (error) {
    res.json(error.message);
  }
};