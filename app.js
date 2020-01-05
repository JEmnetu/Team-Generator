let inquirer = require("inquirer");
let questions = [{
        name: 'role',
        message: 'Enter user rule',
        type: 'List',
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
    inquirer.prompt([{
                type: `input`,
                name: `team-lead`,
                message: `Enter the team lead's name:`

            },
            {
                type: 'number',
                name: 'team-size',
                message: 'How many members are on this team?'
            }

        ])
        .then(function(response) {
            console.log(response);
            call_back()

        })

};

function testf() {
    console.log('Roll the damn camera!!');
}

getInfo(testf);