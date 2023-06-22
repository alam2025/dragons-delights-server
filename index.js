const express = require('express')
const app = express()
const cors= require('cors');
const port =process.env.PORT || 3000
const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

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

//recipes api
app.get('/recipes',async(req,res)=>{
      res.send(recipes);
})
app.get('/popular-recipes',async(req,res)=>{
      const selectedRecipe= recipes.filter(recipe=>recipe.rating > 4.5)
      res.send(selectedRecipe);
})

app.get('/recipe/:id',async(req,res)=>{
      const id = req.params.id;
      const item = recipes.find(recipe=>recipe.id == id);
      res.send(item)
})

app.get('/chefs/recipes/:id',async(req,res)=>{
const id = req.params.id;
console.log(id);
const chefRecipes= recipes.filter(recipe=>recipe.chef_id == id);
if(chefRecipes){
      res.send(chefRecipes)
}
else{
      res.send('There no recipe found.')
}
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})