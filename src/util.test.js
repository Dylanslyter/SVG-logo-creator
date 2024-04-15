const { describe, expect, test } = require('@jest/globals');
const generateLogo = require('./util.js');

describe('generateLogo', () => {
  it('should generate SVG with given parameters', async () => {
    const text = 'ABC';
    const textColor = '#FF0000';
    const shape = 'circle';
    const shapeColor = '#00FF00';

    const svgString = await generateLogo(text, textColor, shape, shapeColor);

    expect(typeof svgString).toBe('string');
    expect(svgString).toContain('<svg');
    expect(svgString).toContain('width="300"');
    expect(svgString).toContain('height="200"');
    expect(svgString).toContain(text);
    expect(svgString).toContain(textColor);
    expect(svgString).toContain(shape);
    expect(svgString).toContain(shapeColor);

  });
});
