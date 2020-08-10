"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _PlayModel = _interopRequireDefault(require("../models/PlayModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
var PORT = 3001;
app.use(_express["default"].json());
app.use(_express["default"].urlencoded());
app.use((0, _cors["default"])());
app.use(_express["default"]["static"]('public'));
app.use((0, _expressFileupload["default"])());

_mongoose["default"].connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  return console.log('Mongoose is working');
});
app.get('/plays', function (request, response) {
  _PlayModel["default"].find({}, 'gameTitle playDate playRating imageURL').then(function (data) {
    return response.json(data);
  })["catch"](function (error) {
    console.log(error);
    response.send('[]');
  });
});
app.get('/plays/:id', function (request, response) {
  var _id = request.params.id;

  _PlayModel["default"].findById({
    _id: _id
  }).then(function (data) {
    return response.json(data);
  })["catch"](function (error) {
    console.log(error);
    response.status(404);
  });
});
app.post('/upload', function (request, response) {
  if (!request.files || !request.files.image) {
    return response.status(400).send('No image was uploaded.');
  }

  var playImage = request.files.image;
  var uploadName = "/uploads/".concat(Date.now(), "_").concat(playImage.name);
  playImage.mv("".concat(__dirname, "/../public").concat(uploadName), function (error) {
    if (error) {
      return response.status(500).send(error);
    } else {
      response.send(uploadName);
    }
  });
});
app.post('/plays', function (request, response) {
  var newPlay = request.body;

  _PlayModel["default"].create(newPlay).then(function (data) {
    return response.json(data);
  })["catch"](function (error) {
    console.log(error);
    response.status(400);
  });
});
app.put('/plays/:id', function (request, response) {
  var updatePlay = request.body;
  var id = request.params.id;

  _PlayModel["default"].findByIdAndUpdate({
    _id: id
  }, updatePlay, {
    "new": true
  }).then(function (data) {
    return response.json(data);
  })["catch"](function (error) {
    console.log(error);
    response.status(400);
  });
});
app.listen(PORT, '0.0.0.0', function () {
  return console.log("Server is listening on PORT ".concat(PORT));
});
