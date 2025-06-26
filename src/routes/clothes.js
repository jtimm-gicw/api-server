'use strict';

const express = require('express');
const { Clothes } = require('../models/index.js');


const router = express.Router();

// RESTful Route Declarations
router.get('/clothes', getClothes);
router.get('/clothes/:id', getSomeClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// RESTful Route Handlers
async function getClothes(req, res) {
  let allClothes = await Clothes.findAll();
  res.status(200).json(allClothes);
}

async function getSomeClothes(req, res) {
  const id = parseInt(req.params.id);
  let clothes = await Clothes.findOne({ where: { id: id } });
  res.status(200).json(clothes);
}

async function createClothes(req, res) {
  let obj = req.body;
  let clothes = await Clothes.create(obj);
  res.status(200).json(clothes);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let clothes = await Clothes.findOne({ where: { id: id } });
  let updatedClothes = await clothes.update(obj);
  res.status(200).json(updatedClothes);
}

async function deleteClothes(req, res) {
  let id = parseInt(req.params.id);
  let deletedClothes = await Clothes.destroy({ where: { id } });
  res.status(200).json(deletedClothes);
}

module.exports = router;
