#utf-8
#language: pt



Funcionalidade: Cadastro Válido

    Contexto:
        Dado que o usuário esteja na página de cadastro

    Cenário: Cadastro de usuário válido
    
        Quando preencher os campos obrigatórios com dados válidos
        E clicar no botão de cadastro
        Então informações do usuário devem ser exibidas na tabela

    