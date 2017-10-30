const express = require ('express');
const router =  express.Router();
const People = require('../models/people');

router.get('/', (req,res) => {
  People.getPeople((err,people) => {
    if(err){
      console.log(err);
      res.json("people not found.");
    }
    res.json(people);
  });
})

router.get('/:id', (req,res) => {
  let id = req.params.id;
  People.getPeopleById(id, (err,people) => {
    if(err){
      res.json("people not found.");
    }
    res.json(people);
  });
})

router.post('/', (req,res) => {
  let people = req.body;
  People.addPeople(people,(err,people) => {
    if(err){
      throw err;
    }
    res.json(people);
    console.log("Added People");
  })
})

router.put('/:id', (req,res) => {
  let update = req.body;
  let id = req.params.id;
  let options = { returnNewDocument: true };
  People.updatePeopleInfo(id, update, options, (err,people) => {
    if(err){
      throw err;
    }
    res.json(people);
  })
})

router.delete('/:id', (req,res) => {
  let id = req.params.id;

  People.deletePeopleInfo(id,(err,people) => {
    if(err){
      throw err;
    }
    res.json(people);
  });

})

module.exports = router;
