const express = require('express');
const router = express.Router()


const charactersController = require('../../controllers/api/charactersController');

router.get('/characters', charactersController.list)

router.get('/characters/:id', charactersController.detail)

module.exports = router;
