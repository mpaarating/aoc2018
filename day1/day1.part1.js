const calculateFrequency = frequencies => {
  return frequencies
    .split('\n')
    .reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
}

module.exports = { calculateFrequency };

