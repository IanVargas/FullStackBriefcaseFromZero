const getPokemon = (pokemonToSearch) =>  {
    const getPokemonInfo = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`).then((data) => data.json());
    return getPokemonInfo;
}








const promise1 = getPokemon(1);
const promise2 = getPokemon(-2);
const promise3 = getPokemon(-3);
Promise.any([promise1,promise2,promise3])
            .then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log("Unable to fetch poekemon data");
            })
