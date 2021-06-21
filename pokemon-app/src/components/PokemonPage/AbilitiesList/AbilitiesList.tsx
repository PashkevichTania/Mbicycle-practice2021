import React from "react";
import {IAbility} from "../../../interfaces";
import RenderAbility from "./RenderAbility";

const AbilitiesList = (props: { abilities: IAbility[]; }) => {
    const pokemons_list = props.abilities.map((a) => {
        return <RenderAbility ability={a} key={a.ability.name}/>;
    })

    return (
        <div>
            {pokemons_list}
        </div>
    )
}

export default AbilitiesList;