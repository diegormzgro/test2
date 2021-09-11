const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { getAllFiles, getTree } = require('./helpers/files2')
const { getDates } = require('./helpers/sundays')
const { concatenar } = require('./helpers/bisiesto')
const { countLetter, logMapElements, rotateMatrix } = require('./helpers/functions')


require('dotenv/config');
app.use(express.json());



app.get('/', (req, res) => {
    res.send('application test 2')

})

app.get('/getsundays', (req, res) =>{
    let date1 = req.body.param1
    let date2 = req.body.param2

    
    res.status(200).json({
        sundays: getDates(date1,date2),
        message: "numero de domingos"
    })
})

app.get('/getleapyears', (req, res) =>{
  let date1 = req.body.param1
  let date2 = req.body.param2


  
  res.status(200).json({
      leapyears: concatenar(date1,date2),
      
  })
})

app.get('/getstring', (req, res) =>{
  let result = countLetter(req.body.param1)

  let final = "("
  function logMapElements(value, key, map) {
    final = final + `${key} = ${value},`
    
    //console.log(`[${key}] = ${value}`);
}

  result.forEach(logMapElements)
  final = final.substr(0,final.length-1);
  final = final +")"
  

  res.status(200).json({
      result: final
      
  })
})

app.get('/getMatrix', (req, res) =>{
  let dato1 = req.body.param1
  let dato2 = req.body.param2
  let dato3 = req.body.param3


  
  res.status(200).json({
      coordenadas: rotateMatrix(dato1, dato2, dato3)
      
  })
})

app.get('/getFileTree', (req, res) =>{
  let ruta = req.body.param1
 
  let directories = getAllFiles(ruta)

  let response = getTree(ruta, directories)
  console.log(response)

  try {
      
      res.status(200).json({
        
        result: response
        
    })
  }
  catch (err) {
      res.status(500).json({
        error: err
      })
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  
})

// middleware to catch non-existing routes
app.get('*', function(req, res){
    res.send('route not found', 404);
  });

  


app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    })
  })

  

app.listen(3001, ()=>{
    console.log('server is running in http://localhost:3001')
})