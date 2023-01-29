const { User } = require('../db/models');

const getUser = async (req, res, next) => {
  if (req.session.userid) {
    const user = await User.findByPk(Number(req.session.userid), { raw: true });
    res.locals.user = user.name;
  }
  next();
};

const resLocals = (req, res, next) => {
  if (req.session.userid) {
    res.locals.userId = req.session.userid;
  }
  next();
};
module.exports = {
  resLocals,
  getUser,
};
