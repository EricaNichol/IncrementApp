var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(res, res) {
  res.render('index', {
    title: 'Ride the Handlebars',
    author: {name: 'Lemmy Kilmister', age:67},
    message: 'It seems that our brave new world is becoming less tolerant, spiritual and educated than it ever was when I was young.'
  });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

// Get New User Page //
router.get('/newuser',function(req,res) {
  res.render('newuser', {
    title: 'Add New User'
  });
});

// Post routes
router.post('/adduser', function(req,res) {
  var db          = req.db;
  var userName    = req.body.username;
  var userEmail   = req.body.useremail;

  var collection  = db.get('usercollection');

  collection.insert({
    'username': userName,
    'email': userEmail
  }, function (err, doc) {
    if(err) {
      res.send('There was a problem adding');
    } else {
        res.redirect('userlist');
    }
  });
});

module.exports = router;
