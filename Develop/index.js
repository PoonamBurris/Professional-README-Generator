// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genReadme = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message:'What is the name of your Project?',
    },
    {
        type: 'input',
        name:'description',
        message:'Describe your Project in brief.',
    },
    {
        type: 'input',
        name:'installation',
        message:'What is required to be installed to run this project?',
    },
    {
        type: 'input',
        name:'usage',
        message:'What is the use of your Project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Select from type of license',
      },
    {
        type: 'input',
        name: 'contribute',
        message: 'Guideline for contributing to your application',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Mention all the test which can be performed with your application',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Link your github profile here',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Best email address you wish to be reached at.',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const readme =genReadme(data)
    fs.writeFile('README.md',readme,(err) =>{
        if(err){
            console.log('Error');
        }
        else{
            console.log('README.md created')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((data) => writeToFile(data))
    .then((data) => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
