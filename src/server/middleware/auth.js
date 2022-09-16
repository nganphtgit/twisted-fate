module.exports = {
  isAdmin: (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
      return next();
    }
    throw new TypeError('Người dùng không hợp lệ.');
  },
  isMarker: (req, res, next) => {
    if (req.session.user && ['abitrator', 'art'].indexOf(req.session.user.role) > -1) {
      return next();
    }
    throw new TypeError('Người dùng không hợp lệ.');
  },
  verifyToken: (req, res, next) => {
    if (req.session.user) {
      return next();
    }
    throw new TypeError('Người dùng không hợp lệ.');
  },
  isSecret: (req, res, next) => {
    if (req.header('Authorization') === process.env.secretKey) {
      return next();
    }
    throw new TypeError('Người dùng không hợp lệ.');
  }
};