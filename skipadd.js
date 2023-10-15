function skipadd()
{
	let element = document.querySelector('.ytp-ad-skip-button.ytp-button');
	if (element)
	{
		// Add found skip it
		console.log('Add found skiping it');
		element.click();
	}
	console.log('No Add found');
}
// set interval every 1000(1sec) call function to check for the add
setInterval(skipadd, 1000);
