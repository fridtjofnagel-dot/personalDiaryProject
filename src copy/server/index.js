export const fetchUser = async (setPokemon, pokemonName) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await res.json()
        setPokemon(data)
    } catch(err) {
        console.error(err)
    }
}