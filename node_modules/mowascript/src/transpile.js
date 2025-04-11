import map from './map/index.js';

export function transpile(code) {
	let result = code;
	for (const [ua, js] of Object.entries(map)) {
		const regex = new RegExp(`(^|[^\\p{L}_$])${ua}([^\\p{L}_$]|$)`, 'gu');
		// result = result.replace(regex, (_, before, after) => `${before}${js}${after}`);

		result = result.replace(regex, (_, before, after) => {
			const needsSpaceBefore = /[\p{L}0-9_]$/u.test(before);
			const needsSpaceAfter = /^[\p{L}0-9_]/u.test(after);
			return `${before}${needsSpaceBefore ? ' ' : ''}${js}${needsSpaceAfter ? ' ' : ''}${after}`;
		});

		// Замена апострофов в идентификаторах
		result = result.replace(/([a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9]+)'([a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9]+)/gu, '$1_$2');
	}
	return result;
}
