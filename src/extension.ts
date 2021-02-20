import * as vscode from 'vscode';
import shortid = require('shortid');

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('vsc-shortid.generate', (textEditor, edit) => {
    textEditor.selections.forEach(selection => {
      const
        start = selection.start,
        end = selection.end;

      if (start.line === end.line && start.character === end.character) {
        edit.insert(start, shortid());
      } else {
        edit.replace(selection, shortid());
      }
    });
  }));
}

export function deactivate() {}
