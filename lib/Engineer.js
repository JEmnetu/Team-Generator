let Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github();
    }
    html() {
        let template = `
        <div>
        <h2>Manager - ${this.name}</h2>
        <hr>
        <h4>Email - ${this.email}</h4>
        <hr>
        <h4>Github - ${this.github}</h4>
        </div>`

        return template;
    }
}
module.exports = Engineer;