let initalState = {
	isLogo: true,
	isArrow: false,
	isHeader: false
}

module.exports = (state = initalState, actions) => {
	switch (actions.type) {
		
		case "isLogo":
			return Object.assign({}, state, { isLogo: true})
		case "isArroe":
			return Object.assign({}, state, {  isArrow: true})
		case "isHeaderHidden":
			return Object.assign({}, state, {  isHeader: true})
		case "isHeaderNotHidden":
			return Object.assign({}, state, {  isHeader: false})
		default:
			return state
	}
}
