export const todayDateAsString = (() => {
	const date = new Date();
	const month = date.toLocaleString('en-US', {month: '2-digit'});
	const day = date.toLocaleString('en-US', {day: '2-digit'});
	const year = date.getFullYear();
	//console.log(dateString);
	return year + '-' + month + '-' + day;
})();
