let inquirer = require("inquirer");
let Employee = require("./Employee");
let Manager = require('./Manager');
let Engineer = require('./Engineer');
let Intern = require('./Intern');

let teamArray = [];

let questions = [{
        name: 'role',
        message: 'Enter user role',
        type: 'list',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
        name: 'name',
        message: `Enter user's name`,
        type: 'input'
    },
    {
        name: "email",
        message: "Enter email",
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
    }
]

function getInfo(call_back) {
    inquirer.prompt(questions)
        .then(function(response) {

            let employee;
            //Create instances of classes
            if (response.role === "Employee") {
                employee =
            }
            call_back()

        })

};

function testf() {
    // console.log('Roll the damn camera!!');
    console.log(teamArray);
}

getInfo(testf);