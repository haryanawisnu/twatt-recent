var timeline = require('../models/twatt');
module.exports = {
  getJson: (req, res) => {
    timeline(function(data) {
      res.send(data);
    })
  }
};
