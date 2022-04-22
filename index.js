const inquirer = require("inquirer");
const fs = require("fs");
//const skeleton = require("./template");

inquirer
  .prompt([
    {
      type: "input",
      message: `\n--------------------------------------------------------------\n
Welcome to the README generator!
for the next couple minutes, I will ask you a series of
questions about a project you have/are about to start.
            
First question: What is the name of your project?`,
      name: "title",
    },
    {
      type: "editor",
      message: `\n--------------------------------------------------------------\n
Second question!
            
Why did you decide to start this project?
What problem are you trying to solve?`,
      name: "description",
    },
    {
      type: "editor",
      message: `\n--------------------------------------------------------------\n
Third question!
    
How can they install your project?
(In this section, go throught the step-by-step process of install this project, providing links when necessary.)`,
      name: "installation",
    },
    {
      type: "editor",
      message: `\n--------------------------------------------------------------\n
Fourth question!
        
How does you project work?
(Please describe how it works; be sure to 
provide examples of your code in this segment as well!)`,
      name: "usage",
    },
    {
      type: "editor",
      message: `
      \n--------------------------------------------------------------\n
Fifth question!
        
How can people contribute to this project?
(Are you open to contributions? If so, say what the requirements 
are to accept these changes. In this section, you should also 
 explain how to begin contributing; i.e. specific 
scripts, or external servers!)`,
      name: "contributing",
    },
    {
      type: "editor",
      message: `\n--------------------------------------------------------------\n
Test?`,
      name: "test",
    },
    {
      type: "input",
      message: `\n--------------------------------------------------------------\n
Almost there!
        
What is your github username?`,
      name: "gitUser",
    },
    {
      type: "input",
      message: `\n--------------------------------------------------------------\n
What about an Email?`,
      name: "email",
    },
    {
      type: "input",
      message: `\n--------------------------------------------------------------\n
What is your name? (First and last, please.)`,
      name: "fullName",
    },
    {
      type: "list",
      message: `\n--------------------------------------------------------------\n
Last step!
        
What license are you using for this project?`,
      name: "license",
      choices: [
        "Apache 2.0",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "Boost Software",
        "Creative Commons...",
      ],
    },
    {
      type: "confirm",
      message: `\n--------------------------------------------------------------\n
Are you ready to commit your changes?`,
      name: "commit",
    },
  ])
  .then((data) => {
    console.log(data);

    if (data.commit === false) {
      return;
    }

    if (data.license == "Apache 2.0") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (data.license == "BSD 2-Clause") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (data.license == "BSD 3-Clause") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (data.license == "Boost Software") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else {
      data.badge = "";
    }

    const skeleton = require("./template");
    //console.log(skeleton);
    //fs.writeFile("README.md", skeleton, (err) =>
    //  err ? console.error(err) : console.log("Complete!")
    //);
  });
