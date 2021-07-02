import React from "react";
import {IStat} from "../../../interfaces";
import RenderStat from "./RenderStat";

const StatsList = (props: { stats: IStat[]; }) => {
    const pokemons_list = props.stats.map((s) => {
        return (
            <RenderStat stat={s} key={s.stat.name}/>
        );
    })

    return (
        <div>
            {pokemons_list}
        </div>
    )
}

export default React.memo(StatsList);