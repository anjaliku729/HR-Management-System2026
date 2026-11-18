const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String
    },
    city:{
        type: String
    }
})
const StudentModel = mongoose.model('student', StudentSchema)
module.exports = StudentModel;