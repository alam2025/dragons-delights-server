const express = require('express')
const app = express()
const cors= require('cors');
const port =process.env.PORT || 3000
const chefs = require('./data/chefs.json')

// midleware 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//chefs api's

app.get('/chefs',async(req,res)=>{
      res.send(chefs)

})//

app.get('/chefs/:id',async(req,res)=>{
      const id = req.params.id;
      const selected = chefs.find(chef=>chef.id == id);
      if(selected){
            res.send(selected)
      }
      else{
            res.send('Not Found')
      }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})