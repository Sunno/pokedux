import axiosInstance from "./config";

export const getPokemons = (limit = 151) =>
  axiosInstance
    .get(`pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const getPokemonWithDetails = () => {
  return getPokemons().then((res) => {
    const pokemonList = res.results;
    return Promise.all(pokemonList.map((pokemon) => axiosInstance.get(pokemon.url)));
  }).then(pokemonResponse => {
    const pokemonsData = pokemonResponse.map(pokemon => pokemon.data);
    return pokemonsData;
  });
}