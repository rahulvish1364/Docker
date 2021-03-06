const express = require('express');
const app = express();

const entity = {
    name : 'rahul',
    age: 24,
    isActive: true
}
app.get('/', (req, res) =>{
    res.send('<h3>Root Route</h3>');
})
app.get('/entity', (req, res)=>{
    res.send(entity);
});
app.get('/login', (req, res)=>{
    res.json({
        message : 'Login Route'
    });
});
app.get('/logout', (req, res)=>{
    res.json({
        message: 'Logout Route'
    })
});
app.listen(8000, ()=>{
    console.log('App is running on port 8000');
});