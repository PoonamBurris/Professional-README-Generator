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
function renderLicenseSection(license) {
  const section={
    MIT:'The MIT license gives express permission for users to reuse code for any purpose, sometimes even if code is part of proprietary software. As long as users include the original copy of the MIT license in their distribution, they can make changes or modifications to the code to suit their own needs.The primary terms and conditions of the MIT license are to grant permissions and indemnify developers for future use. Specifically, it grants any person who obtains a copy of the software and associated files the right to use, copy, modify, merge, distribute, publish, sublicense, and sell copies of the software.The only condition required to use the software is to include the same copyright notice in all copies or any substantial portions of the software. The final portion of the text provides for limitations and revokes any warranty implied by sharing the code.',
  
    Apache: 'The Apache software license gives users permission to reuse code for nearly any purpose, including using the code as part of proprietary software. As with other open source licenses, the Apache license governs how end-users can utilize the software in their own projects. This license is a widely-used open source license, and like other permissive licenses, it continues to grow in popularity because it encourages the use of open source software within proprietary projects.Open source developers should select the Apache license to quickly get their project out to market and in the hands of larger software companies that want to use open source components in commercial applications. Because the license doesn’t require companies to disclose their code modifications and it grants them patent rights, it’s ideal for distributing open source software that enterprises may be interested in using. The Apache name alone can give potential users confidence in the open source software because the foundation has been prominent in the industry for decades.',
  
   IBM: 'The IBM Public License (IPL) is a free open-source software license written and occasionally used by IBM. It is approved by the Free Software Foundation (FSF) and described as an open-source license by the Open Source Initiative.[3]'
  }
  return section[license]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
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
   [${data.license}](${renderLicenseLink(data.license)})
   <br>
   (${renderLicenseSection(data.license)})
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.email}
  <br>
  ${data.github}
  
`;
}

module.exports = generateMarkdown;
