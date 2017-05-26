var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var Bear = require('./models/bear');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port= process.env.PORT || 8080;
var router = express.Router();

mongoose.connect('mongodb://localhost/bears');

router.use(function(res, req, next) {
  console.log("Something is happening");
  next();
});


//where the bears!

router.route('/bears')

  .post(function(req, res) {
    var bear = new Bear();
    bear.name = req.body.name;
    bear.color = req.body.color;
    bear.age = req.body.age;

    bear.save(function (err) {
      if(err)
        res.send(err);
      res.json({ message: 'Bear created! '});
    });
  })

  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if(err)
        res.send(err);
      res.json(bears)
    });
  })

  router.route('/bears/:bear_id')

    .get(function(req, res) {
      Bear.findById(req.params.bear_id, function(err, bear){
        if(err)
          res.send(err);
        res.json(bear)
      });
    })

  .put(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if(err)
        res.send(err);
      bear.name = req.body.name;
      bear.color = req.body.color;
      bear.age = req.body.age;
      bear.save(function(err) {
        if(err)
          res.send(err);
        res.json({ message: "Bear updated!"})
      });
    })
  })

  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if(err)
        res.send(err);
      res.json({ message: "Bear successfully deleted!"})
      });
    });

app.use('/api', router);

app.listen(port);
console.log("magic happens on port" + port);
