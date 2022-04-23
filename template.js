//const test = `My project is called ${data.title}`;

const template = (data) => {
  return `# ${data.title}  ${data.badge}
## Description

Why did you decide to build this project?

\`\`\`\`
${data.description}
\`\`\`\`

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

How to install:

\`\`\`\`
${data.installation}
\`\`\`\`

## Usage

How does your project work?

\`\`\`\`
${data.usage}
\`\`\`\`

## Contributing

How can you contribute to this project?

\`\`\`\`
${data.contributing}
\`\`\`\`

## Tests

To run this program:

\`\`\`\`
${data.test}
\`\`\`\`

## Questions

If you have any questions, you can contact me through:

- [Github](https://github.com/${data.gitUser})
- Email: ${data.email}

## License & Copyright

© ${data.fullName}

Licensed under [${data.license}](${data.licenseLink})`;
};
//console.log(skeleton);

module.exports = template;
