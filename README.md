# automated-testing-scripts-desktop-web


**Environment Setup** <br/>
Step 1- Clone code of this repository using following command. Please note that recommended way is to use SSH method. <br/>
'git clone git@github.com:pakwheels/automated-testing-scripts-desktop-web.git' <br/>

Step 2- Install node (https://nodejs.org/en/download/) <br/>
Step 3- Install cypress with global access(https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) <br/>
Step 4- Open Terminal in the directory with the code cloned in Step 1 <br/>
Step 5- run command 'npm install' <br/>
Step 6- run command 'npx cypress open' <br/>
Step 7- Command to execute test cases with mocha report: "npx cypress run --spec "cypress/integration/search.js" --reporter mochawesome" <br/>
Note: work on automatically running all the test cases with a single command. e.g running all the tests in a directory and subdirectory or managing a single file containing all the commands to run test cases. <br/>


**Branching Structure** <br/>
Use git-flow model "http://danielkummer.github.io/git-flow-cheatsheet/" <br/> <br/>

* Master branch is for most recent stable code only. <br/>
* Use develop branch to maintain development ready code. <br/>
* Use feature branches to keep your in progress code. <br/>

**Modeules Status** <br/>
Modules | Issues to deal
--- | --- | 
Ad Post | Duplicate pop-up issue
Search | 
New Car | Some titles are changed
Autostore | 
