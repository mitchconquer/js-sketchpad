/*
NOTES:
	Button:
	- Prompt user for pixels
	- Send results to grid
	Grid:
	- Clear Grid
	- Initialize grid
	Pixel:
	- Change color
*/

$(document).ready(function(){
	var pixels = 16; // initial pixel density
	initializeGrid(pixels);
});

function initializeGrid(pixels){
	clearGrid();
	var width = gridWidth();
	var args = {'gridWidth': width, 'pixels': pixels};
	var pixelSize = calculatePixelSize(args);
	args['pixelSize'] = pixelSize;
	drawGrid(args);
}

function gridWidth(){
	width = $('#grid').width();
	return width;
}

function calculatePixelSize(args){
	var pixels = args['pixels'];
	var width = args['gridWidth'];
	pixelSize = Math.floor(width / pixels) - 2;
	return pixelSize;
	//TODO: What to do when pixels don't fill the grid
}

function drawGrid(args){
	var pixels = args['pixels'];
	var width = args['gridWidth'];
	var pixelSize = args['pixelSize'];
	var pixel = '<div class="pixel" style="width: ' + pixelSize + 'px; height: ' + pixelSize+ 'px"></div>';

	for (i = 0; i < pixels * pixels; i++) {
		$('#grid').append(pixel);
	}
}

function clearGrid(){
	$('#grid').empty();
}

function promptPixels(){

}

function changeColor(){

}



