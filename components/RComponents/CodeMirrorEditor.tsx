'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';

const myTheme = createTheme({
	theme: 'dark',
	settings: {
		background: '#ffffff',
		backgroundImage: '',
		foreground: '#4D4D4C',
		caret: '#AEAFAD',
		selection: '#D6D6D6',
		selectionMatch: '#D6D6D6',
		gutterBackground: '#FFFFFF',
		gutterForeground: '#4D4D4C',
		gutterBorder: '#dddddd',
		gutterActiveForeground: '',
		lineHighlight: '#EFEFEF',
	},
	styles: [
		{ tag: t.comment, color: '#787b80' },
		{ tag: t.definition(t.typeName), color: '#194a7b' },
		{ tag: t.typeName, color: '#194a7b' },
		{ tag: t.tagName, color: '#008a02' },
		{ tag: t.variableName, color: '#1a00db' },
	],
});

const CodeMirrorEditor = ({ value }: { value: string }) => {
	const editorRef = React.useRef(null);

	// const handleCopy = () => {
	// 	if (editorRef.current) {
	// 		const content = editorRef.current.view.state.doc.toString() as any;
	// 		navigator.clipboard
	// 			.writeText(content)
	// 			.then(() => {
	// 				alert('تم نسخ النص إلى الحافظة!');
	// 			})
	// 			.catch((err) => {
	// 				console.error('فشل النسخ: ', err);
	// 			});
	// 	}
	// };

	return (
		<div>
			{/* <button
				onClick={handleCopy}
				style={{
					marginBottom: '10px',
					padding: '8px 16px',
					backgroundColor: '#007bff',
					color: '#fff',
					border: 'none',
					borderRadius: '4px',
					cursor: 'pointer',
				}}
			>
				copy{' '}
			</button> */}
			<CodeMirror
				ref={editorRef}
				className='border border-muted'
				value={value}
				height='auto'
				theme={myTheme}
				extensions={[javascript({ jsx: true, typescript: true })]}
				style={{ direction: 'ltr', textAlign: 'left' }}
				editable={false}
				// onChange={(value, viewUpdate) => {
				// 	console.log('value:', value);
				// }}
			/>
		</div>
	);
};

export default CodeMirrorEditor;
