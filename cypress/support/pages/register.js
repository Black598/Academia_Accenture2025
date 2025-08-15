const digita = '#searchBox'
const btn_Add = '#addNewRecordButton'
const name_Field = '#firstName'
const lastName_Field = '#lastName'
const email_Field = '#userEmail'
const age_Field = '#age'
const salary_Field = '#salary'
const department_Field = '#department'
const btn_Submit = '#submit'

Cypress.Commands.add('btn_Add', () => {
    cy.get(btn_Add).click()
})

Cypress.Commands.add('Preencher', () => { 
    cy.get(name_Field).type(Cypress.env('random.user').name, {log: false})
    cy.get(lastName_Field).type(Cypress.env('random.user').lastName, {log: false})
    cy.get(email_Field).type(Cypress.env('random.user').email, {log: false})
    cy.get(age_Field).type(Cypress.env('random.user').age, {log: false})
    cy.get(salary_Field).type(Cypress.env('random.user').salary, {log: false})
    cy.get(department_Field).type(Cypress.env('random.user').department, {log: false})
})

Cypress.Commands.add('Submit', () => {
    cy.get(btn_Submit).click()
})