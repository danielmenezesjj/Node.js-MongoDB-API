# Basic Node.js MongoDB API 

This is a basic API built with Node.js and Express. It uses a MongoDB file as the database to store and retrieve products.

## Getting Started

To get started with this API, follow the instructions below.

### Prerequisites

- Node.js installed on your local machine

### Installation

1. Clone the repository:
- git clone https://github.com/danielmenezesjj/Node.js-MongoDB-API


2. Install the dependencies:
- npm install 


3. Start the API:
- npm start

The API will start running on `http://localhost:3000`.

## Endpoints

| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/produto |	Retorna todos os produtos cadastrados |
| GET |	/produto/{id} |	Retorna um produto específico pelo ID |
| POST |	/produto |	Cadastra um novo produto |
| PUT |	/produto/{id} |	Atualiza as informações de um produto existente |
| DELETE |	/produto/{id} |	Exclui um produto existente pelo ID |


## License

This project is licensed under the [MIT License](LICENSE).

