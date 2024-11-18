export interface Drink {
    id: string;
    name: string;
    isAlcoholic: boolean;
    imageUrl: string;
    ingredients: string[];
    instructions: string;
}

export type DrinkId = Drink["id"];

export type DrinkIds = Array<Drink["id"]>;