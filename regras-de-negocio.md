- Documentação de Regras de Negócio — Portfólio G4
Este documento formaliza as diretrizes, restrições e regras de negócio estabelecidas e seguidas pela equipe durante o ciclo de desenvolvimento do projeto Portfólio G4.

- RN01 a RN04 — Gestão e Planejamento
  * RN01 (Organização no Trello): Todas as atividades e entregas do projeto devem ser centralizadas e rigorosamente acompanhadas por
    meio de quadros Kanban no Trello.
  * RN02 (Atribuição de Papéis): As tarefas devem respeitar a matriz de responsabilidades da equipe (Front-end, Back-end e
    Documentação/QA).
  * RN03 (Controle de Etapas): O fluxo de trabalho deve obedecer às fases do projeto (S1 a S4), passando de forma sequencial por
    planejamento, desenvolvimento, integração e polimento.
  * RN04 (Validação de Entregas): Nenhuma tarefa pode ser marcada como concluída sem a verificação prévia dos critérios de aceitação
    definidos.

- RN05 — Registro da Documentação e Atualização do Repositório (Foco Principal)
> Status: `Concluído`  
> Sprint: 3 / 4.  
> Responsável: Thaís de Souza Messias (Documentação & QA Lead).

- Descrição da Regra
A regra de negócio RN05 estipula que todas as informações vitais do sistema — incluindo regras operacionais, instruções detalhadas de instalação, dependências e o manual de uso dos endpoints da API — devem ser obrigatoriamente documentadas em arquivos Markdown (`.md`) e mantidas estritamente atualizadas no arquivo principal `README.md` do repositório.

- Critérios de Aceitação da RN05
1. Sincronização com o Código: Sempre que o Back-end (Daniel) alterar rotas da API ou o Front-end (Alexia) modificar componentes visuais, a documentação correspondente deve ser imediatamente atualizada.
2. Guia de Instalação Funcional: O `README.md` deve permitir que qualquer avaliador ou desenvolvedor configure o ambiente e execute o projeto do zero sem auxílio externo.
3. Padronização Visual: Os arquivos de texto devem seguir uma formatação Markdown limpa, utilizando títulos hierárquicos, tabelas de endpoints e blocos de código formatados.

   
- RN06 a RN10 — Governança e Qualidade
  * RN06 (Atualização de Progresso): O status das tarefas no Trello deve refletir o estado real de desenvolvimento da equipe.
  * RN07 (Controle de Prioridades): Uso de etiquetas visuais no Trello para identificar gargalos, urgências e pendências técnicas.
  * RN08 (Aprovações Oficiais): Todos os entregáveis de cada Sprint são submetidos à validação do orientador (Prof. Waldo).
  * RN09 (Integração Contínua): As frentes de Front-end, Back-end e Documentação devem ser testadas e integradas conjuntamente antes do
    fechamento de cada ciclo.
  * RN10 (Encerramento de Sprint): Ao término de cada ciclo, os registros de tarefas e artefatos de código devem estar consolidados e
    prontos para apresentação.
