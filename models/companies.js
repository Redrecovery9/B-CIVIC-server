const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  name: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required:true
  },
  phoneNumber: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  }
})


const Company = module.exports= mongoose.model('company', companySchema)

module.exports = {
  getCompany: function(callback) {
    Company.find(callback).limit(3)
  },

  getAllCompany: function(callback) {
    Company.find(callback)
  },

  getCompanyById: function(id, callback) {
    Company.findById(id,callback);
  },

  addCompany: function(company, callback) {
    Company.create(company, callback)
  },

  updateCompanyInfo: function(id, company, options, callback) {
    let query = {_id:id};
    Company.findOneAndUpdate(query, company, options, callback);
  },

  deleteCompanyInfo: function(id, callback) {
    let query = {_id:id}
    Company.remove(query, callback)
  }
}
