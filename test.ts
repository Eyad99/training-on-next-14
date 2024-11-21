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
		console.log(`Speed of normal car is ${this.speed}`);
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

function returnValue<T>(value: T): T {
	return value;
}

console.log(returnValue<number>(1))
console.log(returnValue<string>("val"))