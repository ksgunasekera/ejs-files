const express=require('express');
const path=require('path');

const app=express();
const index=require('./routes/index');
const users=require('./routes/users');
const login=require('./routes/login');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',index);
app.use('/user',users.r);
app.use('/login',login);

app.listen(3000);