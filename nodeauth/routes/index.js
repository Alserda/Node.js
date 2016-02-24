var express = require('express');
var router = express.Router();

/* GET members page. */
router.get('/', ensureAuthentication, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function ensureAuthentication(req, res, next) {
  if (req.user) {
    console.log('Logged in with ' + req.user.username);
    return next();

  } else {
    console.log('Not logged in');
    res.redirect('/users/login')
  }
}

module.exports = router;
