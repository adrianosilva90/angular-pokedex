# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" width="25" height="25"> Pokedex 
Olá! Esta é uma Pokedex, onde é possivel procurar quaisquer pokémons lançados até hoje e ver seus atributos e foto. Este aplicativo utiliza uma API chamada [PokéAPI](https://pokeapi.co/) que é responsável por trazer ao front-end todos os pokémons e dados necessários. Todo o front-end foi construído em Angular.


## ❓ Como foi feito?
Esta aplicação foi feita baseada em um curso do YouTube realizado pelo canal [Vida Fullstack](https://www.youtube.com/@vidafullstack2431).

 - Curso: https://www.youtube.com/watch?v=UhOcUII_5PU
 - Projeto original: https://troquatte.github.io/curso-angular-pokedex/

## 🛠️ Mudanças realizadas
Eu realizei diversas mudanças para melhorar o projeto e testar um pouco dos meus conhecimentos com Angular. As mudanças foram:
- A parte visual da aplicação foi refeita, assim como os elementos originais foram alterados a cor e deixados transparentes. Os pokémons foram ampliados e estão muito mais ao centro vertical do container.
- No projeto original, o front-end carregava apenas os primeiros 100 pokémons da API. Eu consegui fazer o front-end carregar todos os pokémons e filtrar seus resultados, mostrando apenas os 50 primeiros na lista e, sendo possível carregar mais pokémons clicando no botão de carregar. Caso o retorno da lista seja inferior a 50 ou toda a lista ja tenha sido exibida, o botão desaparece.
- As imagens dos pokémons retornadas da API foram trocadas. A API possui vários arrays dentro de cada pokémon retornado, e existem várias imagens dentro do mesmo pokémon. A propriedade utilizada no projeto original não retornava imagens de pokémons mais recentes, então eu a modifiquei para uma propriedade mais padrão, onde o retorno de imagens é praticamente certo.
- Tem um pequeno texto no canto direito que mostra todos os pokémons retornados da API.
- A mensagem de erro colocada originalmente foi substituída. Agora ela é exibida também quando um pokémon não for encontrado na digitação.

## ❌ Possíveis falhas
A API retorna alguns pokémons que não possuem dados como: vida, ataque, defesa, etc. Como a tela de detalhes foi filtrada para retornar um erro caso esses dados não sejam retornados, ele simplesmente retorna uma mensagem de erro do tipo **Não encontrado**, semelhante à mensagem que é retornada caso um pokémon digitado não exista.

## <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png" width="18" height="18"> Sobre o Angular
Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 16.0.1.
