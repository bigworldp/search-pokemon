import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/queries";
import PokemonResult from "../components/PokemonResult";
import SearchInput from "../components/SearchInput";

export default function Home() {
  const router = useRouter();
  const searchName = router.query.name as string;

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name: searchName },
    skip: !searchName, // Skip query if no name is entered
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Pokémon Search</h1>
      <SearchInput />

      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-500">Error fetching Pokémon.</div>}

      <PokemonResult pokemon={data?.pokemon || null} />
    </div>
  );
}
