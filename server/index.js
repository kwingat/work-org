const server = require('./server');

const port = process.env.PORT || 15000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

startServer();
