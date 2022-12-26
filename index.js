const express=require('express');
const format=require('date-format');

const app=express();

const PORT=4000;

app.get('/',(req,res)=>{
    res.status(201).send('<h1>Hello From Aryan</h1>');
})


app.get('/api/v1/instagram',(req,res)=>{
    const  instagram={
        username:"aryanpathak738",
        followers:150,
        following:130,
        date:format.asString("dd-MM-yy hh:mm:ss",new Date())
    }
    res.status(200).json({instagram});
})

app.get('/api/v1/facebook',(req,res)=>{
    const  facebook={
        username:"rajabhai",
        followers:200,
        following:40,
        date:format.asString("dd-MM-yy hh:mm:ss",new Date())
    }
    res.status(200).json({facebook});
})

app.get('/api/v1/linkdin',(req,res)=>{
    const  linkdin={
        username:"aryanpathakoffical",
        followers:6,
        following:4,
        date:format.asString("dd-MM-yy hh:mm:ss",new Date())
    }
    res.status(200).json({linkdin});
})


app.get('/api/v1/:token',(req,res)=>{
    res.status(200).json({param:req.params.token})
})


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT ${PORT}.`)
})