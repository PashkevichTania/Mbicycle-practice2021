import React from "react";
import  {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import {Masonry} from 'masonic'
import {useSelector} from 'react-redux'
import {IPokemonDetails} from "../../interfaces";
import PokemonCard from "./PokemonCard";
import {pokemonDetailsSelector} from "../../redux/selectors";

const PokemonsList = () => {

    let pokemonsDetails: IPokemonDetails[] = useSelector(pokemonDetailsSelector);

    return (
        <div className="cards-container">
            <div style={{width: "100%", height: "90vh"}}>
                <Masonry
                    // Provides the data for our grid items
                    items={pokemonsDetails}
                    // Adds 8px of space between the grid cells
                    columnGutter={8}
                    // Sets the minimum column width to 172px
                    columnWidth={310}
                    // Pre-renders x windows worth of content
                    overscanBy={2}
                    // This is the grid item component
                    render={PokemonCard}
                />

            </div>
        </div>
    )
}


export default PokemonsList
