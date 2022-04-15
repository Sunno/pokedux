import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails } from "../../actions";
import Loader from "../../components/Loader";
import PokemonList from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.getIn(['pokemon', 'list'])).toJS();
  const loading = useSelector((state) => state.getIn(['ui', 'loading']));

  useEffect(() => {
    dispatch(getPokemonWithDetails())
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Home">
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
