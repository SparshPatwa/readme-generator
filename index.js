const fs = require("fs");
const util           = require("util");
const inquirer       = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

/* Prompt the user questions using inquirer pkg */
function userCLI(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter the PROJECT TITLE > ",
        },
        {
            type: "input",
            name: "description",
            message: "Enter PROJECT DISCRIPTION > "
        },
        {
            type: "input",
            name: "installation",
            message: "Enter PROJECT INSTALLATION process > ",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter PROJECT USAGE > "
        },
        {
            type: "list",
            name: "license",
            message: "Choose PROJECT DISTRIBUTION LICENSE > ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter PROJECT CONTRIBUTORS > "
        },
        {
            type: "input",
            name: "tests",
            message: "Enter inluded TESTS > "
        },
        {
            type: "input",
            name: "questions",
            message: "Enter PROJECT CONTACT information > "
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username > "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email > "
        }
    ]);
} 
/* Initialize function, asyncronous using promisify */
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await userCLI();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./output/README.md', generateContent);
        console.log('✔️  README.md sucessfully generated in ./output/');
    }   catch(err) {
        console.log(err);
    }
  }
  
  /* Launch the README generation */
  init();  