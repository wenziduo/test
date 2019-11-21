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
      db: 1,
    },
  };
  // 设置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 60000, // 1 天
    httpOnly: true, // 设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问。
    encrypt: true, // 加密传输
    renew: true, // 延长会话有效期
  };
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'login' ];
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
