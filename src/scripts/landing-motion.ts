export function initLandingMotion() {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (reduce) {
		document.querySelectorAll(".scroll-fade").forEach((el) => {
			(el as HTMLElement).style.opacity = "1";
			(el as HTMLElement).style.transform = "none";
		});
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const el = entry.target as HTMLElement;
					if (el.hasAttribute("data-step-id")) continue;
					el.animate(
						[
							{ opacity: "0", transform: "translateY(20px)" },
							{ opacity: "1", transform: "translateY(0)" },
						],
						{ duration: 600, easing: "ease-out", fill: "forwards" },
					);
					observer.unobserve(el);
				}
			}
		},
		{ threshold: 0.15 },
	);

	document.querySelectorAll(".scroll-fade:not([data-step-id])").forEach((el) => {
		observer.observe(el);
	});
}
