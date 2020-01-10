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
        
        <div class=" col-sm-10 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manager - ${this.name}</h5>
                        <hr>
                        <h6 class="card-subtitle mb-2">Email - ${this.email}</h6>
                        <h6>Github - ${this.github}</h6>

                    </div>
                </div>
            </div>`

        return template;
    }
}
module.exports = Engineer;