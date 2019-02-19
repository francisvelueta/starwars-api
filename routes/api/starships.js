const express = require('express');
const router = express.Router();

// Starship model
const Starship = require('./../../models/starship');


// @route GET api/starships
// @desc get all Starships
// @access Public
router.get('/', (req, res)=> {
  Starship.find()
  .sort({ date: -1 })
  .then(starships => res.json(starships))
});


// @route POST api/starships
// @desc Create a Starship
// @access Public
router.post('/', (req, res) => {
  const newStarship = new Starship({
    name: req.body.name,
    model: req.body.model,
    speed: req.body.speed
  });
  newStarship.save().then(starship => res.json(starship));
});


// @route DELETE api/starships
// @desc Delete a Starship
// @access Public
router.delete('/:id', (req, res) => {
  Starship.findById(req.params.id)
  .then(starship => starship.remove().then(()=> res.json({success: true})))
  .catch(err => res.status(404).json({success: false}))
});


module.exports = router;
