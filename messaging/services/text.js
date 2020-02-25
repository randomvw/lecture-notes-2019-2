const Twilio = require('twilio');

const twilio = new Twilio(
                process.env.TWILIO_ACCOUNT_SID,
                process.env.TWILIO_AUTH_TOKEN
              );

exports.send = (options) => {
  return twilio.messages.create({
    body: options.body,
    to: options.to,
    from: process.env.TEXT_FROM,
  })
}