import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({pokemon, index}) => {
  const pokeIndex = ('000' + (index+1)).slice(-3);
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  return (
    <Link href={`pokemon/${pokemon.name}`}>
      <div key={index} style={{"box-shadow": "0 3px 15px rgba(100, 100, 100, 0.5)"}}
        class="rounded-3xl p-5 m-2 flex flex-col justify-center items-center relative bg-slate-200
        hover:m-1">
        <div class="rounded-full bg-slate-100 mb-5">
          <Image 
            alt={pokeName}
            width={200}
            height={200}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
            placeholder="blur"
            blurDataURL="/spinner.gif"
          />
        </div>
        <span>#{pokeIndex}</span>
        {pokeName}
      </div>
    </Link>
  );
};

export default Pokemon;