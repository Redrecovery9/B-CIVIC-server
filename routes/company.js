const express = require ('express');
const router =  express.Router();
const company = require('../models/companies');

router.get('/', (req,res) => {
  company.getCompany((err,companies) => {
    if(err){
      res.json("company not found.");
    }
    res.json(companies);
  });
})

router.get('/:id', (req,res) => {
  let id = req.params.id;
  company.getCompanyById(id, (err,company) => {
    if(err){
      res.json("company not found.");
    }
    res.json(company);
  });
})

router.post('/', (req,res) => {
  let company = req.body;
  company.addCompany(company,(err,company) => {
    if(err){
      throw err;
    }
    res.json(company);
  })
})

router.put('/:id', (req,res) => {
  let update = req.body;
  let id = req.params.id;
  let options = { returnNewDocument: true };
  company.updatecompanyInfo(id, update, options, (err,company) => {
    if(err){
      throw err;
    }
    res.json(company);
  })
})

router.delete('/:id', (req,res) => {
  let id = req.params.id;

  company.deleteCompanyInfo(id,(err,company) => {
    if(err){
      throw err;
    }
    res.json(company);
  });

})

module.exports = router;
