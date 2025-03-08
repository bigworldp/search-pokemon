import React from "react";

const PokemonEvolutionList = React.memo(({ evolutions }: { evolutions: { name: string; id: string; image: string }[] }) => {
  return (
    <ul>
      {evolutions.map((evo) => (
        <li key={evo.id} className="flex items-center mb-2">
          <img src={evo.image} alt={evo.name} className="w-12 h-12 inline-block mr-2" />
          <button className="text-blue-500 hover:text-blue-700 transition duration-200">{evo.name}</button>
        </li>
      ))}
    </ul>
  );
});

export default PokemonEvolutionList;
