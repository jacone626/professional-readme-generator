// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: "title",
      },
      {
        type: 'input',
        message: 'Please describe your project.',
        name: "description",
      },
      {
        type: 'input',
        message: 'How do you install your project?',
        name: "installation"
      },
      {
        type: 'input',
        message: 'Please describe the usage of this project.',
        name: "usage",
      },
      {
        type: 'list',
        message: 'Please choose your license for this project.',
        name: "license",
      },
      {
        type: 'input',
        message: 'How can other developers contribute to this project?',
        name: "contribution"
      },
      {
        type: 'input',
        message: 'Please provides tests for your project and examples of how to run them.',
        name: "test",
      },
      {
        type: 'input',
        message: 'Please enter your github username.',
        name: "questions"
      },
      {
        type: 'input',
        message: 'Please enter your email address.',
        name: "questions",
      },
];

inquirer.prompt([
    {
      type: 'list',
      message: 'What is your user name?',
      name: 'username',
      choices: ["hello", "good", "no"]
    },
])

// TODO: Create a function to write README file
const generateREADME = () =>
`# Title

## Description



## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation



## Usage



## License



## How to Contribute



## Tests



## Questions`


function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
