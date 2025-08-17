#utf-8
#language: pt



Funcionalidade: Modificações nos Registros

    Contexto:
        Dado que o usuário já realizou o registro
        Quando o usuário edita seu registro
   
    Cenário: Edição de usuário válido
    
        Então informações do usuário devem ser editadas

    Cenário: Edição de usuário com informações inválidas
    
        E preencher com informações inválidas
        E clicar confirma alterações
        Então os campos incorretos devem ficar com bordas vermelhas

