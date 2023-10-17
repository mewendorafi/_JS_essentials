// On peut présenter le principe de classe comme une "usine à objets"
class User {
	// Define the class attributes with the "constructor" keyword
	constructor(username, age, activity) {
		this.username = username;
		this.age = age;
		this.activity = activity;
	}
	// Getter method (retrieve the value tied to the specified key)
	getUsername() {
		return this.username;
	}
	getAge() {
		return this.age;
	}
	getActivity() {
		return this.activity;
	}
	// Setter method (mutate the value tied to the specified key)
	setUsername(arg) {
		this.username = arg;
	}
	setAge(arg) {
		this.age = arg;
	}
	setActivity(arg) {
		this.activity = arg;
	}
}

const newUser = new User('Méwen', 26, 'Historian');

console.log(newUser);
console.log(newUser.getUsername());

newUser.setActivity('Developer');
console.log(newUser.getActivity());
console.log(newUser);

// Create a new Admin class with the "extends" keyword
// This new Admin class is based on the User class (inherits from the User class attributes)
class Admin extends User {
	constructor(username, age, activity, role) {
		// Define the inheritance from the User class with the "super" keyword
		super(username, age, activity);
		// Create a new attribute only for the Admin class
		this.role = role;
	}
	getRole() {
		return this.role;
	}
	setRole(role) {
		this.role = role;
	}
}

const newAdmin = new Admin('Méwen', 26, 'Developer', 'Admin');

console.log(newAdmin);
console.log(newAdmin.getUsername());

newAdmin.setActivity('Teacher');
console.log(newAdmin);

class NestedObject {
	constructor(obj) {
		this.obj = obj;
	}

	getValue(key) {
		const keys = key.split('.');
		let value = this.obj;

		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];

			if (value.hasOwnProperty(k)) {
				value = value[k];
			} else {
				return undefined;
			}
		}

		return value;
	}

	setValue(key, value) {
		const keys = key.split('.');
		let obj = this.obj;

		for (let i = 0; i < keys.length - 1; i++) {
			const k = keys[i];

			if (!obj.hasOwnProperty(k)) {
				obj[k] = {};
			}

			obj = obj[k];
		}

		obj[keys[keys.length - 1]] = value;
	}
}
