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

  getCompanyById: function(id, callback) {
    Company.findById(id,callback);
  },

  addCompany: function(company, callback) {
    company.create(company, callback)
  },

  updateBabyInfo: function(id, company, options, callback) {
    let query = {_id:id};
    Company.findOneAndUpdate(query, company, options, callback);
  },

  deleteCompanyInfo: function(id, callback) {
    let query = {_id:id}
    Company.remove(query, callback)
  }
}
