/*
 *  Functions for processing data
 */

// Define lib module
const dataProcessor = {};

dataProcessor.parseData = (data) => {

  let processedData = {};
  for(let i = 0; i < data.length; i ++) {
    let currId = data[i].id;
    let currTemp = data[i].temperature;
    if(processedData[currId] === undefined) {
      processedData[currId] = {
        totalTemps: 1,
        total: currTemp
      };
    } else {
      processedData[currId].totalTemps ++;
      processedData[currId].total += currTemp;
    }
  }

  console.log(processedData);
};

// Export the module
module.exports = dataProcessor;
