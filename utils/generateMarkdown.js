//License provided below
function generateMarkdown(data) {
  //license
  let licenseOption = `${data.license}`;
  let licenseLink = '';
  // conditional statements that link each license to the appropriate url
  if (licenseOption === 'GNU AGPLv3') {
    licenseOption = 'GNUAGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
 
  if (licenseOption === 'GNU LGPLv3') {
    licenseOption = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseOption = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
 
  if (licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOption === 'Boost Software License 1.0') {
    licenseOption = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseOption === 'The Unlicense') {
    licenseOption = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };
//badges to be added to the README
  const generateBadges = (badges,username,projectTitle)=> {
    let badgeArray = [];
    if(!badges) {
      return '';
    }
    badges.forEach(e => {
      switch(e){
        case "Language Count":
          badgeArray.push('![GitHub language count](https://img.shields.io/github/languages/count/' + username + '/' +projectTitle +')');
          break;
        case "Top Language":
          badgeArray.push('![GitHub top language](https://img.shields.io/github/languages/top/'+username+'/'+projectTitle+')');
          break;
        case "Code Size":
          badgeArray.push('![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/'+username+'/'+projectTitle+')');
          break;
        case "Repo Size":
          badgeArray.push('![GitHub repo size](https://img.shields.io/github/repo-size/'+username+'/'+projectTitle+')');
          break;
        case "Issues":
          badgeArray.push('![GitHub issues](https://img.shields.io/github/issues-raw/'+username+'/'+projectTitle+')');
          break;
        case "Issues Closed":
          badgeArray.push('![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/'+username+'/'+projectTitle+')');
          break;
        case "Release Version by Date":
          badgeArray.push('![GitHub release (latest by date)](https://img.shields.io/github/v/release/'+username+'/'+projectTitle+')');
          break;
        default:
          break;
      }
    });
    return badgeArray.join(' ');
  };
// variable is created that will hold markdown template and add to it dynamically 
let markdownTemplate =
    
//title, badge, and description
    
`# ${data.projectTitle}

## Description
${data.description}

![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)

You can access more badges and their purposes at [shields.io](https://shields.io)
`;

generateBadges(data.badges,data.username,data.projectTitle)
  
let tableOfContents =
`## Table of Contents`;
  if (data.installation) {
    tableOfContents +=
      `
  * [Installation](#installation)`
  };
    if (data.instructions) {
      tableOfContents +=
      `
  * [Usage](#usage)`
   };
    if (data.contribution) {
      tableOfContents +=
        `
  * [Contributing](#contributing)`
    };
    if (data.testing) {
        tableOfContents +=
        `
  * [Testing](#testing)`
   };
 
  //append table to template
  markdownTemplate += tableOfContents;

  //add contact info and license (required)
  markdownTemplate +=
    `
  * [Questions](#questions)`;
  markdownTemplate +=
    `
  * [License](#license)
    `;

    //installation
  if (data.installation) {
    markdownTemplate +=
      `


## Installation
    
  _Follow these steps to properly install this application:_


  ${data.installation}`
  };

    //usage
    if (data.instructions) {
      markdownTemplate +=
      `


 ## Usage

_Instructions for use:_


      ${data.instructions}`
      };

      //contributions
  if (data.contribution) {
    markdownTemplate +=
      `

      
## Contribution

  _If you would like to contribute, please adhere to these guidelines:_


  ${data.contribution}`
  };
    
    //testing
    if (data.testing) {
      markdownTemplate +=
        `
        

  ## Testing

_Instructions for testing application:_


    ${data.testing}`
    };

      //questions
      markdownTemplate +=
      `
      
## Questions
      
  _For further questions:_

  ${data.questions}
  


  _Contact Information:_

  GitHub: [${data.username}](https://github.com/${data.username})


  Email: [${data.accountEmail}](mailto:${data.accountEmail})`;
  
  markdownTemplate +=
  `

  ## License
      
  _This application has the ${data.license}._
      
  For more information please view the [license description](${licenseLink}).
  
  `;
  return markdownTemplate;
}
module.exports = generateMarkdown;
