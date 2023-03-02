// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges ={
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link={
    MIT:'https://opensource.org/license/mit/',
    Apache: 'https://opensource.org/license/apache-2-0/',
    IBM: 'https://opensource.org/license/ibmpl-php/',
  }
  return link[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //const badge =renderLicenseBadge(data.license)
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Content
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  
  ## Installation
   ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
   ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.email}
  ${data.github}
  
`;
}

module.exports = generateMarkdown;
