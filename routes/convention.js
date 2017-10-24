const express = require ('express');
const router =  express.Router();
const Convention = require('../models/conventions');

router.get('/', (req,res) => {
  Convention.getConvention((err,conventions) => {
    if(err){
      res.json("convention not found.");
    }
    res.json(conventions);
  });
})

router.get('/:id', (req,res) => {
  let id = req.params.id;
  Convention.getConventionById(id, (err,convention) => {
    if(err){
      res.json("convention not found.");
    }
    res.json(convention);
  });
})

router.post('/', (req,res) => {
  let convention = req.body;
  Convention.addConvention(convention,(err,convention) => {
    if(err){
      throw err;
    }
    res.json(convention);
    console.log("Added Convention");
  })
})

router.put('/:id', (req,res) => {
  let update = req.body;
  let id = req.params.id;
  let options = { returnNewDocument: true };
  Convention.updateConventionInfo(id, update, options, (err,convention) => {
    if(err){
      throw err;
    }
    res.json(convention);
  })
})

router.delete('/:id', (req,res) => {
  let id = req.params.id;

  Convention.deleteConventionInfo(id,(err,convention) => {
    if(err){
      throw err;
    }
    res.json(convention);
  });

})

module.exports = router;
