const express = require('express');
const app = express();
const db = require('./util/database')

const userRoutes = require('./routes/user')

app.use(express.urlencoded({extended: true}));

/* const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'sms'
}); */

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected to Database");
})

app.set('view engine', 'ejs'); // Use 'pug' if you're using Pug

app.use(userRoutes);

/* app.get('/', (req, res)=>{
    db.query('SELECT id, username, email from users', (err, result)=>{
        if(err) throw err;
        res.render('index', {users: result})
    })
})

app.post('/', (req, res)=>{
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
})

app.post('/delete', (req, res)=>{
    const userId = req.body.userId;
    console.log(userId);
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result)=>{
        if(err) throw err;
        res.redirect('/')
    })
}) */

app.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
})