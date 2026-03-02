// 1. Captura o ID da URL que veio do clique no index.html
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

// Seleciona os elementos exatamente como estão no seu HTML
const pokemonTitle = document.querySelector('.pokemonTitle');
const pokemonNumber = document.querySelector('.pokemonNumber');
const pokemonImage = document.querySelector('.content img');
const pokemonTypesList = document.querySelector('.types');
const pokemonContent = document.querySelector('.content');
const pokemonEgg = document.getElementById('eggCycle');

// Elementos da tabela de informações
const heightEl = document.getElementById('pokemonHeight');
const weightEl = document.getElementById('pokemonWeight');
const abilitiesEl = document.getElementById('pokemonAbilities');

if (pokemonId) {
    // Busca os dados na API usando o ID da URL
    pokeApi.getPokemonDetailById(pokemonId)
        .then((detail) => {
            // Criamos o objeto Pokemon usando o seu Model
            const pokemon = new Pokemon();
            pokemon.name = detail.name;
            pokemon.number = detail.id;
            pokemon.types = detail.types.map((slot) => slot.type.name);
            pokemon.type = pokemon.types[0];
            pokemon.photo = detail.sprites.other.dream_world.front_default;
            
            // Dados para a sua tabela "More Info"
            pokemon.height = detail.height / 10; // Converte para metros
            pokemon.weight = detail.weight / 10; // Converte para kg
            pokemon.abilities = detail.abilities.map((slot) => slot.ability.name);

            return pokemon;
        })
        .then((pokemon) => {
            // AGORA A MÁGICA: Substitui os dados do Bulbasaur pelos reais
            
            // Texto e Número
            pokemonTitle.innerText = pokemon.name;
            pokemonNumber.innerText = `#${pokemon.number.toString().padStart(3, '0')}`;
            
            // Imagem e Fundo (usa a classe do tipo para o seu pokemon.css colorir)
            pokemonImage.src = pokemon.photo;
            pokemonImage.alt = pokemon.name;
            pokemonContent.className = `content ${pokemon.type}`;

            // Tipos: Limpa os "Grass/Poison" fixos e coloca os novos
            pokemonTypesList.innerHTML = pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join('');

            // Tabela de Detalhes
            heightEl.innerText = `${pokemon.height} m`;
            weightEl.innerText = `${pokemon.weight} kg`;
            abilitiesEl.innerText = pokemon.abilities.join(', ');
            weightEl.innerText = `${pokemon.weight} kg`;

            if (pokemonEgg) {
                pokemonEgg.innerText = pokemon.type; 
            }

        })
        .catch((error) => console.error('Erro ao carregar detalhes:', error));
}