import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const RemAndEm = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Rem And Em</h4>
				<span className='text-muted-foreground'>
					EM is relative to the parent element's font size, so if you wish to scale the element's size based on its parent's size, use EM.
					REM is relative to the root (HTML) font size, so if you wish to scale the element's size based on the root size, no matter what
					the parent size is, use REM
				</span>
				<span className='text-muted-foreground'>
					This means if you set the font-size in a parent div to 20px and set the font-size of the child div to 2 em, the font-size in the
					child div will equal 40px. Here’s an example.
				</span>
			</div>

			<CodeMirrorEditor
				value={`
 <html lang="en">
<head>
 
  </head>
<body>
   <div class="text-[20px]">
    I'm parent div set to 20px
    <div class="text-[2em]">
        I'm the child div set to 2em, i.e 40px.
    </div>
   </div>
</body>
</html>

                `}
			/>
		</section>
	);
};

export default RemAndEm;
