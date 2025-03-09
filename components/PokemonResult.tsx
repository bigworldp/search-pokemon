import { Pokemon } from "../types/pokemon";
import { useRouter } from "next/router";

interface PokemonResultProps {
  pokemon: Pokemon | null;
}

export default function PokemonResult({ pokemon }: PokemonResultProps) {
  const router = useRouter();

  if (!pokemon) {
    return <p className="text-center">No Pokémon found. Please try again!</p>;
  }

  const handleEvolutionClick = (evolutionName: string) => {
    router.push({
      pathname: "/",
      query: { name: evolutionName },
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-semibold">{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} className="w-48 h-48 object-cover my-4" />
      <p><strong>Types:</strong> {pokemon.types.join(", ")}</p>

      <div className="my-4">
        <h3 className="font-bold">Fast Attacks:</h3>
        <ul>
          {pokemon.attacks.fast.length > 0 ? (
            pokemon.attacks.fast.map((attack) => (
              <li key={attack.name}>{attack.name} - {attack.damage} damage</li>
            ))
          ) : (
            <p>No fast attacks available</p>
          )}
        </ul>
      </div>

      <div className="my-4">
        <h3 className="font-bold">Special Attacks:</h3>
        <ul>
          {pokemon.attacks.special.length > 0 ? (
            pokemon.attacks.special.map((attack) => (
              <li key={attack.name}>{attack.name} - {attack.damage} damage</li>
            ))
          ) : (
            <p>No special attacks available</p>
          )}
        </ul>
      </div>

      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <div className="my-4">
          <h3 className="font-bold">Evolutions:</h3>
          <ul>
            {pokemon.evolutions.map((evo) => (
              <li key={evo.id}>
                <img src={evo.image} alt={evo.name} className="w-16 h-16 inline-block" />
                <button
                  onClick={() => handleEvolutionClick(evo.name)}
                  className="text-blue-500 ml-2"
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