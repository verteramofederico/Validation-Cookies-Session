const express = require('express');
const router = express.Router();
const main = require('../controllers/main');

const validations = require('../middlewares/validateRegisterMiddleware');

router.get("/",main.home);
router.post("/", validations, main.user);

module.exports = router