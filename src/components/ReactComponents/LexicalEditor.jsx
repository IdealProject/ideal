import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";  // Cambiado de PlainTextPlugin
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

// Importar los nodos necesarios para rich text
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

//Toolbar
import { ToolbarPlugin } from './ToolBar';
// Botones
import { MdButton } from './MdButton';

const theme = {
    // Base styles
    paragraph: 'mb-1',
    text: {
        base: 'text-gray-800',
        bold: 'font-bold',
        italic: 'italic',
        underline: 'underline',
        strikethrough: 'line-through',
        underlineStrikethrough: 'underline line-through',
    },
    // Heading styles
    heading: {
        h1: 'text-2xl font-bold mb-2',
        h2: 'text-xl font-bold mb-2',
        h3: 'text-lg font-bold mb-1',
    },
    // List styles
    list: {
        ul: 'list-disc ml-5 mb-2',
        ol: 'list-decimal ml-5 mb-2',
        listitem: 'mb-1',
        nested: {
            listitem: 'ml-2',
        },
    },
    // Quote styles
    quote: 'border-l-4 border-gray-300 pl-4 italic my-2',
    // Code styles
    code: 'bg-gray-100 p-1 rounded font-mono',
    codeHighlight: {
        comment: 'text-gray-500 italic',
        keyword: 'text-purple-600',
        string: 'text-green-600',
        number: 'text-orange-600',
        function: 'text-blue-600',
        operator: 'text-pink-600',
        variable: 'text-yellow-600',
    },
    // Table styles
    table: 'border-collapse border border-gray-300 my-2',
    tableCell: 'border border-gray-300 p-2',
    tableRow: 'border-b border-gray-300',
    // Link styles
    link: 'text-blue-600 underline',
};

function onError(error) {
    console.error(error);
}

export default function LexicalEditor({ initialConfig = {} }) {
    // Configuración con nodos adicionales para rich text
    const config = {
        namespace: 'ideal-Editor',
        theme,
        onError,
        editable: true,
        nodes: [
            HeadingNode,
            QuoteNode,
            ListItemNode,
            ListNode,
            AutoLinkNode,
            LinkNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
        ],
        ...initialConfig,
    };

    return (
        <div className="editor-container">
            <LexicalComposer initialConfig={config}>
                <div className="editor-inner">
                    <ToolbarPlugin />
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                className="editor-input p-4 min-h-[150px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <ListPlugin />
                    <LinkPlugin />
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                    <OnChangePlugin onChange={(editorState) => {
                        console.log(editorState);
                    }} />
                    <MdButton />
                </div>
            </LexicalComposer>
        </div>
    );
}