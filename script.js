let editor = CodeMirror(document.getElementById('editor'), {
    mode: "text/html",
    theme: "default",
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
