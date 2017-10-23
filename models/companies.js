const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  name: String,
  address: String,
  phoneNumber: String,
  email: String
})


module.exports= mongoose.model('Company', companySchema)

module.exports = {
  getCompany: function(callback, limit) {
    Company.find(callback).limit(3)
  },

  addCompany: function(company, callback) {
    company.create(company, callback)
  }
}
