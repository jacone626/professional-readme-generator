// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return "![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === 'GNU General Public License v3.0') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (license === 'MIT License') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)"
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    return "[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)(https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return "[![License BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (license === 'Boost Software License 1.0') {
    return "[![License: Boost](https://img.shields.io/badge/License-Boostv1-blue.svg)(https://www.https://www.boost.org/LICENSE_1_0.txt"
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return "[![License: CCZ 1.0](https://img.shields.io/badge/License-CCZv1.0-blue.svg)(https://www.https://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if (license === 'Eclipse Public License 2.0') {
    return "[![License: EPL 2.0](https://img.shields.io/badge/License-EPL_2.0-red.svg)(https://opensource.org/licenses/EPL-2.0)"
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)(https://www.gnu.org/licenses/agpl-3.0)"
  }
  else if (license === 'GNU General Public License v2.0') {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)(https://www.gnu.org/licenses/lgpl-3.0)"
  }
  else if (license === 'Mozilla Public License 2.0') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license === 'The Unlicense') {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)"
  }
  else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return "(https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === 'GNU General Public License v3.0') {
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (license === 'MIT License') {
    return "(https://opensource.org/licenses/MIT)"
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    return "(https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return "(https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (license === 'Boost Software License 1.0') {
    return "(https://www.https://www.boost.org/LICENSE_1_0.txt"
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return "(https://www.https://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if (license === 'Eclipse Public License 2.0') {
    return "(https://opensource.org/licenses/EPL-2.0)"
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    return "(https://www.gnu.org/licenses/agpl-3.0)"
  }
  else if (license === 'GNU General Public License v2.0') {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    return "(https://www.gnu.org/licenses/lgpl-3.0)"
  }
  else if (license === 'Mozilla Public License 2.0') {
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license === 'The Unlicense') {
    return "(http://unlicense.org/)"
  }
  else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0') {
    return "This project is covered under the Apache License 2.0. More information can be found below:"
  }
  else if (license === 'GNU General Public License v3.0') {
    return "This project is covered under the GNU General Public License v3.0. More information can be found below:"
  }
  else if (license === 'MIT License') {
    return "This project is covered under the MIT License. More information can be found below:"
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    return "This project is covered under the BSD 2-Clause 'Simplified' License. More information can be found below:"
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return "This project is covered under the Apache License 2.0. More information can be found below:"
  }
  else if (license === 'Boost Software License 1.0') {
    return "This project is covered under the Boost Software License 1.0. More information can be found below:"
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return "This project is covered under the Creative Commons Zero v1.0 Universal. More information can be found below:"
  }
  else if (license === 'Eclipse Public License 2.0') {
    return "This project is covered under the Eclipse Public License 2.0. More information can be found below:"
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    return "This project is covered under the GNU Affero General Public License v3.0. More information can be found below:"
  }
  else if (license === 'GNU General Public License v2.0') {
    return "This project is covered under the GNU General Public License v2.0. More information can be found below:"
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    return "This project is covered under the GNU Lesser General Public License v2.1. More information can be found below:"
  }
  else if (license === 'Mozilla Public License 2.0') {
    return "This project is covered under the Mozilla Public License 2.0. More information can be found below:"
  }
  else if (license === 'The Unlicense') {
    return "This project is covered under the The Unlicense. More information can be found below:"
  }
  else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
  
${data.description}
  
## Table of Contents 
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
  
## License
  
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}
  
## How to Contribute
  
${data.contribution}
  
## Tests
  
${data.test}
  
## Questions

Github profile: https://github.com/${data.username}

For additiional questions, please contact me at ${data.email}.
`
}


module.exports = generateMarkdown;
