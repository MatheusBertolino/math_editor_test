// Formulas Popup
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike','formula'],        // toggled buttons
];
var container = document.getElementById('editor');
var quill = new Quill(container, {
    modules: {
        formula: true,
        toolbar: toolbarOptions 
    },
    theme: 'snow',
});

var toolbar = quill.getModule('toolbar');

/* INSERT FORMULA */
toolbar.addHandler('formula', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';

    /*
    var eq = prompt("digite a formula :");
    var selection = quill.getSelection(true);
    quill.insertEmbed(selection.index, 'formula', eq);
    */
});