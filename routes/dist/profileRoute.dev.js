"use strict";

var express = require("express");

var router = express.Router();

var path = require('path');

var multer = require('multer');

var _require = require("http"),
    request = _require.request;

var storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function filename(req, file, cb) {
    var ext = path.extname(file.originalname);
    cb(null, "".concat(Date.now()).concat(ext));
  }
});
router.post('/edit', multer({
  storage: storage
}).single('file'), function (request, response) {
  console.log(request.body);
  var data = {
    username: request.session.username,
    name: request.body.name,
    about: request.body.bio,
    profilePicture: request.file.filename,
    genres: request.body.genres.split(','),
    artists: request.body.artists.split(',')
  };
  console.log('data', data);
  request.app.locals.user.updateProfile(data, response);
});
router.post('/remove-genre', function (request, response) {
  removeGenre();
});

function removeGenre() {
  var data;
  return regeneratorRuntime.async(function removeGenre$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(request.app.locals.user.findOne({
            usename: request.session.username
          }));

        case 2:
          data = _context.sent;
          console.log(data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} // Start the server.
//route for getting current users profile data 


router.get('/get-profile', function (request, response) {
  if (request.query.username) {
    request.app.locals.user.getProfileData(request.query.username, response);
  } else {
    request.app.locals.user.getProfileData(request.session.username, response);
  }
});
router.post('/update-password', function (request, response) {
  console.log(request.body.password);
  request.app.locals.user.updatePassword(request.session.username, request.body.password);
}); //route for getting a users profile picture (contains url param for name)

router.get('/profile-pic', function (request, response) {
  console.log(request.query.username);
  var profilePicture;

  if (request.query.username) {
    profilePicture = request.app.locals.user.getProfilePicture(request.query.username, response);
  } else {
    profilePicture = request.app.locals.user.getProfilePicture(request.session.username, response);
  }
}), module.exports = router;