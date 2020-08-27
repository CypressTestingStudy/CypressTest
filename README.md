# Cypress Test


[![CypressTest](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/ven6pg/master&style=social&logo=cypress)](https://dashboard.cypress.io/projects/ven6pg/runs)


![Cypress tests](https://github.com/CypressTestingStudy/CypressTest/workflows/Cypress%20tests/badge.svg?branch=master)

## SetUp

1. Configure a `cypress.json` file based on [cypress.sample.json](./cypress.sample.json) 

1. Run
```
npm install
```

## Running


#### Using cypress UI mode
```bash
npx cypress open
```
#### Using Headless mode
```bash
npx cypress run
```
#### Run specific test in Headless mode
```bash
npx cypress run --testFile.js
```
#### Run Headless mode with Dashboard Analysis
```bash
npx cypress run --record --key 49bfa993-ad20-464c-b7ab-d9d27ae262c0
```

