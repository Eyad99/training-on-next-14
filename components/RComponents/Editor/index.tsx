'use client';

import React, { useCallback, useRef, memo } from 'react';

interface EditorProps {
	value?: string;
	onChange?: (value: string) => void;
	isControlled: boolean;
}

const Editor = memo(({ value, onChange, isControlled }: EditorProps) => {
	console.log('commpo');
	const textRef = useRef<HTMLTextAreaElement>(null);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			if (isControlled && onChange) {
				onChange(event.target.value);
			}
		},
		[isControlled, onChange]
	);

	const handleShowContent = useCallback(() => {
		if (!isControlled && textRef.current) {
			alert(`📌 المحتوى: ${textRef.current.value}`);
		}
	}, [isControlled]);

	return (
		<div className='border p-4 rounded-md shadow-md'>
			<h2 className='text-lg font-semibold'>📝 Editor</h2>
			<textarea
				ref={isControlled ? undefined : textRef}
				value={isControlled ? value : undefined}
				onChange={handleChange}
				className='w-full h-40 border p-2 mt-2'
				placeholder='اكتب هنا...'
			/>
			{!isControlled && (
				<button onClick={handleShowContent} className='mt-2 p-2 bg-blue-500 text-white rounded'>
					عرض المحتوى
				</button>
			)}
		</div>
	);
});

Editor.displayName = 'Editor';
export default Editor;
