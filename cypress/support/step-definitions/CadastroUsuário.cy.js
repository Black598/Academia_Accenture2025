import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário esteja na página de cadastro', () => {
    cy.visit('/')
    cy.generateUser()
});
When('preencher os campos obrigatórios com dados válidos', () => {
    cy.btn_Add()
    cy.Preencher()
});

And('clicar no botão de cadastro', () => {
   cy.Submit()
});

Then('informações do usuário devem ser exibidas na tabela', () => {

});

