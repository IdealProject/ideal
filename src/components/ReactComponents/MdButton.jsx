import React from 'react';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';

export const MdButton = () => {
    const [editor] = useLexicalComposerContext();

    const exportToMarkdown = () => {
        editor.update(() => {
            const markdown = $convertToMarkdownString(TRANSFORMERS);

            // Crear un blob con el contenido Markdown
            const blob = new Blob([markdown], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);

            // Crear un elemento de enlace para descargar
            const link = document.createElement('a');
            link.href = url;
            link.download = 'documento.md';
            document.body.appendChild(link);
            link.click();

            // Limpiar
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });
    };

    return (
        <button
            onClick={exportToMarkdown}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
            Exportar a Markdown
        </button>
    );
}

export default MdButton;