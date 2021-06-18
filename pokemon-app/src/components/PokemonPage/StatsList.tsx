import React from "react";
import {IStat} from "../../interfaces";

const StatsList = (props: { stats: IStat[]; }) => {
    const pokemons_list = props.stats.map((s) => {
        const { name } = s.stat
        const value  = s.base_stat
        return (
            <div key={name}>
                <span className="stat-name">{name}:</span>
                <span className="stat-value">{value}</span>
            </div>
        );
    })

    return (
        <div>
            {pokemons_list}
        </div>
    )
}

export default StatsList;