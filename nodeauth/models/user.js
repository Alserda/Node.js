var mongoose = require('mongoose'),
    db = mongoose.connection,
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/nodeauth');

// User schema
var UserSchema = new Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
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
  newUser.save(callback);
};
