import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      types
      attacks {
        fast {
          name
          damage
        }
        special {
          name
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;
