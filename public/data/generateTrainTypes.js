//runs in node lol
const { data } = require('./trainNums');
const fs = require('fs');

const trainNameAndType = {
    "Sunset Limited": "long",
    "Southwest Chief": "long",
    "California Zephyr": "long",
    "Empire Builder": "long",
    "Coast Starlight": "long",
    "Crescent": "long",
    "Texas Eagle": "long",
    "Capitol Limited": "long",
    "Pennsylvanian": "state",
    "Lake Shore Limited": "long",
    "Cardinal": "long",
    "Auto Train": "long",
    "Vermonter": "state",
    "City of New Orleans": "long",
    "Maple Leaf": "state",
    "Northeast Regional": "nec",
    "Adirondack": "state",
    "Piedmont": "state",
    "Carolinian": "state",
    "Palmetto": "long",
    "Silver Star": "long",
    "Silver Meteor": "long",
    "Empire Service": "state",
    "Ethan Allen Express": "nec",
    "Lincoln Service": "state",
    "Missouri River Runner": "state",
    "Hiawatha": "state",
    "Wolverine": "state",
    "Blue Water": "state",
    "Illinois Service": "state",
    "Saluki": "state",
    "Illini": "state",
    "Amtrak Cascades": "state",
    "Capitol Corridor": "state",
    "Pacific Surfliner": "state",
    "Keystone": "state",
    "Downeaster": "state",
    "San Joaquins": "state",
    "Heartland Flyer": "state",
    "Winter Park Express": "long",
    "Piero Limited": "acela",
    "Acela": "acela",
    "Test Train": "acela"
};

let finalValues = {};

Object.keys(data).forEach((key) => {
    finalValues[key] = trainNameAndType[data[key]];
});

fs.writeFileSync('trainTypes.js', `exports.types = ${JSON.stringify(finalValues)}`);

console.log(finalValues);
console.log('automation will kill us all :)')