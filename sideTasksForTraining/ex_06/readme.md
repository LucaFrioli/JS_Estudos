## Exercício Prático: Desenvolvendo uma API Simples com Node.js e Express

**Objetivo:**
Criar uma API básica em Node.js utilizando o framework Express, que seja capaz de receber dados enviados através da Fetch API.

**Instruções:**

1. **Configuração Inicial:**
   - Inicie um novo projeto Node.js utilizando `npm init -y`.
   - Instale o framework Express com o comando `npm install express`.

2. **Configuração da API:**
   - Crie um arquivo chamado `api.js` e configure um servidor Express básico.
   - Adicione uma rota (`POST`) que será responsável por receber dados. A rota pode ser, por exemplo, `/api/receber-dados`.

3. **Processamento dos Dados:**
   - Utilize o middleware `express.json()` para habilitar o processamento do corpo da requisição como JSON.
   - Receba os dados enviados pela Fetch API e exiba-os no console do servidor para verificar o recebimento correto.

4. **Teste da API:**
   - Inicie o servidor utilizando `node api.js`.
   - Crie um script ou utilize ferramentas como Postman, cURL ou a própria Fetch API em um projeto frontend para enviar requisições `POST` para a rota criada.
   - Verifique se a API está recebendo e processando corretamente os dados.

5. **Respostas da API:**
   - Após receber os dados, adicione lógica para enviar uma resposta simples indicando o sucesso no recebimento dos dados.

6. **Melhorias Opcionais:**
   - Explore a possibilidade de adicionar mais rotas para realizar operações diferentes.
   - Considere a validação dos dados recebidos e forneça respostas de erro apropriadas em casos de falhas.

**Observações:**
- Este exercício tem como objetivo fornecer uma introdução prática à criação de uma API simples que aceita dados via método `POST`.
- Documente a rota de recebimento de dados e os campos esperados no corpo da requisição.
- Ao concluir o exercício, encerre o servidor utilizando `Ctrl + C` no terminal.

Divirta-se criando sua API básica em Node.js e experimentando com a interação via Fetch API que será desenvolvida na próxima aula!
