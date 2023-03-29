const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subscriberToChannel:{ type: String, required: true },
    suscriptions:{ type: String, required: true ,default:Date.now()},
})

module.exports = mongoose.model('Subscriber',subscriberSchema)