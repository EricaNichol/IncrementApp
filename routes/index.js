var express           = require('express');
var bcrypt            = require('bcrypt-nodejs');
var mongoose          = require('mongoose');
var morgan            = require('morgan');

var mongoose          = require('mongoose');
var jwt               = require('jsonwebtoken'); // used to create, sign, and verify tokens
var User              = require('../setup'); // set up mongoose
var config            = require('../config'); // get our config file


var router            = express.Router();


/***************** Get Routes ****************/

/* GET home sign in page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Welcome Thinkific'
  });
  // res.json('Welcome Thinkific !!');
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs){
        res.render('users', {
            "users" : docs
        });
    });
});

// Get New User Page //
router.get('/profile', isLoggedIn, function(req,res) {
  res.render('profile');
});

// Get New User Page //
router.get('/logout', function(req,res) {
  req.logout();
  res.redirect('/');
});


/***************** Post Routes ****************/

router.post('/signup', function(req,res) {
  var db          = req.db;

  if (req.body.password == '') {
    res.render('index', {
      message: 'Please enter a password'
    });
  }

  User.findOne({ email: req.body.email }, function(err, user) {

    if(user) {
      res.render('index', {
        message: 'Sorry the email has been taken'
      });
    } else {
          // create the user
          var newUser            = new User({
            name:       req.body.name,
            email:      req.body.email,
            number:     0
          });

          newUser.password = newUser.generateHash(req.body.password);

          // database
          // var collection  = db.get('users');
          // save the sample user
          newUser.save(function(err, doc) {

              if (err) {
                res.send('There was a problem adding');
              }

              res.render('profile', { 'user': newUser,
                                  'message': 'User Saved Successfully'});
        });
      }
  });
});

// Authenticate User
router.post('/authenticate', function(req, res) {

  User.findOne({ email:req.body.email }, function(err, user) {

    if (err) throw err;

    if (!user) {

      res.render('index', {
        message: 'Sorry wrong password'
      });

    } else if (user) {

      if( !user.validPassword(req.body.password)) {

          res.render('index', {
            message: 'Sorry wrong password'
          });

        } else {

          // increment
          user.increment();

          user.save();

      }
      res.render('profile', { 'user': user });
    }
  });
});

router.post('/next/:user_id/', function(req, res) {

  User.findOne({ _id: req.params.user_id }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.send({ success: false,
                 message: 'Sorry, User not found'
              });

    } else if (user) {
      // increment
      user.increment();

      user.save();

    }
    res.render('profile', {
      'user': user
    });
  });

});


router.post('/update/:user_id/edit/', function(req, res) {
  // res.json({ status: 'hi'})
  var newNumber = req.body.newNumber;
  
  User.findOne({ _id: req.params.user_id }, function(err, user) {

    if (req.body.newNumber < 0) {
      res.render('profile', { message: 'Must be positive',
                              'user': user
                            });
    }

  // res.json({ number: req.params.user_id });

    if (err) throw err;

    if (!user) {
      res.send({ success: false,
                 message: 'Sorry, User not found'
              });

    } else if (user) {
      // increment
      user.number = newNumber;

      user.save();

    }

    res.render('profile', {
      'user': user,
    });


  });
});


function isLoggedIn(req, res, next) {

  if(req.isAuthenticated())
    return next();

  res.redirect('/');
}


module.exports = router;
