const inquirer = require("inquirer");
const fs = require("fs");

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
Do you have some test scenarios of your function?
If so, please include here! (Doing this will show how dynamic and versatile your code is;
giving people confidence in running/backing your project!)`,
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
        "a Creative Commons license",
        "a license yet to be linked...",
      ],
    },
  ])
  .then((data) => {
    console.log(data);
    const template = require("./template");

    if (data.license == "Apache 2.0") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      data.licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
    } else if (data.license == "BSD 2-Clause") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      data.licenseLink = "(https://opensource.org/licenses/BSD-2-Clause)";
    } else if (data.license == "BSD 3-Clause") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      data.licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
    } else if (data.license == "Boost Software") {
      data.badge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      data.licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
    } else if (data.license == "a Creative Commons license") {
      data.badge = "";
      data.licenseLink = "(https://creativecommons.org/choose/)";
    } else {
      data.badge = "";
      data.licenseLink = "https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba";
    }
    fs.writeFile("your-README.md", template(data), (err) =>
      err ? console.error(err) : console.log("Complete!")
    );
  });
