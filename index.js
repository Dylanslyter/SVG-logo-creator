const readline = require('readline-sync');
const fs = require('fs');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');
const { createWindow } = require('svgdom');
registerWindow(createWindow);

function generateLogo() {
  // Prompt user for text input
  const text = readline.question('Enter up to three characters: ');

  // Prompt user for text color
  const textColor = readline.question('Enter text color (keyword or hexadecimal): ');

  // Prompt user for shape
  console.log('Choose a shape:');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shapeIndex = readline.keyInSelect(shapeOptions, 'Select shape: ');
  const shape = shapeOptions[shapeIndex];

  // Prompt user for shape color
  const shapeColor = readline.question('Enter shape color (keyword or hexadecimal): ');

  // Create SVG
  const svg = SVG().size(300, 200);

  // Draw shape
  switch (shape) {
    case 'circle':
      svg.circle(100).move(100, 50).fill(shapeColor);
      break;
    case 'triangle':
      svg.polygon('100,0 50,100 150,100').move(50, 0).fill(shapeColor);
      break;
    case 'square':
      svg.rect(100, 100).move(100, 50).fill(shapeColor);
      break;
  }

  // Add text
  svg.text(text).move(120, 150).font({ fill: textColor });

  // Save SVG to file
  const svgString = svg.svg();
  fs.writeFileSync('logo.svg', svgString);

  console.log('Generated logo.svg');
}

generateLogo();
