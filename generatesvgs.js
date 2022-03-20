const { data } = require('./public/data/trainNums');
const fs = require('fs');

const statusColors = {
    'ontime': '#1864AB',
    'early': '#2B8A3E',
    'late': '#A832CC',
    'complete': '#212529',
    'nodata': '#212529'
}

const sizing = {
    1: {
        'outer': '128',
        'inner': '114'
    }, 
    2: {
        'outer': '128',
        'inner': '114'
    },
    3: {
        'outer': '192',
        'inner': '178'
    },
    4: {
        'outer': '256',
        'inner': '242'
    }
}

const generateSvg = ((params) => {    
    const state = params.split('.')[0].split('-');
    const trainNum = state[0];
    const status = state[1]; //late, early, etc

    console.log(trainNum.split('').length)
    const trainSizing = sizing[trainNum.split('').length];
    console.log(trainSizing.outer)
    
    return `
       <svg width="${trainSizing.outer}" height="128" viewBox="0 0 ${trainSizing.outer} 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" width="${trainSizing.outer}" height="128" rx="44" fill="#000000"/>
            <rect x="7" y="7" width="${trainSizing.inner}" height="114" rx="36" fill="${statusColors[status]}"/>
            <text x="${parseInt(trainSizing.outer)/2}" y="90" fill="#fff" font-family="monospace" font-size="86px" text-anchor="middle">${trainNum}</text>
        </svg>
    `
})

const trainNums = Object.keys(data);

const states = ['late', 'early', 'ontime', 'nodata', 'complete'];

let trainStates = [];

for (let i = 0; i < trainNums.length; i++) {
    for (let j = 0; j < states.length; j++) {
        trainStates.push(`${trainNums[i]}-${states[j]}.svg`)
    }
}

for (let i = 0; i < trainStates.length; i++) {
    const svgData = generateSvg(trainStates[i]);
    console.log('public/images/trainicons/trains/' + trainStates[i])
    fs.writeFileSync('public/images/trainicons/' + trainStates[i], svgData);
}