export function rot13(str: string): string {
	return str.replace(/[a-zA-Z]/g, (c) => {
		const code = c.charCodeAt(0);
		const offset = code <= 90 ? 65 : 97;
		return String.fromCharCode(((code - offset + 13) % 26) + offset);
	});
}
