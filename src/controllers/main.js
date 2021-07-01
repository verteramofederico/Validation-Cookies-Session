const {validationResult} = require('express-validator');

module.exports = {
    home: (req,res) => res.render("home", {user: null, color: req.cookies.recordar}),
    user: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			res.render('home', {
				errors: resultValidation.mapped(),
				oldData: req.body,
                user: null,
                color: null
			})
		} else {
        if(req.body.recordar && req.cookies.recordar == null) {
            res.cookie('recordar', req.body.color , { maxAge: (1000 * 60) * 60  });             
        };
        if(req.body.olvidar) {
            res.cookie('recordar', req.body.color , { maxAge: -1  });             
        };
        res.render("home", {user: req.body, color: req.cookies.recordar})
    }
    
        }
}