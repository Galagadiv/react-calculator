export default function calculate(state, buttonName) {
	let {total, next, operation} = state;

	if (buttonName === "AC") return {total: null, next: null, operation: null};

	if ("0123456789".includes(buttonName)) {
		return {...state, next: (next || "") + buttonName};
	}

	if (["+", "-", "x", "÷"].includes(buttonName)) {
		return {total: next, next: null, operation: buttonName};
	}

	if (buttonName === "=" && total && next && operation) {
		const result = eval(
			`${total} ${operation.replace("x", "*").replace("÷", "/")} ${next}`
		);
		return {total: result.toString(), next: null, operation: null};
	}

	return state;
}
