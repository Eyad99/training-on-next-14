import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const GeneratorFunction = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'> Generator Function</h4>
				<span className='text-muted-foreground'>
					Generator functions are powerful for scenarios that involve iteration, asynchronous workflows, and stream processing.
				</span>
				<span className='text-muted-foreground'>
					تعد وظائف المولد قوية للسيناريوهات التي تتضمن التكرار وسير العمل غير المتزامن ومعالجة الدفق.{' '}
				</span>
			</div>
			<CodeMirrorEditor
				value={`const idsGenerator = (function *(){
            let i = 0;
            while(true){
                yield 'tool--'+ ++i;
            }
        })();

export default idsGenerator;
            `}
			/>
		</section>
	);
};

export default GeneratorFunction;
