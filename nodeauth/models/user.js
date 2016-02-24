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

module.exports.comparePassword = function(password, hash, callback) {
  bcrypt.compare(password, hash, function(error, isMatch) {
    if (error) return callback(error);
    callback(null, isMatch);
  });
}

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  console.log("user model")
  var query = {username: username};
  User.findOne(query, callback)
}

module.exports.createUser = function(newUser, callback) {
  bcrypt.hash(newUser.password, 10, function(error, hash) {
    if (error) throw error;
    // Set hashed password
    newUser.password = hash;
    newUser.save(callback)
  });
};
