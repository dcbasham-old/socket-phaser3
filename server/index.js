const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
const socketio = require('socket.io');
const PORT = process.env.DATABASE_URL || 8080;
const app = express();
module.exports = app;
//socket.io documentation
//const app = express()
// export const httpServer = createServer(app);
// export const io = new Server(httpServer);
//io.on('connection', (socket)=> {})
// export const httpServer= require('http').createServer(app)
//export const io = require('socket.io')(httpServer)
// logging middleware
const createApp = () => {
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // compression middleware
  app.use(compression());
  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));
  // auth and api routes

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });
  // tell our server where our home base is (index.html)
  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};
// start listening and create a server object
// io documentation:
// Using app.listen(3000) will not work here, as it creates a new HTTP server.

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`mixing it up on port ${PORT}`)
  );
  // require socket into our server
  const io = socketio(server);
  // include our secketio variable and require our socket folder
  require('./socket')(io); // no socket has been initialized in our game yet here. This is just plugged in to the right place. initialized in scenes
};
const bootApp = async () => {
  await createApp();
  await startListening();
};

if (require.main === module) {
  // true when run directly from the command line "node server/index" "nodemon... etc"
  bootApp();
} else {
  createApp();
  //  if this module is required by another module like requriing our app in a test spec
}
