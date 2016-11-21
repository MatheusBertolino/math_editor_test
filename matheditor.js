window.onload = function (){
	var hiddentextarea = document.getElementById('hiddentextarea');
	var renderplaceholder = document.getElementById('renderplaceholder');
	renderButtons();
	customizeAndLoadQuillEditor();
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
