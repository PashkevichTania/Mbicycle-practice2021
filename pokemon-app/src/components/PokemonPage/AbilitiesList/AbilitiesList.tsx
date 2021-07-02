import React from "react";
import {IAbility} from "../../../interfaces";
import RenderAbility from "./RenderAbility";

const AbilitiesList = ({abilities}: { abilities: IAbility[]; }) => {
    const pokemons_list = abilities.map((a) => {
        return <RenderAbility ability={a} key={a.ability.name}/>;
    })

    return (
        <div>
            {pokemons_list}
        </div>
    )
}

export default React.memo(AbilitiesList);