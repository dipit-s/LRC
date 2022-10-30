const mongoose = require("mongoose");

const RentedBook = new mongoose.Schema({
    bookid: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    return_date:{
        type:Date,
        required:true
    },
    isReturned: {
        type: Boolean,
        required: true,
        default: false,
    },
    title:
    {
        type: String,
        required:true,
    },
    description:
    {
        type: String,
        required:true,
    },
    author:
    {
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
);


module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);