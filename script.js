let editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "htmlmixed", // Set mode to htmlmixed to support HTML, CSS, and JavaScript
    theme: "darcula", // Use the dark theme
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    extraKeys: {"Ctrl-Space": "autocomplete"}
});

// Add paste event listener to the editor
editor.on("paste", function(editor, event) {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the pasted text
    let clipboardData = event.clipboardData || window.clipboardData;
    let pastedText = clipboardData.getData('text/plain');

    // Insert the pasted text into the editor at the current cursor position
    editor.replaceSelection(pastedText);
});

document.getElementById('run-btn').addEventListener('click', function() {
    let code = editor.getValue();
    let iframe = document.getElementById('output');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(code);
    iframe.contentWindow.document.close();
});

document.getElementById('live-server-btn').addEventListener('click', function() {
    // Open the content of the editor in a new tab for live preview
    let code = editor.getValue();
    let blob = new Blob([code], { type: 'text/html' });
    let url = URL.createObjectURL(blob);
    window.open(url, '_blank');
});
