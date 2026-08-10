import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/order', (req, res) => {
  res.send('You are in order route.')
})
app.get('/address', (req, res) => {
  res.send('<br>You are in address route.</br>')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})