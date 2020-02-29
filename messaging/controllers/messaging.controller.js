const mail = require('../services/mail');
const text = require('../services/text');
const isEmail = require('is-email');
const isPhone = require('is-phone-number');

exports.sendMessage = async (req, res) => {
  let { to, subject, body } = req.body;
  // to --> 'aaronlrobinson@gmail.com, +12087572947, me@gmail.com, +15555555
  let recipients = to.split(',').map(recipient => recipient.trim());
  let errors = [];

  for (let recipient of recipients) {
    try {
      if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(recipient)) {
        await text.send({ to: recipient, body });
      }
      else if (isEmail(recipient)) {
        await mail.send({ to: recipient, subject, body });
      }
      else {
        errors.push(recipient);
      }
    }
    catch (error) {
      console.log(error);
      errors.push(recipient);
      continue;
    }
  }

  return res.send({ to, subject, body, errors });
};
