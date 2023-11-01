# Pokemon TCG Angular 15 - Desafio Stefanini

Bem-vindo ao Pokemon TCG Angular 15 - Desafio Stefanini! Esta é uma aplicação que permite aos usuários criar, visualizar, editar e excluir baralhos do Pokemon Trading Card Game (TCG). Com esta aplicação, você pode organizar suas cartas favoritas em baralhos personalizados e gerenciar sua coleção de forma eficaz. Abaixo estão detalhadas as funcionalidades e padrões utilizados nesta aplicação.

## Funcionalidades

1. **Criar Baralho:**
   - O usuário pode criar um baralho do Pokemon TCG, adicionando no mínimo 24 cartas e no máximo 60 cartas ao baralho.
   - Cada baralho pode conter no máximo 4 cartas com o mesmo nome. Isso significa que os usuários podem incluir até 4 cópias da mesma carta em seu baralho.
   - A aplicação oferece uma interface intuitiva para adicionar cartas ao baralho, garantindo que o número mínimo e máximo de cartas, bem como o limite de 4 cartas do mesmo nome, seja respeitado.

2. **Visualizar Baralhos Criados:**
   - Os usuários podem visualizar uma lista de todos os baralhos criados anteriormente.
   - Cada baralho é exibido com detalhes, como nome do baralho, quantidade de cartas e tipos de cartas presentes.
   - Os usuários podem também visualizar detalhes de um baralho específico sem a necessidade de editá-lo, permitindo uma visualização rápida das cartas presentes no baralho.

3. **Editar Baralho:**
   - Os usuários têm a opção de editar um baralho existente.
   - Eles podem adicionar ou remover cartas do baralho para ajustá-lo de acordo com suas preferências.

4. **Excluir Baralho:**
   - Os usuários podem excluir um baralho existente se não desejarem mais mantê-lo em sua coleção.

5. **Filtrar por Tipos de Cartas:**
   - A aplicação oferece a funcionalidade de filtrar as cartas por tipos (por exemplo, fogo, água, elétrico, etc.).
   - Os usuários podem explorar facilmente as cartas disponíveis com base em seus tipos preferidos.

## Padrão Utilizado: Padrão Facade

Nossa aplicação utiliza o **Padrão Facade** para fornecer uma interface simplificada para o subsistema complexo do Pokemon TCG. O Padrão Facade é implementado da seguinte forma:

- **`DeckFacade:`** Esta classe atua como uma fachada para o sistema do Pokemon TCG. Ela fornece métodos simples e coesos para criar, visualizar, editar, excluir e filtrar cartas e baralhos. Internamente, a `DeckFacade` gerencia a interação com classes mais complexas responsáveis pela manipulação de cartas e baralhos.

## Como Executar a Aplicação

Para executar a aplicação Pokemon TCG Angular 15 - Desafio Stefanini, siga estas etapas:

1. **Pré-requisitos:**
   - Certifique-se de ter o Node.js e o Angular CLI instalados em seu sistema.

2. **Clone o Repositório:**
```
git clone https://github.com/seu-usuario/pokemon-tcg-angular-15.git
cd pokemon-tcg-angular-15
```



3. **Instale as Dependências:**
npm install


4. **Execute a Aplicação:**
ng serve


5. **Acesse a Aplicação:**
Abra seu navegador e acesse `http://localhost:4200` para utilizar a aplicação Pokemon TCG.

## Conclusão

O Pokemon TCG oferece uma maneira fácil e conveniente de gerenciar suas cartas e baralhos do Pokemon Trading Card Game. Com a funcionalidade de filtragem por tipos e a simplicidade do Padrão Facade, a experiência do usuário é aprimorada, tornando a criação, visualização e organização de baralhos uma tarefa simples e agradável.

Divirta-se explorando e gerenciando suas cartas do Pokemon TCG!

