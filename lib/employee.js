class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName(name) {
        this.name.forEach(person => {
            if (person.name === name) {
                console.log(`success ${person.name}`);
            } else {
                console.log(`error ${person.name} not found`);
            }
        });
    }
    getId(id) {
        this.id.forEach(person => {
            if (person.id === id) {
                console.log(`success ${person.id}`);
            } else {
                console.log(`error ${person.id} not found`);
            }
        });
    }
    getEmail(email) {
        this.email.forEach(person => {
            if (person.email === email) {
                console.log(`success ${person.email}`);
            } else {
                console.log(`error ${person.email} not found`);
            }
        });
    }
    getRole() {
        console.log(`sucess ${data.input}`);
    }
};


module.exports = employee;

