// on peut définir le principe de classe comme une "usine à objets"
class User {
	// — define the class attributes with the "constructor" keyword
	constructor(username, age, activity) {
		this.username = username;
		this.age = age;
		this.activity = activity;
	}
	// — getters (methods to retrieve the value tied to a specific key)
	getUsername() {
		return this.username;
	}
	getAge() {
		return this.age;
	}
	getActivity() {
		return this.activity;
	}
	// — setters (methods to mutate the value tied to a specific key)
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

// console.log(newUser);
// console.log(newUser.getUsername());

newUser.setActivity('Developer');
// console.log(newUser.getActivity());
// console.log(newUser);

// — create a new Admin class with the "extends" keyword
// — this new Admin class is based on the User class (inherits from the User class attributes)
class Admin extends User {
	constructor(username, age, activity, role) {
		// — define the inheritance from the User class with the "super" keyword
		super(username, age, activity);
		// — create a new attribute only for the Admin class
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

// console.log(newAdmin);
// console.log(newAdmin.getUsername());

newAdmin.setActivity('Teacher');
// console.log(newAdmin);

// - get and set values of an object, using dot notation for nested keys
class NestedObject {
	constructor(object) {
		this.object = object;
	}

	getObjectKeyValue(path) {
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

	setObjectKeyValue(path, value) {
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

const nestedObj = new NestedObject(sampleObject);
