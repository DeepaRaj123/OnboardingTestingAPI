const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

//GET API Documentation
router.get('/', profileController.getApiDocumentation);

//GET  Fetching all profiles
router.get('/profiles', profileController.getProfiles);

//POST creating profile
router.post('/profile',profileController.createProfile);

//POST deleting profile
router.delete('/profile/:profileId',profileController.deleteProfile)

module.exports = router;
