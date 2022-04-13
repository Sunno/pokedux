import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import './styles.css';

const PokemonList = ({ pokemons }) => {
    return (
        <Grid className="PokemonList">
            {pokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon} />
            ))}
        </Grid>
    );
}

PokemonList.defaultProps = {
    pokemons: []
}

export default PokemonList;