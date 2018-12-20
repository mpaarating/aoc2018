const calculateFrequency = frequencies => {
  return frequencies
    .split('\n')
    .reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
}

const calculateDuplicateFrequency = frequencies => {
  const cache = [];
  let currentFrequency = 0;
  let i = 0;
  frequencies = frequencies.split('\n');

  while(!cache.includes(currentFrequency)) {
    cache.push(currentFrequency);
    currentFrequency = currentFrequency + parseInt(frequencies[i]);
    i = i === frequencies.length -1 ? 0 : i + 1;
  }

  return currentFrequency;;
}

module.exports = { calculateFrequency, calculateDuplicateFrequency };

