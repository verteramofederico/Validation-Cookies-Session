const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('age').isInt().withMessage('Tienes que escribir un numero entero'),
	body('color').notEmpty().withMessage('Tienes que elegir un color'),
	
]