const { FREQUENCY_CHANGES } = require('./day1.input.js');
const { calculateFrequency } = require('./day1.part1.js');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('Should calcuate the current frequency given numerous frequency changes', () => {
      expect(calculateFrequency(FREQUENCY_CHANGES)).toEqual(427);
    });
  });
});

