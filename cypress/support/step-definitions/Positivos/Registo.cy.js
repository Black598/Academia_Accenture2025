import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';


When('preencher os campos obrigatórios com dados válidos',()=>{
    cy.gerarUser()
    cy.btn_Add()
    cy.Preencher()
})

And('clicar no botão de cadastro',()=>{
    cy.Submit()
})

Then('informações do usuário devem ser exibidas na tabela',()=>{
    cy.validarUltimaCadastrada()
})