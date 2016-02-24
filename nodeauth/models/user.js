var mongoose = require('mongoose'),
    db = mongoose.connection,
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/nodeauth');

// User schema
var UserSchema = new Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String,
    required: true,
    bcrypt: true
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
  bcrypt.hash(newUser.password, 10, function(error, hash) {
    if (error) throw error;
    // Set hashed password
    newUser.password = hash;
    newUser.save(callback)
  });
};
