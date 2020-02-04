#!/usr/bin/env node

const {colors} = require('./colors');

const flattenedColor = {};

for (let colorsKey in colors) {
    if (typeof colors[colorsKey] === "string") {
        flattenedColor[colorsKey] = colors[colorsKey]
    } else {
        for (let nestedKey in colors[colorsKey]) {
            flattenedColor[`${colorsKey}-${nestedKey}`] = colors[colorsKey][nestedKey];
        }
    }
}

const nearestColor = require('nearest-color').from(flattenedColor);

const result = nearestColor(process.argv[process.argv.length - 1]);
console.log(`${result.name} - ${result.value}`);

