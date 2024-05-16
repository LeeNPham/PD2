import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map((p, index) => (
                <div key={p} className={index +1}>{p}</div>
            ))}
        </div>
    )
}
