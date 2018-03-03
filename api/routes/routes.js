module.exports = function(app) {
  var cashMachine = require('../controllers/cashMachineController');

  // cashMachine list notes route
  app.route('/withdraw/:amount')
    .get(cashMachine.list_all_notes)
};