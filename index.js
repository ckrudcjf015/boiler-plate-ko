const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dovmfvkdl013:asd131210@boilerplate.trwoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false // 쓰는이유는 안쓰면 뜨는 에러들이 많다.
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하쇼 ~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})