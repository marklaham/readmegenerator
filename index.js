// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//const { prompts } = require('inquirer');


const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe the project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions for installation.',
  },
  {
    type: 'input',
    name: 'use',
    message: 'Please enter usage guidance.',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Please enter who contributed to this project or contributor guidelines.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter your testing protocols.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Which license would you like to use',
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },

];

const promptUser = () => {

  return inquirer.prompt(questions)
  .then((response) => {
    writeToFile ( 'readme.md', response );
  });

}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  const generateFile = `# ${data.title}
      
    #### Table of Contents
    1. [Project Description](#project-description)
    2. [Installation Instructions](#installation-instructions)
    3. [Usage Information](#usage-information)
    4. [Contributors](#contributors)
    5. [Test Instructions](#test-instructions)
    6. [License](#license)
    7. [Questions](#questions)

    ## Project Description
    * ${data.description}

    ## Installation Instructions
    * ${data.installation}

    ## Usage Information
    * ${data.use}

    ## Contributors
    * ${data.contribute}

    * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
    ## Test Instructions
    * ${data.test}

    ## License
    * licensed under the ${data.license}

    ## Questions
    * If you have any questions, please do not hesitate to reach out at [${data.email}](${data.email}) or [${data.linkedin}](${data.linkedin}).
    * You can find me on GitHub at [${data.github}](http://github.com/${data.github})`;
    
    fs.writeFile(fileName, generateFile, function(err) {
      if (err) {
          console.log(err);
      }
      console.log("File has been created");
  });


}

// TODO: Create a function to initialize app
function init() {
  promptUser();

}

// Function call to initialize app
init();
