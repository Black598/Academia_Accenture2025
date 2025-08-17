
Cypress.Commands.add('pegarUltimoDeletar', () => {

    cy.validarUltimaCadastrada()
    cy.get('@ultimaLinhaPreenchida').find('[id^="delete-record-"]').as('botaoDeletar')
})


Cypress.Commands.add('deletarUltimo',() => {
    cy.pegarUltimoDeletar()
    cy.get('@ultimaLinhaPreenchida').find('[id^="delete-record-"]').as('botaoDeletar')
    cy.get('@botaoDeletar').click()
})

Cypress.Commands.add('validarInexistencia', () => {
        cy.get('botaoDeletar').should('not.exist')
})