export type Info = {
    levels: Level[]
    skins: Skin[]
    backgrounds: Background[]
    effects: Effect[]
    particles: Particle[]
    engines: Engine[]
}

export type Level = {
    name: string
    version: number
    rating: number
    engine: Engine
    useSkin: Use<Skin>
    useBackground: Use<Background>
    useEffect: Use<Effect>
    useParticle: Use<Particle>
    title: string
    artists: string
    author: string
    cover: SRL
    bgm: SRL
    data: SRL
}

export type Skin = {
    name: string
    version: number
    title: string
    subtitle: string
    author: string
    thumbnail: SRL
    data: SRL
    texture: SRL
}

export type Background = {
    name: string
    version: number
    title: string
    subtitle: string
    author: string
    thumbnail: SRL
    data: SRL
    image: SRL
}

export type Effect = {
    name: string
    version: number
    title: string
    subtitle: string
    author: string
    thumbnail: SRL
    data: SRL
}

export type Particle = {
    name: string
    version: number
    title: string
    subtitle: string
    author: string
    thumbnail: SRL
    data: SRL
    texture: SRL
}

export type Engine = {
    name: string
    version: number
    title: string
    subtitle: string
    author: string
    thumbnail: SRL
    data: SRL
    configuration: SRL
    skin: Skin
    background: Background
    effect: Effect
    particle: Particle
}

export type Use<T> = {
    useDefault: boolean
    item?: T
}

export type SRL = {
    type: string
    hash: string
    url: string
}
