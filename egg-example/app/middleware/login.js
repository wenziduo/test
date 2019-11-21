'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { redisKey } = ctx.app.sessionStore;
    console.log(await ctx.app.sessionStore.get(redisKey));
    await next();
  };
};
