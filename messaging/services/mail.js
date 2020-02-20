const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.send = (options) => {
  return sgMail.send({
    to: options.to,
    from: 'me@me.com',
    text: options.body,
    subject: options.subject
  });
}