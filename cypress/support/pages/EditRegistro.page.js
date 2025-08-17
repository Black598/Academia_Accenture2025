const name_Field = '#firstName'
const lastName_Field = '#lastName'
const email_Field = '#userEmail'
const age_Field = '#age'
const salary_Field = '#salary'
const department_Field = '#department'
const btn_Submit = '#submit'
const red_Invalid = '.form-control.is-invalid, .was-validated .form-control:invalid'
const red_color = 'rgb(220, 53, 69)'

Cypress.Commands.add('pegarUltimoBotaoEditar', () => {

  cy.validarUltimaCadastrada()
  cy.get('@ultimaLinhaPreenchida').find('[id^="edit-record-"]').as('botaoEditar')
  cy.get('@botaoEditar').click()
})

Cypress.Commands.add('preencherEdit', () => {
  cy.get(name_Field).clear().type(Cypress.env('random.user').name, { log: false })
  cy.get(lastName_Field).clear().type(Cypress.env('random.user').lastName, { log: false })
  cy.get(email_Field).clear().type(Cypress.env('random.user').email, { log: false })
  cy.get(age_Field).clear().type(Cypress.env('random.user').age)
  cy.get(salary_Field).clear().type(Cypress.env('random.user').salary, { log: false })
  cy.get(department_Field).clear().type(Cypress.env('random.user').department)
  cy.get(btn_Submit).click()
})


Cypress.Commands.add('preencherEditInvalido', () => {
  cy.get(name_Field).clear
  cy.get(lastName_Field).clear
  cy.get(email_Field).clear().type(Cypress.env('invalid.user').email, { log: false })
  cy.get(age_Field).clear().type(Cypress.env('invalid.user').age)
  cy.get(salary_Field).clear().type(Cypress.env('invalid.user').salary, { log: false })
  cy.get(department_Field).clear()
})


Cypress.Commands.add('validarCampoVermelho',() => {
  cy.get(red_Invalid).should('have.css','border-color',red_color)
})

Cypress.Commands.add('',() => {

  
})