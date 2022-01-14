// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateBadges = (badges,user,repo)=> {
  let badgeArray = [];
  if(!badges) {
    return '';
  }
  badges.forEach(e => {
    switch(e){
      case "Language Count":
        badgeArray.push('![GitHub language count](https://img.shields.io/github/languages/count/' + user + '/' +repo +')');
        break;
      case "Top Language":
        badgeArray.push('![GitHub top language](https://img.shields.io/github/languages/top/'+user+'/'+repo+')');
        break;
      case "Code Size":
        badgeArray.push('![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/'+user+'/'+repo+')');
        break;
      case "Repo Size":
        badgeArray.push('![GitHub repo size](https://img.shields.io/github/repo-size/'+user+'/'+repo+')');
        break;
      case "Issues":
        badgeArray.push('![GitHub issues](https://img.shields.io/github/issues-raw/'+user+'/'+repo+')');
        break;
      case "Issues Closed":
        badgeArray.push('![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/'+user+'/'+repo+')');
        break;
      case "Release Version by Date":
        badgeArray.push('![GitHub release (latest by date)](https://img.shields.io/github/v/release/'+user+'/'+repo+')');
        break;
      default:
        break;
    }
  });
  return badgeArray.join(' ');
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
