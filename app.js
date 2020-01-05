let inquirer = require("inquirer");
let Employee = require("./lib/Employee");
let Manager = require('./lib/Manager');
let Engineer = require('./lib/Engineer');
let Intern = require('./lib/Intern');

let teamArray = [];

let num = 0;
let id_num = 0;

let questions = [{
        name: 'role',
        message: 'Enter user role:',
        type: 'list',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
        name: 'name',
        message: `Enter user's name:`,
        type: 'input'
    },
    {
        name: "email",
        message: "Enter email:",
        type: "input",
        validate: function(email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        }
    },
    {
        name: 'github',
        message: 'Enter github username:',
        type: 'input'
    },
    {
        name: 'school',
        message: 'Enter the name of your school:',
        type: 'input'
    },
    {
        name: 'office_number',
        message: "Enter your office number",
        type: 'number'
    }
];

let add_employee_question = [{
        type: 'confirm',
        message: 'Add an employee?',
        name: 'new_employee',
        default: true
    }

];

function add_employee() {
    inquirer.prompt(add_employee_question).then(function(response) {
        if (response.new_employee === true) {
            getInfo(add_employee);
        } else {
            console.log('Writing HTML now.');
            console.log(teamArray);
        }
    });
}

function getInfo(call_back) {
    inquirer.prompt(questions)
        .then(function(response) {

            let employee;
            id_num += 1;
            num += 1;
            //Create instances of classes
            if (response.role === "Employee") {
                employee = new Employee(response.name, id_num, response.email);
            } else if (response.role === "Manager") {
                employee = new Manager(response.name, id_num, response.email, response.office_number);
            } else if (response.role === "Engineer") {
                employee = new Engineer(response.name, id_num, response.email, response.github);
            } else if (response.role === "Intern") {
                employee = new Intern(response.name, id_num, response.email, response.school);
            }
            teamArray.push(employee);
            call_back()

        });

};

function testf() {
    // console.log('Roll the damn camera!!');
    console.log(teamArray);
}

// getInfo(testf);

add_employee();