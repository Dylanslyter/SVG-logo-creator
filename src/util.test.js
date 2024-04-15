const {describe, expect, test} = require('@jest/globals');
const generateLogo = require('./util.js');

describe('generateLogo', () => {
  it('should generate SVG with given parameters', async () => {
    const text = 'ABC';
    const textColor = '#FF0000';
    const shape = 'circle';
    const shapeColor = '#00FF00';

    const svgString = await generateLogo(text, textColor, shape, shapeColor);

  });
});
