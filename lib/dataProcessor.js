/*
 *  Functions for processing data
 */

// Define lib module
const dataProcessor = {};

dataProcessor.parsedData = [];

dataProcessor.parseData = (data) => {

  let processedData = {};
  for(let i = 0; i < data.length; i ++) {
    let currId = data[i].id;
    let currTemp = data[i].temperature;
    if(processedData[currId] === undefined) {
      processedData[currId] = {
        totalTemps: 1,
        total: currTemp,
        temps: [data[i].temperature]
      };
    } else {
      processedData[currId].totalTemps ++;
      processedData[currId].total += currTemp;
      processedData[currId].temps.push(data[i].temperature);
    }
  }

  for(var key in processedData) {
    let id = key;
    let mean = dataProcessor._getMean(processedData[key]);
    let temps = processedData[key].temps;

    temps.sort();
    let median = dataProcessor._getMedian(temps);

    let mode = dataProcessor._getMode(temps);

    let data = {
      id: id,
      mean: mean,
      median: median,
      mode: mode
    }

    dataProcessor.parsedData.push(data);
  }

  console.log(dataProcessor.parsedData);
};

// Define some helper functions

// Get the mean
dataProcessor._getMean = (data) => {

  // Return the mean rounded to two decimal places
  return (data.mean = data.total / data.totalTemps).toFixed(2);
};

// Get the median
dataProcessor._getMedian = (temps) => {

  // Return the median
  if(temps.length % 2 === 0) {
    let median = (temps[(temps.length / 2) - 1] + temps[temps.length / 2]) / 2;
    return median.toFixed(2);
  } else {
    let median = temps[Math.floor(temps.length / 2)];
    return median.toFixed(2);
  }
};

// Get the mode
dataProcessor._getMode = (temps) => {
  let occurrences = {};
  let highest = [];
  for(let i = 0; i < temps.length; i ++) {
    if(occurrences[temps[i]] === undefined) {

      occurrences[temps[i]] = {
        key: temps[i],
        val: 1
      };
    } else {

      occurrences[temps[i]].val ++;
    }
  }

  console.log(occurrences);
  console.log('\n');
  return 0;
};

// Export the module
module.exports = dataProcessor;
