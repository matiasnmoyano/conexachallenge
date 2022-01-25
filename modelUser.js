const mongoose  = require("mongoose")
const Schema = mongoose.Schema;
const mongoosePaginate = require ('mongoose-paginate-v2')
const UserSchema = new Schema ({
    email: {type: String},
    password : {type: String},
    isAdmin: {type:Boolean}
})
UserSchema.plugin(mongoosePaginate)

module.exports = User = mongoose.model("User", UserSchema)