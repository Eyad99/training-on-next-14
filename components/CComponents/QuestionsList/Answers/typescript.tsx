import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const Typescript = () => {
	return (
		<section>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col'>
					<h4 className='font-bold text-3xl'>Constractor</h4>
					<span className='text-muted-foreground'></span>
					<CodeMirrorEditor
						value={`
 class User {
  msg: () => string; // Define "msg" as a class property
  constructor(public username: string, private age: string) {
    this.msg = () => { // Property
      return "hello {this.username} my age is {this.age}";
    };
  }

  sayMsg() { //Method
    return "hello {this.username} my age is {this.age}";
  }
}

const userOne = new User('eyad', '25');

console.log('userOne.msg()', userOne.msg()); // Outputs: hello eyad my age is 25
console.log('userOne.sayMsg()', userOne.sayMsg()); // Outputs: hello eyad my age is 25
                `}
					/>
				</div>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Get / Set</h4>
				<span className='text-muted-foreground'>
					اذا انا عندي بروبرتي هي برايفيت ما بحسن وصللها من برات الكلاس هي العملية تدعى انكابسولاشن بقا انا عن طريق ال get / set بحسن وصللها
				</span>
				<CodeMirrorEditor
					value={`
                        class User {
 	constructor(public username: string, private _age: string) {}
 

	get age(): string {
		return this._age;
	}

	set age(value: string) {
		this._age = value;
	}
}

const userOne = new User('eyad', '25');

console.log('Access To Private Key [Age]', userOne.age); //Access To Private Key [Age] 25
userOne.age = '30';
console.log('Access To Private Key [Age]', userOne.age); //Access To Private Key [Age] 30

                    `}
				/>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Static</h4>
				<span className='text-muted-foreground'>هي عبارة عن البربرتي والميثود يلي بتخص الكلاس نفسو مو بتخص الاوبجكت منو</span>
				<span className='text-muted-foreground'>منحسن نعامل ال static معاملة ال getter لأن تقريبا نفس الفكرة هنن</span>
				<CodeMirrorEditor
					value={`
class User {
	static created: number = 0;
	static getCounter(): void {
		console.log("Number of object calls {this.created}");
	}
	constructor(public username: string) {
		User.created++;
	}
}

const userOne = new User('eyad');
const userTow = new User('eyad');
const userThree = new User('eyad');
const userFour = new User('eyad');

User.getCounter();
                        `}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Abstract Classes</h4>
				<span className='text-muted-foreground'>
					هو كلاس مجرد معمول مشان الكلاسات التانية تورث منو , بكون ضمنوشي معين لازم باقي الكلاسات تمشي عليه
				</span>
				<CodeMirrorEditor
					value={`
 abstract class Car {
	abstract getCarType(): void;
	constructor(public name: string) {}
}

class Bmw extends Car { // inheretance
	constructor(name: string, public price: number) {
		super(name); // مشان جيب البروبرتي من الكلاس الاب
	}
	getCarType(): void {
		console.log('Hello');
	}
}

const myCar = new Bmw('Kea', 2000);
console.log(myCar.name); //Kea
console.log(myCar.price); //2000
                        `}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Polymorphism And Method Override</h4>
				<span className='text-muted-foreground'>
					اذا عندي فانكشن ضمن كلاس بتساوي سلوك عين وهي الفانكشن نفسا موجودة باكترمن كاس وارث من اللكلاس الاب وبينفذ هي الفانكشن ضمن سلوك
					مغاير
				</span>
				<span className='text-muted-foreground'>
					هون بهالحالة وقت عم استخد نفس اليثود بالكلاس الابن هو بيعمل اوفررايد للميثود من كلاس الاب
				</span>
				<span className='text-muted-foreground'>
					وهاد الشي اذا بدنا نفعلو ليطلع خطأ ضمن الكومبايلر منضيف
					<span className='text-bold'>noImpicitOverride:true</span>
				</span>
				<CodeMirrorEditor
					value={`
 class Car {
	constructor(public name: string) {}
	getCarType(): void {
		console.log('Speed of normal car is 1000');
	}
}

class Bmw extends Car {
	constructor(public name: string, public speed: number) {
		super(name);
	}
	override getCarType(): void {
		// super.getCarType(); //Speed of normal car is 1000
		console.log("Speed of normal car is {this.speed}");
 	}
}

class Kea extends Car {
	constructor(public name: string, public speed: number) {
		super(name);
	}
	override getCarType(): void {
		super.getCarType();
		console.log('Speed of normal car is 3000');
		this.speed = 3000;
	}
}

const carOne = new Bmw('Mbw', 2000);
console.log(carOne.getCarType());
 
                        `}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Generics Type</h4>

				<CodeMirrorEditor
					value={`
                    function returnValue<T>(value: T): T {
	return value;
}

console.log(returnValue<number>(1))
console.log(returnValue<string>("val"))
                    `}
				/>
			</div>
		</section>
	);
};

export default Typescript;
