const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const app = express();
app.post('/register', function (req, res) {
  const body = req.body;
  const { nombre, email, password } = body;
  console.log(nombre, email, password)
  const usuario = new User({
    nombre,
    email,
    password: bcrypt.hashSync(password, 10)
  });
usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
         ok: false,
         err,
      });
    }
    res.json({
          ok: true,
          usuario: usuarioDB
       });
    })
});
module.exports = app;