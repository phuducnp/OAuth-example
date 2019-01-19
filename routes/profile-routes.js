const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        // if user is not loggin
        res.redirect('/auth/login');
    } else {
        // if their loggin 
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.user });
});

module.exports = router;