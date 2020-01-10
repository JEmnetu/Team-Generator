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
        
        <div class=" col-sm-10 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manager - ${this.name}</h5>
                        <hr>
                        <h6 class="card-subtitle mb-2">Email - ${this.email}</h6>
                        <h6>Office Number - ${this.school}</h6>

                    </div>
                </div>
            </div>`

        return template;
    }
}

module.exports = Intern;