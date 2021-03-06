const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Pet, Post, Comment } = require('../models')

// Get homepage
router.get('/', async (req, res) => {
  try {
    // do something
    res.render('home');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Accounts route
router.get('/account', async (req, res) => {
  try {

    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Post, Comment }]
    // });

    // const user = userData.get({ plain: true });

    // res.render('account', {
    //   ...user,
    //   logged_in: true
    // });

    res.render('account');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Forum route
router.get('/forum', async (req, res) => {
  try {
    // comment out for now because topics is not defined yet
    // const topics = await Topic.findAll();
    // console.log(topics);
    res.render('forum');

  } catch (err) {
    console.log(err);
    res.status(500).json('can you see this');
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Contact route
router.get('/contact', async (req, res) => {
  try {
    // do something
    console.log(`contact route accessed ...`);
    res.render('contact');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Login route
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/account');
      return;
    }
    res.render('login');

});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Signup route
router.get('/signup', async (req, res) => {
  try {

    res.render('signup');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// terms and conditions
router.get('/terms', async (req, res) => {
  try {
    // do something
    console.log(`terms route accessed ...`);
    res.render('terms');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;