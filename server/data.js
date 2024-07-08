const express = require('express');
const router = express.Router();
const DataModel =require('../server/datamodel')

// GET data route
router.get('/data', async (req, res) => {
  try {
    const data = await DataModel.find(); // Fetch data from MongoDB
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
