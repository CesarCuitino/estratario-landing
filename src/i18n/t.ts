import es from "./locales/es.json";
import en from "./locales/en.json";
import type { Locale } from "../config";

type TranslationValue = string | Record<string, unknown>;

function resolve(obj: Record<string, TranslationValue>, path: string): string {
	const parts = path.split(".");
	let current: unknown = obj;
	for (const part of parts) {
		if (current && typeof current === "object" && part in current) {
			current = (current as Record<string, TranslationValue>)[part];
		} else {
			return path;
		}
	}
	return typeof current === "string" ? current : path;
}

const translations: Record<Locale, Record<string, TranslationValue>> = {
	es: es as Record<string, TranslationValue>,
	en: en as Record<string, TranslationValue>,
};

export function t(key: string, locale: Locale): string {
	return resolve(translations[locale], key);
}

export interface TransPart {
	type: "text" | "tag";
	content: string;
	tagName?: string;
}

export function parseTrans(key: string, locale: Locale): TransPart[] {
	const raw = t(key, locale);
	const regex = /<(\d+)>(.*?)<\/\1>/gs;
	const parts: TransPart[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	while ((match = regex.exec(raw)) !== null) {
		if (match.index > lastIndex) {
			parts.push({ type: "text", content: raw.slice(lastIndex, match.index) });
		}
		parts.push({ type: "tag", content: match[2], tagName: "strong" });
		lastIndex = match.index + match[0].length;
	}

	if (lastIndex < raw.length) {
		parts.push({ type: "text", content: raw.slice(lastIndex) });
	}

	return parts.length > 0 ? parts : [{ type: "text", content: raw }];
}
