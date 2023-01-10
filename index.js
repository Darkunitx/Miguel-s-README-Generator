const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ Title, Description, installation, credits, contributions, test, Badge, username, email }) =>
  `# ${Title}

   ## Description
   ${Description}
   
   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Tests](#tests)
   - [Credits](#credits)
   - [How to Contribute](#ContributionGuidelines)
   - [Badge](#badge)
   - [Questions](#questions)

   ## Installation
   ${installation}

   ## Tests
   ${test}

   ## Credits
   ${credits}

   ## ContributionGuidelines
   ${contributions}

   ## Badge
   ${Badge}

   ## Questions
   If you have any further questions please follow up with me at: https://github.com/${username} or you can email me at ${email}`;

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
        name: 'credits',
        message: 'What contributions were made to this project?',
      },
    {
      type: 'input',
      name: 'contributions',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What tests have been run?',
    },
    {
        type: 'list',
        name: 'Badge',
        message: 'Please choose the License for your application',
        choices: (['MIT License:   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'Apache 2.0 License:   [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'BSD License:   [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', 'Unlicense:   [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'])
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ])
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });