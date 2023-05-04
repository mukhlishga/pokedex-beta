import Layout from "../components/Layout";
import { useState } from "react";
import Pokemon from "../components/Pokemon";

export default function Home({initialPokemons}) {
    const [pokemons, setPokemons] = useState(initialPokemons);
    const [offset, setOffset] = useState(0);

    const fetchPokemons = async (url, next) => {
        const response = await fetch(url);
        const nextPokemons = await response.json();
        setOffset(next ? offset + 20 : offset - 20)
        setPokemons(nextPokemons);
    }

    return (
        <Layout title={"PokeDex"}>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {pokemons.results.map((monster, index) => (
                    <Pokemon key={index} pokemon={monster} index={index + offset}/>
                ))}
            </div>

            <div class="mt-5 mb-5 flex justify-center gap-5">
                <button disabled={!pokemons.previous} class="px-4 py-2 rounded-lg bg-slate-300 disabled:bg-gray-200 hover:px-5" onClick={() => fetchPokemons(pokemons.previous, false)}>prev</button>
                <button disabled={!pokemons.next} class="px-4 py-2 rounded-lg bg-slate-300 disabled:bg-gray-200 hover:px-5" onClick={() => fetchPokemons(pokemons.next, true)}>next</button>
            </div>
        </Layout>
    )
}
export async function getStaticProps(context) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const initialPokemons = await response.json();

    return {
        props: {
            initialPokemons
        }
    }
}
