import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
    usename:{
        type:String,
    },
    password:{
        type:String
    }
})

const Auth = mongoose.model('Auths',AuthSchema)

export default Auth