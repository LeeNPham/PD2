import React, { useState, useEffect } from 'react';

const EvolutionChain = ({ pokemanGenus, pokemon }) => {
    const [evolutionList, setEvolutionList] = useState([]);

    useEffect(() => {
        if (pokemanGenus) {
            loadEvolutions();
        }
    }, [pokemanGenus]);

    const loadEvolutions = async () => {
        setEvolutionList([]);
        try {
            const url = pokemanGenus.evolution_chain.url;
            const answer = await fetch(url);
            const res = await answer.json();

            const evolutions = [
                [res.chain.species.name, await findObjectByName(res.chain.species.name)]
            ];

            if (res.chain.evolves_to[0]) {
                evolutions.push([
                    res.chain.evolves_to[0].species.name,
                    await findObjectByName(res.chain.evolves_to[0].species.name),
                    res.chain.evolves_to[0].evolution_details[0].item
                        ? res.chain.evolves_to[0].evolution_details[0].item.name
                        : res.chain.evolves_to[0].evolution_details[0].min_level
                        ? `Lvl ${res.chain.evolves_to[0].evolution_details[0].min_level}`
                        : 'Friendship'
                ]);
            }

            if (res.chain.evolves_to[0] && res.chain.evolves_to[0].evolves_to[0]) {
                evolutions.push([
                    res.chain.evolves_to[0].evolves_to[0].species.name,
                    await findObjectByName(res.chain.evolves_to[0].evolves_to[0].species.name),
                    res.chain.evolves_to[0].evolves_to[0].evolution_details[0].item
                        ? res.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name
                        : res.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level
                        ? `Lvl ${res.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level}`
                        : 'Friendship'
                ]);
            }

            setEvolutionList(evolutions);
        } catch (error) {
            console.log('No evolution chain');
        }
    };

    const findObjectByName = async (pokemanName) => {
        const result = pokemon.find((obj) => obj.name === pokemanName);
        return result.id;
    };

    return (
        <div className="text-center text-sm w-full uppercase font-bold text-gray-800 pt-2">
            Evolution
            {evolutionList.length > 0 ? (
                <div className="flex flex-row justify-between w-full items-center min-h-[70px]">
                    {evolutionList.map((evolution, index) => (
                        <React.Fragment key={index}>
                            {evolution[2] && (
                                <div className="bg-gray-200 px-2 py-1.5 flex items-center rounded-full text-[12px] font-extrabold whitespace-nowrap text-gray-400">
                                    {evolution[2]}
                                </div>
                            )}
                            <div className="flex items-center flex-col justify-center">
                                <img
                                    className="h-14"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution[1]}.png`}
                                    alt={evolution[0]}
                                />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <div className="flex flex-row justify-center text-center font-bold w-full items-center min-h-[70px]">
                    No Evolution Info
                </div>
            )}
        </div>
    );
};

export default EvolutionChain;
