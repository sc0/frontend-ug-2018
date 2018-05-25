import { Watch } from './Watch';
export declare class WatchAPI {
    private static collection;
    private static nextId;
    private static getIndexOfItem(id);
    static add(obj: Watch): number;
    static update(obj: Watch): number | null;
    static remove(obj: Watch): Watch | null;
    static get(objId: number): Watch | null;
    static getByBrand(brand: string): Watch[];
    static getByPrice(min: number, max: number): Watch[];
}
