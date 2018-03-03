module.exports = function(app) {
  var cashMachine = require('../controllers/cashMachineController');

  // cashMachine list bills route
  app.route('/withdraw/:amount')
    .get(cashMachine.list_all_bills)
};