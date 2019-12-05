var express = require('express');
var router = express.Router();
var topics = []

var service = require("./topicscontroller");
//muokata polut?
router.route('/')
// router.route('/api/topics')
  .get((req, res, next) => {
    service.getAllTopics(function (results) {
      res.json(results);
    });
  });

router.get('/:id', function (req, res) {
// router.get('/api/topics:id', function (req, res) {
  service.getSingleTopic(req, function (results) {
    res.json(results)
  });
});

router.post('/', function (req, res) {
// router.post('/api/topics', function (req, res) {
  service.createTopic(req, function () {
    res.status(201)
      .end();
  });
});

router.put('/:id', function (req, res) {
//router.put('/api/topics:id', function (req, res) {
  service.updateTopic(req, function () {
    res.status(200)
      .end();
  });
});

router.delete('/:id', function (req, res) {
// router.delete('/api/topics:id', function (req, res) {
  service.deleteSingleTopic(req, res, function () {
  });
});

module.exports = router;
