const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

//GET "/" API Documentation
router.get('/', profileController.getApiDocumentation);

//POST "/profile" creating profile
router.post('/profile',profileController.createProfile)

module.exports = router;
