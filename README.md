# Processo de contratação na Talent Academy

Para posições de desenvolvedor na Talent Academy, nosso processo de contratação consiste em 3 etapas:

-   Um desafio de código para construir um projeto simples (API, SPA, etc.). Isso será usado como base para discussão na próxima etapa. Você pode encontrar todos os nossos desafios neste repositório. Também aceitamos projetos pessoais ou de código aberto adequados no lugar do desafio.
-   Uma sessão de introdução + revisão de código e arquitetura de aproximadamente 45 minutos
-   Uma sessão de fit cultural

Todo o processo não deve levar mais de 2 semanas do início ao fim.

# Desafio

Este desafio oferece a oportunidade para analisarmos como você codifica e organiza um projeto para implementar uma especificação.

## Entregáveis

O projeto final deve incluir:

-   Código da aplicação
-   Documentação para iniciar o ambiente de desenvolvimento e executar a aplicação

Espera-se que você siga os mockups e _faça uma melhoria na interface_.

## Stack Tecnológica

A aplicação deve utilizar a seguinte stacks:

-   [Angular](https://angular.io/)

Fora esse requisito, você pode usar quaisquer bibliotecas, frameworks ou ferramentas que considerar necessárias.

## Chamadas de API HTTP

Este desafio requer chamadas de API HTTP quando um usuário adiciona um consentimento ou para popular a lista de consentimentos.

Recomendamos implementar as chamadas como requisições HTTP padrão para uma API REST com as seguintes especificações:

-   `GET /consents`: Retorna uma lista de consentimentos junto com os dados de paginação.
-   `POST /consents`: Adiciona um novo consentimento.

Você pode simular as chamadas HTTP criando um mock do objeto `XMLHttpRequest` ou do método `fetch` no navegador. O mock deve conter uma lista pré-populada de objetos e adicionar um novo objeto à lista quando uma requisição `POST` for enviada.

Outros métodos de simulação também são aceitos, desde que nenhuma requisição real seja enviada.

## Expectativas

Seu código será revisado pela Talent Academy e servirá como base para uma discussão nas entrevistas.  
Queremos entender como você aborda o desenvolvimento de um projeto completo e recomendamos fortemente que você trabalhe no desafio sozinho.  
Daremos atenção especial à sua atenção aos detalhes e esperamos que o código seja profissionalmente estruturado, comentado, documentado e testado.

Se algo não estiver claro, sinta-se à vontade para fazer perguntas que possam ajudá-lo a entender melhor as especificações ou requisitos.

## Entrega

Sua aplicação pode ser enviada como um repositório no GitHub (você pode fazer um fork deste repositório) ou como um arquivo compactado contendo todos os entregáveis.

# O Desafio

Em alguns casos específicos, empresas precisam coletar o consentimento dos consumidores antes de utilizar seus dados. Por exemplo, visitantes de um site podem precisar consentir explicitamente para receber newsletters por e-mail antes que a empresa possa enviar e-mails para esses visitantes.

O objetivo deste desafio é construir a aplicação mais simples possível para coleta e gerenciamento de consentimentos, onde um usuário pode inserir suas informações e concordar com uma lista de processamentos de dados. Não é a aplicação mais amigável para o usuário, mas será suficiente para este desafio.

## Especificação do Produto

A aplicação é composta por duas telas.

### 1. Formulário de coleta de consentimento

Um formulário que permite ao usuário inserir seu nome, endereço de e-mail e selecionar os processamentos de dados aos quais ele concorda.

Quando o usuário preenche o formulário e clica no botão "Dar consentimento", o consentimento é adicionado à lista de consentimentos exibida na segunda tela.

![Mockup](https://github.com/talentacademybr/frontend-challenge/raw/master/wireframes/1%20-%20Give%20consent.png)

### 2. Gerenciamento de consentimentos

Uma lista de consentimentos que foram dados pelos usuários. Esta tela simplesmente exibe os itens da lista com paginação no lado do cliente.

![Mockup](https://github.com/talentacademybr/frontend-challenge/raw/master/wireframes/2%20-%20Collected%20consents.png)

## Sessão de Revisão

Após o recebimento do seu desafio de código, organizamos uma sessão de revisão com você e algum desenvolvedor da Talent Academy.
Durante essa sessão, nós:

-   Pediremos que você compartilhe sua tela e faça uma demonstração rápida do aplicativo que desenvolveu
-   Pediremos que você apresente a estrutura do seu projeto e nos guie pelo código (os diferentes componentes, o gerenciamento de estado, etc.)
-   Faremos perguntas técnicas gerais relacionadas ao seu projeto e à arquitetura frontend

Alguns exemplos de tópicos que gostamos de discutir em mais detalhes:

-   Escalabilidade de uma SPA
-   Componentes inteligentes e componentes bobos (Smart/Dumb Components)
-   Bibliotecas de UI
-   Gerenciamento de estado
-   Estilização
-   Testes
