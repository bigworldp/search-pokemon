import React from "react";

// Wrap the list component with React.memo to optimize re-renders
const PokemonAttackList = React.memo(({ attacks }: { attacks: { name: string; damage: number }[] }) => {
  return (
    <ul>
      {attacks.map((attack) => (
        <li key={attack.name}>{attack.name} - {attack.damage} damage</li>
      ))}
    </ul>
  );
});

export default PokemonAttackList;
