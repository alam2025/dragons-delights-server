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

app.get('/chefs',async(req,res)=>{
      res.send(chefs)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})