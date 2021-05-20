var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user.js');

router.post('/', function(req, res, next) {
    user.email = req.body.email;
    user.password = req.body.password;

    console.log(user);
 
    let userData = fs.readFileSync('./model/user.json');
  
    let siteUsers = JSON.parse(userData);
  
    siteUsers.push(user);
  
    const usersString = JSON.stringify(siteUsers)
    fs.writeFile('./model/user.json', usersString, err => {

        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })


  res.render('login', { title: 'Login' });
});

module.exports = router;