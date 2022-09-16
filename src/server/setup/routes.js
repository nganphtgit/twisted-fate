const router = require('../routes/');
const path = require('path');
// const statusHandler = require(path.join(process.env.mongoUtils, 'status'));
// const errorHandler = require(path.join(process.env.mongoUtils, 'errorHandler'));

module.exports = function(app) {
  app.use('/api', router);

  app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    if (err instanceof TypeError) {
      return res.status(400).json({message: 'Bad request'});
    }
    return res.status(500).json({message: 'Server internal error'});
  });
};
