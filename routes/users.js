const express=require('express');
const router=express.Router();

const r=router.get('/',(request,respond)=>{
	respond.send('User page');
});

module.exports.r =r;