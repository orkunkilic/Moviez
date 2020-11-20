(function () {
  'use strict';
  const express = require('express')
  const bodyParser = require('body-parser')
  const low = require('lowdb')
  const FileAsync = require('lowdb/adapters/FileAsync')
  const cors = require('cors');

  // Create server
  const app = express()
  app.use(bodyParser.json())
  app.use(cors());
  app.options('*', cors());

  // Create database instance and start server
  const adapter = new FileAsync('db.json')
  low(adapter)
    .then(db => {

      app.get('/', (req, res) => {
        const movies =
          db.get('movies')
            .value()


        res.send(movies)
      })

      app.post('/', (req, res) => {
        db.get('movies')
          .push(req.body)
          .last()
          .assign({ id: Date.now().toString() })
          .assign({ date: Date.now() })
          .write()
          .then(movie => res.send(movie))
      })

      // Set db default values
      return db.defaults({ movies: [] }).write()
    })
    .then(() => {
      app.listen(5000, () => console.log('listening on port 5000'))
    })
  module.exports = app;
})();
