const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    rollnum: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required:true,
        unique:true,
    },
    branch:
    {
        type: String,
        required: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    validupto: {
        type: Date,
        required: true
    },
    phone:{
        type:String,
        required:false
    }
}, 
{
    timestamps: true
}
);

module.exports = mongoose.models.Student || mongoose.model("Student", StudentSchema);