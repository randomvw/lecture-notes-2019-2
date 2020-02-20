const mail = require('../services/mail');

exports.sendMessage = async (req, res) => {
  let { to, subject, body } = req.body;
  await mail.send({to, subject, body});

  res.send({ to, subject, body });
};
