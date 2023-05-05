import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

const colors = {
	bug: '#A6B91A',
  dark: '#705746',
	dragon: '#6F35FC',
	electric: '#F7D02C',
	fairy: '#D685AD',
	fighting: '#C22E28',
	fire: '#EE8130',
	flying: '#A98FF3',
  ghost: '#735797',
	grass: '#7AC74C',
	ground: '#E2BF65',
  ice: '#96D9D6',
	normal: '#A8A77A',
	poison: '#A33EA1',
	psychic: '#F95587',
	rock: '#B6A136',
  steel: '#B7B7CE',
	water: '#6390F0',
};

const Pokemon = ({ pokemon }) => {
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <li key={type.slot} class="px-2 py-1 rounded-lg" style={{"background": colors[type.type.name]}}>
        {type.type.name}
      </li>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <div key={index} class="bg-slate-200 rounded-xl mx-40">
        <div
          class="bg-slate-300 rounded-xl px-2 m-1"
          style={{ width: `${(stat.base_stat * 100) / 160}%` }}
        >
          {stat.stat.name}: {stat.base_stat}
        </div>
      </div>
    ));

  return (
    <Layout title={pokeName}>
      <div class="flex flex-col justify-center items-center">
        <div class="rounded-full bg-neutral-100 mb-5">
          <Image
            alt={pokeName}
            width={320}
            height={320}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            placeholder="blur"
            blurDataURL="/pokeball.png"
            unoptimized={true}
          />
        </div>
      </div>

      <div>
        <ul class="flex justify-center mb-5 gap-2">{renderTypes()}</ul>
        <div>{renderStats()}</div>
      </div>

      <div class="mt-5 mb-5 flex justify-end mx-40">
        <Link href="/">
          <button class="px-5 py-2 bg-slate-300 rounded-lg hover:px-6">
            back
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Pokemon;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}
