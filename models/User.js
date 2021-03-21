const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자인지 일반유저인지 0은관리자 1은 일반유저 이런식
       type: Number,
       default: 0 
    },
    image: String,
    token: { // 유효성검사
        type: String
    },
    tokenExp: { //토큰을 사용할수있는 기간을 줄수있다
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User } // 다른곳에서도 사용할수있도록 해두는 것