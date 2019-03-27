const express = require('express')
const app = express()

app.get('/',(request, response)=>{
    response.send({
        message: 'Hello World!'
    })
})
app.get('/:name/:age',(req,res)=>{
    // let myname = req.params.name
    // let age = req.params.age

    // let { name, age } = req.params
    // res.send({name,age})
})
class Calculate{
    
}


app.listen(3000,()=>{
    return console.log('Server started on port 3000')
})

/**
 * npm init -y
 * npm install express --save
 */