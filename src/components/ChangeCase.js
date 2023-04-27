import React from 'react'

export function Small(x) {
	x = x.replaceAll(" ", "_");
	x = x.toLowerCase()
	return x
}
export function Large(x) {
	if (x === '') {
		return '';
	}
	x = x.replaceAll("_", ' ');
	x = x.trim(x)
	x = x.replaceAll(",", "");
	const mySentence = x;
	const words = mySentence.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	x = words.join(' ');
	return x;
}