const path = require('path');

module.exports.dashboardGet = (req, res) => {
  res.render('dashboard');
}

module.exports.referenceGet = (req, res) => {
  res.render('reference');
}

