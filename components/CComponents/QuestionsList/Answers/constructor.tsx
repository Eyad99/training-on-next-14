import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const Constructor = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Constructor</h4>
				<span className='text-muted-foreground'>
					In object-oriented programming, a constructor is a special function that is automatically called when a new instance (object) of a
					class is created. Constructors are primarily used to initialize the object’s properties with values or perform any setup steps
					necessary when an object is instantiated.
				</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Why We Use Constructors</h4>
				<span className='text-muted-foreground'>
					Initialize Properties: Constructors let you assign initial values to object properties, ensuring the object is ready for use.
				</span>
				<span className='text-muted-foreground'>
					Encapsulation: By restricting setup logic to the constructor, you encapsulate data and ensure that the object has consistent
					properties from the start.
				</span>
				<span className='text-muted-foreground'>
					{' '}
					Code Reusability: Constructors allow you to create multiple instances of a class with different initial values, making your code
					more modular and reusable.
				</span>
				<span className='text-muted-foreground'>
					{' '}
					Dependency Injection: Constructors can accept arguments that specify dependencies, making it easy to change dependencies or
					configurations when testing or refactoring code.
				</span>
			</div>

			<CodeMirrorEditor
				value={`
class Person {
  constructor(name, age) {
    this.name = name; // Initialize property 'name'
    this.age = age;   // Initialize property 'age'
  }

  describe() {
    return "{this.name} is {this.age} years old";
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30);
console.log(person1.describe()); // Output: Alice is 30 years old. 
                `}
			/>
		</section>
	);
};

export default Constructor;
