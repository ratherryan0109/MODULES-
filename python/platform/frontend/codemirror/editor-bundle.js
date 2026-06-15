import {EditorView, basicSetup} from "codemirror"
import {python} from "@codemirror/lang-python"
import {oneDark} from "@codemirror/theme-one-dark"

window.createPythonEditor = function(container) {
  var view = new EditorView({
    doc: '# Write your Python code here\nprint("Hello, World!")',
    extensions: [
      basicSetup,
      python(),
      oneDark,
      EditorView.updateListener.of(function(update) {
        if (update.docChanged && window.__editorOnChange) {
          window.__editorOnChange(update.state.doc.toString());
        }
      })
    ],
    parent: container
  });

  window.__editorView = view;

  return {
    getValue: function() { return view.state.doc.toString(); },
    setValue: function(code) {
      view.dispatch({
        changes: {from: 0, to: view.state.doc.length, insert: code}
      });
    },
    focus: function() { view.focus(); },
    destroy: function() { view.destroy(); }
  };
};
