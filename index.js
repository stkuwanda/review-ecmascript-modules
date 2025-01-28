import circleArea, { circumference } from './circle.js'; // imported default export in custom variable, imported named export through destructuring
import * as rectangle from './rectangle.js'; // imported all exported named exports and put them into a custom variable of an object reference
import { round } from './mathUtils.js'; // imported single named export through destructuring

function calculateCircleMetrics(radius) {
	console.log(`Circle with radius ${radius}:`);
	console.log(`Area: ${round(circleArea(radius), 2)}`);
	console.log(`Circumference: ${round(circumference(radius), 2)}`);
}

function calculateRectangleMetrics(length, width) {
	console.log(`\nRectangle with length ${length} and width ${width}:`);
	console.log(`Area: ${round(rectangle.area(length, width), 2)}`);
	console.log(`Perimeter: ${round(rectangle.perimeter(length, width), 2)}`);
}

calculateCircleMetrics(5);
calculateRectangleMetrics(10, 5);
