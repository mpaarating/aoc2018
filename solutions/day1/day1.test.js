const { FREQUENCY_CHANGES } = require('./day1.input.js');
const { calculateFrequency, calculateDuplicateFrequency } = require('./day1.functions.js');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('Should calcuate the current frequency given numerous frequency changes', () => {
      expect(calculateFrequency(FREQUENCY_CHANGES)).toEqual(427);
    });
  });

  describe('Part 2', () => {
    it('Should calculate the first duplicate frequency given numerous freqnuency changes', () => {
      expect(calculateDuplicateFrequency(FREQUENCY_CHANGES)).toEqual(341);
    })
  })
});

