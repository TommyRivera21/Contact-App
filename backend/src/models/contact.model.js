const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },
    {
        timestamps: { createdAt: true, updatedAt: true},
    }
);

module.exports = mongoose.model('Contact', contactSchema);
