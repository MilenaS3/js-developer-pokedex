# 📱 PokéDex Dinâmica - JavaScript Vanilla

Este projeto é uma aplicação web que consome a [PokeAPI](https://pokeapi.co/) para listar e detalhar Pokémons em tempo real. Desenvolvido como parte dos meus estudos em Engenharia de Software, o foco principal foi o domínio de manipulação de APIs e persistência de dados no navegador.

## 🚀 Tecnologias Utilizadas

* **HTML5 & CSS3**: Uso de Flexbox e Grid Layout para garantir um design responsivo.
* **JavaScript (ES6+)**: Implementação de funções assíncronas, Promises e manipulação dinâmica do DOM.
* **PokeAPI**: Integração com API REST externa para busca de dados dinâmicos.

## 🛠️ Destaques Técnicos

### 1. Arquitetura de Dados (Model)
Utilizei o padrão de **Data Mapping**, criando uma classe `Pokemon` para filtrar e organizar apenas as informações necessárias da API (ID, Nome, Tipos, Altura, Peso e Habilidades), mantendo o código limpo e seguindo princípios de **SOLID**.

### 2. Navegação Inteligente com URLSearchParams
Implementei uma lógica de navegação onde o ID do Pokémon selecionado na `index.html` é passado via parâmetros de URL para a `detail.html`. Isso garante que o estado da aplicação persista mesmo após um recarregamento de página.

### 3. CSS Dinâmico
A interface adapta as cores de fundo e os ícones automaticamente com base no tipo principal do Pokémon carregado, proporcionando uma experiência visual personalizada.

## 📁 Estrutura do Projeto

* `index.html`: Lista principal com paginação.
* `detail.html`: Página detalhada do Pokémon selecionado.
* `/assets/js/poke-api.js`: Lógica de consumo da API.
* `/assets/js/information.js`: Controle de renderização da tela de detalhes.

## 👤 Autora

**Milena Soares de Oliveira**
Estudante de Engenharia de Software (7º Período) e Analista de SAC na BR GAAP.
Interessada em Análise de Dados, SQL e Desenvolvimento Full-Stack com C# e TypeScript.

---
*Projeto desenvolvido durante o bootcamp da DIO e personalizado para o meu portfólio pessoal.*
