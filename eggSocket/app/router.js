'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/chenjian/demo', controller.home.index);
  // socket.io
  // app.io.of('/')
  io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  io.of('/chat22').route('chat', app.io.controller.chat.index);
};
