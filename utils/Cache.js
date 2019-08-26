const NodeCache = require('node-cache');

class Cache {
    constructor(expireSeconds) {
        this.cache = new NodeCache({ stdTTL: expireSeconds, checkperiod: expireSeconds * 0.2, useClones: false });
    }

    get(key) {
        return this.cache.get(key);
    }

    set(key, data) {
        return this.cache.set(key, data);
    }

    async getOrSet(key, evaluateFunction) {
        let value = this.get(key);
        if (value)
            return value;

        value = await evaluateFunction();
        this.set(key, value);

        return value;
    }

    delete(key) {
        return this.cache.del(key);
    }

    reset() {
        this.cache.flushAll();
    }

}

module.exports = Cache;