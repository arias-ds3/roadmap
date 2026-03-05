/*
======================================
EJERCICIO PRINCIPAL
Petición HTTP usando fetch (Node 18+)
======================================
*/

async function peticionWeb() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // Verificamos si la petición fue exitosa
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.text();

    console.log("✅ Petición exitosa");
    console.log("Contenido recibido:\n");
    console.log(data);

  } catch (error) {
    console.error("❌ Error en la petición:", error.message);
  }
}

peticionWeb();



/*
======================================
DIFICULTAD EXTRA
Cliente de terminal para PokéAPI
======================================
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function obtenerPokemon(nombreOId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreOId.toLowerCase()}`);

    if (!response.ok) {
      throw new Error("Pokémon no encontrado");
    }

    const pokemon = await response.json();

    console.log("\n==============================");
    console.log(`Nombre: ${pokemon.name}`);
    console.log(`ID: ${pokemon.id}`);
    console.log(`Peso: ${pokemon.weight}`);
    console.log(`Altura: ${pokemon.height}`);
    console.log("Tipos:", pokemon.types.map(t => t.type.name).join(", "));

    // Obtener cadena de evolución
    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();

    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    function obtenerEvoluciones(chain) {
      let evoluciones = [];
      let current = chain;

      while (current) {
        evoluciones.push(current.species.name);
        current = current.evolves_to[0];
      }

      return evoluciones;
    }

    const evoluciones = obtenerEvoluciones(evolutionData.chain);

    console.log("Cadena de evolución:", evoluciones.join(" → "));

    // Juegos en los que aparece
    const juegos = pokemon.game_indices.map(g => g.version.name);
    console.log("Aparece en juegos:", juegos.join(", "));

    console.log("==============================\n");

  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

rl.question("Introduce el nombre o ID del Pokémon: ", (respuesta) => {
  obtenerPokemon(respuesta).then(() => rl.close());
});
