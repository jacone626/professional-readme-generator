// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
// const questions = function() {
//     inquirer.prompt([
//       {
//         type: 'input',
//         message: 'What is the title of your project?',
//         name: "title",
//       },
//       {
//         type: 'input',
//         message: 'Please describe your project.',
//         name: "description",
//       },
//       {
//         type: 'input',
//         message: 'How do you install your project?',
//         name: "installation"
//       },
//       {
//         type: 'input',
//         message: 'Please describe the usage of this project.',
//         name: "usage",
//       },
//       {
//         type: 'list',
//         message: 'Please choose your license for this project.',
//         name: "license",
//         choices: "....",
//       },
//       {
//         type: 'input',
//         message: 'How can other developers contribute to this project?',
//         name: "contribution"
//       },
//       {
//         type: 'input',
//         message: 'Please provides tests for your project and examples of how to run them.',
//         name: "test",
//       },
//       {
//         type: 'input',
//         message: 'Please enter your github username.',
//         name: "username"
//       },
//       {
//         type: 'input',
//         message: 'Please enter your email address.',
//         name: "email",
//       },
// ])
// };

// TODO: Create a function to write README file

// function writeToFile(data) {
//   fs.appendFile('README-sample.md', generateREADME(data), (err) =>
//   err ? console.error(err) : console.log('README has been created.')
//   );
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: "title",
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: "installation",
    },
  ])
  .then((title, installation) =>
  fs.appendFile('README_sample.md', markdown(title, installation), (err) =>
  err ? console.error(err) : console.log('Commit logged!')
  ));