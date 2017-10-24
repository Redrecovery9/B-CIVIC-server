const express = require ('express');
const router =  express.Router();
const Company = require('../models/companies');

router.get('/', (req,res) => {
  Company.getCompany((err,companies) => {
    if(err){
      res.json("company not found.");
    }
    res.json(companies);
  });
})

router.get('/all', (req,res) => {
  Company.getAllCompany((err,companies) => {
    if(err){
      res.json("company not found.");
    }
    res.json(companies);
  });
})

router.get('/:id', (req,res) => {
  let id = req.params.id;
  Company.getCompanyById(id, (err,company) => {
    if(err){
      res.json("company not found.");
    }
    res.json(company);
  });
})

router.post('/', (req,res) => {
  let company = req.body;
  Company.addCompany(company,(err,company) => {
    if(err){
      throw err;
    }
    res.json(company);
    console.log("Added Company");
  })
})

router.put('/:id', (req,res) => {
  let update = req.body;
  let id = req.params.id;
  let options = { returnNewDocument: true };
  Company.updateCompanyInfo(id, update, options, (err,company) => {
    if(err){
      throw err;
    }
    res.json(company);
  })
})

router.delete('/:id', (req,res) => {
  let id = req.params.id;

  Company.deleteCompanyInfo(id,(err,company) => {
    if(err){
      throw err;
    }
    res.json(company);
  });

})

module.exports = router;
