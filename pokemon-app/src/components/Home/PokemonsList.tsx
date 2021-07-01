import React from "react";
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import {useSelector} from 'react-redux'
import {IPokemonDetails} from "../../interfaces";
import PokemonCard from "./PokemonCard";
import {pokemonDetailsSelector} from "../../redux/selectors";

const PokemonsList = () => {

    let pokemonsDetails: IPokemonDetails[] = useSelector(pokemonDetailsSelector);

    return (
        <div className="cards-container">
            <div style={{width: "100%", height: "90vh"}}>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={310}
                            rowCount={pokemonsDetails.length}
                            rowRenderer={({key, index, style, parent})=>{
                                let pokemon = pokemonsDetails[index]
                                return <div key={key} style={style} className="pokemonContainer">
                                    <PokemonCard pokemonDetails={pokemon} key={pokemon.id}/>
                                </div>
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
        </div>
    )
}

export default PokemonsList
