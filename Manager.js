let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office_number) {
        super(name, id, email);
        this.office_number = office_number;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.office_number
    }

}

module.exports = Manager;