import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


When('o usuário excluir seu registro',()=>{
 cy.deletarUltimo()
})

Then('o campos deve deixar de existir',()=>{
    cy.validarInexistencia()
})