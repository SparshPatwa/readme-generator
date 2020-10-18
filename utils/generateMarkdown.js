// function to generate markdown for README
function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.projectTitle} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Demonstration](#demonstration)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## Deployment
🛳 [Application Link](${answers.deployment})

## Demonstration  
🎥 [Video Walkthrough](${answers.videodemo})

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}

## Questions
✋ Feel free to reach out with question or comments  
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})  
✉️ Email me with any questions: ${answers.email}
`;
}

module.exports = generateMarkdown;