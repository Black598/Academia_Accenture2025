import { Then, And } from 'cypress-cucumber-preprocessor/steps';

And('preencher com informações inválidas',()=>{
    cy.preencherEditInvalido()
})

And('clicar confirma alterações',()=>{
    cy.Submit()
})

Then('os campos incorretos devem ficar com bordas vermelhas',()=>{
    cy.validarCampoVermelho()
})