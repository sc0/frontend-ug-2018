export class Accessory implements IAccessory {
    constructor (public brand: string, 
                 public forMen: boolean, 
                 public price: number,
                 public id: number = -1) {
                     this.brand = brand;
                     this.forMen = forMen;
                     this.price = price;
                     this.id = id;

    }
    
    public getDescription() {
        const forWhom = this.forMen? 'for men' : 'for women';
        return `${this.brand} ${forWhom} for just ${this.price} USD!!`;
    }
}