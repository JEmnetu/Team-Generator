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
        
        <div class=" col-sm-10 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manager - ${this.name}</h5>
                        <hr>
                        <h6 class="card-subtitle mb-2">Email - ${this.email}</h6>
                        <h6>ID - ${this.id}</h6>

                    </div>
                </div>
            </div>`

        return template;
    }
}
module.exports = Employee;