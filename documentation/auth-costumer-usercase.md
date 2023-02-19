# AuthCostumer UseCase

> ## DADOS 
* Costumer Email
* Cosumer Password

> ## FLUXO primário
1. Buscar um usuario cadastrado pelo email X
2. Comparar o password cadastrado com o password fornecido no login X
3. Gerar um token de acesso
4. Retornar um token de acesso

>## Fluxo alternativo - Não foi encontrado usuario cadastrado com o email
1. retornar Erro
>## Fluxo alternativo - Password fornecido não confere com o cadastrado 
1. retornar Erro
>## (optional) Fluxo alternativo - Se usuario tentar 5 x a senha errada 
1. o email deve ser bloqueado de fazer login por um tempo 
2. retornar Erro
