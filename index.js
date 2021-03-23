const express = require('express');


const app = express();

app.get('/', (req,res)=>{
    res.send("I know how to open node")
})

app.listen(4200,()=>console.log('listening to port 4200'))