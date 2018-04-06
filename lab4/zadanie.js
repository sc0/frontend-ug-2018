class Accessory {
    constructor(brand, forMen, price) {
        this.brand = brand;
        this.forMen = forMen;
        this.price = price;
    }

    getDescription() {
        const forWhom = this.forMen? 'for men' : 'for women';
        return `${this.brand} ${forWhom} for just ${this.price} USD!!`;
    }
}

class Watch extends Accessory {
    constructor(brand, forMen, price, model, strapType, waterResistance = 0) {
        super(brand, forMen, price);
        this.model = model;
        this.strapType = strapType;
        this.waterResistance = waterResistance;
    }

    getFullDescription() {
        return `${this.getDescription()}\nThis great watch is called ${this.model}, ` +
        `with premium ${this.strapType} strap, and can handle even ${this.waterResistance}` +
        ` meters below surface of water! Buy it now!`;
    }
}

class WatchCollection {
    constructor() {
        this.watches = [];
    }

    add(...watches) {
        for (let watch of watches) {
            this.watches.push(watch);
        }
    }

    findByBrand(brand) {
        return this.watches.filter((w) => {
            return w.brand.toLowerCase() === brand.toLowerCase();
        });
    }

    findByPrice() {
        return this.watches.filter((w) => {
            return w.price >= minPrice && w.price <= maxPrice;
        })
    }

    getForMen() {
        return this.watches.filter((w) => { return w.forMen; });
    }

    getForWomen() {
        return this.watches.filter((w) => { return !w.forMen; });
    }
}

const watches = new WatchCollection();

const watchesDataArray = [["Fossil", false, 68, "ES4382P", "leather", 5],
                      ["Fossil", true, 89, "JR1401P", "bracelet", 10],
                      ["Diesel", true, 189, "DZ7314", "leather", 30]];

for (let watchData of watchesDataArray) {
    let watch = new Watch(...watchData);
    watches.add(watch);
}

const found = watches.findByBrand('fossil');

for (let w of found) {
    console.log(w.getFullDescription());
}
