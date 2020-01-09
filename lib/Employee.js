class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return "Employee"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    html() {
        let template = `
        <div>
        <h2>Employee - ${this.name}</h2>
        <hr>
        <h4>Email - ${this.email}</h4>
        <hr>
        </div>`

        return template;
    }
}
module.exports = Employee;