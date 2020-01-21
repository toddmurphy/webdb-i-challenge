const express = require('express');
const router = express.Router();

//get accounts --> all accounts
router.get('/', (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no accounts returned from server', error });
  }
});

//get account --> single account by id
router.get('/:id', (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no single account returned from server', error });
  }
});

//post --> create new account
router.post('/', (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no account created on the server', error });
  }
});

//delete --> delete account by id
router.delete('/:id', (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no accounted deleted from the server', error });
  }
});

//put --> updated account by id
router.put('/:id', (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, account not updated on the server', error });
  }
});

module.exports = router;
