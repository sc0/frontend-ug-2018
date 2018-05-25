import { Accessory } from './Accessory';
export declare class Watch extends Accessory implements IWatch {
    brand: string;
    forMen: boolean;
    price: number;
    model: string;
    strapType: string;
    waterResistance: number;
    id: number;
    constructor(brand: string, forMen: boolean, price: number, model: string, strapType: string, waterResistance: number, id?: number);
    getFullDescription(): string;
}
