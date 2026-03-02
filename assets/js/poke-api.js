const pokeApi = {};

function convertPokeApiDetailPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.order;

    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = pokemon.types;
    pokemon.abilities = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    pokemon.types = types;
    pokemon.type = type;
    pokemon.species = type;
    pokemon.height = height;
    pokemon.weight = weight;
    pokemon.abilities = abilities;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((pokemon) => ({
        name: pokemon.name,
        number: pokemon.id,
        photo: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map((typeSlot) => typeSlot.type.name),
        type: pokemon.types[0].type.name,
        species: pokemon.types[0].type.name,
        height: pokemon.height,
        weight: pokemon.weight
    }));
}

pokeApi.getPokemons = function (offset, limit) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then( (response) =>  response.json())
        .then( (jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
    }

pokeApi.getPokemonDetailById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    return fetch(url)
        .then((response) => response.json())
}