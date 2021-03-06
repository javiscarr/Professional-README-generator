// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
   
    
        type: "input",
        name: "username",
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
        message: "What is your email address? (Required)",
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
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your repository? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a description of the repository.');
            return false;
          }
        },
      },

        {
            type: "checkbox",
            name: "badges",
            message: "What badges would you like to display? (Check all that apply)",
            choices: [
              "Language Count",
              "Top Language",
              "Code Size",
              "Repo Size",
              "Issues",
              "Issues Closed",
              "Release Version by Date",
            ],
            default:['Issues'],
          },
          {
            type: "confirm",
            name: "confirmInstall",
            message:
              "Would you like to enter some information about how install your project?",
          
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Please list installation instructions if any.',
            // once the person selects to list the installation process, this will allow them to input the steps
            when: ({ confirmInstall }) => {
              if (confirmInstall) {
                return true;
              } else {
                return false;
              }
            },
          },

          {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Is testing available?'
          },
          {
            type: 'input',
            name: 'testing',
            message: 'Please explain how users may test your application.',
            when: ({ testConfirm }) => {
              if (testConfirm) {
                return true;
              } else {
                return false;
              }
            }
          },

          {
            type: "confirm",
            name: "confirmUse",
            message:
              "Would you like to enter some information about how to use your project?",
           
          },
          { //should the user confirm
            type: 'input',
            name: 'instructions',
            message: 'Please list instructions for using your application. Although not required, it is recommended to add any descriptive images of usages.',
            when: ({ confirmUse }) => {
              if (confirmUse) {
                return true;
              } else {
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license.',
            choices: ['GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0',
              'MIT License', 'Boost Software License 1.0',
              'The Unlicense'],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please select a license.');
                return false;
              }
            }
          },

          {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'May other developers contribute to your repository?'
          },

          {
            type: 'input',
            name: 'contribution',
            message: 'Please explain how other developers may contribute to your project.',
            when: ({ confirmContribution }) => {
              if (confirmContribution) {
                return true;
              } else {
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'questions',
            message: 'Please list instructions for those who wish to contact you.',
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                return false;
              }
            }
          }];
     
    
        


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log('Sorry there was an error : ' + error);
        }
      })
}

const createReadMe = util.promisify(writeToFile);

// TODO: Create a function to initialize app
//function init() {}
async function init() {
    try {
      const userAnswers = await inquirer.prompt(questions);
      console.log('You have successfully created your README.md: ', userAnswers);
      // get markdown template from generateMarkdown.js passing the answers as parameter
      const myMarkdown = generateMarkdown(userAnswers);
      console.log(myMarkdown);
      //write the readme file after the markdown is made
      await createReadMe('README.md', myMarkdown);
      
    } catch (error) {
      console.log('Sorry there was an error.' + error);
    }
  };

// Function call to initialize app
init();