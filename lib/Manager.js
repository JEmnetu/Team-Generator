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
        
        <div class=" col-sm-10 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manager - ${this.name}</h5>
                        <hr>
                        <h6 class="card-subtitle mb-2">Email - ${this.email}</h6>
                        <h6>Office Number - ${this.office_number}</h6>

                    </div>
                </div>
            </div>`

        return template;
    }

}

module.exports = Manager;