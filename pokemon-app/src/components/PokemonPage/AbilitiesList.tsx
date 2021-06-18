import React from "react";
import {IAbility} from "../../interfaces";

const AbilitiesList = (props: { abilities: IAbility[]; }) => {
    const pokemons_list = props.abilities.map((a) => {
        const { name } = a.ability;
        return (
            <div key={name}>
                Ability: {name};
            </div>
        );
    })

    return (
        <div>
            {pokemons_list}
        </div>
    )
}

export default AbilitiesList;