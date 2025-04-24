import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from 'lexical';
// import { $wrapLeafNodesInElements } from '@lexical/selection';
import { $createHeadingNode } from '@lexical/rich-text';
import { $createParagraphNode } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import { useState, useCallback, useEffect } from 'react';

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [activeHeadingTag, setActiveHeadingTag] = useState('paragraph');

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      // Formateo de texto
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));

      // Obtener el tipo de nodo actual para el estado del dropdown
      const anchorNode = selection.anchor.getNode();
      const element = anchorNode.getKey() === 'root'
        ? anchorNode
        : anchorNode.getTopLevelElementOrThrow();

      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM) {
        if (elementDOM.tagName === 'P') {
          setActiveHeadingTag('paragraph');
        } else if (elementDOM.tagName.match(/^H[1-3]$/)) {
          setActiveHeadingTag(elementDOM.tagName.toLowerCase());
        }
      }
    }
  }, [editor]);

  useEffect(() => {
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [editor, updateToolbar]);

  // Función para formatear encabezados
  const formatHeading = (headingTag) => {
    if (headingTag === 'paragraph') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createParagraphNode());
        }
      });
    } else {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const headingSize = Number(headingTag.slice(1));
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  const buttonClass = "py-1 px-3 border border-gray-300 rounded-md mr-2 focus:outline-none";
  const activeButtonClass = "py-1 px-3 border border-gray-300 rounded-md mr-2 focus:outline-none bg-blue-500 text-white";

  return (
    <div className="toolbar mb-4 p-2 border-b border-gray-300 flex flex-wrap items-center">
      {/* Undo & Redo */}
      <button
        onClick={() => editor.dispatchCommand(UNDO_COMMAND)}
        className={buttonClass}
        title="Deshacer"
      >
        <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
        </svg>
        </span>
      </button>
      <button
        onClick={() => editor.dispatchCommand(REDO_COMMAND)}
        className={buttonClass}
        title="Rehacer"
      >
        <span ><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
        </svg>
        </span>
      </button>

      <div className="border-l border-gray-300 mx-2 h-6"></div>

      {/* Formatos de texto */}
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        className={isBold ? activeButtonClass : buttonClass}
        title="Negrita"
      >
        <span className="font-bold">B</span>
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        className={isItalic ? activeButtonClass : buttonClass}
        title="Cursiva"
      >
        <span className="italic">I</span>
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
        className={isUnderline ? activeButtonClass : buttonClass}
        title="Subrayado"
      >
        <span className="underline">U</span>
      </button>

      <div className="border-l border-gray-300 mx-2 h-6"></div>

      {/* Dropdown para encabezados */}
      <select
        className="py-1 px-3 border border-gray-300 rounded-md mr-2 focus:outline-none"
        value={activeHeadingTag}
        onChange={(e) => formatHeading(e.target.value)}
      >
        <option value="paragraph">Párrafo</option>
        <option value="h1">Encabezado 1</option>
        <option value="h2">Encabezado 2</option>
        <option value="h3">Encabezado 3</option>
      </select>

      <div className="border-l border-gray-300 mx-2 h-6"></div>

      {/* Listas */}
      <button
        onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}
        className={buttonClass}
        title="Lista con viñetas"
      >
        • Lista
      </button>
      <button
        onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND)}
        className={buttonClass}
        title="Lista numerada"
      >
        1. Lista
      </button>
    </div>
  );
}