import React from "react";
import {IAbility} from "../../../interfaces";

const RenderAbility = ({ability}: { ability: IAbility; }) => {
        const { name } = ability.ability;
        return (
            <div>
                Ability: {name};
            </div>
        );
}

export default RenderAbility;