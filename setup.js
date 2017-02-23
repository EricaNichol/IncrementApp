var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema   = mongoose.Schema({
  name: String,
  email: String,
  token: String,
  password: String,
  number: Number
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.increment = function(number) {
  this.number ++;
  return this.number;
};

userSchema.methods.incrementReset = function(number) {
  this.number = number;
  return this.number;
}

mongoose.connect('mongodb://davebear100:asante123@ds157459.mlab.com:57459/davebear100');

module.exports = mongoose.model('User', userSchema);
//export as USER module;
