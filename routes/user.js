const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

//Fetch User's Data
router.get('/', /* (req, res)=>{
    db.query('SELECT id, username, email from users', (err, result)=>{
        if(err) throw err;
        res.render('index', {users: result})
    })
} */ userController.getAllUsers);

//POST User's Data
router.post('/', /* (req, res)=>{
    const {username, password, email} = req.body;
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    const values = [username, password, email];

    db.query(sql, values, (err)=>{
        if(err){
            throw err;
        }
        console.log("user data inserted");
        res.redirect('/');
    })
} */ userController.postUser);

//Delete User's Data
router.post('/delete', /* (req, res)=>{
    const userId = req.body.userId;
    console.log(userId);
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result)=>{
        if(err) throw err;
        res.redirect('/')
    })
} */ userController.deleteUser);

module.exports = router;