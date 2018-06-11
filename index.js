/*
 *  Entry point
 */

// Node dependencies
const fs = require('fs');

// Local dependencies
const dataProcessor = require('./lib/dataProcessor');

// Read in data
const dataArrayBuffer = fs.readFileSync('./res/fridgeData.json', 'utf8');
const dataArray = JSON.parse(dataArrayBuffer);

dataProcessor.parseData(dataArray);
