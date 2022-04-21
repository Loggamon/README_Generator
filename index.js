const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: `\n--------------------------------------------------------------\n
Welcome to the README generator!
for the next couple minutes, i will ask you a series of
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
      name: "gitUrl",
    },
    {
      type: "input",
      message: `\n--------------------------------------------------------------\n
What about an Email?`,
      name: "email",
    },
    {
      type: "list",
      message: `\n--------------------------------------------------------------\n
Last step!
        
What license are you using for this project?`,
      name: "license",
      choices: ["Apache 2.0", "BSD 2-Clause", "BSD 3-Clause", "Other..."],
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
  });
