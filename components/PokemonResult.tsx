import { useRouter } from "next/router";
import { Pokemon } from "../types/pokemon";

interface PokemonResultProps {
  pokemon: Pokemon | null;
}

export default function PokemonResult({ pokemon }: PokemonResultProps) {
  const router = useRouter();

  if (!pokemon) {
    return (
      <div className="text-center py-8">
        <p className="text-xl font-semibold">No Pokémon found. Please try again!</p>
      </div>
    );
  }

  const handleEvolutionClick = (evolutionName: string) => {
    router.push({
      pathname: "/",
      query: { name: evolutionName },
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-700">{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} className="w-48 h-48 mx-auto mt-4 rounded-md shadow-md" />

      <div className="mt-6">
        <h3 className="text-xl font-bold">Types</h3>
        <p className="text-lg">{pokemon.types.join(", ")}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Fast Attacks</h3>
        <ul>
          {pokemon.attacks.fast.length > 0 ? (
            pokemon.attacks.fast.map((attack) => (
              <li key={attack.name} className="text-lg">{attack.name} - {attack.damage} damage</li>
            ))
          ) : (
            <p className="text-lg">No fast attacks available</p>
          )}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Special Attacks</h3>
        <ul>
          {pokemon.attacks.special.length > 0 ? (
            pokemon.attacks.special.map((attack) => (
              <li key={attack.name} className="text-lg">{attack.name} - {attack.damage} damage</li>
            ))
          ) : (
            <p className="text-lg">No special attacks available</p>
          )}
        </ul>
      </div>

      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Evolutions</h3>
          <ul>
            {pokemon.evolutions.map((evo) => (
              <li key={evo.id} className="flex items-center mb-2">
                <img src={evo.image} alt={evo.name} className="w-12 h-12 inline-block mr-2" />
                <button
                  onClick={() => handleEvolutionClick(evo.name)}
                  className="text-blue-500 hover:text-blue-700 transition duration-200"
                >
                  {evo.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
