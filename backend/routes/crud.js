const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  email: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

router.post('/insertar', async (req, res) => {
  try {
    const { id, nombre, email } = req.body;
    const nuevo = new Usuario({ id, nombre, email });
    await nuevo.save();
    res.status(201).json({ mensaje: 'Usuario insertado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al insertar', error });
  }
});

router.get('/buscar/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ id: req.params.id });
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar', error });
  }
});

router.put('/actualizar/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findOneAndUpdate(
      { id: req.params.id },
      { nombre: req.body.nombre, email: req.body.email },
      { new: true }
    );
    if (usuario) {
      res.json({ mensaje: 'Usuario actualizado' });
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar', error });
  }
});

router.delete('/borrar/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findOneAndDelete({ id: req.params.id });
    if (usuario) {
      res.json({ mensaje: 'Usuario eliminado' });
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error });
  }
});

module.exports = router;