// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { faker, fa } = require("@faker-js/faker")


Cypress.Commands.add('generateUser', () => {

    const fakerName = faker.person.firstName()
    Cypress.env('random.user').name = fakerName


    const fakerLastName = faker.person.lastName()
    Cypress.env('random.user').lastName = fakerLastName
 

    const fakerEmail = faker.internet.email(fakerName, fakerLastName)
    Cypress.env('random.user').email = fakerEmail


    const fakerPassword = faker.internet.password()
    Cypress.env('random.user').password = fakerPassword


    const fakerAge = faker.string.numeric(2)
    Cypress.env('random.user').age = fakerAge


    const fakerSalary = faker.string.numeric(5)
    Cypress.env('random.user').salary = fakerSalary


    const fakerDepartment = faker.person.jobType()
    Cypress.env('random.user').department = fakerDepartment

    return fakerName,fakerLastName,fakerEmail,fakerPassword,fakerAge,fakerSalary,fakerDepartment

})

cy.generateUser()