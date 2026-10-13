- Portfólio G4
Repositório oficial do projeto Portfólio G4, desenvolvido no âmbito do curso Técnico em Informática Integrado ao Ensino Médio do IFSP Campus Cubatão. O sistema consiste em uma aplicação web integrada a um servidor backend em Node.js para gerenciamento e exibição dinâmica de conteúdos e portfólios dos integrantes da equipe.

- Equipe de Desenvolvimento e Papéis
  * Alexia Léa Santos Rivero — Front-end Lead: Responsável pelo desenvolvimento da interface estática (`index.html`), design visual,
    experiência do usuário e integração de layouts com a API.
  * Daniel Souza Coelho — Back-end Lead: Responsável pela arquitetura do servidor, lógica de negócios, estruturação de rotas e rotinas de
    dados em Node.js (`servidor.js`).
  * Thaís de Souza Messias — Documentação & QA Lead: Responsável pela gestão de qualidade, escrita dos documentos em Markdown,
    formalização das Regras de Negócio (RN05) e manutenção contínua deste `README.md`.
  * Prof. Waldo Leonel de Oliveira — Orientador / Product Owner: Direcionamento acadêmico, validação dos requisitos e avaliação das
    entregas por Sprint.

- Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias e ferramentas:
  * Linguagens: JavaScript (ES6+), HTML5
  * Back-end: Node.js, Express, CORS (Cross-Origin Resource Sharing)
  * Front-end: HTML Estruturado com Iframe Dinâmico e Fetch API
  * Gestão e Versionamento:** Git, GitHub, Trello (Metodologia Scrum/Kanban).

- Como instalar e rodar o projeto
Para testar o projeto no seu computador, siga os passos abaixo:
 1. Baixe o projeto:
   ```bash
   git clone [link-do-repositorio]
```

 2. Entre na pasta do projeto:
```bash
cd portfolio-g4
```

3. Instale os programas necessários (dependências):
```bash
npm install express cors
```

4. Ligue o servidor da API (Back-end):
```bash
node server.js
```
(O servidor vai ligar na porta 3000).


5. Abrindo o site:
Basta dar dois cliques no arquivo `index.html` para abrir a página no seu navegador.

- Como usar a API
A API foi feita em Node.js e serve para entregar os links dos vídeos.
Rota principal: `GET /api/videos`
* O que ela retorna (Exemplo):
  ```json
{
  "daniel": "link-do-video-daniel",
  "alexia": "link-do-video-alexia",
  "thais": "link-do-video-thais"
}
