const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key')
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extende:true}));

//application/json
app.use(bodyParser.json());

// app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false // 쓰는이유는 안쓰면 뜨는 에러들이 많다.
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~ 사랑해요~!')
})

app.post('/register',(req, res) => {

  //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {
      if(err) return res.json({success:false,err})
      return res.status(200).json({
        success: true
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})