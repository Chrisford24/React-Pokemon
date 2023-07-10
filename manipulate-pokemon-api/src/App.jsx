import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const[pokemonSprite, getSprite] = useState(null);

  const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=1000";

  useEffect(()=> {
    const fetchPokemon = async () => {
        try {
            const response = await fetch(POKEMON_API);
            const result = await response.json();
            setPokemonData(result);
            console.log(result);

        } catch (error) {
            console.log("Error", error);
        }
    } 
    fetchPokemon();

  },[]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const response = await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites")
  //     const getResults = await response.json();
  //     getSprite(getResults);
  //   }
  //   fetchImages();
  //  }, []);

  return (
    <>
      <div className="main">
        <h1>Pokemon</h1>

        {pokemonData && (
           <div className="pokemon-container">
            {pokemonData.results.map((pokemon) => (
              <div key={pokemon.name}>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.sprite} alt="Pokemon Image" />
              </div>
            ))}
          </div>
        )}
      </div> {/*/ last div for main */}
      

    </>
  )
}

export default App;


