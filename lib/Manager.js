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
    html() {
        let template = `
        <div>
        <h2>Manager - ${this.name}</h2>
        <hr>
        <h4>Email - ${this.email}</h4>
        <hr>
        <h4>Office Number - ${this.office_number}</h4>
        </div>`

        return template;
    }

}

module.exports = Manager;