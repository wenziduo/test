/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573714749865_7145';

  // add your middleware config here
  config.middleware = [];
  // 设置端口
  config.cluster = {
    listen: {
      path: '',
      port: 8008,
      hostname: '0.0.0.0',
    },
  };
  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };
  // 设置redis
  config.redis = {
    // 单个redis
    client: {
      host: '47.98.50.170', // Redis host
      port: 6379, // Redis port
      password: 'caiwenduo1993',
      db: 0,
    },
  };
  // 设置sessionRedis
  config.sessionRedis = {
    key: 'SESSION_ID',
    maxAge: 5000, // 1 天
    httpOnly: true,
    encrypt: true,
    renew: true, // 延长会话有效期
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
        queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      },
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
