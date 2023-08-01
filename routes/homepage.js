const express = require('express');

const homepageController= require('../controllers/homepage');
const signup_logincontroller = require('../controllers/signup_login')

const router=express.Router();


router.get('/',homepageController.getHomePage)
router.get('/chat',homepageController.getChatPage)

router.get('/signup', signup_logincontroller.getSignupPage);
router.post('/signup', signup_logincontroller.postSignup);

router.get('/login', signup_logincontroller.getLoginPage);
router.post('/login', signup_logincontroller.postLogin);

module.exports= router;