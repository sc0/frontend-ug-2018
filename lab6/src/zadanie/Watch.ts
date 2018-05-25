import { Accessory } from './Accessory';

export class Watch extends Accessory implements IWatch  {

    constructor (public brand: string,
                 public forMen: boolean,
                 public price: number,
                 public model: string,
                 public strapType: string,
                 public waterResistance: number,
                 public id: number = -1) {
        super(brand, forMen, price, id);
        this.model = model;
        this.strapType = strapType;
        this.waterResistance = waterResistance;
    }

    public getFullDescription() {
        return `${this.getDescription()}\nThis great watch is called ${this.model}, ` +
        `with premium ${this.strapType} strap, and can handle even ${this.waterResistance}` +
        ` meters below surface of water! Buy it now!`;
    }
}