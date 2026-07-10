import { inView, animate } from "motion";

export function initLandingMotion() {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (reduce) {
		document.querySelectorAll(".scroll-fade").forEach((el) => {
			(el as HTMLElement).style.opacity = "1";
			(el as HTMLElement).style.transform = "none";
		});
		return;
	}

	inView(".scroll-fade:not([data-step-id])", (element) => {
		animate(element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: "easeOut" });
	});
}
