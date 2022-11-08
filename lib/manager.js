class manager {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;


        
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
    getOfficeNumber() {
        this.officeNumber.forEach(person => {
            if (person.officeNumber === officeNumber) {
                console.log(`success ${person.officeNumber}`);
            } else {
                console.log(`error ${person.officeNumber} not found`);
            }
        });
    }
    getRole() {
        if (this.id === manager) {
            console.log(`${this.id} has been chosen`);
            return false;
        }
        return true;
    }
};


module.exports = manager;