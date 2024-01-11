// on peut définir le principe de classe comme une "usine à objets"
class User {
	// — define the class attributes with the "constructor" keyword
	constructor(username, age) {
		this.age = age;
		this.username = username;
	}
	// — getters (methods to retrieve the value tied to a specific key)
	getAge() {
		return this.age;
	}
	getUsername() {
		return this.username;
	}
	// — setters (methods to mutate the value tied to a specific key)
	setAge(age) {
		this.age = age;
	}
	setUsername(username) {
		this.username = username;
	}
}

const userInstance = new User('John', 25);

// console.log(userInstance);
// console.log(userInstance.getUsername());

userInstance.setAge(30);
// console.log(userInstance);
// console.log(userInstance.getAge());

// — create a new Employee class with the "extends" keyword
// — the Employee class is based on the User class (inherits from the User class attributes)
class Employee extends User {
	constructor(username, age, role, company) {
		// — define the inheritance from the User class with the "super" keyword
		super(username, age);
		// — create a new attribute only for the Admin class
		this.role = role;
		this.company = company;
	}
	getRole() {
		return this.role;
	}
	getCompany() {
		return this.company;
	}
	setRole(role) {
		this.role = role;
	}
	setCompany(company) {
		this.company = company;
	}
}

const employeeInstance = new Employee('Jane', 35, 'Developer', 'TechCompany');

// console.log(employeeInstance);
// console.log(employeeInstance.getUsername());

employeeInstance.setRole('CTO');
// console.log(employeeInstance);

// — cleaner code for a class that takes too many input parameters (pass an object instead)
class Customer extends User {
	constructor({ username, age, address, iban }) {
		super(username, age);

		this.age = age;
		this.iban = iban;
		this.address = address;
		this.username = username;
	}
	getIban() {
		return this.iban;
	}
	getAddress() {
		return this.address;
	}
	setIban(iban) {
		this.iban = iban;
	}
	setAddress(address) {
		this.address = address;
	}
}

// — this way, you just have to pass an object without worrying about the order of input parameters
const customerInstance = new Customer({
	username: 'Frank',
	age: 30,
	address: 'Examplestreet 42',
	iban: 'FR76 3000 0000 1111 2222 3333',
});

// console.log(customerInstance);

// — custom class to get and set values of a nested object, using dot notation for nested keys
class NestedObject {
	constructor(object) {
		this.object = object;
	}

	getValue(path) {
		const keys = path.split('.');
		let object = this.object;

		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];

			if (object.hasOwnProperty(key)) {
				object = object[key];
			} else {
				return undefined;
			}
		}

		return object;
	}

	setValue(path, value) {
		const keys = path.split('.');
		let object = this.object;

		for (let i = 0; i < keys.length - 1; i++) {
			const key = keys[i];

			if (!object.hasOwnProperty(key)) {
				object[key] = {};
			}

			object = object[key];
		}

		object[keys[keys.length - 1]] = value;
	}
}

const sampleObject = {
	person: {
		name: 'John Doe',
		age: 30,
		address: {
			city: 'Examplecity',
			country: 'Exampleland',
		},
	},
	company: {
		name: 'TechCo',
		departments: {
			engineering: {
				team: 'Development',
			},
			sales: {
				team: 'Sales',
			},
		},
	},
};

const nestedObjectInstance = new NestedObject(sampleObject);

console.log(nestedObjectInstance);
// console.log(nestedObjectInstance.getValue('person.name'));
// console.log(nestedObjectInstance.getValue('company.departments.sales.team'));

// nestedObjectInstance.setValue('person.age', 31);
// console.log(nestedObjectInstance.getValue('person.age'));

// nestedObjectInstance.setValue('company.departments.marketing.team', 'Marketing');
// console.log(nestedObjectInstance.getValue('company.departments.marketing.team'));
