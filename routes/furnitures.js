const express = require('express');
const furnitures = require('../seeds/furnitures');

const router = express.Router();

//display all products

router.get('/', (request, response) => {

  response.render('pages/index', {pageTitle: "Smile Furnitures"});
})

//display single product

router.get('/:title', (request, response) => {
  
  const furniture = furnitures.find(function(item){
    return (request.params.title).toLowerCase() === (item.title).toLowerCase()
  })

  if (!furniture) {
    console.log(furniture);
    response.sendStatus(404);
    
  }

  response.render('pages/singleitem', {
    pageTitle: "Smile Furnitures" ,
    furniture:furniture
  });
})

module.exports = router;