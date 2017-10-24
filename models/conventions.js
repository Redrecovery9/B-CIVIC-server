const mongoose = require('mongoose')
const Schema = mongoose.Schema

const conventionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})


const Convention = module.exports= mongoose.model('convention', conventionSchema)

module.exports = {
  getConvention: function(callback) {
    Convention.find(callback).limit(1)
  },

  getAllConvention: function(callback) {
    Convention.find(callback)
  },

  getConventionById: function(id, callback) {
    Convention.findById(id,callback);
  },

  addConvention: function(convention, callback) {
    Convention.create(convention, callback)
  },

  updateConventionInfo: function(id, convention, options, callback) {
    let query = {_id:id};
    Convention.findOneAndUpdate(query, convention, options, callback);
  },

  deleteConventionInfo: function(id, callback) {
    let query = {_id:id}
    Convention.remove(query, callback)
  }
}
