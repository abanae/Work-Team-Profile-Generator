const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const { validateEntries, validateNumbers, validateEmail } = require('./lib/Validate');
const validate = require("./lib/Validate");

const teamMembers = [];
let addManager = true;

const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Manager's name."}
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Manager's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the Manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Manager's office number." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Engineer's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Engineer's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Engineer's GitHub." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Intern's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter Intern's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school is the Intern attending?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the name of school." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ]
};

const selectTeamMember = [
    {
        type: "list",
        name: "teamMember",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

