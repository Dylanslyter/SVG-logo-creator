const { SVG, registerWindow } = require('@svgdotjs/svg.js');

async function generateLogo(text, textColor, shape, shapeColor) {
  const { createSVGWindow } = await import('svgdom');
  const window = createSVGWindow();
  const document = window.document;
  registerWindow(window, document);

  const svg = SVG(document.documentElement).size(300, 200);

  switch (shape) {
    case 'circle':
      const circle = svg.circle(100).move(100, 50).fill(shapeColor);
      const circleCenterX = circle.cx();
      const circleCenterY = circle.cy();
      const textWidthCircle = svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).bbox().width;
      const textHeightCircle = svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).bbox().height;
      svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).move(circleCenterX - textWidthCircle / 2, circleCenterY - textHeightCircle / 2);
      break;
    case 'triangle':
      const triangle = svg.polygon('100,0 50,100 150,100').move(50, 0).fill(shapeColor);
      const triangleCenterX = triangle.cx();
      const triangleCenterY = triangle.cy();
      const textWidthTriangle = svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).bbox().width;
      const textHeightTriangle = svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).bbox().height;
      svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).move(triangleCenterX - textWidthTriangle / 2, triangleCenterY - textHeightTriangle / 2);
      break;
    case 'square':
      const square = svg.rect(100, 100).move(100, 50).fill(shapeColor);
      const squareCenterX = square.cx();
      const squareCenterY = square.cy();
      const textWidthSquare = svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).bbox().width;
      const textHeightSquare = svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).bbox().height;
      svg.text(text).font({ fill: textColor, size: 30, anchor: 'middle' }).move(squareCenterX - textWidthSquare / 2, squareCenterY - textHeightSquare / 2);
      break;
  }

  return svg.svg();
}

module.exports = generateLogo;
