const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
    studentid: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps: true
}
);


module.exports = mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);