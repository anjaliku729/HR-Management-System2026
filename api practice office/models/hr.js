 mongoose = require('mongoose');

const hrSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },


    city: {
        type: String
    },

    phone: {
        type: String
    },
})
const hrModel = mongoose.model('hr', hrSchema)
module.exports = hrModel;