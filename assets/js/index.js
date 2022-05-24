const items = document.getElementsByClassName('item');
const container = document.getElementsByClassName('wrap');
const hs = new HorizontalScroll.default({
	blocks: items,
	container: container,
	isAnimated: true,
	springEffect: 0.8,
	skewReducerNumber: 2000,
	skewLimitNumber: 2000
})