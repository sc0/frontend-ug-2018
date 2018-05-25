import { Watch } from './Watch';

export class WatchAPI {
    private static collection: Watch[] = [];
    private static nextId = 0;

    private static getIndexOfItem(id: number) {
        let i = -1;

        WatchAPI.collection.forEach((item, index) => {
            if (item.id === id) {
                i = index;
            }
        });

        return i;
    }

    public static add(obj: Watch) {
        obj.id = WatchAPI.nextId;
        WatchAPI.nextId += 1;
        WatchAPI.collection.push(obj);
        return obj.id;
    }

    public static update(obj: Watch) {
        const index = this.getIndexOfItem(obj.id);

        if (index < 0) return null;

        WatchAPI.collection[index] = obj;
        return obj.id;
    }

    public static remove(obj: Watch) {
        const index = this.getIndexOfItem(obj.id);

        if (index < 0) return null;

        WatchAPI.collection.splice(index, 1);
        return obj;
    }

    public static get(objId: number) {
        const index = this.getIndexOfItem(objId);

        if (index < 0) return null;

        return WatchAPI.collection[index];
    }

    public static getByBrand(brand: string) {
        return WatchAPI.collection.filter(x =>  x.brand === brand);
    }

    public static getByPrice(min: number, max: number) {
        return WatchAPI.collection.filter(x =>  x.price >= min && x.price <= max);
    }
}
