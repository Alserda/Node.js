var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var util = require('util');

var greetings = require('../models/greetings')
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  // console.log(util.inspect(req.route, false, null));
  var henk = greetings.sayHelloInEnglish('Peter')
  console.log(henk);
  res.render('register', {
    title: 'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login'
  });
});

router.post('/register', upload.single('avatar'), function(req, res, next) {
  // console.log(req.body);
  // console.log(req.file);
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var passwordConfirmation = req.body.password_confirmation;

  // Check for image field
  if (req.file) {
    var uploadedFile = req.file
    console.log(uploadedFile)

    var profileAvatarName = uploadedFile.originalname;
    var profileAvatarMime = uploadedFile.mimetype;
    var profileAvatarPath = uploadedFile.path;
    var profileAvatarSize = uploadedFile.size;
  } else {
    var profileAvatarName = 'noimage.png';
  }

  // Form validation
  req.checkBody('name', 'Name field is required.').notEmpty();
  req.checkBody('email', 'Email field is required.').notEmpty();
  req.checkBody('email', 'Email not valid.').isEmail();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password_confirmation', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors,
      name: name,
      email: email,
      username: username,
      password: password,
      password_confirmation: passwordConfirmation
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
      avatar: profileAvatarName
    });

    // Create user
    User.createUser(newUser, function(err, user) {
      if (err) throw err;
      console.log(user);
    });

    req.flash('success', 'You are now registered and may log in.');

    res.location('/');
    res.redirect('/');
  }

});

module.exports = router;
