
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');


const pokemonTitle = document.querySelector('.pokemonTitle');
const pokemonNumber = document.querySelector('.pokemonNumber');
const pokemonImage = document.querySelector('.content img');
const pokemonTypesList = document.querySelector('.types');
const pokemonContent = document.querySelector('.content');
const pokemonSpecies = document.getElementById('species');
const pokemonEgg = document.getElementById('eggCycle');


const heightEl = document.getElementById('pokemonHeight');
const weightEl = document.getElementById('pokemonWeight');
const abilitiesEl = document.getElementById('pokemonAbilities');

if (pokemonId) {

    pokeApi.getPokemonDetailById(pokemonId)
        .then((detail) => {

            const pokemon = new Pokemon();
            pokemon.name = detail.name;
            pokemon.number = detail.id;
            pokemon.types = detail.types.map((slot) => slot.type.name);
            pokemon.type = pokemon.types[0];
            pokemon.photo = detail.sprites.other.dream_world.front_default;
            pokemon.height = detail.height / 10; 
            pokemon.weight = detail.weight / 10; 
            pokemon.abilities = detail.abilities.map((slot) => slot.ability.name);

            return pokemon;
        })
        .then((pokemon) => {

            pokemonTitle.innerText = pokemon.name;
            pokemonNumber.innerText = `#${pokemon.number.toString().padStart(3, '0')}`;

            pokemonImage.src = pokemon.photo;
            pokemonImage.alt = pokemon.name;
            pokemonContent.className = `content ${pokemon.type}`;
            pokemonSpecies.innerText = pokemon.type;

            pokemonTypesList.innerHTML = pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join('');

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