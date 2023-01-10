const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ Title, Description, installation, guidelines, test }) =>
  `${Title}
   ${Description}
   ${installation}
   ${guidelines}
   ${test}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please write a description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please write instructions for testing.',
    },
  ])
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });