const { Router } = require('express');
const { getRateUsd } = require('../controllers/controllers');

const router = Router();

router.get('/rates', getRateUsd);

module.exports = router;
