var hiddentextarea = document.getElementById('hiddentextarea');
var renderplaceholder = document.getElementById('renderplaceholder');

function renderize(element) {
	katex.render(element.value, renderplaceholder);
}

function textareaWriter(element) {
	hiddentextarea.value += element.textContent;
	renderize(hiddentextarea);
}

function changeFocus() {
	document.getElementById('hiddentextarea').focus();
}