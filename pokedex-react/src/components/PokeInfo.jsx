// import React from "react";

// const PokeInfo = ({ data }) => {

//     return (
//         <>
//         {
//             (!data) ? "" : (
//                     <>
//                         <di className='flex flex-col items-center justify-center'>
//                     <h1>{data.name}</h1>
//                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
//                     <div className="abilities">
//                         {
//                             data.abilities.map(poke=>{
//                                 return(
//                                     <>
//                                         <div className="group">
//                                             <h2>{poke.ability.name}</h2>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                     <div className="base-stat">
//                         {
//                             data.stats.map(poke=>{
//                                 return(
//                                     <>
//                                         <h3>{poke.stat.name}:{poke.base_stat}</h3>
//                                     </>
//                                 )
//                             })
//                         }
//                             </div>
//                             </di>
//                 </>
//             )
//         }

//         </>
//     )
// }
// export default PokeInfo
import React, { useState } from 'react';
import EvolutionChain from './EvolutionChain';
import Bug from './icons/types/Bug';
import Dark from './icons/types/Dark';
import Dragon from './icons/types/Dragon';
import Electric from './icons/types/Electric';
import Fairy from './icons/types/Fairy';
import Fighting from './icons/types/Fighting';
import Fire from './icons/types/Fire';
import Flying from './icons/types/Flying';
import Ghost from './icons/types/Ghost';
import Grass from './icons/types/Grass';
import Ground from './icons/types/Ground';
import Ice from './icons/types/Ice';
import Normal from './icons/types/Normal';
import Poison from './icons/types/Poison';
import Psychic from './icons/types/Psychic';
import Rock from './icons/types/Rock';
import Steel from './icons/types/Steel';
import Water from './icons/types/Water';
import Shiny from './icons/Shiny';
import EyeIcon from './icons/EyeIcon';
import EyeCloseIcon from './icons/EyeCloseIcon';
import Male from './icons/Male';
import Female from './icons/Female';

const iconDict = {
    bug: Bug,
    dark: Dark,
    dragon: Dragon,
    electric: Electric,
    fairy: Fairy,
    fighting: Fighting,
    fire: Fire,
    flying: Flying,
    ghost: Ghost,
    grass: Grass,
    ground: Ground,
    ice: Ice,
    normal: Normal,
    poison: Poison,
    psychic: Psychic,
    rock: Rock,
    steel: Steel,
    water: Water,
};

const weaknessesMap = {
    normal: ['fighting'],
    fire: ['water', 'ground', 'rock'],
    water: ['grass', 'electric'],
    grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
    electric: ['ground'],
    ice: ['fire', 'fighting', 'rock', 'steel'],
    fighting: ['flying', 'psychic', 'fairy'],
    poison: ['ground', 'psychic'],
    ground: ['water', 'grass', 'ice'],
    flying: ['electric', 'ice', 'rock'],
    psychic: ['bug', 'ghost', 'dark'],
    bug: ['fire', 'flying', 'rock'],
    rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
    ghost: ['ghost', 'dark'],
    dragon: ['ice', 'dragon', 'fairy'],
    dark: ['fighting', 'bug', 'fairy'],
    steel: ['fire', 'fighting', 'ground'],
    fairy: ['poison', 'dragon'],
};

const statMap = {
    hp: ['HP', 'bg-red-700'],
    attack: ['ATK', 'bg-orange-400'],
    defense: ['DEF', 'bg-yellow-300'],
    'special-attack': ['SpA', 'bg-cyan-400'],
    'special-defense': ['SpD', 'bg-green-300'],
    speed: ['SPD', 'bg-pink-400'],
};

