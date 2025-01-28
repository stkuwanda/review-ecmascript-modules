// exporting only named exports i.e there's no default export here

export function area(length, width) {
	return length * width;
}

export function perimeter(length, width) {
	return (length + width) * 2;
}

// export { area, perimeter }; // also works
