export type Game = {
    id: string;
    name: string;
    genre: string;
    ageRating: string;
    releaseDate: string;
    publisher: string;
    gameMode: string;
    shortDescription: string;
    fullDescription: string;
    cover: string;
    minimumSystemRequirements: MinimumSystemRequirements;
    recommendedSystemRequirements: RecommendedSystemRequirements;
};

export type MinimumSystemRequirements = {
    processor: string;
    graphics: string;
    memory: string;
    storage: string;
    operatingSystem: string;
}
export type RecommendedSystemRequirements = {
    processor: string;
    graphics: string;
    memory: string;
    storage: string;
    operatingSystem: string;
}