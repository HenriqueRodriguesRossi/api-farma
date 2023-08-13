# api-farma

# API de Farmácia

Esta é uma API de exemplo para gerenciar medicamentos em uma farmácia. A API foi desenvolvida utilizando Node.js, Express e MongoDB Atlas.

## Endpoints

A API possui os seguintes endpoints:

### Cadastrar Novo Medicamento

Rota: `POST /novo/med`

Essa rota permite cadastrar um novo medicamento na base de dados.

Parâmetros obrigatórios no corpo da requisição:

- `nomeMedicamento`: Nome do medicamento.
- `laboratorio`: Nome do laboratório que fabrica o medicamento.
- `valorDoMedicamento`: Valor do medicamento (deve ser maior que 0).
- `quantidadeDisponivel`: Quantidade disponível do medicamento (deve ser maior que 0).

Exemplo de requisição:
POST /novo/med
{
"nomeMedicamento": "Nimizulida",
"laboratorio": "teste",
"valorDoMedicamento": 15.99,
"quantidadeDisponivel": 50
}


### Pesquisar Medicamento

Rota: `GET /pesquisar`

Essa rota permite pesquisar um medicamento pelo seu nome.

Parâmetros obrigatórios na consulta:

- `nomeMedicamento`: Nome do medicamento que deseja pesquisar.

Exemplo de requisição:
GET /pesquisar
{
  "nomeMedicamento": "Nimizulida"
}



### Alterar Medicamento

Rota: `PUT /alterar/medicamento`

Essa rota permite alterar informações de um medicamento.

Parâmetros obrigatórios no corpo da requisição:

- `nomeMedicamento`: Nome do medicamento que deseja alterar.
- `novoNomeMed`: Novo nome para o medicamento.
- `quantidadeDisponivel`: Nova quantidade disponível do medicamento (deve ser maior que 0).
- `novaQuantidade`: Nova quantidade disponível do medicamento (deve ser maior que 0).

Exemplo de requisição:
PUT /alterar/medicamento
{
"nomeMedicamento": "Nimizulida",
"novoNomeMed": "Nimizulida Plus",
"quantidadeDisponivel": 30,
"novaQuantidade": 60
}



### Excluir Medicamento

Rota: `DELETE /exclusao/medicamento`

Essa rota permite excluir um medicamento da base de dados.

Parâmetros obrigatórios no corpo da requisição:

- `nomeMedicamento`: Nome do medicamento que deseja excluir.
- `laboratorio`: Nome do laboratório do medicamento.
- `quantidadeDisponivel`: Quantidade disponível do medicamento (deve ser maior que 0).
- `valorDoMedicamento`: Valor do medicamento (deve ser maior que 0).

Exemplo de requisição:
DELETE /exclusao/medicamento
{
"nomeMedicamento": "Nimizulida",
"laboratorio": "teste",
"quantidadeDisponivel": 50,
"valorDoMedicamento": 15.99
}


## Como Rodar

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Instale as dependências com `npm install`.
4. Configure as variáveis de ambiente no arquivo `.env`.
5. Inicie o servidor com `npm start`.

Lembre-se de substituir as configurações de ambiente e valores das variáveis no `.env` de acordo com a sua própria configuração.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request para melhorias ou correções.
