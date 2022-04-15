import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Icon, Image, Label } from "semantic-ui-react";
import { toggleFavorite } from "../../actions";
import { MAIN_COLOR, FAV_COLOR, NOT_FAV_COLOR } from "../../utils/constants";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(pokemon.id));
  };
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <button className="PokemonCard-favorite" onClick={handleFavorite}>
          <Icon name="favorite" color={pokemon.favorite ? FAV_COLOR : NOT_FAV_COLOR} />
        </button>
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt="Pokemon front"
        />
        <p className="Pokemon-title">{pokemon.name}</p>
        {pokemon.types.map((type) => (
          <Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
