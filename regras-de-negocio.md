# 📋 Regras de Negócio — Portfólio G4

Este documento centraliza as principais regras estipuladas pela equipa para o desenvolvimento, organização e entrega do projeto.

---

### 📌 RN02 - Atribuição e Gestão de Tarefas
- **Responsáveis:** Todos os membros (Daniel, Alexia e Thaís).
- **Fase de Aplicação:** S1 a S4.
- **Descrição:** Para manter a organização ágil, é estritamente obrigatório que todos os cartões de tarefas no Trello tenham os seus respetivos membros atribuídos antes do início do desenvolvimento. As tarefas concluídas devem ser movidas para as colunas correspondentes e etiquetadas.

### 📌 RN05 - Documentação e Manutenção do Repositório
- **Responsável Principal:** Thaís de Souza Messias (Documentação & QA).
- **Fase de Aplicação:** Contínua (Foco em S3 e S4).
- **Descrição:** Todas as informações estruturais do projeto, como o passo a passo de instalação local, instruções de uso da API e organização de pastas, devem estar permanentemente documentadas e atualizadas nos ficheiros `README.md` e noutros documentos Markdown no GitHub.

### 📌 RN09 - Arquitetura e Integração de Dados
- **Responsáveis:** Daniel Souza Coelho (Back-end) e Alexia Léa (Front-end).
- **Fase de Aplicação:** S2 e S3.
- **Descrição:** A interface gráfica (Front-end) não pode conter os links dos vídeos de forma fixa (hardcoded) no HTML. É obrigatório que o Front-end consuma os dados dinamicamente através de requisições (`fetch`) à rota `GET /api/videos` fornecida pelo servidor Node.js (Back-end).
