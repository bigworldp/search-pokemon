import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/queries";
import { Pokemon } from "../types/pokemon";

interface PokemonProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonProps) {
  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching Pokémon data.</p>;
  if (!data?.pokemon) return <p>Pokémon not found.</p>;

  return (
    <div>
      <h2>{data.pokemon.name}</h2>
      <img src={data.pokemon.image} alt={data.pokemon.name} />
      <p>Types: {data.pokemon.types.join(", ")}</p>

      <h3>Fast Attacks:</h3>
      <ul>
        {data.pokemon.attacks.fast.map((attack) => (
          <li key={attack.name}>{attack.name} - {attack.damage} damage</li>
        ))}
      </ul>

      <h3>Special Attacks:</h3>
      <ul>
        {data.pokemon.attacks.special.map((attack) => (
          <li key={attack.name}>{attack.name} - {attack.damage} damage</li>
        ))}
      </ul>

      {data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && (
        <>
          <h3>Evolutions:</h3>
          <ul>
            {data.pokemon.evolutions.map((evo) => (
              <li key={evo.id}>
                <img src={evo.image} alt={evo.name} width="50" />
                {evo.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
