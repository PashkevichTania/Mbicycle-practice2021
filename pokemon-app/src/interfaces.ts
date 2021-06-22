export interface IPokemon {
    name: string;
    url: string;
}

export interface IAbility {
    ability: {
        name: string,
    }
}

export interface IStat {
    base_stat: number,
    stat: {
        name: string,
    }
}

export interface IPokemonDetails {
    abilities: IAbility[],
    base_experience?: number,
    height: number,
    id: number,
    is_default?: boolean,
    name: string,
    order?: number,
    species?: {
        name: string,
        url: string,
    }
    stats: IStat[],
    weight: number,
}