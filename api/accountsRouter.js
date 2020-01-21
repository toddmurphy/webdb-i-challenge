const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

//get accounts --> all accounts
router.get('/', async (req, res) => {
  try {
    const accounts = await db('accounts').select();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no accounts returned from server', error });
  }
});

//get account --> single account by id
router.get('/:id', async (req, res) => {
  try {
    const accountByID = await db('accounts')
      .where('id', req.params.id)
      .first();
    res.json(accountByID);
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no single account returned from server', error });
  }
});

//post --> create new account
router.post('/', async (req, res) => {
  try {
    const newAccount = {
      name: req.body.name,
      budget: req.body.budget
    };
    //Creates new account
    const [id] = await db('accounts').insert(newAccount);

    //view response in postman
    res.json(
      await db('accounts')
        .where('id', id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no account created on the server', error });
  }
});

//delete --> delete account by id
router.delete('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no accounted deleted from the server', error });
  }
});

//put --> updated account by id
router.put('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, account not updated on the server', error });
  }
});

module.exports = router;
