#utf-8
#language: pt



Funcionalidade: Modificações nos Registros

    Contexto:
        Dado que o usuário já realizou o registro

    Cenário: Exclusão de usuário 
            
        Quando o usuário excluir seu registro
        Então o campos deve deixar de existir


