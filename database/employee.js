const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    password: {
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


module.exports = mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema);