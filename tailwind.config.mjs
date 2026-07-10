/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", "system-ui", "sans-serif"],
				mono: ["Space Mono", "monospace"],
			},
			colors: {
				surface: "var(--surface)",
				"surface-hover": "var(--surface-hover)",
				card: "var(--card-bg)",
				foreground: "var(--text)",
				"foreground-secondary": "var(--text-secondary)",
				"foreground-tertiary": "var(--text-tertiary)",
				"foreground-heading": "var(--text-heading)",
				primary: {
					DEFAULT: "var(--primary)",
					soft: "var(--primary-soft)",
				},
				success: {
					DEFAULT: "var(--success)",
					soft: "var(--success-soft)",
				},
				danger: {
					DEFAULT: "var(--danger)",
					soft: "var(--danger-soft)",
				},
				brand: {
					primary: "#6366f1",
					accent: "#8b5cf6",
					pink: "#ec4899",
					cyan: "#06b6d4",
					green: "#34d399",
				},
			},
			borderColor: {
				DEFAULT: "var(--border)",
				secondary: "var(--border-secondary)",
				primary: "var(--primary-border)",
				card: "var(--card-border)",
			},
			boxShadow: {
				card: "var(--card-shadow)",
				btn: "var(--btn-shadow)",
			},
			backgroundImage: {
				"btn-gradient": "var(--btn-gradient)",
				"btn-hover": "var(--btn-hover-gradient)",
				"brand-gradient": "linear-gradient(135deg, #9678ff, #6a4cff)",
			},
			backdropBlur: {
				DEFAULT: "var(--backdrop-blur)",
			},
			maxWidth: {
				container: "1600px",
				prose: "780px",
				content: "1100px",
			},
			borderRadius: {
				card: "20px",
				"card-lg": "32px",
			},
			fontSize: {
				"2xs": ["0.625rem", { lineHeight: "0.875rem" }],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
