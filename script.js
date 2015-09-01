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

	// $(document).on('mouseenter', '.pixel', changeColor());
});

function initializeGrid(pixels){
	clearGrid();
	var width = gridWidth();
	var args = {'gridWidth': width, 'pixels': pixels};
	args['pixelSize'] = calculatePixelSize(args);
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
	var pixel = '<div class="pixel" style="width: ' + pixelSize + 'px; height: ' + (pixelSize - 3) + 'px"></div>';

	for (i = 0; i < pixels * pixels; i++) {
		$('#grid').append(pixel).fadeTo('fast', 1);
	}
}

function clearGrid(){
	$('#grid').empty();
}

function promptPixels(){

}

function changeColor(){

}



