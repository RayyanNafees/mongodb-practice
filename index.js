import express from 'express'
import mustacheExpress from 'mustache-express'

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
 
app.use(express.urlencoded())

app.get('/', (req, res)=> res.render('index', {task:''}))
app.post('/', (req, res)=> {
  const task = req.body.task
  res.render('index', {task})

})

app.listen(1000, ()=> console.log("server listening on http://localhost:1000"))