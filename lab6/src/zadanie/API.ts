import { Watch } from './Watch';

class WatchAPI {
    private static collection: Watch[] = [];

    public static create(obj: Watch) {
        WatchAPI.collection.push(obj);
        return id;
    }

    public static update(obj: Watch) {}
}