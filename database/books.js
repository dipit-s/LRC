const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true,
    },
    category:
    {
        type: String,
        required:false,
    },
    description:
    {
        type: String,
        required:false,
    },
    author:
    {
        type: String,
        required: true,
    },
    isDeleted:
    {
        type: Boolean,
        required: true,
        default: false,
    }
},
{
    timestamps: true
}
);


module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);