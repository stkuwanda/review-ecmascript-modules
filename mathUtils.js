// utility function which rounds values

// effectively exports a named export
export function round(number, precision) {
	const factor = Math.pow(10, precision);
	return Math.round(number * factor) / factor;
}
