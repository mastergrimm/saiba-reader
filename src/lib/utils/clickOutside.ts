export function clickOutside(
	element: HTMLElement,
	callbackFunction: () => void
) {
	function onMouseDown(event: MouseEvent) {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	}

	document.body.addEventListener("mousedown", onMouseDown);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener("mousedown", onMouseDown);
		},
	};
}
