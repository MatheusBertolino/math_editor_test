function customizeAndLoadQuillEditor(){
    // Formulas Popup
    var closePopup = document.getElementById("popupclose");
    var popup = document.getElementById("popup");

    // Close Popup Event
    closePopup.onclick = function() {
      popup.style.display = 'none';
    };
    /*
    window.onclick = function(event) {
        if (event.target != popup) {
            popup.style.display = "none";
        }
    }
    */
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

    /* INSERT FORMULA BUTTON */
    toolbar.addHandler('formula', function() {
        popup.style.display = 'block';
    });
}
