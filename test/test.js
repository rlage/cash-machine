const expect = require('chai').expect;
const assert = require('chai').assert;
const { calculateNotes } = require('../api/controllers/cashMachineController');
const InvalidArgumentException = require("../errors/InvalidArgumentException");
const NoteUnavailableException = require("../errors/NoteUnavailableException");

describe('calculateNotes()', () => {
  it('returns a list', () => {
    let value = 130;

    let result = calculateNotes(value);

    expect(result).to.be.an('array');

  });
  it('returns the correct list for a normal case', () => {
    let value = 130;

    let result = calculateNotes(value);

    expect(result).to.deep.equal([100, 20, 10]);

  });
  it('returns empty list when value = null', () => {
    let value = null;

    let result = calculateNotes(value);

    expect(result).to.deep.equal([]);

  });
  it('returns empty list when value = undefined', () => {
    let value;

    let result = calculateNotes(value);

    expect(result).to.deep.equal([]);

  });
  it('throws InvalidArgumentException when value is negative', () => {
    let value = -135;
    expect(() => calculateNotes(value)).to.throw(InvalidArgumentException);

  });
  it('throws NoteUnavailableException when value is impossible to be divided by available notes', () => {
    let value = 255;
    expect(() => calculateNotes(value)).to.throw(NoteUnavailableException);

  });
});