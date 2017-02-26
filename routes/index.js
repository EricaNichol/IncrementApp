var express = require('express');
var User    = require('../setup');

var router = express.Router();

var isLoggedIn = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.json({status:"sorry not logged in"});
}

module.exports = function(passport){

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { message : req.flash('message') });
    });
    /* GET home page. */
    router.get('/profile', isLoggedIn, function(req,res) {
      res.render('profile', { 'user' : req.user });
    });

    router.post('/signup', function(req,res,next) {

      if (req.body.password === "" || req.body.name === "" || req.body.email === '' ) {
            res.render('index', { message : 'All fields are required'})
          } else {
            next();
					}
      }, passport.authenticate('signup', {
  		successRedirect: '/profile',
  		failureRedirect: '/',
  		failureFlash : true
    }));

    // Authenticate User
    router.post('/authenticate',  function( req, res, next) {

      if (req.body.password === "" || req.body.name === "" ) {
        res.render('index', { message : 'All fields are required'})
      } else {
        next();
      }

    }, passport.authenticate('login', {
      successRedirect: '/profile',
      failureRedirect: '/',
      failureFlash : true
    }));

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


      User.findOne({ _id: req.params.user_id }, function(err, user) {

        if (req.body.newNumber < 0) {
          res.render('profile', { 'user': user, message: 'Must be positive integer' });
        } else {
          var newNumber = req.body.newNumber;

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

        }

      });
    });

    // Get New User Page //
    router.get('/logout', function(req,res) {
      req.logout();
      res.redirect('/');
    });

  return router;
}
