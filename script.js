let editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "htmlmixed", // Set mode to htmlmixed to support HTML, CSS, and JavaScript
    theme: "darcula", // Use the dark theme
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    extraKeys: {"Ctrl-Space": "autocomplete"}
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
