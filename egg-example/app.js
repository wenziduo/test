'use strict';
const ONE_DAY = 1000 * 60 * 60 * 24;
// app.js
module.exports = app => {
  const { redis } = app;
  app.sessionStore = {
    async get(key) {
      const res = await redis.get(key);
      if (!res) return null;
      return JSON.parse(res);
    },

    async set(key, value, maxAge) {
      maxAge = typeof maxAge === 'number' ? maxAge : ONE_DAY;
      value = JSON.stringify(value);
      await redis.set(key, value, 'PX', maxAge);
    },

    async destroy(key) {
      await redis.del(key);
    },
  };
};
