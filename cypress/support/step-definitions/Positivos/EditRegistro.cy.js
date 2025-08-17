import { Then, } from 'cypress-cucumber-preprocessor/steps';


Then('informações do usuário devem ser editadas',()=>{
    cy.preencherEdit()
    cy.validarUltimaCadastrada()
})
