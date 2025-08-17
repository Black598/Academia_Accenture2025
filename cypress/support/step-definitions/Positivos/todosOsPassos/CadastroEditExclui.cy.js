import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário realizou um cadastro válido', () => {
    cy.visit('/')
    cy.gerarUser()
    cy.addUser(1)
})

When('editar o seu usuário', () => {
    cy.validarUltimaCadastrada()
    cy.pegarUltimoBotaoEditar()
    cy.gerarUser()
    cy.preencherEdit()
})

Then('exclui seu usuário', () => {
    cy.pegarUltimoDeletar()
})