const PokeInfo = ({ data, pokeId, setPokeId }) => {
    const [showHidden, setShowHidden] = useState(false);
    const [sexImg, setSexImg] = useState(true);

    if (!data) return null;

    const renderWeaknesses = () => {
        return data.types.map(type =>
            weaknessesMap[type.type.name].map(weakness => {
                const Icon = iconDict[weakness];
                return <Icon key={weakness} />;
            })
        );
    };

    return (
        <div className="relative scale-[85%]">
            <div className="absolute h-[250px] w-full flex items-center justify-center">
                <img
                    className="h-full w-auto object-cover"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sexImg ? '' : 'shiny/'}${data.id}.png`}
                    alt={data.name}
                />
                <div className="absolute flex flex-col gap-2 top-[135px] right-4">
                    <button
                        type="button"
                        onClick={() => setSexImg(!sexImg)}
                        className="rounded-lg hover:bg-yellow-600 bg-yellow-400 p-1"
                    >
                        <Shiny className="w-6 h-6 fill-yellow-300" />
                    </button>
                </div>
            </div>
            <div id="placeholderSpace" className="h-[115px]" />
            <div className="pt-[125px] p-8 w-full h-[875px] rounded-xl bg-white flex flex-col items-start gap-1">
                <div className="text-md w-full text-center font-extrabold text-gray-500">#{data.id}</div>
                <div className="text-3xl w-full text-center font-bold text-gray-900 capitalize">{data.name}</div>
                <div className="text-primary-gray text-center w-full text-md">
                    {data.genera && data.genera.length > 0 ? data.genera[0].genus : 'Unknown genus'}
                </div>
                <div className="flex w-full justify-center gap-2">
                    {data.types.map(type => (
                        <div key={type.type.name} className={`font-bold rounded-md text-black/70 px-3 py-1 bg-type-${type.type.name}`}>
                            {type.type.name}
                        </div>
                    ))}
                </div>
                <div className="text-center text-sm py-2 w-full uppercase font-bold text-gray-800">pokédex entry</div>
                <div className="w-full min-h-[55px] text-sm text-black font-medium">
                    {data.flavor_text_entries && data.flavor_text_entries.length > 0 ? data.flavor_text_entries[0].flavor_text : 'No flavor text available'}
                </div>
                <div className="text-center py-2 text-sm w-full uppercase font-bold text-gray-800">abilities</div>
                <div className="flex w-full justify-evenly gap-3">
                    {data.abilities.map(ability => (
                        <div
                            key={ability.ability.name}
                            className={`relative p-1 px-4 text-left w-full whitespace-nowrap border rounded-full font-bold capitalize ${ability.is_hidden ? `border-red-800 text-gray-800 ${showHidden ? 'text-gray-800' : 'text-white'}` : 'border-primary-gray text-gray-800'}`}
                        >
                            {ability.ability.name}
                            {ability.is_hidden && (
                                <button
                                    onClick={() => setShowHidden(!showHidden)}
                                    className="absolute right-3 top-[6px]"
                                >
                                    {showHidden ? <EyeIcon className="h-5 w-5 stroke-red-800 hover:stroke-black" /> : <EyeCloseIcon className="h-5 w-5 stroke-primary-gray hover:stroke-black" />}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-3 w-full justify-between">
                    <div className="flex flex-col w-1/2 items-center justify-center">
                        <div className="text-center text-sm w-full uppercase font-bold text-gray-800">height</div>
                        <div className="w-full h-auto my-2 py-1 bg-primary-background rounded-full text-center font-bold text-sm">{(data.height / 10).toFixed(1)}m</div>
                        <div className="text-center text-sm w-full uppercase font-bold text-gray-800">weaknesses</div>
                        <div className="w-full h-auto my-2 py-1 bg-primary-background rounded-full text-center font-bold text-sm flex flex-row justify-evenly">
                            {renderWeaknesses()}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-center justify-center">
                        <div className="text-center text-sm w-full uppercase font-bold text-gray-800">weight</div>
                        <div className="w-full h-auto my-2 py-1 bg-primary-background rounded-full text-center font-bold text-sm">{(data.weight / 10).toFixed(1)}Kg</div>
                        <div className="text-center text-sm w-full uppercase font-bold text-gray-800">base exp</div>
                        <div className="w-full h-auto my-2 py-1 bg-primary-background rounded-full text-center font-bold text-sm">{data.base_experience}</div>
                    </div>
                </div>
                <div className="text-center text-sm w-full uppercase font-bold text-gray-800">stats</div>
                <div className="flex w-full justify-between">
                    {data.stats.map(stat => {
                        const statName = statMap[stat.stat.name];
                        return (
                            <div key={stat.stat.name} className="relative h-16 rounded-full bg-gray-200 flex justify-center w-8">
                                <div className={`absolute top-1 rounded-full w-7 h-7 overflow-visible items-center justify-center text-white font-semibold text-[10px] flex ${statName[1]}`}>
                                    {statName[0]}
                                </div>
                                <div className="absolute bottom-1 rounded-full w-7 h-7 overflow-visible items-center justify-center text-gray-900 font-extrabold text-[12px] flex">
                                    {stat.base_stat}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <EvolutionChain pokemanGenus={data.genus} pokemon={data} />
                <div className="flex flex-row w-full justify-between bg-gray-200 rounded-2xl py-5">
                    <button
                        onClick={() => setPokeId(data.id - 1)}
                        className={`${data.id - 1 === 0 ? 'hidden' : ''} w-full h-full text-white text-center flex items-center border-r px-4 justify-start gap-4 border-gray-500`}
                    >
                        <div className="text-gray-500 font-extrabold">{'<<'}</div>
                        <img
                            className="h-8 w-auto object-cover"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id - 1}.gif`}
                            alt=""
                        />
                        <div className="text-gray-500">#{data.id - 1}</div>
                    </button>
                    <button
                        onClick={() => setPokeId(data.id + 1)}
                        className={`w-full h-full text-white text-center flex items-center border-l px-4 justify-end gap-4 ${data.id + 1 === 1009 ? 'hidden' : ''}`}
                    >
                        <div className="text-gray-500">#{data.id + 1}</div>
                        <img
                            className="h-8 w-auto object-cover"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id + 1}.gif`}
                            alt=""
                        />
                        <div className="text-gray-500 font-extrabold">{'>>'}</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeInfo;
