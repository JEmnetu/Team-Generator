let Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
    html() {
        let template = `
        <div>
        <h2>Intern - ${this.name}</h2>
        <hr>
        <h4>Email - ${this.email}</h4>
        <hr>
        <h4>School - ${this.school}</h4>
        </div>`

        return template;
    }
}

module.exports = Intern;