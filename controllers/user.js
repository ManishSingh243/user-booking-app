const db = require('../util/database')

exports.getAllUsers = (req, res) => {
    db.query('SELECT id, username, email from users', (err, result)=>{
        if(err) throw err;
        res.render('index', {users: result})
    })
}

exports.postUser = (req, res) => {
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
}

exports.deleteUser = (req, res) => {
    const userId = req.body.userId;
    console.log(userId);
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result)=>{
        if(err) throw err;
        res.redirect('/')
    })
}