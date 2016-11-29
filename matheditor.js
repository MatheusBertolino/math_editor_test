window.onload = function (){
	var hiddentextarea = document.getElementById('hiddentextarea');
	var renderplaceholder = document.getElementById('renderplaceholder');
	var cursor = document.getElementById("cursor");
	var refreshIntervalId;
	renderButtons();
	customizeAndLoadQuillEditor();

	hiddentextarea.onfocus = function(){
		console.log('focus');
		refreshIntervalId = setInterval(blinkCursor, 500);
	};
	hiddentextarea.onblur = function(){
		cursor.style.display = 'none';
		console.log('blur');
		clearInterval(refreshIntervalId);
	};
}

function blinkCursor(){
	if (cursor.style.display == 'none'){
		cursor.style.display = 'inline';}
	else{
		cursor.style.display = 'none';}
}

function renderButtons(){
	var buttons = document.querySelectorAll(".math_edt_btn");
	for (var i=0; i<buttons.length; i++){
		katex.render(buttons[i].textContent, buttons[i]);
	}
}

function renderize(element) {
	katex.render(element.value, renderplaceholder);
}

function textareaWriter(element) {
	hiddentextarea.value += element.querySelector('annotation').textContent;
	renderize(hiddentextarea);
}

function changeFocus() {
	document.getElementById('hiddentextarea').focus();
}
