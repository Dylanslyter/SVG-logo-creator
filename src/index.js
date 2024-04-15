const generateLogo = require('./util.js');
const fs = require('fs');
const readline = require('readline-sync');
const text = readline.question('Enter up to three characters: ');

let validTextColor = false;
  let textColor;
  while (!validTextColor) {
    textColor = readline.question('Enter text color (color keyword or hexadecimal number): ');

    validTextColor = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/i.test(textColor);
    if (!validTextColor) {
      console.log('Please enter a valid text color keyword or hexadecimal number.');
    }
  }

  console.log('Choose a shape:');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shapeIndex = readline.keyInSelect(shapeOptions, 'Select shape: ');
  const shape = shapeOptions[shapeIndex];

  let validShapeColor = false;
  let shapeColor;
  while (!validShapeColor) {
    shapeColor = readline.question('Enter shape color (color keyword or hexadecimal number): ');
  
    validShapeColor = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/i.test(shapeColor);
    if (!validShapeColor) {
      console.log('Please enter a valid shape color keyword or hexadecimal number.');
    }
  }

generateLogo(text, textColor, shape, shapeColor)
  .then(svgString => {

    fs.writeFileSync('logo.svg', svgString);
    console.log('Generated logo.svg');
  })
  .catch(error => {
    console.error('Error generating logo:', error);
  });
