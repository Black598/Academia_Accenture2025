#utf-8
#language: pt



Funcionalidade: Cadastro Válido
    Cenário: Cadastro de usuário válido
    Dado que o usuário esteja na página de cadastro
    Quando preencher os campos obrigatórios com dados válidos
    E clicar no botão de cadastro
    Então informações do usuário devem ser exibidas na tabela

    