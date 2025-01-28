const PI = Math.PI;

export default function area(radius) {
	return PI * radius ** 2;
}

export function circumference(radius) {
	return 2 * PI * radius;
}

export { circumference };

// export default area; // also works but only choose one
// export { circumference }; // also works 


