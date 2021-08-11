import React from "react";
import {IStat} from "../../../interfaces";

const RenderStat = ({stat}: {stat: IStat;}) => {
        const { name } = stat.stat
        const value  = stat.base_stat
        return (
            <div>
                <span className="stat-name">{name}:</span>
                <span className="stat-value">{value}</span>
            </div>
        );

}

export default React.memo(RenderStat);