const mongoose = require('mongoose')
const Schema = mongoose.Schema

const peopleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  _convention: { type: String, ref: 'convention'}
})


const People = module.exports= mongoose.model('people', peopleSchema)

module.exports = {
  getPeople: function(callback) {
    People.find(callback).populate('_convention')
  },

  getPeopleById: function(id, callback) {
    People.findById(id,callback);
  },

  addPeople: function(people, callback) {
    People.create(people, callback)
  },

  updatePeopleInfo: function(id, people, options, callback) {
    let query = {_id:id};
    People.findOneAndUpdate(query, people, options, callback);
  },

  deletePeopleInfo: function(id, callback) {
    let query = {_id:id}
    People.remove(query, callback)
  }
}
