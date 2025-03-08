import React from "react";
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
