// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
   
    
        type: "input",
        name: "accountName",
        message: "What is your github username? (Required)",
        validate: (accountNameInput) => {
          if(accountNameInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
    },
      {
        type: "input",
        name: "accountEmail",
        message: "What is your github email address? (Required)",
        validate: (accountEmailInput) => {
          if(accountEmailInput) {
            return true;
          } else {
            console.log("Please enter your GitHub email address!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "projectTitle",
        message: "What is the name of the project repository? (Required)",
        validate: (projectTitleInput) => {
          if(projectTitleInput) {
            return true;
          } else {
            console.log("Please enter your project title!");
            return false;
          }
        },
      },

     
    
        ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();