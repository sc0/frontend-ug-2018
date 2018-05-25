export declare class Accessory implements IAccessory {
    brand: string;
    forMen: boolean;
    price: number;
    id: number;
    constructor(brand: string, forMen: boolean, price: number, id?: number);
    getDescription(): string;
}
