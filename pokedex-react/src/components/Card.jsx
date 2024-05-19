import React, { useEffect, useState } from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
    const [pokemonTypes, setPokemonTypes] = useState({});

    useEffect(() => {
        if (!loading) {
        const fetchTypes = async () => {
            const types = {};
            for (const item of pokemon) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.id}`);
            const data = await response.json();
            types[item.id] = data.types;
            }
            setPokemonTypes(types);
        };
        fetchTypes();
        }
    }, [loading, pokemon]);

    return (
    <>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            pokemon.map((item) => (
            <div
                className="relative pt-10 p-6 w-[225px] bg-white text-gray-800 text-center rounded-2xl shadow-md hover:shadow-lg shadow-primary-gray/20 flex flex-col items-center"
                key={item.id}
                value={item.id}
                onClick={() => infoPokemon(item)}
            >
                <img
                className="absolute boop -top-7 h-14 w-auto"
                src={item.sprites.front_default}
                alt={item.name}
                />
                <div className="uppercase text-sm font-bold gap-2 flex flex-col w-full justify-between">
                <div className="text-xs font-extrabold text-gray-500">Nº{item.id}</div>
                <div className="capitalize text-lg">{item.name}</div>
                <div className="flex flex-wrap gap-2 text-[10px] font-extrabold tracking-tight uppercase justify-center items-center">
                    {pokemonTypes[item.id] &&
                    pokemonTypes[item.id].map((typeSet) => (
                        <div
                        key={typeSet.type.name}
                        className={`rounded-lg text-black/60 px-3 py-1 bg-type-${typeSet.type.name}`}
                        >
                        {typeSet.type.name}
                        </div>
                    ))}
                </div>
                </div>
            </div>
            ))
        )}
        </>
    );
};

export default Card;
