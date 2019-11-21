'use strict';

module.exports = {
  success(data) {
    return {
      data,
      success: true,
    };
  },
  error(message) {
    return {
      message,
      success: false,
    };
  },
};
