const btn_Add = '#addNewRecordButton'
const name_Field = '#firstName'
const lastName_Field = '#lastName'
const email_Field = '#userEmail'
const age_Field = '#age'
const salary_Field = '#salary'
const department_Field = '#department'
const btn_Submit = '#submit'
const li_User = '.rt-tbody'

Cypress.Commands.add('btn_Add', () => {
  cy.get(btn_Add).click()
})

Cypress.Commands.add('Preencher', () => {
  cy.get(name_Field).type(Cypress.env('random.user').name, { log: false })
  cy.get(lastName_Field).type(Cypress.env('random.user').lastName, { log: false })
  cy.get(email_Field).type(Cypress.env('random.user').email, { log: false })
  cy.get(age_Field).type(Cypress.env('random.user').age)
  cy.get(salary_Field).type(Cypress.env('random.user').salary, { log: false })
  cy.get(department_Field).type(Cypress.env('random.user').department)
})

Cypress.Commands.add('Submit', () => {
  cy.get(btn_Submit).click()
})

Cypress.Commands.add('validarUltimaCadastrada', () => {
  cy.get(li_User)
    .find('.rt-tr-group')
    .filter((index, el) => {

      return Cypress.$(el).find('.rt-td').filter((i, td) => Cypress.$(td).text().trim() !== '').length > 0;
    })
    .then($rows => {
      const ultimoIndex = $rows.length - 1;
      cy.wrap($rows[ultimoIndex]).as('ultimaLinhaPreenchida')
      cy.get('@ultimaLinhaPreenchida').should('be.visible')
    })
})


Cypress.Commands.add('addUser', (quantidade) => {
  for (let i = 0; i < quantidade; i++) {
    cy.btn_Add()
    cy.Preencher()
    cy.Submit()
  }
})