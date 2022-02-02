# automated-testing-scripts-desktop-web


- setup
Use ssh to clone the code in your local machine.
Install node
Install cypress
Cypress installation guide: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

- Commands
Open terminal
Command to open cypress: "npx cypress open"
Command to execute test cases with mocha report: "npx cypress run --spec "cypress/integration/search.js" --reporter mochawesome"

- branching structure
Master branch is for stable code.
Use develop branch to add/edit code.
use git flow "http://danielkummer.github.io/git-flow-cheatsheet/"
