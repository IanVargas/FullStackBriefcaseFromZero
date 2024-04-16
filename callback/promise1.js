

const getPokemon = (pokemonToSearch) =>  {
    const getPokemonInfo = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`);//.then((data) => pokemonToSearch);
    return getPokemonInfo;
}



async function seachForPokemons(){ 

const promise1 = getPokemon(1);
const promise2 = getPokemon(2);
const promise3 = getPokemon(3);
Promise.all([promise1,promise2,promise3])
            .then((data) => {
                data.forEach(element => {
                    console.log( element.json());
                });
                //console.log(data)
            }).catch((err) => {
                console.log("Unable to fetch poekemon data");
            })
        }