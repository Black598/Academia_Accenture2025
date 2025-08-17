import { Given, When, And } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário esteja na página de cadastro', () => {
    cy.visit('/')

})

Given('que o usuário já realizou o registro', () => {
    cy.visit('/')
    cy.gerarUser()
    cy.addUser(1)
})

When('o usuário edita seu registro', () => {
    cy.pegarUltimoBotaoEditar()
    cy.wait(300)
    cy.clicarUltimoEdit()
})
