var express = require('express');
var nodeMailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'peteralserda@gmail.com',
      pass: 'moi'
    }
  });

  var mailOptions = {
    from: 'John Doe <johndoe@outlook.com>',
    to: 'peteralserda@hotmail.com',
    subject: 'Website submission',
    text: 'Moi: '+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
    html: '<p>Moi</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message sent' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
